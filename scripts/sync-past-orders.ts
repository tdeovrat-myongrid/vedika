
import { markShopifyOrderAsPaid } from "../lib/shopify";
import cashfree, { getCashfreeConfig } from "../lib/cashfree";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

async function main() {
    console.log("Starting Past Order Sync...");

    try {
        const cfConfig = getCashfreeConfig();

        // 1. Fetch recent orders from Cashfree
        // The SDK might have filters, let's try to get list
        // If SDK doesn't support easy listing, we might need to use fetch directly or check SDK docs behavior
        // Looking at `cashfree-pg-sdk-nodejs`, it has `PGOrderFetchOrders` likely.

        // Let's rely on `cashfree.PGOrderFetchOrders` if available or similar.
        // If not, we can't easily list without a specific API. 
        // Note: The `cashfree-pg-sdk-nodejs` usually exposes `PGOrderFetchOrders` or similar via `cashfree.PGOrder.fetchOrders`.
        // But `lib/cashfree.ts` exports `cashfree` instance of `CFPaymentGateway`.
        // Let's check if `cashfree.orderFetchOrders` exists or similar.

        // Actually, looking at typical Cashfree SDK usage:
        // await cashfree.PGOrderFetchOrders(version, appid, secret, filter_params)

        // Let's assume we might need to use a raw fetch if the SDK method isn't obvious from my memory or context.
        // However, I can try to access the API directly using `fetch` to be safe and avoid SDK method guessing issues.

        const appId = process.env.CASHFREE_APP_ID;
        const secretKey = process.env.CASHFREE_SECRET_KEY;
        const env = process.env.CASHFREE_ENV || "TEST";
        const baseUrl = env === "PROD" ? "https://api.cashfree.com/pg" : "https://sandbox.cashfree.com/pg";

        console.log(`Fetching orders from ${baseUrl}...`);

        const response = await fetch(`${baseUrl}/orders?limit=50`, {
            headers: {
                "x-client-id": appId!,
                "x-client-secret": secretKey!,
                "x-api-version": "2022-09-01"
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to fetch orders from Cashfree: ${response.status} ${errorText}`);
        }

        const orders = await response.json();

        if (!Array.isArray(orders)) {
            console.log("Unexpected response format:", orders);
            return;
        }

        console.log(`Found ${orders.length} orders in Cashfree.`);

        // 2. Iterate and Sync
        let updatedCount = 0;
        let skippedCount = 0;
        let failedCount = 0;

        for (const cfOrder of orders) {
            // Check if PAID
            if (cfOrder.order_status !== "PAID") {
                skippedCount++;
                continue;
            }

            // Get Shopify Order ID from tags
            const shopifyOrderId = cfOrder.order_tags?.shopify_order_id;

            if (!shopifyOrderId) {
                // Try fallback from Order ID string
                const orderId = cfOrder.order_id;
                const parts = orderId.split("_");
                if (parts.length >= 2 && parts[0] === "ORDER") {
                    // It likely has Shopify ID
                    const possibleId = parts[1];
                    console.log(`Found PAID order ${orderId} (Fallback ID: ${possibleId}). Syncing...`);

                    try {
                        const gid = `gid://shopify/Order/${possibleId}`;
                        await markShopifyOrderAsPaid(gid);
                        console.log(`✅ Marked Order ${possibleId} as PAID`);
                        updatedCount++;
                    } catch (err) {
                        console.error(`❌ Failed to mark order ${possibleId}:`, err);
                        failedCount++;
                    }
                } else {
                    console.log(`Skipping PAID order ${orderId} - No Shopify ID found`);
                    skippedCount++;
                }
                continue;
            }

            console.log(`Found PAID order ${cfOrder.order_id} (Shopify ID: ${shopifyOrderId}). Syncing...`);

            try {
                // Ensure GID
                const gid = shopifyOrderId.toString().startsWith("gid://")
                    ? shopifyOrderId
                    : `gid://shopify/Order/${shopifyOrderId}`;

                await markShopifyOrderAsPaid(gid);
                console.log(`✅ Marked Order ${shopifyOrderId} as PAID`);
                updatedCount++;
            } catch (err) {
                console.error(`❌ Failed to mark order ${shopifyOrderId}:`, err);
                failedCount++;
            }
        }

        console.log("\n--- Sync Complete ---");
        console.log(`Updated: ${updatedCount}`);
        console.log(`Skipped (Not Paid / No ID): ${skippedCount}`);
        console.log(`Failed: ${failedCount}`);

    } catch (error) {
        console.error("❌ Sync Script Error:", error);
    }
}

main();

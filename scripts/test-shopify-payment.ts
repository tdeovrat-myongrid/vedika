
import { createShopifyOrder, markShopifyOrderAsPaid } from "../lib/shopify";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

async function main() {
    console.log("Starting Shopify Order Payment Test...");

    try {
        // 1. Create a Dummy Order
        console.log("Creating dummy order...");
        const timestamp = Date.now();
        const dummyOrder = {
            lineItems: [
                {
                    variantId: "44416942178349", // Use a known variant ID from previous `lib/shopify.ts` view
                    quantity: 1
                }
            ],
            customer: {
                firstName: "Test",
                lastName: "User",
                email: `test-${timestamp}@example.com`,
                phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`, // Random 10 digit number
                address: "123 Test St",
                city: "Test City",
                state: "Test State",
                zip: "123456"
            },
            financialStatus: "PENDING",
            paymentId: `TEST_PAY_${timestamp}`
        };

        const order = await createShopifyOrder(dummyOrder);
        console.log("✅ Order Created Successfully!");
        console.log(`Order ID: ${order.id}`); // This should be in GID format based on my analysis of `lib/shopify.ts`
        console.log(`Order Name: ${order.name}`);

        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 2000));

        // 2. Mark as Paid
        console.log(`Attempting to mark order ${order.id} as PAID...`);

        // The `markShopifyOrderAsPaid` function expects the ID string.
        // In `lib/shopify.ts`, `createShopifyOrder` returns `...order, id: gid`. 
        // `markShopifyOrderAsPaid` takes `shopifyOrderId` and uses it in `input: { id: shopifyOrderId }`.
        // So passing the GID returned from `createShopifyOrder` should work if the API expects GID.

        const paidOrder = await markShopifyOrderAsPaid(order.id);

        if (paidOrder) {
            console.log("✅ Order Marked as Paid Successfully!");
            console.log("Updated Order Status:", paidOrder.displayFinancialStatus);
        } else {
            console.error("❌ Failed to mark order as paid. No order returned.");
        }

    } catch (error) {
        console.error("❌ Test Failed:", error);
    }
}

main();

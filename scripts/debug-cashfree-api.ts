
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function testEndpoint(url: string, description: string) {
    console.log(`\n--- Testing ${description} ---`);
    console.log(`URL: ${url}`);

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "x-client-id": appId!,
                "x-client-secret": secretKey!,
                "x-api-version": "2022-09-01",
                "Content-Type": "application/json"
            }
        });

        console.log(`Status: ${response.status}`);
        const text = await response.text();
        console.log(`Response: ${text.substring(0, 200)}...`);
    } catch (e: any) {
        console.error(`Error: ${e.message}`);
    }
}

async function main() {
    // 1. Standard PG Orders
    await testEndpoint("https://api.cashfree.com/pg/orders", "Standard PG Orders List");

    // 2. With Limit
    await testEndpoint("https://api.cashfree.com/pg/orders?limit=10", "With Limit Query");

    // 3. Sandbox (Reference)
    // await testEndpoint("https://sandbox.cashfree.com/pg/orders", "Sandbox Orders (Expect Auth Fail if Prod keys)");

    // 4. Old API?
    // await testEndpoint("https://api.cashfree.com/api/v1/orders", "Old API");
}

main();

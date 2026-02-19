
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
        console.log(`Response: ${text.substring(0, 500)}...`);
    } catch (e: any) {
        console.error(`Error: ${e.message}`);
    }
}

async function main() {
    // 1. Settlements
    await testEndpoint("https://api.cashfree.com/pg/settlements", "Settlements List");

    // 2. Payments (Unlikely to work as list)
    await testEndpoint("https://api.cashfree.com/pg/payments", "Payments List");
}

main();

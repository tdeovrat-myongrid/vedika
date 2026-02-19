
import cashfree, { getCashfreeConfig } from "../lib/cashfree";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
    console.log("Inspecting Cashfree SDK...");
    console.log("Cashfree Object Keys:", Object.keys(cashfree));
    console.log("Cashfree Prototype Keys:", Object.getOwnPropertyNames(Object.getPrototypeOf(cashfree)));

    // Check if we can fetch orders using SDK
    try {
        // @ts-ignore
        if (cashfree.PGOrderFetchOrders) {
            console.log("Found PGOrderFetchOrders method");
        }
    } catch (e) {
        console.log(e);
    }
}

main();

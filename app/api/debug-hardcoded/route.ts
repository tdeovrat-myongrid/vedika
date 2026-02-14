import { NextResponse } from "next/server";

export async function GET() {
    const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

    return NextResponse.json({
        mode: "Hardcoded Access Check",
        SHOPIFY_ADMIN_ACCESS_TOKEN: token ? `Present (Length: ${token.length})` : "MISSING",
        NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN: domain ? `Present (Length: ${domain.length})` : "MISSING",
        timestamp: new Date().toISOString()
    });
}

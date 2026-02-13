import { MetadataRoute } from "next";
import { getProducts } from "@/lib/shopify";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.thecleancratefoods.com";

    // Static routes
    const routes = [
        "",
        "/about",
        "/contact",
        "/products",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic product routes
    const products = await getProducts();
    const productRoutes = products.map((product: any) => ({
        url: `${baseUrl}/products/${product.node.handle}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...routes, ...productRoutes];
}

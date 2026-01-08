const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function ShopifyData(query: string) {
    const URL = `https://${domain}/api/2024-01/graphql.json`;

    const options = {
        endpoint: URL,
        method: "POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": storefrontAccessToken || "",
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching data from Shopify");
    }
}

export async function getProducts() {
    const query = `
  {
    products(first: 9) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }`;

    const response = await ShopifyData(query);
    const products = response.data?.products?.edges
        ? response.data.products.edges
        : [];

    return products;
}

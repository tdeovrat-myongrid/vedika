
require('dotenv').config({ path: '.env.local' });
// using global fetch (Node 18+)

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

async function checkProduct() {
  const query = `
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          handle
          variants(first: 3) {
            edges {
              node {
                id
                title
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }`;

  console.log(`Listing products on ${domain}...`);


  const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query })
  });

  const json = await response.json();

  if (json.errors) {
    console.error("API Errors:", JSON.stringify(json.errors, null, 2));
    return;
  }

  if (json.data && json.data.products) {
    const products = json.data.products.edges;
    if (products.length === 0) {
      console.log("⚠️ No products found in this store.");
    } else {
      console.log("✅ Found Products:");
      products.forEach(p => {
        console.log(`Product: ${p.node.title}`);
        p.node.variants.edges.forEach(v => {
          console.log(`  - Variant: ${v.node.title}, ID: ${v.node.id}, Price: ${v.node.price.amount}`);
        });
      });


    }
  } else {
    console.log("Unexpected response structure:", JSON.stringify(json, null, 2));
  }
}


checkProduct();

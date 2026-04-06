const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../src/data/products.js');

try {
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  const productsJSON = content.substring(startIdx, endIdx + 1);
  const products = JSON.parse(productsJSON);

  console.log(`Initial items: ${products.length}`);

  const oradent = products.filter(p => p.company === 'oradent');
  const topzir = products.filter(p => p.company === 'topzir');
  const dentose = products.filter(p => p.company === 'dentose');

  const sample = (arr, size) => [...arr].sort(() => 0.5 - Math.random()).slice(0, size);

  // Take all 18 oradent, 15 topzir, 20 dentose
  const finalSet = [...oradent, ...sample(topzir, 15), ...sample(dentose, 20)];
  
  console.log(`Final items: ${finalSet.length}`);

  const output = `// AUTO-GENERATED MASTER DATA STORE (CURATED SUBSET FOR Git/Showcase)
export const products = ${JSON.stringify(finalSet, null, 2)};

export const MEDICAL_CATEGORIES = [...new Set(products.filter(p => p.segment === 'medical').map(p => p.category))];
export const ORGANIC_CATEGORIES = [...new Set(products.filter(p => p.segment === 'organic').map(p => p.category))];
`;

  fs.writeFileSync(PRODUCTS_FILE, output);
  console.log("Pruning successful.");
} catch (err) {
  console.error("Critical Failure:", err.message);
  process.exit(1);
}

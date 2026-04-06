const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../src/data/products.js');

try {
  // Read file as text to avoid ESM import issues in simple node script
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  
  // Extract JSON array from "export const products = [...];"
  const startIdx = content.indexOf('[');
  const endIdx = content.lastIndexOf(']');
  const productsJSON = content.substring(startIdx, endIdx + 1);
  const products = JSON.parse(productsJSON);

  console.log(`Initial product count: ${products.length}`);

  // Segregate by company
  const oradent = products.filter(p => p.company === 'oradent');
  const topzir = products.filter(p => p.company === 'topzir');
  const dentose = products.filter(p => p.company === 'dentose');

  // Random Sampling Helper
  const sample = (arr, size) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
  };

  // Final Selection
  const selectedOradent = oradent; // All 18
  const selectedTopZir = sample(topzir, 16);
  const selectedDentose = sample(dentose, 20);

  const finalSet = [...selectedOradent, ...selectedTopZir, ...selectedDentose];
  
  console.log(`Final product count: ${finalSet.length}`);

  // Construct New File Content
  const newContent = `// AUTO-GENERATED MASTER DATA STORE (CURATED SUBSET FOR Git/Showcase)
export const products = ${JSON.stringify(finalSet, null, 2)};

export const MEDICAL_CATEGORIES = [...new Set(products.filter(p => p.segment === 'medical').map(p => p.category))];
export const ORGANIC_CATEGORIES = [...new Set(products.filter(p => p.segment === 'organic').map(p => p.category))];
`;

  fs.writeFileSync(PRODUCTS_FILE, newContent);
  console.log(`Pruning complete. Saved to ${PRODUCTS_FILE}`);

} catch (err) {
  console.error("Pruning failed:", err);
  process.exit(1);
}

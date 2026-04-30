import XLSX from 'xlsx';

const workbook = XLSX.readFile('./Dentose_Product_Master.xlsx');
const sheet = workbook.Sheets['Product_Master_Clean'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const colNames = data[1]; // Row 2 has column names
const rawProducts = data.slice(2); // From Row 3 onwards

const validProducts = rawProducts.filter(row => {
  const productId = row[1]; // Product ID* is in column 2 (index 1)
  return productId && String(productId).trim() !== '' && String(productId).toLowerCase() !== 'unique code (you can generate)';
});

console.log('--- REFINED EXCEL AUDIT ---');
console.log('Total Raw Rows:', data.length);
console.log('Total Valid Products (with ID):', validProducts.length);

const brandCounts = {};
validProducts.forEach(row => {
  const brand = row[5] || 'Unknown';
  brandCounts[brand] = (brandCounts[brand] || 0) + 1;
});

console.log('\n--- BRAND COUNTS IN EXCEL ---');
console.log(JSON.stringify(brandCounts, null, 2));

const manufacturers = new Set();
validProducts.forEach(row => {
    const brand = row[5];
    if (brand) manufacturers.add(brand.trim());
});
console.log('\n--- UNIQUE BRANDS ---');
console.log(Array.from(manufacturers).sort());

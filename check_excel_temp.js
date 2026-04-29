import XLSX from 'xlsx';

const workbook = XLSX.readFile('./Dentose_Product_Master.xlsx');
const sheet = workbook.Sheets['Product_Master_Clean'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const colNames = data[1]; // Row 2 has column names
const products = data.slice(2); // From Row 3 onwards

console.log('--- EXCEL AUDIT ---');
console.log('Total Rows (including headers):', data.length);
console.log('Total Products:', products.length);
console.log('Columns:', JSON.stringify(colNames));

const brandCounts = {};
products.forEach(row => {
  const brand = row[5] || 'Unknown';
  brandCounts[brand] = (brandCounts[brand] || 0) + 1;
});

console.log('\n--- BRAND COUNTS IN EXCEL ---');
console.log(JSON.stringify(brandCounts, null, 2));

console.log('\n--- SAMPLE PRODUCT (Row 3) ---');
const sample = {};
colNames.forEach((name, idx) => {
  if (name) sample[name] = products[0][idx];
});
console.log(JSON.stringify(sample, null, 2));

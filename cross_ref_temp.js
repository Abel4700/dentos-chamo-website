import XLSX from 'xlsx';
import { products as jsProducts } from './src/pages/Products.js';

const workbook = XLSX.readFile('./Dentose_Product_Master.xlsx');
const sheet = workbook.Sheets['Product_Master_Clean'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const rawProducts = data.slice(2);
const excelProducts = rawProducts.filter(row => {
  const productId = row[1];
  return productId && String(productId).trim() !== '' && String(productId).toLowerCase() !== 'unique code (you can generate)';
});

const excelIds = new Set(excelProducts.map(row => String(row[1]).trim().toLowerCase()));
const jsIds = new Set(jsProducts.map(p => String(p.id).trim().toLowerCase()));

console.log('--- CROSS-REFERENCE ---');
console.log('Excel Unique IDs:', excelIds.size);
console.log('JS Unique IDs:', jsIds.size);

const inExcelOnly = Array.from(excelIds).filter(id => !jsIds.has(id));
const inJSOnly = Array.from(jsIds).filter(id => !excelIds.has(id));

console.log('\nProducts in Excel but MISSING in JS:', inExcelOnly.length);
if (inExcelOnly.length > 0) {
  console.log('Sample missing IDs (Excel only):', inExcelOnly.slice(0, 5));
}

console.log('\nProducts in JS but MISSING in Excel:', inJSOnly.length);
if (inJSOnly.length > 0) {
  console.log('Sample extra IDs (JS only):', inJSOnly.slice(0, 5));
  
  // Check manufacturers of extra JS products
  const extraManufacturers = {};
  jsProducts.forEach(p => {
    if (inJSOnly.includes(String(p.id).trim().toLowerCase())) {
      extraManufacturers[p.manufacturer] = (extraManufacturers[p.manufacturer] || 0) + 1;
    }
  });
  console.log('Extra products in JS by manufacturer:', extraManufacturers);
}

// Check common products for data consistency (e.g. DTC-0001)
const commonId = 'dtc-0001';
if (excelIds.has(commonId) && jsIds.has(commonId)) {
    console.log('\n--- DATA CONSISTENCY CHECK (DTC-0001) ---');
    const excelP = excelProducts.find(row => String(row[1]).trim().toLowerCase() === commonId);
    const jsP = jsProducts.find(p => String(p.id).trim().toLowerCase() === commonId);
    
    console.log('Excel Name:', excelP[4]);
    console.log('JS Name:', jsP.commercial_name);
    console.log('Excel Brand:', excelP[5]);
    console.log('JS Manufacturer:', jsP.manufacturer);
}

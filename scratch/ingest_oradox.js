import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const excelPath = './oradox_cleaned_real.xlsx';
const dataJsPath = './src/pages/Products.js';

const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const colNames = data[0];
const rawRows = data.slice(1);

const validRows = rawRows.filter(row => {
  const productId = row[1];
  return productId && String(productId).trim() !== '' && String(productId).toLowerCase() !== 'field';
});

const oradoxProducts = validRows.map(row => {
    const productId = String(row[1]).trim();
    const productName = row[4] || `Item ${productId}`;
    const category = row[2] || 'Oral Care';
    
    const specifications = {};
    colNames.forEach((col, idx) => {
        if (!col) return;
        const cleanCol = col.toString().replace(/\*/g, '').trim();
        const val = row[idx];
        if (val !== undefined && val !== null && val !== '') {
            specifications[cleanCol] = val.toString().replace(/\n/g, ' ').replace(/\r/g, '').trim();
        }
    });

    const imageName = specifications['Product Images'] || '';
    const imagePath = imageName ? `/images/products/oradox/${imageName}` : '';

    return {
        id: productId.replace(/\s+/g, '-').toUpperCase(),
        commercial_name: productName,
        shortDesc: specifications['Short Description'] || '',
        category: category,
        company: 'dentose',
        manufacturer: 'oradox',
        segment: 'medical',
        image: imagePath,
        featured: specifications['Featured Product'] === 'Yes',
        catalogue_pdf: '/catalogues/Oradox_Catalogue.pdf',
        specifications: specifications
    };
});

// Load existing products
const content = fs.readFileSync(dataJsPath, 'utf8');
const match = content.match(/export const products = (\[[\s\S]*\]);/);
if (match) {
    const existingProducts = JSON.parse(match[1]);
    
    // Filter out any existing oradox products to avoid duplicates if re-run
    const otherProducts = existingProducts.filter(p => p.manufacturer !== 'oradox');
    const merged = [...otherProducts, ...oradoxProducts];
    
    const jsContent = `export const products = ${JSON.stringify(merged, null, 2)};`;
    fs.writeFileSync(dataJsPath, jsContent);
    console.log(`Successfully added ${oradoxProducts.length} Oradox products. Total: ${merged.length}`);
} else {
    console.error("Could not find products array in Products.js");
}

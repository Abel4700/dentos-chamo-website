import XLSX from 'xlsx';
import fs from 'fs';

const excelPath = './Dentose_Product_Master.xlsx';
const dataJsPath = './src/pages/Products.js';

const workbook = XLSX.readFile(excelPath);
const sheet = workbook.Sheets['Product_Master_Clean'];
const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

const colNames = data[1];
const rawRows = data.slice(2);

const validRows = rawRows.filter(row => {
  const productId = row[1];
  return productId && String(productId).trim() !== '' && String(productId).toLowerCase() !== 'unique code (you can generate)';
});

const slugify = (text) => {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start
        .replace(/-+$/, '');            // Trim - from end
};

const cataloguePdfMap = {
    'prevest': '/catalogues/Prevest-Denpro-Catalog-2026.pdf',
    'ires': '/catalogues/Ires_Catalogue.pdf',
    'precident': '/catalogues/Precident_Product Catalogue.pdf',
    'durable': '/catalogues/Durable_Product_Catalogue.pdf',
    'ramo': '/catalogues/Ramo_Endodontic Catalogue.pdf',
    'topzir': '/catalogues/Topzir_Products_Catalogue_2026.pdf',
    'pyrax': '/catalogues/Pyrax_Catalouge.pdf',
    'truedent': '/catalogues/True-Dent_Catalogue.pdf',
    'sincere': '/catalogues/Sincere-instruments_Catalogue.pdf',
    'ergo-kit': '#'
};

const brandToManufacturer = (brand) => {
    if (!brand) return 'unknown';
    const b = brand.toLowerCase();
    if (b.includes('muller')) return 'precident';
    if (b.includes('prevest')) return 'prevest';
    if (b.includes('ramo')) return 'ramo';
    if (b.includes('topzir')) return 'topzir';
    if (b.includes('sincere')) return 'sincere';
    if (b.includes('ergo kit')) return 'ergo-kit';
    if (b.includes('truedent')) return 'truedent';
    if (b.includes('durable')) return 'durable';
    if (b.includes('pyrax')) return 'pyrax';
    if (b.includes('ires')) return 'ires';
    return slugify(brand);
};

const newProducts = validRows.map(row => {
    const productId = String(row[1]).trim();
    const productName = row[4] || `Item ${productId}`;
    const category = row[2] || 'Medical';
    const brand = row[5] || 'Unknown';
    const manufacturer = brandToManufacturer(brand);
    
    const specifications = {};
    colNames.forEach((col, idx) => {
        if (!col) return;
        const cleanCol = col.toString().replace('*', '').replace('*', '').trim();
        const val = row[idx];
        if (val !== undefined && val !== null && val !== '') {
            specifications[cleanCol] = val.toString().replace(/\n/g, ' ').replace(/\r/g, '').trim();
        }
    });

    return {
        id: productId.replace(/\s+/g, '-').toUpperCase(),
        commercial_name: productName,
        shortDesc: specifications['Short Description'] || '',
        category: category,
        company: 'dentose',
        manufacturer: manufacturer,
        segment: category.toLowerCase().includes('agri') ? 'agriculture' : 'medical',
        image: '', 
        featured: specifications['Featured Product'] === 'Yes',
        catalogue_pdf: cataloguePdfMap[manufacturer] || '',
        specifications: specifications
    };
});

const jsContent = `export const products = ${JSON.stringify(newProducts, null, 2)};`;

fs.writeFileSync(dataJsPath, jsContent);
console.log(`Successfully ingested ${newProducts.length} products to ${dataJsPath}`);

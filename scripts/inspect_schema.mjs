import * as xlsx from 'xlsx';
import path from 'path';

const basePath = 'D:\\Clean Data Services\\Projects\\2026 - Projects\\Dentose Chamo\\Docs for Website\\Scrapped Catalogue Products';
const files = [
    'IRES_Product_Master_Data_Filled.xlsx',
    'Topzir_Product_Master_Data_Populated_V1.xlsx',
    'Accu_Med_Product_Master_Data_Populated.xlsx',
    '..\\Catalogues\\Dentose_Product_Master_Structured_v2.xlsx'
];

for (const file of files) {
    try {
        console.log(`\n--- Inspecting ${file} ---`);
        const fullPath = path.resolve(basePath, file);
        const workbook = xlsx.readFile(fullPath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        
        // Convert only the first few rows
        const data = xlsx.utils.sheet_to_json(sheet, { range: 0 });
        if (data.length > 0) {
            console.log("Columns:", Object.keys(data[0]));
            // Log first row
            console.log("Row 1 Sample:");
            console.log(data[0]);
        } else {
            console.log("Sheet is empty.");
        }
    } catch (e) {
        console.error(`Failed reading ${file}: ${e.message}`);
    }
}

import { products } from '../src/pages/Products.js';
import fs from 'fs';

function capitalize(str) {
    if (!str) return str;
    str = str.trim();
    if (str.length === 0) return str;
    // Sentence case or Title case logic? 
    // Let's do a simple proper formatting: Capitalize first letter, lower rest unless it's an acronym.
    // Actually, simple Capitalize first letter of each sentence/field is safer.
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const updatedProducts = products.map(p => {
    // 1. Move Ergo Kit to IRES
    const isErgo = p.manufacturer && p.manufacturer.toLowerCase().replace('-', ' ') === 'ergo kit';
    
    if (isErgo) {
        p.manufacturer = 'ires';
        p.catalogue_pdf = '/catalogues/Ires_Catalogue.pdf';
        
        if (p.specifications) {
            p.specifications["Brand"] = "IRES";
            p.specifications["Manufacturer Name"] = "IRES";
        }
    }

    // 2. Format English
    p.commercial_name = capitalize(p.commercial_name);
    p.shortDesc = capitalize(p.shortDesc);
    
    if (p.specifications) {
        const specs = {};
        for (const [key, value] of Object.entries(p.specifications)) {
            // Special handling for Brand/Manufacturer if it was Ergo Kit but somehow missed
            let val = value;
            if (typeof val === 'string' && val.toLowerCase().replace('-', ' ') === 'ergo kit') {
                val = "IRES";
            }
            specs[key] = typeof val === 'string' ? capitalize(val) : val;
        }
        p.specifications = specs;
    }

    return p;
});

const fileContent = `export const products = ${JSON.stringify(updatedProducts, null, 2)};`;
fs.writeFileSync('./src/pages/Products.js', fileContent);

console.log('Migration and formatting complete.');

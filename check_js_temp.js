import { products } from './src/pages/Products.js';

const brandCounts = {};
products.forEach(p => {
  const brand = p.manufacturer || 'Unknown';
  brandCounts[brand] = (brandCounts[brand] || 0) + 1;
});

console.log('--- JS BRAND COUNTS ---');
console.log(JSON.stringify(brandCounts, null, 2));
console.log('Total Products in JS:', products.length);

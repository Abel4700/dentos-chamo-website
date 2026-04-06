const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, '../src/data/products.js');
const IMAGES_DIR = path.join(__dirname, '../public/images/products');

try {
  // 1. Identify used images from the curated products list
  const content = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  
  // Robust search for the products array block
  const startMarker = 'export const products = [';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error("Could not find 'export const products = [' in " + PRODUCTS_FILE);

  const arrayStart = content.indexOf('[', startIdx);
  const arrayEnd = content.indexOf('];', arrayStart);
  if (arrayEnd === -1) throw new Error("Could not find terminating '];' for products array.");

  const productsJSON = content.substring(arrayStart, arrayEnd + 1);
  const products = JSON.parse(productsJSON);

  const usedImages = new Set();
  products.forEach(p => {
    if (p.image && p.image.startsWith('/images/products/')) {
      // Normalize path to match filesystem (handle slashes/backslashes)
      const relativePath = p.image
        .replace('/images/products/', '')
        .split('/')
        .join(path.sep);
      usedImages.add(relativePath);
    }
  });

  console.log(`Active unique items in data: ${products.length}`);
  console.log(`Referenced unique images: ${usedImages.size}`);

  // 2. Discover all files in the products images directory
  let allFiles = [];
  const walkSync = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        walkSync(fullPath);
      } else {
        allFiles.push(fullPath);
      }
    });
  };
  
  if (fs.existsSync(IMAGES_DIR)) {
    walkSync(IMAGES_DIR);
  }

  console.log(`Total files in directory: ${allFiles.length}`);

  // 3. Prune Orphans
  let deletedCount = 0;
  allFiles.forEach(absolutePath => {
    const relativePath = path.relative(IMAGES_DIR, absolutePath);
    
    // Check if the relative path exists in our Set
    if (!usedImages.has(relativePath)) {
      try {
        fs.unlinkSync(absolutePath);
        deletedCount++;
      } catch (e) {
        console.warn(`Failed to delete ${relativePath}: ${e.message}`);
      }
    }
  });

  console.log(`Successfully deleted ${deletedCount} unreferenced images.`);
  
  // 4. Recursive folder cleanup (remove empty folders)
  const cleanFolders = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        cleanFolders(fullPath);
      }
    });
    
    // Check if folder is now empty (don't delete base folder)
    if (dir !== IMAGES_DIR && fs.readdirSync(dir).length === 0) {
      try {
        fs.rmdirSync(dir);
      } catch (e) {}
    }
  };
  
  if (fs.existsSync(IMAGES_DIR)) {
    cleanFolders(IMAGES_DIR);
  }

} catch (err) {
  console.error("Asset Pruning Error:", err.message);
  process.exit(1);
}

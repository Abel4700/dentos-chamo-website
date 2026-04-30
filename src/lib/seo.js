/**
 * SEO Manager for Dentos Chamo
 * Handles dynamic head updates for SPA navigation
 */

export const updateSEO = ({ title, description, image, type = 'website', canonical }) => {
  // 1. Update Document Title
  const baseTitle = "Dentos Chamo Group";
  document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | Premium Medical Solutions`;

  // 2. Update Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || "Dentos Chamo Group - Leading provider of premium medical solutions and specialized agricultural products in East Africa.");
  }

  // 3. Open Graph Tags
  updateMetaTag('og:title', title ? `${title} | ${baseTitle}` : baseTitle);
  updateMetaTag('og:description', description || "Premium medical solutions and specialized agricultural products.");
  updateMetaTag('og:type', type);
  if (image) updateMetaTag('og:image', image);
  
  // 4. Canonical Tag
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', canonical || window.location.href);
};

const updateMetaTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Generates Product Schema (JSON-LD)
 */
export const injectProductSchema = (product) => {
  const schemaId = 'product-schema-jsonld';
  let script = document.getElementById(schemaId);
  if (script) script.remove();

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.commercial_name,
    "image": [product.image],
    "description": product.shortDesc || product.commercial_name,
    "brand": {
      "@type": "Brand",
      "name": product.manufacturer
    },
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  script = document.createElement('script');
  script.id = schemaId;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

/**
 * URL Slug Generator
 */
export const createSlug = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
};

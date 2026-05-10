import fs from 'fs';
import { products } from './Products.js';

// Re-creating the manufacturers array since it's hardcoded inside the component function in ProductsHub.js
const manufacturers = [
  {
    name: 'Prevest Denpro',
    slug: 'prevest',
    desc: 'Premium medical materials and reliable laboratory consumables.',
    logo: '/assets/prevest_logo.webp',
    color: '#4b66df',
    bg: 'linear-gradient(135deg, rgba(75,102,223,0.05) 0%, rgba(75,102,223,0.1) 100%)',
    pdf: '/catalogues/Prevest_Denpro_Catalogue.pdf',
  },
  {
    name: 'IRES',
    slug: 'ires',
    desc: 'Advanced medical implant systems and oral surgery solutions.',
    logo: '/assets/ires_logo.svg',
    color: '#2c3e50',
    bg: 'linear-gradient(135deg, rgba(44,62,80,0.05) 0%, rgba(44,62,80,0.1) 100%)',
    pdf: '/catalogues/Ires_Catalogue.pdf',
  },
  {
    name: 'PreciDent',
    slug: 'precident',
    desc: 'High-performance rotary instruments and precision clinical burs.',
    logo: '/assets/precident-logo-01.webp',
    color: '#e67e22',
    bg: 'linear-gradient(135deg, rgba(230,126,34,0.05) 0%, rgba(230,126,34,0.1) 100%)',
    pdf: '/catalogues/Precident_Product Catalogue.pdf',
  },
  {
    name: 'Durable',
    slug: 'durable',
    desc: 'Reliable medical hospital supplies and clinical consumables.',
    logo: '/assets/durable-hospital-supplies-logo.webp',
    color: '#27ae60',
    bg: 'linear-gradient(135deg, rgba(39,174,96,0.05) 0%, rgba(39,174,96,0.1) 100%)',
    pdf: '/catalogues/Durable_Product_Catalogue.pdf',
  },
  {
    name: 'Ramo',
    slug: 'ramo',
    desc: 'Quality medical instruments for diverse clinical applications.',
    logo: '/assets/ramo_medical_logo.webp',
    color: '#8e44ad',
    bg: 'linear-gradient(135deg, rgba(142,68,173,0.05) 0%, rgba(142,68,173,0.1) 100%)',
    pdf: '/catalogues/Ramo_Endodontic Catalogue.pdf',
  },
  {
    name: 'TopZir',
    slug: 'topzir',
    desc: 'Cutting-edge CAD/CAM zirconia and aesthetic restoration blocks.',
    logo: '/assets/tozier_logo.svg',
    color: '#26bccd',
    bg: 'linear-gradient(135deg, rgba(38,188,205,0.05) 0%, rgba(38,188,205,0.1) 100%)',
    pdf: '/catalogues/Topzir_Products_Catalogue_2026.pdf',
  },
  {
    name: 'Sincere',
    slug: 'sincere',
    desc: 'Precision instruments for orthodontic and general dentistry.',
    logo: '/assets/sincere-people-instruments.png',
    color: '#c0392b',
    bg: 'linear-gradient(135deg, rgba(192,57,43,0.05) 0%, rgba(192,57,43,0.1) 100%)',
    pdf: '/catalogues/Sincere-instruments_Catalogue.pdf',
  },
  {
    name: 'Truedent',
    slug: 'truedent',
    desc: 'Essential medical consumables and export-quality supplies.',
    logo: '/assets/truedendco-logo.webp',
    color: '#2980b9',
    bg: 'linear-gradient(135deg, rgba(41,128,185,0.05) 0%, rgba(41,128,185,0.1) 100%)',
    pdf: '/catalogues/True-Dent_Catalogue.pdf',
  },
  {
    name: 'Pyrax',
    slug: 'pyrax',
    desc: 'Specialized medical waxes and high-quality laboratory materials.',
    logo: '/assets/pyrax-logo.webp',
    color: '#f39c12',
    bg: 'linear-gradient(135deg, rgba(243,156,18,0.05) 0%, rgba(243,156,18,0.1) 100%)',
    pdf: '/catalogues/Pyrax_Catalouge.pdf',
  },
  {
    name: 'Oradox',
    slug: 'oradox',
    desc: 'Professional oral care solutions and clinical hygiene systems.',
    logo: '/assets/oradox_logo.png',
    color: '#00d2ff',
    bg: 'linear-gradient(135deg, rgba(0,210,255,0.05) 0%, rgba(0,210,255,0.1) 100%)',
    pdf: '/catalogues/Oradox_Catalogue.pdf'
  }
];

const data = {
  manufacturers,
  products
};

fs.writeFileSync('extracted_data.json', JSON.stringify(data, null, 2));
console.log('Data extracted successfully!');

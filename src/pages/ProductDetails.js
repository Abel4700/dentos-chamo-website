import { products } from '../data/products.js';

export const ProductDetails = () => {
  const hash = window.location.hash;
  const idMatch = hash.match(/\?id=([^&]*)/);
  const productId = idMatch ? idMatch[1] : null;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return `
      <div class="app-section bg-light page-offset">
        <section class="section">
          <div class="container text-center" style="padding: 100px 0;">
            <div class="empty-icon"><i class="fas fa-search-minus"></i></div>
            <h2 style="color: #0f172a; margin-top: 20px;">Product Not Found</h2>
            <p style="color: #64748b; margin-top: 10px; font-size: 1.1rem;">The technical data sheet you requested could not be located. <br><br><a href="#/products" class="btn btn-primary">Return to Catalog</a></p>
          </div>
        </section>
      </div>
      <style>
        .empty-icon { font-size: 5rem; color: #cbd5e1; }
        .page-offset { margin-top: -80px; padding-top: 120px; }
      </style>
    `;
  }

  const badges = [];
  if (product.safety.hazard_warnings) badges.push(`<span class="badge badge-hazard" title="${product.safety.hazard_warnings}">HAZARD WARNING</span>`);
  if (product.safety.is_sterile) badges.push('<span class="badge badge-sterile"><i class="fas fa-shield-virus"></i> ISO 15223-1: STERILE</span>');
  if (product.safety.single_use) badges.push('<span class="badge badge-single"><i class="fas fa-recycle"></i> ISO 15223-1: SINGLE USE</span>');
  if (product.safety.fragile) badges.push('<span class="badge badge-fragile"><i class="fas fa-wine-glass"></i> ISO 15223-1: FRAGILE</span>');
  if (product.safety.temperature_limit) badges.push(`<span class="badge badge-temp"><i class="fas fa-thermometer-half"></i> MAX ${product.safety.temperature_limit}°C</span>`);

  return `
    <div class="app-section bg-light page-offset pb-100">
      
      <!-- Minimalist Breadcrumb Area -->
      <div class="breadcrumb-bar fade-in">
        <div class="container">
          <a href="#/products" class="back-link"><i class="fas fa-arrow-left"></i> Back to Primary Catalog</a>
        </div>
      </div>

      <div class="container mt-30">
        <div class="detail-grid">
          
          <!-- Immersive Presentation Stage -->
          <div class="detail-visuals fade-in-up">
            <div class="presentation-stage glass-premium shadow-elevation">
              <!-- Ambient Glow Behind Image -->
              <div class="stage-ambient-glow"></div>
              
              <div class="stage-badges">
                ${badges.join('')}
              </div>
              
              ${product.image 
                ? `<img src="${product.image}" alt="${product.commercial_name}" class="stage-img">` 
                : `<div class="no-img-stage">
                     <i class="fas fa-cube tech-cube"></i>
                     <span>Visual Rendering Unavailable</span>
                   </div>`
              }
            </div>
            
            <a href="${product.safety.eIFU_url}" target="_blank" class="btn-download-doc glass-premium mt-20 hover-lift">
               <div class="doc-icon"><i class="fas fa-file-pdf text-primary"></i></div>
               <div class="doc-text">
                 <strong>Download eIFU Document</strong>
                 <span>Electronic Instructions for Use</span>
               </div>
               <i class="fas fa-download doc-arrow"></i>
            </a>
          </div>
          
          <!-- Technical Editorial Content -->
          <div class="detail-content fade-in-up" style="animation-delay: 0.1s;">
            <div class="tech-header-card glass-premium mb-30 shadow-sm">
              <div class="header-band">
                <span class="segment-tag ${product.segment}-tag">${product.segment === 'medical' ? 'Medical Import' : 'Organic Export'}</span>
                <span class="hs-tag">HS ${product.hs_code}</span>
              </div>
              
              <h1 class="tech-title">${product.commercial_name}</h1>
              <p class="ref-subtitle">REF: <strong>${product.model_number}</strong> <span class="divider">|</span> CAT: <strong>${product.category}</strong></p>
              
              <div class="udi-container mt-15">
                <span class="udi-label">UDI-DI Barcode Data</span>
                <div class="udi-code">${product.udi}</div>
              </div>
            </div>

            ${product.safety.hazard_warnings ? `
              <div class="hazard-alert mb-30 fade-in-up" style="animation-delay: 0.2s;">
                <div class="hazard-icon"><i class="fas fa-exclamation-triangle"></i></div>
                <div class="hazard-content">
                  <strong>Critical Hazard Warning</strong>
                  <p>${product.safety.hazard_warnings}</p>
                </div>
              </div>
            ` : ''}
            
            <div class="tech-body content-group mb-30 fade-in-up" style="animation-delay: 0.3s;">
              <h4 class="section-title">Intended Clinical Use <span>(ISO 20417)</span></h4>
              <p class="editorial-p">${product.intended_use}</p>
              
              <h4 class="section-title mt-30">Technical Specifications</h4>
              <p class="editorial-p">${product.details}</p>
            </div>

            <!-- Bento Box Data Layout -->
            <div class="bento-data-grid mt-30 fade-in-up" style="animation-delay: 0.4s;">
              <!-- Traceability Bento -->
              <div class="bento-box glass-premium">
                <div class="bento-header">
                  <i class="fas fa-barcode"></i>
                  <h4>Traceability <span>(ISO 13485)</span></h4>
                </div>
                <div class="bento-list">
                  <div class="bento-row">
                    <span class="b-label">Lot Number</span>
                    <span class="b-val mono-font">${product.traceability.lot_number}</span>
                  </div>
                  <div class="bento-row">
                    <span class="b-label">Manufactured</span>
                    <span class="b-val">${product.traceability.date_of_manufacture}</span>
                  </div>
                  <div class="bento-row">
                    <span class="b-label">Expiry Date</span>
                    <span class="b-val text-primary font-700">${product.traceability.expiry_date}</span>
                  </div>
                </div>
              </div>

              <!-- Manufacturer Bento -->
              <div class="bento-box glass-premium">
                <div class="bento-header">
                  <i class="fas fa-industry"></i>
                  <h4>Manufacturer Origin</h4>
                </div>
                <div class="mfg-content">
                  <p class="mfg-name">${product.manufacturer_details.name}</p>
                  <p class="mfg-address">${product.manufacturer_details.address}</p>
                  <div class="mfg-country">
                    <i class="fas fa-globe-americas"></i> ${product.manufacturer_details.country}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Desktop Action Button -->
            <div class="desktop-action mt-40">
              <button class="btn btn-primary btn-lg btn-block shadow-elevation hover-lift">
                <i class="fas fa-file-signature"></i> Request Official Tender Quote
              </button>
            </div>

          </div>
        </div>
      </div>
      
      <!-- Sticky Mobile Action Bar -->
      <div class="mobile-sticky-action glass-premium shadow-elevation-top">
        <button class="btn btn-primary btn-block">
          <i class="fas fa-file-signature"></i> Request Quote
        </button>
      </div>

    </div>

    <style>
      .bg-light { background-color: #f4f7fb; min-height: 100vh; }
      .page-offset { margin-top: -80px; padding-top: 100px; }
      .pb-100 { padding-bottom: 100px; }
      .mb-30 { margin-bottom: 30px; }
      .mt-15 { margin-top: 15px; }
      .mt-20 { margin-top: 20px; }
      .mt-30 { margin-top: 30px; }
      .mt-40 { margin-top: 40px; }
      .text-primary { color: var(--primary); }
      .font-700 { font-weight: 700; }
      
      /* Utilities */
      .glass-premium {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: 16px;
      }
      .shadow-elevation { box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08); }
      .shadow-elevation-top { box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.08); }
      .shadow-sm { box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
      .hover-lift { transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease; }
      .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
      
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .fade-in-up { animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .fade-in { animation: fadeIn 0.5s ease both; }
      @keyframes fadeIn { from {opacity:0} to {opacity:1} }

      /* Breadcrumb */
      .breadcrumb-bar {
        background: white; border-bottom: 1px solid #e2e8f0;
        padding: 15px 0; margin-bottom: 20px;
      }
      .back-link {
        color: #64748b; text-decoration: none; font-weight: 600; font-size: 0.9rem;
        display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s;
      }
      .back-link:hover { color: var(--primary); }

      /* Layout */
      .detail-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: flex-start; }
      @media(min-width: 992px) {
        .detail-grid { grid-template-columns: 1fr 1.3fr; gap: 50px; }
        .detail-visuals { position: sticky; top: 100px; }
      }

      /* Immersive Presentation Stage */
      .presentation-stage {
        height: 480px; position: relative; overflow: hidden;
        display: flex; align-items: center; justify-content: center; padding: 40px;
      }
      .stage-ambient-glow {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 300px; height: 300px; background: radial-gradient(circle, rgba(19,70,175,0.08) 0%, rgba(255,255,255,0) 70%); z-index: 1;
      }
      .stage-img { max-width: 100%; max-height: 100%; object-fit: contain; position: relative; z-index: 2; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.15)); }
      .no-img-stage { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; color: #94a3b8; }
      .tech-cube { font-size: 4rem; opacity: 0.5; margin-bottom: 15px; }
      .no-img-stage span { font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; font-weight: 600; }
      
      .stage-badges { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; align-items: flex-end; z-index: 3; }
      .badge { padding: 6px 12px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; color: white; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
      .badge-sterile { background-color: #10b981; }
      .badge-fragile { background-color: #f59e0b; }
      .badge-single { background-color: #3b82f6; }
      .badge-temp { background-color: #0891b2; }
      .badge-hazard { background-color: #ef4444; }

      /* Document Download Button Card */
      .btn-download-doc {
        display: flex; align-items: center; padding: 20px; text-decoration: none; color: inherit;
      }
      .doc-icon { width: 45px; height: 45px; background: rgba(19,70,175,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-right: 15px; }
      .doc-text { display: flex; flex-direction: column; flex-grow: 1; }
      .doc-text strong { font-size: 1rem; color: #0f172a; }
      .doc-text span { font-size: 0.8rem; color: #64748b; }
      .doc-arrow { color: #cbd5e1; font-size: 1.2rem; transition: color 0.3s; }
      .btn-download-doc:hover .doc-arrow { color: var(--primary); }

      /* Editorial Content Header */
      .tech-header-card { padding: 30px; }
      .header-band { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
      .segment-tag { padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
      .medical-tag { background: #e0e7ff; color: #3730a3; }
      .organic-tag { background: #fef3c7; color: #b45309; }
      .hs-tag { color: #64748b; font-family: 'Courier New', monospace; font-size: 0.9rem; font-weight: 700; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; border: 1px solid #e2e8f0; }
      
      .tech-title { font-size: 2.2rem; font-weight: 800; color: #0f172a; margin: 0 0 10px 0; line-height: 1.2; letter-spacing: -0.5px; }
      .ref-subtitle { color: #475569; font-size: 1.05rem; }
      .ref-subtitle strong { color: #0f172a; }
      .divider { color: #cbd5e1; margin: 0 10px; }
      
      .udi-container { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 15px; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; }
      .udi-label { font-size: 0.8rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
      .udi-code { font-family: 'Courier New', monospace; font-weight: 700; font-size: 1.1rem; color: #0f172a; letter-spacing: 2px; }

      /* Hazard Alert Redesigned */
      .hazard-alert {
        display: flex; gap: 15px; background: #fef2f2; border: 1px solid #fecaca; padding: 20px; border-radius: 12px;
      }
      .hazard-icon { font-size: 1.5rem; color: #dc2626; margin-top: 2px; }
      .hazard-content strong { display: block; color: #991b1b; font-size: 1.05rem; margin-bottom: 5px; }
      .hazard-content p { margin: 0; color: #b91c1c; font-size: 0.95rem; line-height: 1.5; }

      /* Tech Body */
      .section-title { font-size: 1.15rem; color: #0f172a; margin-bottom: 12px; font-weight: 800; display: flex; align-items: baseline; gap: 10px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
      .section-title span { font-size: 0.8rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
      .editorial-p { color: #334155; line-height: 1.7; font-size: 1.05rem; }

      /* Bento Box Data Layout */
      .bento-data-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
      @media(min-width: 600px) { .bento-data-grid { grid-template-columns: 1fr 1fr; } }
      
      .bento-box { padding: 25px; display: flex; flex-direction: column; }
      .bento-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
      .bento-header i { font-size: 1.2rem; color: var(--primary); opacity: 0.8; }
      .bento-header h4 { margin: 0; font-size: 1rem; color: #0f172a; }
      .bento-header span { font-size: 0.7rem; color: #94a3b8; margin-left: auto; font-weight: 700; }
      
      .bento-list { display: flex; flex-direction: column; gap: 12px; flex-grow: 1; }
      .bento-row { display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px dashed #e2e8f0; }
      .bento-row:last-child { border-bottom: none; padding-bottom: 0; }
      .b-label { color: #64748b; font-size: 0.85rem; font-weight: 500; }
      .b-val { color: #0f172a; font-size: 0.9rem; font-weight: 600; }
      .mono-font { font-family: 'Courier New', monospace; font-size: 1rem; letter-spacing: 1px; }
      
      .mfg-content { flex-grow: 1; display: flex; flex-direction: column; }
      .mfg-name { font-weight: 800; font-size: 1.05rem; color: #0f172a; margin: 0 0 5px 0; }
      .mfg-address { color: #64748b; font-size: 0.9rem; line-height: 1.5; margin: 0 0 15px 0; }
      .mfg-country { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; background: #f1f5f9; padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: #475569; width: fit-content; }

      /* Action Buttons */
      .btn-block { width: 100%; display: flex; justify-content: center; align-items: center; gap: 10px; }
      .btn-lg { padding: 18px 30px; font-size: 1.15rem; border-radius: 12px; }
      
      /* Mobile Sticky Bar */
      .mobile-sticky-action { display: none; position: fixed; bottom: 0; left: 0; width: 100%; padding: 15px 20px; z-index: 100; border-radius: 20px 20px 0 0; }
      @media(max-width: 991px) {
        .mobile-sticky-action { display: block; }
        .desktop-action { display: none; }
        .pb-100 { padding-bottom: 120px; /* Make room for sticky bar */ }
      }
    </style>
  `;
};

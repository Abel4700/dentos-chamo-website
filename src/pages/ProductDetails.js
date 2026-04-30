import { products } from './Products.js';

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
            <p style="color: #64748b; margin-top: 10px; font-size: 1.1rem;">Technical specifications for this item are currently offline. <br><br><a href="#/products" class="btn btn-primary">Return to Catalog</a></p>
          </div>
        </section>
      </div>
    `;
  }

  // 1. BRAND COLOR MAPPING
  const BRAND_COLORS = {
    'accu-med': { primary: '#0056b3', secondary: '#004494', text: '#ffffff' },
    'oradox': { primary: '#0d9488', secondary: '#0f766e', text: '#ffffff' },
    'prevest': { primary: '#4b66df', secondary: '#3b54cf', text: '#ffffff' },
    'topzir': { primary: '#26bccd', secondary: '#21a3b1', text: '#ffffff' },
    'default': { primary: '#0ea5e9', secondary: '#0284c7', text: '#ffffff' }
  };
  const theme = BRAND_COLORS[product.manufacturer] || BRAND_COLORS.default;

  // 2. DATA SEGREGATION LOGIC
  const specs = product.specifications || {};
  const highlights = [];
  const techSpecs = [];
  const regulatory = [];

  // Categorize specifications for the Tabbed View
  const EXCLUDED_KEYWORDS = ['display order', 'featured product', 'related products', 'brand', 'manufacturer name', 'image', 'catalogue', 'datasheet', 'generic name'];

  Object.entries(specs).forEach(([key, val]) => {
    if (!val || String(val).trim() === '') return;

    const k = key.toLowerCase();

    // Skip if key contains excluded keywords or ends with Excel markers (asterisks)
    if (EXCLUDED_KEYWORDS.some(kw => k.includes(kw)) || key.includes('*')) {
      return;
    }

    if (k.includes('feature') || k.includes('salient') || k.includes('highlight') || k.includes('benefit')) {
      highlights.push({ key, val });
    } else if (k.includes('cert') || k.includes('iso') || k.includes('shelf') || k.includes('storage') || k.includes('sterile')) {
      regulatory.push({ key, val });
    } else {
      techSpecs.push({ key, val });
    }
  });

  // Fallback if highlights are empty: Use first 3 interesting specs
  if (highlights.length === 0 && techSpecs.length > 0) {
    highlights.push(...techSpecs.slice(0, 3));
  }

  // 3. TAB CONTROLLER JS
  setTimeout(() => {
    const tabs = document.querySelectorAll('.detail-tab');
    const sections = document.querySelectorAll('.tab-content-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        // Update UI
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        sections.forEach(s => {
          if (s.id === target) s.style.display = 'block';
          else s.style.display = 'none';
        });
      });
    });
  }, 100);

  return `
    <div class="detail-page-wrapper">
      
      <div class="container main-content-grid page-offset">
        
        <!-- LEFT: VISUAL STAGE -->
        <aside class="side-visuals fade-in">
          <div class="presentation-stage glass-premium shadow-sm">
            ${product.image
      ? `<img src="${product.image}" alt="${product.commercial_name}" class="contained-img">`
      : `<div class="missing-img-box"><i class="fas fa-image"></i><span>Visual Pending</span></div>`
    }
          </div>
          
          <div class="download-portal glass-premium shadow-sm">
             <div class="portal-info">
               <i class="fas fa-file-pdf pdf-icon"></i>
               <div>
                 <span class="portal-title">Download eIFU Document</span>
                 <span class="portal-subtitle">Electronic Instructions for Use</span>
               </div>
             </div>
             <a href="${product.catalogue_pdf || `/catalogues/${product.company}_Catalogue.pdf`}" target="_blank" download class="download-trigger">
               <i class="fas fa-download"></i>
             </a>
          </div>
        </aside>

        <!-- RIGHT: PRODUCT DATASHEET -->
        <main class="info-hub fade-in">
          
          <div class="header-metadata">
            <div class="mfr-chip" style="background: ${theme.primary}15; color: ${theme.primary};">${product.manufacturer.toUpperCase()} IMPORT</div>
          </div>

          <h1 class="main-commercial-title">${product.commercial_name}</h1>
          
          <!-- CLEAN UNDERLINE TABS (RESTORED) -->
          <nav class="detail-tabs-nav fade-in-up">
            <button class="detail-tab active" data-target="tech-specs">Technical Specs</button>
            <button class="detail-tab" data-target="regulatory">Regulatory</button>
            <button class="detail-tab" data-target="ordering">Support</button>
          </nav>

          <div class="tab-content glass-premium shadow-sm fade-in-up">
            <div id="tech-specs" class="tab-content-panel">
               <div class="bento-grid-specs">
                 ${techSpecs.length > 0 ? techSpecs.map(s => `
                   <div class="bento-spec-item">
                     <span class="bento-label">${s.key}</span>
                     <span class="bento-val">${s.val}</span>
                   </div>
                 `).join('') : '<p class="empty-msg">Detailed specs available upon request.</p>'}
               </div>
            </div>

            <div id="regulatory" class="tab-content-panel" style="display: none;">
               <div class="regulatory-list">
                 ${regulatory.length > 0 ? regulatory.map(r => `
                   <div class="reg-row">
                     <span class="reg-label">${r.key}</span>
                     <span class="reg-val">${r.val}</span>
                   </div>
                 `).join('') : '<p class="empty-msg">Regulatory documentation pending review.</p>'}
               </div>
            </div>

            <div id="ordering" class="tab-content-panel" style="display: none;">
               <div class="ordering-support">
                 <h4>Request a Quotation</h4>
                 <p>Contact our procurement team for institutional pricing and distribution details.</p>
                 <div class="order-cta-group">
                   <button class="primary-btn-quote" style="background: ${theme.primary};"><i class="fas fa-envelope"></i> Send Inquiry</button>
                   <a href="https://wa.me/251911..." target="_blank" class="whatsapp-btn-outline"><i class="fab fa-whatsapp"></i> WhatsApp Support</a>
                 </div>
               </div>
            </div>
          </div>

        </main>
      </div>
    </div>

    <style>
      .detail-page-wrapper { background: var(--bg-light); min-height: 100vh; padding: 150px 0 100px; }
      
      .main-content-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        align-items: start;
      }
      @media(min-width: 994px) { .main-content-grid { grid-template-columns: 1fr 1.6fr; gap: 40px; } }

      /* LEFT COLUMN */
      .presentation-stage {
        background: white; border-radius: 20px; padding: 40px;
        height: 500px; display: flex; align-items: center; justify-content: center;
        position: relative; overflow: hidden;
        border: 1px solid var(--glass-border);
      }
      .contained-img { max-width: 100%; max-height: 100%; object-fit: contain; }
      
      .iso-overlay-badges { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 8px; align-items: flex-end; }
      .iso-badge { font-size: 0.65rem; font-weight: 800; padding: 6px 12px; border-radius: 6px; color: white; letter-spacing: 0.5px; }
      .iso-badge.sterile { background: #10b981; }
      .iso-badge.single { background: var(--primary); }
      .iso-badge.fragile { background: #f59e0b; }

      .download-portal { background: white; border-radius: 20px; padding: 25px; display: flex; justify-content: space-between; align-items: center; margin-top: 20px; border: 1px solid var(--glass-border); }
      .portal-info { display: flex; align-items: center; gap: 15px; }
      .pdf-icon { font-size: 1.8rem; color: var(--text-muted); opacity: 0.5; }
      .portal-title { display: block; font-weight: 800; color: var(--text-main); font-size: 0.95rem; }
      .portal-subtitle { display: block; font-size: 0.8rem; color: var(--text-muted); font-weight: 600; }
      .download-trigger { color: var(--text-muted); font-size: 1.2rem; transition: color 0.3s; }
      .download-trigger:hover { color: ${theme.primary}; }

      /* RIGHT COLUMN */
      .info-hub { display: flex; flex-direction: column; gap: 20px; }
      .header-metadata { display: flex; justify-content: space-between; align-items: center; }
      .mfr-chip { font-weight: 800; font-size: 0.7rem; padding: 6px 16px; border-radius: 50px; }
      .hs-chip { background: var(--bg-light); color: var(--text-muted); font-family: 'Courier New', Courier, monospace; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; border: 1px solid var(--glass-border); }

      .main-commercial-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; color: var(--text-main); margin: 0; letter-spacing: -1.5px; }
      
      .ref-cat-row { padding: 5px 0; display: flex; align-items: center; gap: 15px; color: var(--text-muted); font-size: 0.95rem; }
      .ref-cat-row strong { color: var(--text-main); }
      .divider { color: var(--glass-border); }

      .udi-barcode-box { background: #fff; border: 1px solid var(--glass-border); border-radius: 12px; padding: 15px 25px; display: flex; justify-content: space-between; align-items: center; margin: 5px 0; }
      .udi-label { font-size: 0.7rem; font-weight: 800; color: var(--text-muted); letter-spacing: 1px; }
      .udi-value { font-family: 'Courier New', Courier, monospace; font-size: 1rem; font-weight: 700; color: var(--text-main); letter-spacing: 2px; }

      /* TABS */
      .detail-tabs-nav { display: flex; border-bottom: 2px solid var(--bg-light); margin-top: 10px; }
      .detail-tab {
        padding: 15px 20px; border: none; background: transparent; font-weight: 800;
        color: var(--text-muted); cursor: pointer; position: relative; bottom: -2px;
        transition: all 0.2s; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;
      }
      .detail-tab.active { color: ${theme.primary}; border-bottom: 2px solid ${theme.primary}; }
      
      .tab-content { background: white; padding: 30px; border-radius: 0 0 20px 20px; min-height: 250px; border: 1px solid var(--glass-border); border-top: none; }
      
      .bento-grid-specs { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; }
      .bento-spec-item { display: flex; flex-direction: column; gap: 5px; }
      .bento-label { font-size: 0.7rem; font-weight: 800; color: var(--text-muted); opacity: 0.6; text-transform: uppercase; letter-spacing: 1px; }
      .bento-val { font-size: 0.95rem; color: var(--text-main); font-weight: 600; }

      .regulatory-list { display: flex; flex-direction: column; gap: 15px; }
      .reg-row { display: flex; justify-content: space-between; padding-bottom: 10px; border-bottom: 1px dotted var(--glass-border); }
      .reg-label { color: var(--text-muted); font-size: 0.9rem; font-weight: 600; }
      .reg-val { font-weight: 700; color: var(--text-main); font-size: 0.9rem; text-align: right; }

      .primary-btn-quote { color: white; padding: 15px 25px; border-radius: 12px; font-weight: 800; border: none; font-size: 0.9rem; cursor: pointer; transition: var(--transition); }
      .primary-btn-quote:hover { transform: translateY(-2px); filter: brightness(1.1); }
      .whatsapp-btn-outline { border: 2px solid var(--glass-border); padding: 13px 25px; border-radius: 12px; font-weight: 800; color: var(--text-muted); font-size: 0.9rem; text-decoration: none; display: inline-block; transition: var(--transition); }
      .whatsapp-btn-outline:hover { border-color: var(--secondary); color: var(--secondary); }

      .footer-card { background: white; border-radius: 20px; padding: 25px; border: 1px solid var(--glass-border); margin-top: 20px; }
      .card-title { font-size: 0.9rem; font-weight: 800; color: var(--text-muted); display: flex; align-items: center; gap: 10px; margin-bottom: 15px; }
      .card-title i { color: ${theme.primary}; }

      .mfr-name { font-size: 1rem; font-weight: 800; color: var(--text-main); line-height: 1.3; margin-bottom: 5px; }
      .mfr-location { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 15px; display: block; font-weight: 600; }
      .origin-tag { display: inline-flex; align-items: center; gap: 8px; background: var(--bg-light); padding: 6px 12px; border-radius: 60px; font-weight: 800; color: var(--text-muted); font-size: 0.8rem; border: 1px solid var(--glass-border); }

      /* MOBILE */
      @media (max-width: 768px) {
        .detail-page-wrapper { padding: 100px 0; }
        .presentation-stage { height: 320px; padding: 20px; }
        .main-commercial-title { font-size: 2rem; }
        .detail-tab { padding: 15px; font-size: 0.8rem; }
      }
    </style>
  `;
};


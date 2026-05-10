import { createSlug } from '../lib/seo.js';
import { sanityClient } from '../lib/sanity.js';

export const ProductsHub = (queryParams = {}) => {
  return `
    <div id="hub-container" class="app-section about-root light-theme-page" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <i class="fas fa-circle-notch fa-spin" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <h2 style="color: var(--text-main);">Loading Database...</h2>
      </div>
    </div>
  `;
};

ProductsHub.mount = async (queryParams = {}) => {
  const initialManufacturer = queryParams.manufacturer || 'all';
  const container = document.getElementById('hub-container');

  if (!container) return;

  try {
    const data = await sanityClient.fetch(`{
      "manufacturers": *[_type == "manufacturer" && isActive == true] | order(displayOrder asc) {
         name,
         "slug": slug.current,
         desc,
         color,
         bg,
         "logo": logo.asset->url,
         "pdf": pdf.asset->url,
         "count": count(*[_type == "product" && manufacturer._ref == ^._id && isActive == true])
      },
      "products": *[_type == "product" && isActive == true && manufacturer->isActive == true] | order(productName asc) {
         productName,
         "manufacturer": manufacturer->slug.current,
         "brand": brand,
         "category": category->title,
         subcategory,
         shortDescription,
         availability,
         priceType,
         featuredProduct,
         "image": mainImage.asset->url
      }
    }`);

    const manufacturers = data.manufacturers;
    const products = data.products;

    const generateBrandBanners = () => {
      return manufacturers.map(mfr => `
        <div class="brand-bento-card glass-premium fade-in-up" onclick="window.dispatchEvent(new CustomEvent('mfr-trigger', {detail: '${mfr.slug}'}))">
          <div class="bento-bg" style="background: ${mfr.bg || '#f1f5f9'}"></div>
          <div class="bento-header-media">
            ${mfr.logo
              ? `<img src="${mfr.logo}" alt="${mfr.name}" class="bento-logo" />`
              : `<div class="bento-icon" style="color: ${mfr.color || '#64748b'}; background: ${mfr.color || '#64748b'}15"><i class="fas fa-building"></i></div>`
            }
          </div>
          <div class="bento-body">
            <h3 class="bento-name">${mfr.name}</h3>
            <p class="bento-desc">${mfr.desc || ''}</p>
            <div class="bento-footer">
              <span class="product-count"><strong>${mfr.count}</strong> PRODUCTS</span>
              ${mfr.pdf ? `
                <a href="${mfr.pdf}" target="_blank" download class="pdf-action-btn" onclick="event.stopPropagation()">
                  <i class="fas fa-file-pdf"></i> PDF
                </a>
              ` : `
                <span class="pdf-placeholder"><i class="fas fa-clock"></i> COMING SOON</span>
              `}
            </div>
          </div>
        </div>
      `).join('');
    };

    const mfrColors = manufacturers.reduce((acc, current) => {
      acc[current.slug] = current.color;
      return acc;
    }, {});

    const generateProductCards = () => {
      return products.map((product) => {
        const isFeatured = product.featuredProduct ? 'true' : 'false';
        const mfrSlug = product.manufacturer || 'unknown';
        const mfrColor = mfrColors[mfrSlug] || '#64748b';
        
        return `
        <a href="#/product-details?name=${createSlug(product.productName || '')}" 
           class="product-link-card product-card glass-premium fade-in-up" 
           data-manufacturer="${mfrSlug}" 
           data-category="${product.category || 'Uncategorized'}"
           data-featured="${isFeatured}"
           style="display: none; text-decoration: none; color: inherit;">
          
          <div class="card-image-wrapper">
            <div class="image-overlay"></div>
            ${product.image
            ? `<img src="${product.image}" alt="${product.productName}" class="contained-img" loading="lazy">`
            : `<div class="missing-img-box"><i class="fas fa-image"></i><span>Pending Visual</span></div>`
          }
            ${product.featuredProduct ? '<div class="featured-ribbon"><i class="fas fa-star"></i> FEATURED</div>' : ''}
          </div>

          <div class="card-info">
            <div class="card-tags">
               <span class="mfr-tag" style="background: ${mfrColor}30; color: ${mfrColor}">
                 ${(product.brand || mfrSlug).toUpperCase()}
               </span>
               <span class="cat-tag">${product.category || 'Uncategorized'} ${product.subcategory ? `• ${product.subcategory}` : ''}</span>
            </div>
            <h3 class="product-title" data-search-target="true">${product.productName || 'N/A'}</h3>
            
            ${product.shortDescription ? `<p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 15px; line-height: 1.4;">${product.shortDescription}</p>` : ''}

            <div class="quick-highlights">
               ${product.availability ? `<span><i class="fas fa-check-circle"></i> ${product.availability}</span>` : ''}
               ${product.priceType ? `<span><i class="fas fa-tag"></i> ${product.priceType}</span>` : ''}
            </div>

            <div class="card-action-bar">
               <span>View Specifications &rarr;</span>
            </div>
          </div>
        </a>
        `;
      }).join('');
    };

    const generatePills = () => {
      return manufacturers.map(mfr => 
        `<button class="mfr-pill" data-value="${mfr.slug}">${mfr.name}</button>`
      ).join('');
    };

    container.outerHTML = `
      <style>
        .bg-soft { background: var(--bg-light); min-height: 100vh; }
        .glass-premium { 
          background: rgba(255, 255, 255, 0.8); 
          backdrop-filter: blur(20px); 
          border: 1px solid rgba(0,0,0,0.05); 
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        
        .light-theme-page { 
          background: #ffffff; 
          color: var(--text-main); 
          width: 100%; 
          position: relative; 
          overflow-x: clip;
        }
        .accent-text { color: var(--secondary); }
  
        .global-background-orbs { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; overflow: hidden; }
        .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15; animation: orbMove 30s infinite alternate ease-in-out; }
        .orb-primary { width: 600px; height: 600px; background: var(--primary); top: -100px; right: -150px; }
        .orb-accent { width: 450px; height: 450px; background: var(--secondary); bottom: 100px; left: -100px; animation-delay: -7s; }
        @keyframes orbMove { from { transform: translate(0,0); } to { transform: translate(200px, 150px); } }
  
        .hero-editorial-v3 { 
          padding: 220px 0 120px; 
          position: relative; 
          background: linear-gradient(rgba(15, 32, 166, 0.95), rgba(5, 11, 20, 0.7)), url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920');
          background-size: cover; 
          background-position: center;
          border-bottom: 1px solid #e2e8f0;
        }
        .hero-editorial-overlay { position: absolute; bottom:0; left:0; width:100%; height:150px; background: linear-gradient(to top, rgba(15, 32, 166, 0.1), transparent); }
        
        .hero-badge-v3 { display: inline-block; padding: 6px 14px; background: rgba(64, 224, 208, 0.1); border: 1px solid rgba(64, 224, 208, 0.2); color: var(--secondary); border-radius: 100px; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 25px; }
        .section-title-visionary { font-weight: 900; letter-spacing: -3px; line-height: 1; color: white; }
        .hero-lead { font-size: 1.2rem; color: rgba(255,255,255,0.8); max-width: 800px; line-height: 1.6; margin-top: 30px; }
        
        .hero-metrics-v3 { display: flex; align-items: center; gap: 60px; margin-top: 60px; }
        .metric-item-v3 { display: flex; flex-direction: column; }
        .metric-number { font-size: 3.5rem; font-weight: 900; line-height: 1; color: white; }
        .metric-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0.7); font-weight: 700; margin-top: 10px; }
        .metric-divider { width: 1px; height: 50px; background: rgba(255,255,255,0.1); }
  
        .brand-bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-top: 60px;
          position: relative;
          z-index: 10;
          margin-bottom: 80px;
        }
        .brand-bento-card {
          position: relative;
          padding: 40px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 240px;
        }
        .brand-bento-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); }
        .bento-bg { position: absolute; top:0; left:0; width:100%; height:100%; z-index: 1; transition: opacity 0.3s; }
        .bento-header-media { height: 64px; display: flex; align-items: center; position: relative; z-index: 2; margin-bottom: 25px; }
        .bento-logo { height: 100%; max-width: 160px; object-fit: contain; transition: all 0.3s ease; }
        .brand-bento-card:hover .bento-logo { transform: scale(1.05); }
        .bento-icon { width: 64px; height: 64px; border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; }
        .bento-body { position: relative; z-index: 2; flex-grow: 1; }
        .bento-name { font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; }
        .bento-desc { font-size: 0.95rem; color: #64748b; line-height: 1.5; margin-bottom: 25px; max-width: 90%; }
        .bento-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
        .product-count { font-size: 0.8rem; font-weight: 800; color: #94a3b8; letter-spacing: 1px; }
        .pdf-action-btn { padding: 8px 16px; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 0.85rem; font-weight: 700; color: var(--text-main); text-decoration: none; transition: all 0.3s; }
        .pdf-action-btn:hover { background: var(--primary); border-color: var(--primary); }
        .pdf-placeholder { font-size: 0.7rem; font-weight: 800; color: rgba(0,0,0,0.4); background: rgba(0, 0, 0, 0.05); padding: 6px 12px; border-radius: 6px; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px; }
  
        .product-link-card { transition: all 0.3s; height: 100%; position: relative; overflow: hidden; background: white; border: 1px solid #e2e8f0; border-radius: 24px; }
        .product-link-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        
        .card-image-wrapper { height: 260px; padding: 30px; display: flex; align-items: center; justify-content: center; background: white; position: relative; }
        .contained-img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.5s ease; }
        .product-link-card:hover .contained-img { transform: scale(1.05); }
        
        .featured-ribbon { position: absolute; top: 15px; left: 15px; background: var(--secondary); color: var(--black); padding: 4px 12px; border-radius: 50px; font-size: 0.7rem; font-weight: 800; display: flex; align-items: center; gap: 5px; z-index: 10; }
        
        .card-info { padding: 30px; }
        .card-tags { display: flex; gap: 8px; margin-bottom: 15px; }
        .mfr-tag { font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; }
        .cat-tag { font-size: 0.7rem; color: rgba(0,0,0,0.5); font-weight: 700; padding: 4px; }
        .product-title { font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px; line-height: 1.3; }
        
        .quick-highlights { display: flex; gap: 15px; margin-bottom: 25px; }
        .quick-highlights span { font-size: 0.75rem; color: #64748b; font-weight: 600; display: flex; align-items: center; gap: 5px; }
        .quick-highlights i { color: var(--secondary); }
  
        .card-action-bar { font-size: 0.9rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; border-top: 1px solid #e2e8f0; padding-top: 15px; }
  
        .mfr-pill { 
          padding: 10px 25px; 
          border-radius: 50px; 
          background: #f8fafc; 
          border: 1px solid #e2e8f0; 
          color: #64748b; 
          font-weight: 700; 
          cursor: pointer; 
          transition: all 0.2s; 
        }
        .mfr-pill.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 10px 20px rgba(21, 32, 166, 0.3); }
        .mfr-pill:hover:not(.active) { background: var(--primary); color: white; opacity: 0.8; }
  
        @media (max-width: 768px) {
          .hero-editorial-v3 { padding: 150px 0 80px; }
          .hero-metrics-v3 { flex-direction: column; align-items: flex-start; gap: 30px; }
          .metric-divider { width: 40px; height: 1px; }
  
          .brand-bento-grid { grid-template-columns: 1fr; gap: 20px; margin-top: 40px; }
          .brand-bento-card { min-height: 200px; padding: 25px; }
          .bento-name { font-size: 1.4rem; }
          .bento-desc { font-size: 0.9rem; }
          
          .glass-premium { padding: 20px !important; flex-direction: column; align-items: stretch !important; gap: 15px !important; background: rgba(255,255,255,0.03); }
          .mfr-pill { padding: 8px 16px; font-size: 0.8rem; flex: 1 1 auto; text-align: center; }
          #catalog-search { font-size: 0.9rem; }
        }
      </style>
      
      <div class="app-section about-root light-theme-page" id="hub-container">
        <div class="global-background-orbs">
           <div class="glass-orb orb-primary"></div>
           <div class="glass-orb orb-accent"></div>
        </div>
  
        <section class="hero-editorial-v3">
          <div class="container hero-editorial-grid-v3">
            <div class="hero-editorial-content-v3 fade-in-up">
              <div class="hero-badge-v3">CURATED PORTFOLIO</div>
              <h1 class="section-title-visionary" style="font-size: clamp(3.2rem, 8vw, 6.5rem);">Precision <br/><span class="accent-text">Excellence</span></h1>
              <p class="hero-lead">
                A meticulously selected collection of global medical innovations, clinical materials, and surgical instruments tailored for the East African specialist.
              </p>
              <div class="hero-metrics-v3">
                <div class="metric-item-v3">
                  <div class="metric-number accent-text">${products.length}+</div>
                  <div class="metric-label">Premium Products</div>
                </div>
                <div class="metric-divider"></div>
                <div class="metric-item-v3">
                  <div class="metric-number accent-text">${manufacturers.length}</div>
                  <div class="metric-label">Global Partners</div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-editorial-overlay"></div>
        </section>
  
        <div class="container">
          <div class="brand-bento-grid">
            ${generateBrandBanners()}
          </div>
        </div>
  
        <div class="container" style="margin-bottom: 50px;">
          <div class="glass-premium" style="padding:15px 30px; display: flex; flex-wrap: wrap; gap: 30px; align-items: center; justify-content: space-between;">
             <div style="display: flex; gap: 12px; flex-wrap: wrap;" id="mfr-pills-container">
               <button class="mfr-pill active" data-value="all">Show All</button>
               ${generatePills()}
             </div>
             
             <div style="flex: 1; min-width: 320px; position: relative;">
               <i class="fas fa-search" style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: var(--primary);"></i>
               <input type="text" id="catalog-search" placeholder="Quick find in database..." style="width: 100%; border: 1px solid #e2e8f0; background: #f8fafc; color: var(--text-main); padding: 14px 20px 14px 50px; border-radius: 12px; font-weight: 600; outline: none;">
             </div>
          </div>
        </div>
  
        <section class="section" style="padding-top: 0;">
          <div class="container">
            <div class="product-grid" id="visible-grid">
              ${generateProductCards()}
            </div>
            
            <div id="empty-state" class="glass-premium" style="display: none; padding: 80px 20px; text-align: center; max-width: 600px; margin: 40px auto;">
              <i class="fas fa-microscope" style="font-size: 4rem; color: #e2e8f0; margin-bottom: 25px;"></i>
              <h3 style="color: #475569; font-weight: 800;">No Products Found</h3>
              <p style="color: #94a3b8;">Try clearing your search or selecting a different brand.</p>
            </div>
          </div>
        </section>
      </div>
    `;

    // Re-attach event listeners after injecting new HTML
    const searchInput = document.getElementById('catalog-search');
    const cards = document.querySelectorAll('.product-card');
    const mfrPills = document.querySelectorAll('.mfr-pill');

    let activeMfr = initialManufacturer;
    let searchQuery = '';

    window.addEventListener('mfr-trigger', (e) => {
      activeMfr = e.detail;
      runFilters();
      window.scrollTo({ top: document.getElementById('visible-grid').offsetTop - 250, behavior: 'smooth' });
    });

    function runFilters() {
      let visibleCount = 0;
      cards.forEach(card => {
        const mfr = card.getAttribute('data-manufacturer');
        const isFeatured = card.getAttribute('data-featured') === 'true';
        const mfrMatch = (activeMfr === 'all' || mfr === activeMfr);

        let visibilityMatch = (activeMfr !== 'all') ? true : isFeatured;
        let searchMatch = true;
        
        if (searchQuery) {
          const text = card.querySelector('.product-title').textContent.toLowerCase();
          searchMatch = text.includes(searchQuery);
          visibilityMatch = true;
        }

        if (mfrMatch && visibilityMatch && searchMatch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const emptyState = document.getElementById('empty-state');
      if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';

      mfrPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.value === activeMfr);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        runFilters();
      });
    }

    mfrPills.forEach(btn => {
      btn.addEventListener('click', (e) => {
        activeMfr = e.target.dataset.value;
        runFilters();
      });
    });

    runFilters();

  } catch (error) {
    console.error('Failed to load products from Sanity:', error);
    container.innerHTML = `<div style="text-align: center; padding: 150px 20px;"><h2>Error loading database</h2><p style="color:red;">${error.message}</p></div>`;
  }
};


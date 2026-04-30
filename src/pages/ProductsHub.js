import { products } from './Products.js';

export const ProductsHub = (queryParams = {}) => {
  const initialManufacturer = queryParams.manufacturer || 'all';

  const manufacturers = [
    {
      name: 'Prevest Denpro',
      slug: 'prevest',
      desc: 'Premium dental materials and reliable laboratory consumables.',
      count: products.filter(p => p.manufacturer === 'prevest').length,
      logo: '/assets/prevest_logo.webp',
      color: '#4b66df',
      bg: 'linear-gradient(135deg, rgba(75,102,223,0.05) 0%, rgba(75,102,223,0.1) 100%)',
      pdf: '/catalogues/Prevest-Denpro-Catalog-2026.pdf'
    },
    {
      name: 'IRES',
      slug: 'ires',
      desc: 'Advanced dental implant systems and oral surgery solutions.',
      count: products.filter(p => p.manufacturer === 'ires').length,
      logo: '/assets/ires_logo.svg',
      color: '#2c3e50',
      bg: 'linear-gradient(135deg, rgba(44,62,80,0.05) 0%, rgba(44,62,80,0.1) 100%)',
      pdf: '/catalogues/Ires_Catalogue.pdf'
    },
    {
      name: 'PreciDent',
      slug: 'precident',
      desc: 'High-performance rotary instruments and precision dental burs.',
      count: products.filter(p => p.manufacturer === 'precident').length,
      logo: '/assets/precident-logo-01.webp',
      color: '#e67e22',
      bg: 'linear-gradient(135deg, rgba(230,126,34,0.05) 0%, rgba(230,126,34,0.1) 100%)',
      pdf: '/catalogues/Precident_Product Catalogue.pdf'
    },
    {
      name: 'Durable',
      slug: 'durable',
      desc: 'Reliable dental hospital supplies and clinical consumables.',
      count: products.filter(p => p.manufacturer === 'durable').length,
      logo: '/assets/durable-hospital-supplies-logo.webp',
      color: '#27ae60',
      bg: 'linear-gradient(135deg, rgba(39,174,96,0.05) 0%, rgba(39,174,96,0.1) 100%)',
      pdf: '/catalogues/Durable_Product_Catalogue.pdf'
    },
    {
      name: 'Ramo',
      slug: 'ramo',
      desc: 'Quality medical instruments for diverse clinical applications.',
      count: products.filter(p => p.manufacturer === 'ramo').length,
      logo: '/assets/ramo_medical_logo.webp',
      color: '#8e44ad',
      bg: 'linear-gradient(135deg, rgba(142,68,173,0.05) 0%, rgba(142,68,173,0.1) 100%)',
      pdf: '/catalogues/Ramo_Endodontic Catalogue.pdf'
    },
    {
      name: 'TopZir',
      slug: 'topzir',
      desc: 'Cutting-edge CAD/CAM zirconia and aesthetic restoration blocks.',
      count: products.filter(p => p.manufacturer === 'topzir').length,
      logo: '/assets/tozier_logo.svg',
      color: '#26bccd',
      bg: 'linear-gradient(135deg, rgba(38,188,205,0.05) 0%, rgba(38,188,205,0.1) 100%)',
      pdf: '/catalogues/Topzir_Products_Catalogue_2026.pdf'
    },
    {
      name: 'Sincere',
      slug: 'sincere',
      desc: 'Precision instruments for orthodontic and general dentistry.',
      count: products.filter(p => p.manufacturer === 'sincere').length,
      logo: '/assets/sincere-people-instruments.webp',
      color: '#c0392b',
      bg: 'linear-gradient(135deg, rgba(192,57,43,0.05) 0%, rgba(192,57,43,0.1) 100%)',
      pdf: '/catalogues/Sincere-instruments_Catalogue.pdf'
    },
    {
      name: 'Truedent',
      slug: 'truedent',
      desc: 'Essential dental consumables and export-quality supplies.',
      count: products.filter(p => p.manufacturer === 'truedent').length,
      logo: '/assets/truedendco-logo.webp',
      color: '#2980b9',
      bg: 'linear-gradient(135deg, rgba(41,128,185,0.05) 0%, rgba(41,128,185,0.1) 100%)',
      pdf: '/catalogues/True-Dent_Catalogue.pdf'
    },
    {
      name: 'Pyrax',
      slug: 'pyrax',
      desc: 'Specialized dental waxes and high-quality laboratory materials.',
      count: products.filter(p => p.manufacturer === 'pyrax').length,
      logo: '/assets/pyrax-logo.webp',
      color: '#f39c12',
      bg: 'linear-gradient(135deg, rgba(243,156,18,0.05) 0%, rgba(243,156,18,0.1) 100%)',
      pdf: '/catalogues/Pyrax_Catalouge.pdf'
    }
  ];

  const generateBrandBanners = () => {
    return manufacturers.map(mfr => `
      <div class="brand-bento-card glass-premium fade-in-up" onclick="window.dispatchEvent(new CustomEvent('mfr-trigger', {detail: '${mfr.slug}'}))">
        <div class="bento-bg" style="background: ${mfr.bg}"></div>
        <div class="bento-header-media">
          ${mfr.logo
        ? `<img src="${mfr.logo}" alt="${mfr.name}" class="bento-logo" />`
        : `<div class="bento-icon" style="color: ${mfr.color}; background: ${mfr.color}15"><i class="fas ${mfr.icon}"></i></div>`
      }
        </div>
        <div class="bento-body">
          <h3 class="bento-name">${mfr.name}</h3>
          <p class="bento-desc">${mfr.desc}</p>
          <div class="bento-footer">
            <span class="product-count"><strong>${mfr.count}</strong> PRODUCTS</span>
            ${mfr.pdf && mfr.pdf !== '#' ? `
              <a href="${mfr.pdf}" target="_blank" download class="pdf-action-btn" onclick="event.stopPropagation()">
                <i class="fas fa-file-pdf"></i> PDF
              </a>
            ` : `
              <span class="pdf-placeholder"><i class="fas fa-clock"></i> CATALOGUE COMING SOON</span>
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
      const isFeatured = product.featured ? 'true' : 'false';
      return `
      <a href="#/product-details?id=${product.id}" 
         class="product-link-card product-card glass-premium fade-in-up" 
         data-manufacturer="${product.manufacturer}" 
         data-category="${product.category}"
         data-featured="${isFeatured}"
         style="display: none; text-decoration: none; color: inherit;">
        
        <div class="card-image-wrapper">
          <div class="image-overlay"></div>
          ${product.image
          ? `<img src="${product.image}" alt="${product.commercial_name}" class="contained-img" loading="lazy">`
          : `<div class="missing-img-box"><i class="fas fa-image"></i><span>Pending Visual</span></div>`
        }
          ${product.featured ? '<div class="featured-ribbon"><i class="fas fa-star"></i> FEATURED</div>' : ''}
        </div>

        <div class="card-info">
          <div class="card-tags">
             <span class="mfr-tag" style="background: ${mfrColors[product.manufacturer] || '#cbd5e1'}30; color: ${mfrColors[product.manufacturer] || '#64748b'}">
               ${product.manufacturer.toUpperCase()}
             </span>
             <span class="cat-tag">${product.category}</span>
          </div>
          <h3 class="product-title" data-search-target="true">${product.commercial_name || 'N/A'}</h3>
          
          <div class="quick-highlights">
             <span><i class="fas fa-check-circle"></i> ISO/CE</span>
             <span><i class="fas fa-box"></i> Medical Grade</span>
          </div>

          <div class="card-action-bar">
             <span>Technical Sheet &rarr;</span>
          </div>
        </div>
      </a>
      `;
    }).join('');
  };

  setTimeout(() => {
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

        // If a specific manufacturer is selected, show all their products.
        // If 'all' is selected, only show featured products to keep the page clean.
        let visibilityMatch = (activeMfr !== 'all') ? true : isFeatured;

        let searchMatch = true;
        if (searchQuery) {
          const text = card.querySelector('.product-title').textContent.toLowerCase();
          searchMatch = text.includes(searchQuery);
          // When searching, ignore the featured-only restriction
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
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';

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
  }, 100);

  return `
    <style>
      .bg-soft { background: var(--bg-light); min-height: 100vh; }
      .glass-premium { background: white; border-radius: 20px; border: 1px solid var(--glass-border); box-shadow: var(--shadow-sm); }
      
      /* TITLE SECTION (CINEMATIC DARK OVERLAY) */
      .page-hero {
        padding: 220px 0 100px;
        text-align: center;
        background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1920');
        background-size: cover;
        background-position: center;
        margin-bottom: 60px;
        color: white;
      }
      .hub-title { font-size: clamp(3rem, 5vw, 4.2rem); font-weight: 900; color: white; margin-bottom: 20px; letter-spacing: -2px; }
      .hub-subtitle { font-size: 1.2rem; color: rgba(255, 255, 255, 0.8); max-width: 750px; margin: 0 auto; line-height: 1.6; }

      /* BENTO MANUFACTURER CARDS */
      .brand-bento-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
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
      .bento-logo { height: 100%; max-width: 160px; object-fit: contain; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.05)); }
      .bento-icon { width: 64px; height: 64px; border-radius: 18px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; }
      .bento-body { position: relative; z-index: 2; flex-grow: 1; }
      .bento-name { font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 8px; }
      .bento-desc { font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 25px; max-width: 90%; }
      .bento-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
      .product-count { font-size: 0.8rem; font-weight: 800; color: var(--text-muted); letter-spacing: 1px; }
      .pdf-action-btn { padding: 8px 16px; background: white; border-radius: 10px; font-size: 0.85rem; font-weight: 700; color: var(--text-main); text-decoration: none; box-shadow: var(--shadow-sm); transition: all 0.3s; }
      .pdf-action-btn:hover { background: var(--bg-light); color: var(--secondary); }
      .pdf-placeholder { font-size: 0.7rem; font-weight: 800; color: #94a3b8; background: rgba(148, 163, 184, 0.1); padding: 6px 12px; border-radius: 6px; letter-spacing: 0.5px; display: flex; align-items: center; gap: 6px; }

      /* PRODUCT GRID */
      .product-link-card { transition: all 0.3s; height: 100%; position: relative; overflow: hidden; background: white; }
      .product-link-card:hover { transform: translateY(-5px); border-color: var(--secondary); box-shadow: var(--shadow-lg); }
      
      .card-image-wrapper { height: 260px; padding: 30px; display: flex; align-items: center; justify-content: center; background: #fff; position: relative; }
      .contained-img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform 0.5s ease; }
      .product-link-card:hover .contained-img { transform: scale(1.05); }
      
      .featured-ribbon { position: absolute; top: 15px; left: 15px; background: #fbbf24; color: #92400e; padding: 4px 12px; border-radius: 50px; font-size: 0.7rem; font-weight: 800; display: flex; align-items: center; gap: 5px; z-index: 10; }
      
      .card-info { padding: 30px; background: white; border-top: 1px solid var(--glass-border); }
      .card-tags { display: flex; gap: 8px; margin-bottom: 15px; }
      .mfr-tag { font-size: 0.7rem; font-weight: 800; padding: 4px 10px; border-radius: 4px; }
      .cat-tag { font-size: 0.7rem; color: var(--text-muted); font-weight: 700; padding: 4px; }
      .product-title { font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 12px; line-height: 1.3; }
      
      .quick-highlights { display: flex; gap: 15px; margin-bottom: 25px; }
      .quick-highlights span { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; display: flex; align-items: center; gap: 5px; }
      .quick-highlights i { color: var(--secondary); }

      .card-action-bar { font-size: 0.9rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; border-top: 1px solid var(--glass-border); padding-top: 15px; }

      /* FILTERS */
      .mfr-pill { padding: 10px 25px; border-radius: 50px; background: white; border: 1px solid var(--glass-border); color: var(--text-muted); font-weight: 700; cursor: pointer; transition: all 0.2s; }
      .mfr-pill.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: var(--shadow-md); }
      .mfr-pill:hover:not(.active) { border-color: var(--secondary); color: var(--secondary); }

      /* MOBILE RESPONSIVENESS */
      @media (max-width: 768px) {
        .hub-title { font-size: 2.8rem; margin-bottom: 15px; }
        .hub-subtitle { font-size: 1.1rem; padding: 0 15px; }
        .brand-bento-grid { grid-template-columns: 1fr; gap: 20px; }
        .brand-bento-card { min-height: 200px; padding: 25px; }
        .bento-name { font-size: 1.4rem; }
        .bento-desc { font-size: 0.9rem; }
        
        .page-hero { padding: 140px 0 40px; }
        
        .glass-premium { padding: 20px !important; flex-direction: column; align-items: stretch !important; gap: 15px !important; }
        .mfr-pill { padding: 8px 16px; font-size: 0.8rem; flex: 1 1 auto; text-align: center; }
      }
    </style>

    <div class="app-section bg-soft page-offset">
      
      <div class="page-hero container fade-in">
        <h1 class="hub-title">Our <span style="color: var(--primary);">Products</span></h1>
        <p class="hub-subtitle">Precision instruments and premium materials for dental and surgical specialists. Select a manufacturer or browse our featured collections below.</p>
      </div>

      <div class="container">
        <div class="brand-bento-grid">
          ${generateBrandBanners()}
        </div>
      </div>

      <div class="container" style="margin-bottom: 50px;">
        <div class="glass-premium" style="padding:15px 30px; display: flex; flex-wrap: wrap; gap: 30px; align-items: center; justify-content: space-between;">
           <div style="display: flex; gap: 12px; flex-wrap: wrap;">
             <button class="mfr-pill active" data-value="all">Show All</button>
             <button class="mfr-pill" data-value="prevest">Prevest</button>
             <button class="mfr-pill" data-value="ires">IRES</button>
             <button class="mfr-pill" data-value="precident">PreciDent</button>
             <button class="mfr-pill" data-value="durable">Durable</button>
             <button class="mfr-pill" data-value="ramo">Ramo</button>
             <button class="mfr-pill" data-value="topzir">TopZir</button>
             <button class="mfr-pill" data-value="sincere">Sincere</button>
             <button class="mfr-pill" data-value="truedent">Truedent</button>
             <button class="mfr-pill" data-value="pyrax">Pyrax</button>
           </div>
           
           <div style="flex: 1; min-width: 320px; position: relative;">
             <i class="fas fa-search" style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: #cbd5e1;"></i>
             <input type="text" id="catalog-search" placeholder="Quick find in database..." style="width: 100%; border: none; background: #f8fafc; padding: 14px 20px 14px 50px; border-radius: 12px; font-weight: 600; outline: none;">
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
};


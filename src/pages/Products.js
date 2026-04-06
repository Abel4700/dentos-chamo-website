import { products, MEDICAL_CATEGORIES, ORGANIC_CATEGORIES } from '../data/products.js';

export const Products = () => {
  const generateCategoryList = () => {
    return MEDICAL_CATEGORIES.map(cat => `
      <li class="cat-item nav-item" data-category="${cat}">${cat}</li>
    `).join('');
  };

  const MFR_COLORS = {
    'accu-med': '#0056b3',
    'oradox':   '#0d9488',
    'prevest':  '#4b66df',
    'topzir':   '#26bccd',
    'default':  '#1e293b'
  };

  const generateProductCards = () => {
    return products.map((product, index) => {
      const delay = (index % 12) * 0.05;
      const mfrColor = MFR_COLORS[product.manufacturer] || MFR_COLORS.default;
      
      return `
      <div class="product-card glass-premium fade-in-up" 
           style="animation-delay: ${delay}s; border-top: 3px solid ${mfrColor};" 
           data-segment="${product.segment}" 
           data-category="${product.category}">
        <div class="card-image-wrapper">
          ${product.image 
            ? `<img src="${product.image}" alt="${product.commercial_name}" class="contained-img" onerror="this.onerror=null; this.outerHTML='<div class=\\'missing-img-box\\'><i class=\\'img-icon\\'>&#128247;</i><span>Image Pending</span></div>';">` 
            : `<div class="missing-img-box"><i class="img-icon">&#128247;</i><span>Image Pending</span></div>`
          }
          
          <div class="iso-badges">
            ${product.safety.hazard_warnings ? `<span class="badge badge-hazard" title="${product.safety.hazard_warnings}">HAZARD</span>` : ''}
            ${product.safety.is_sterile ? '<span class="badge badge-sterile" title="ISO 15223-1: Sterile">STERILE</span>' : ''}
            ${product.safety.single_use ? '<span class="badge badge-single" title="ISO 15223-1: Single Use">SINGLE-USE</span>' : ''}
            ${product.safety.fragile ? '<span class="badge badge-fragile" title="ISO 15223-1: Fragile">FRAGILE</span>' : ''}
          </div>
        </div>

        <div class="card-info">
          <div class="card-header-main">
            <span class="mfr-badge" style="background: ${mfrColor}15; color: ${mfrColor}; border: 1px solid ${mfrColor}30;">
              ${product.manufacturer.toUpperCase()}
            </span>
            <span class="cat-pill">${product.category}</span>
          </div>
          
          <h3 class="product-name-link" data-search-target="true">${product.commercial_name}</h3>
          <p class="product-short-desc">${product.shortDesc}</p>
          
          <div class="card-utility-bar mt-20">
            <span class="hs-code-label" data-search-target="true">HS ${product.hs_code}</span>
            <a href="#/product-details?id=${product.id}" class="clean-action-link">
              View Details <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      `;
    }).join('');
  };

  // Attach filtering logic directly after render
  setTimeout(() => {
    const segmentBtns = document.querySelectorAll('.seg-pill');
    const cards = document.querySelectorAll('.product-card');
    const sidebarList = document.querySelector('.sidebar-list');
    const searchInput = document.getElementById('catalog-search');

    let activeSegment = 'medical';
    let activeCategory = 'all';
    let searchQuery = '';

    function runFilters() {
      let visibleCount = 0;
      cards.forEach(card => {
        const segMatch = (activeSegment === 'all' || card.getAttribute('data-segment') === activeSegment);
        const catMatch = (activeCategory === 'all' || card.getAttribute('data-category') === activeCategory);
        
        let searchMatch = true;
        if (searchQuery) {
          const searchTargets = card.querySelectorAll('[data-search-target="true"]');
          let text = Array.from(searchTargets).map(el => el.textContent.toLowerCase()).join(' ');
          searchMatch = text.includes(searchQuery);
        }
        
        if (segMatch && catMatch && searchMatch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      const emptyState = document.getElementById('empty-state');
      if (visibleCount === 0) {
        emptyState.style.display = 'block';
      } else {
        emptyState.style.display = 'none';
      }
    }

    // Search Listener
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        runFilters();
      });
    }

    // Segment Toggle Listener (Medical vs Organic)
    segmentBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        segmentBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeSegment = e.target.getAttribute('data-segment');
        
        // Update sidebar categories smoothly
        sidebarList.style.opacity = '0';
        setTimeout(() => {
          if (activeSegment === 'organic') {
            sidebarList.innerHTML = '<li class="cat-item nav-item active" data-category="all">All Organic Commodities</li>' + 
              ['Oil Seeds', 'Spice Crops'].map(c => '<li class="cat-item nav-item" data-category="' + c + '">' + c + '</li>').join('');
          } else if (activeSegment === 'medical') {
            sidebarList.innerHTML = '<li class="cat-item nav-item active" data-category="all">All Medical Categories</li>' + 
               MEDICAL_CATEGORIES.map(c => '<li class="cat-item nav-item" data-category="' + c + '">' + c + '</li>').join('');
          }
          
          attachCategoryListeners();
          activeCategory = 'all';
          sidebarList.style.opacity = '1';
          runFilters();
        }, 200);
      });
    });

    function attachCategoryListeners() {
      document.querySelectorAll('.cat-item').forEach(item => {
        item.addEventListener('click', (e) => {
          document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
          e.target.classList.add('active');
          activeCategory = e.target.getAttribute('data-category');
          runFilters();
        });
      });
    }

    // Init
    attachCategoryListeners();
    runFilters();
  }, 100);

  return `
    <div class="app-section bg-light catalog-page">
      <!-- Premium Hero section -->
      <section class="section catalog-hero" style="background-image: linear-gradient(135deg, rgba(10,37,95,0.9) 0%, rgba(19,70,175,0.8) 100%), url('/images/hero1.png')">
        <div class="container text-center hero-content fade-in">
          <div class="badge-premium mb-20">Global Distribution</div>
          <h1 class="text-white hero-title">Product <span class="text-secondary glow-text">Catalog</span></h1>
          <p class="text-white hero-subtitle">Browse strictly compliant medical devices and premium organic exports.</p>
        </div>
      </section>

      <section class="section catalog-main-section">
        <div class="container catalog-layout">
          
          <!-- Modern Sidebar Design -->
          <aside class="catalog-sidebar glass-premium fade-in">
            <div class="sidebar-sticky">
              <h3 class="sidebar-title">Sector</h3>
              
              <!-- Segmented Controls Box -->
              <div class="segment-pills-container">
                <button class="seg-pill active" data-segment="medical">
                  <i class="fas fa-stethoscope"></i> Medical
                </button>
                <button class="seg-pill" data-segment="organic">
                  <i class="fas fa-seedling"></i> Organic
                </button>
              </div>
              
              <h3 class="sidebar-title mt-40">Categories</h3>
              <ul class="sidebar-list transition-opacity">
                <li class="cat-item nav-item active" data-category="all">All Medical Categories</li>
                ${generateCategoryList()}
              </ul>
            </div>
          </aside>

          <!-- Core Grid & Search -->
          <main class="catalog-core">
            
            <!-- Real-time Interactive Search Tool -->
            <div class="catalog-search-bar glass-premium fade-in mb-30 shadow-sm">
              <i class="fas fa-search search-icon text-primary"></i>
              <input type="text" id="catalog-search" placeholder="Search products by name, HS code..." autocomplete="off">
            </div>

            <div class="product-grid" id="catalog-grid">
              ${generateProductCards()}
            </div>
            
            <!-- Empty State for Search Results -->
            <div id="empty-state" class="text-center mt-40" style="display: none;">
              <div class="empty-icon"><i class="fas fa-box-open"></i></div>
              <h3>No Products Found</h3>
              <p class="text-muted">Adjust your search or category filters to find what you need.</p>
            </div>
          </main>

        </div>
      </section>
    </div>

    <style>
      .bg-light { background-color: #f4f7fb; min-height: 100vh; }
      .mb-20 { margin-bottom: 20px; }
      .mb-30 { margin-bottom: 30px; }
      .mt-20 { margin-top: 20px; }
      .mt-40 { margin-top: 40px; }
      .text-primary { color: var(--primary); }
      .text-secondary { color: var(--secondary); }
      .text-white { color: white; }
      .text-muted { color: var(--text-muted); }
      .shadow-sm { box-shadow: 0 4px 15px rgba(0,0,0,0.05); }

      /* Hero Enhancements */
      .catalog-page { margin-top: -80px; }
      .catalog-hero {
        padding: 160px 0 100px;
        background-size: cover;
        background-position: center;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }
      .badge-premium {
        display: inline-block; padding: 4px 16px; border-radius: 20px;
        background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3);
        color: white; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;
      }
      .hero-title { font-size: 3.5rem; margin-bottom: 10px; font-weight: 800; }
      .glow-text { text-shadow: 0 0 15px rgba(255,219,63,0.5); }
      .hero-subtitle { font-size: 1.1rem; opacity: 0.9; max-width: 600px; margin: 0 auto; line-height: 1.6; }

      /* Layout */
      .catalog-main-section { padding: 60px 0; }
      .catalog-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        align-items: flex-start;
      }
      @media(min-width: 900px) {
        .catalog-layout { grid-template-columns: 280px 1fr; gap: 40px; }
      }

      /* Glass Premium Classes */
      .glass-premium {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        border-radius: 16px;
      }

      /* Sidebar Refinements */
      .catalog-sidebar { padding: 25px; }
      .sidebar-sticky { position: sticky; top: 100px; }
      .sidebar-title { font-size: 1rem; color: #0a255f; margin-bottom: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
      
      /* Segmented Toggles (Pills) */
      .segment-pills-container {
        display: flex;
        background: #eef2f6;
        padding: 5px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
      }
      .seg-pill {
        flex: 1; text-align: center; padding: 10px 5px; border-radius: 8px; font-weight: 600; font-size: 0.9rem;
        color: #64748b; border: none; background: transparent; cursor: pointer; transition: all 0.3s ease;
      }
      .seg-pill i { margin-right: 5px; }
      .seg-pill:hover { color: #334155; }
      .seg-pill.active { background: white; color: var(--primary); box-shadow: 0 2px 8px rgba(0,0,0,0.08); }

      /* Category Nav List */
      .transition-opacity { transition: opacity 0.2s ease; }
      .sidebar-list { list-style: none; padding: 0; margin: 0; max-height: 400px; overflow-y: auto; }
      .sidebar-list::-webkit-scrollbar { width: 4px; }
      .sidebar-list::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 4px; }
      .nav-item {
        padding: 10px 15px; margin-bottom: 4px; border-radius: 8px; color: #475569;
        font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; border-left: 3px solid transparent;
      }
      .nav-item:hover { background: #f8fafc; color: var(--primary); border-left-color: rgba(19, 70, 175, 0.3); }
      .nav-item.active { background: #eff6ff; color: var(--primary); font-weight: 700; border-left-color: var(--primary); }

      /* Search Bar */
      .catalog-search-bar { display: flex; align-items: center; padding: 0 20px; height: 60px; overflow: hidden; }
      .search-icon { font-size: 1.2rem; margin-right: 15px; opacity: 0.8; }
      #catalog-search {
        flex: 1; height: 100%; border: none; background: transparent; font-family: inherit;
        font-size: 1.05rem; color: #334155; outline: none; box-shadow: none;
      }
      #catalog-search::placeholder { color: #94a3b8; }

      /* Grid & Animation */
      .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 25px; }
      
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
      .btn-hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .btn-hover-lift:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(19, 70, 175, 0.2); }

      /* Product Cards Refined */
      .product-card { display: flex; flex-direction: column; overflow: hidden; transition: all 0.3s ease; }
      .product-card:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(0,0,0,0.08); border-color: rgba(19, 70, 175, 0.2); }
      
      .card-image-wrapper {
        position: relative; height: 220px; background: rgba(255,255,255,0.4); display: flex;
        align-items: center; justify-content: center; padding: 20px; border-bottom: 1px solid rgba(0,0,0,0.03);
      }
      .contained-img { max-height: 100%; max-width: 100%; object-fit: contain; transition: transform 0.4s ease; }
      .product-card:hover .contained-img { transform: scale(1.05); }
      
      .missing-img-box { display: flex; flex-direction: column; align-items: center; justify-content: center; color: #94a3b8; width: 100%; height: 100%; opacity: 0.7; }
      .img-icon { font-size: 2.5rem; margin-bottom: 5px; font-style: normal; }
      

      .card-info { padding: 30px; display: flex; flex-direction: column; flex-grow: 1; gap: 15px; }
      .card-header-main { display: flex; justify-content: space-between; align-items: center; }
      
      .mfr-badge { font-size: 0.65rem; font-weight: 800; padding: 4px 12px; border-radius: 50px; letter-spacing: 0.5px; }
      .cat-pill { font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
      
      .product-name-link { font-size: 1.3rem; font-weight: 800; color: #0f172a; margin: 0; line-height: 1.25; }
      .product-short-desc { font-size: 0.95rem; color: #64748b; line-height: 1.6; margin: 0; }

      .card-utility-bar { 
        margin-top: auto; padding-top: 20px; border-top: 1px solid #f1f5f9;
        display: flex; justify-content: space-between; align-items: center;
      }
      .hs-code-label { font-family: 'Courier New', monospace; font-size: 0.75rem; color: #cbd5e1; font-weight: 700; }
      .clean-action-link { font-size: 0.9rem; font-weight: 800; color: var(--primary); text-decoration: none; display: flex; align-items: center; gap: 8px; }
      .clean-action-link i { font-size: 0.8rem; transition: transform 0.3s; }
      .clean-action-link:hover i { transform: translateX(5px); }
      .btn-sm { padding: 8px 16px; font-size: 0.9rem; border-radius: 6px; }

      /* Empty State */
      .empty-icon { font-size: 4rem; color: #cbd5e1; margin-bottom: 15px; }
      #empty-state h3 { color: #334155; margin-bottom: 10px; }
    </style>
  `;
};

import { products, MEDICAL_CATEGORIES, ORGANIC_CATEGORIES } from '../data/products.js';

export const Products = () => {
  const generateCategoryList = () => {
    return MEDICAL_CATEGORIES.map(cat => `
      <li class="cat-item" data-category="${cat}">${cat}</li>
    `).join('');
  };

  const generateProductCards = () => {
    return products.map(product => `
      <div class="product-card glass clean-card" data-segment="${product.segment}" data-category="${product.category}">
        <div class="card-image-wrapper">
          ${product.image 
            ? `<img src="${product.image}" alt="${product.commercial_name}" class="contained-img" onerror="this.onerror=null; this.outerHTML='<div class=\\'missing-img-box\\'><i class=\\'img-icon\\'>&#128247;</i><span>Image Pending</span></div>';">` 
            : `<div class="missing-img-box"><i class="img-icon">&#128247;</i><span>Image Pending</span></div>`
          }
          
          <div class="iso-badges">
            ${product.safety.hazard_warnings ? `<span class="badge badge-hazard" title="${product.safety.hazard_warnings}">HAZARD</span>` : ''}
            ${product.safety.is_sterile ? '<span class="badge badge-sterile" title="ISO 15223-1: Sterile">STERILE</span>' : ''}
            ${product.safety.single_use ? '<span class="badge badge-single" title="ISO 15223-1: Single Use">SINGLE USE</span>' : ''}
            ${product.safety.fragile ? '<span class="badge badge-fragile" title="ISO 15223-1: Fragile">FRAGILE</span>' : ''}
          </div>
        </div>

        <div class="card-info">
          <div class="card-header">
            <span class="segment-tag ${product.segment}-tag">${product.segment === 'medical' ? 'Medical' : 'Organic'}</span>
            <span class="cat-tag">${product.category}</span>
          </div>
          <h3 class="product-title">${product.commercial_name}</h3>
          <p class="product-desc">${product.shortDesc}</p>
          
          <div class="action-footer mt-20">
            <span class="hs-tag">HS ${product.hs_code}</span>
            <a href="#/product-details?id=${product.id}" class="btn btn-primary btn-sm">Details &rarr;</a>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Attach filtering logic in a script tag that acts when component renders
  // (Note: in a real React/Vue app this is state, but for vanilla we use pure DOM manipulation)
  setTimeout(() => {
    const segmentBtns = document.querySelectorAll('.segment-btn');
    const catItems = document.querySelectorAll('.cat-item');
    const cards = document.querySelectorAll('.product-card');
    const sidebarList = document.querySelector('.sidebar-list');

    let activeSegment = 'medical';
    let activeCategory = 'all';

    function runFilters() {
      cards.forEach(card => {
        const segMatch = (activeSegment === 'all' || card.getAttribute('data-segment') === activeSegment);
        const catMatch = (activeCategory === 'all' || card.getAttribute('data-category') === activeCategory);
        
        if (segMatch && catMatch) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    segmentBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        segmentBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeSegment = e.target.getAttribute('data-segment');
        
        // Update sidebar list based on segment
        if (activeSegment === 'organic') {
          sidebarList.innerHTML = '<li class="cat-item active" data-category="all">All Organic</li>' + 
            ['Oil Seeds', 'Spice Crops'].map(c => '<li class="cat-item" data-category="' + c + '">' + c + '</li>').join('');
        } else if (activeSegment === 'medical') {
          sidebarList.innerHTML = '<li class="cat-item active" data-category="all">All Medical</li>' + 
             MEDICAL_CATEGORIES.map(c => '<li class="cat-item" data-category="' + c + '">' + c + '</li>').join('');
        } else {
          sidebarList.innerHTML = '<li class="cat-item active" data-category="all">All Categories</li>';
        }
        
        activeCategory = 'all';
        attachCategoryListeners();
        runFilters();
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

    // Initialize
    attachCategoryListeners();
    runFilters();
  }, 100);

  return `
    <div class="app-section bg-light">
      <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.85), rgba(19,70,175,0.9)), url('/images/hero1.png')">
        <div class="container text-center">
          <h1 class="text-white">Product Catalog</h1>
          <p class="text-white" style="max-width: 600px; margin: 0 auto;">Explore our comprehensive Prevest Dental catalog and premium organic exports.</p>
        </div>
      </section>

      <section class="section py-40">
        <div class="container catalog-layout">
          
          <!-- Sidebar Navigation -->
          <aside class="catalog-sidebar">
            <h3 class="sidebar-title">Segments</h3>
            <div class="segment-toggles">
              <button class="segment-btn active" data-segment="medical">Medical Import</button>
              <button class="segment-btn" data-segment="organic">Organic Export</button>
            </div>
            
            <h3 class="sidebar-title mt-30">Categories</h3>
            <ul class="sidebar-list">
              <li class="cat-item active" data-category="all">All Medical Categories</li>
              ${generateCategoryList()}
            </ul>
          </aside>

          <!-- Product Grid -->
          <main class="catalog-main">
            <div class="product-grid">
              ${generateProductCards()}
            </div>
          </main>

        </div>
      </section>
    </div>

    <style>
      .bg-light { background-color: #f8fafc; min-height: 100vh; }
      .py-40 { padding-top: 40px; padding-bottom: 60px; }
      
      .catalog-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        align-items: flex-start;
      }
      @media(min-width: 900px) {
        .catalog-layout { grid-template-columns: 280px 1fr; gap: 40px; }
      }

      /* Sidebar Styles */
      .catalog-sidebar {
        background: white;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        position: sticky;
        top: 100px;
      }
      .sidebar-title {
        font-size: 1.1rem;
        color: #0f172a;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 2px solid #f1f5f9;
      }
      .segment-toggles {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .segment-btn {
        background: transparent;
        border: 1px solid #cbd5e1;
        padding: 10px 15px;
        border-radius: 8px;
        text-align: left;
        font-weight: 600;
        color: #475569;
        cursor: pointer;
        transition: all 0.2s;
      }
      .segment-btn:hover { background: #f8fafc; }
      .segment-btn.active {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
      }
      
      .sidebar-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-height: 400px;
        overflow-y: auto;
      }
      .sidebar-list::-webkit-scrollbar { width: 4px; }
      .sidebar-list::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 4px; }
      .cat-item {
        padding: 8px 12px;
        margin-bottom: 2px;
        border-radius: 6px;
        color: #64748b;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.2s;
      }
      .cat-item:hover { background: #f1f5f9; color: var(--primary); }
      .cat-item.active {
        background: #e0e7ff;
        color: var(--primary);
        font-weight: 600;
      }

      /* Grid Styles */
      .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 25px;
      }

      /* Card Redesign */
      .clean-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: flex;
        flex-direction: column;
      }
      .clean-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }
      .card-image-wrapper {
        position: relative;
        height: 200px;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border-bottom: 1px solid #f1f5f9;
      }
      .contained-img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }
      
      /* Missing Image Placeholder Design */
      .missing-img-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #94a3b8;
        background: #f8fafc;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px dashed #cbd5e1;
      }
      .missing-img-box .img-icon {
        font-size: 2.5rem;
        margin-bottom: 10px;
        opacity: 0.5;
        font-style: normal;
      }
      .missing-img-box span {
        font-size: 0.85rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
      
      .iso-badges {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-end;
      }
      .badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.65rem;
        font-weight: 800;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .badge-hazard { background-color: #dc2626; }
      .badge-sterile { background-color: #16a34a; }
      .badge-single { background-color: #2563eb; }
      .badge-fragile { background-color: #ea580c; }

      .card-info {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }
      .segment-tag {
        padding: 3px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
      }
      .medical-tag { background: #e0e7ff; color: #3730a3; }
      .organic-tag { background: #fef3c7; color: #b45309; }
      .cat-tag {
        color: #64748b;
        font-size: 0.75rem;
        font-weight: 600;
      }
      
      .product-title {
        font-size: 1.1rem;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 8px 0;
        line-height: 1.3;
      }
      .product-desc {
        font-size: 0.85rem;
        color: #64748b;
        margin: 0;
        flex-grow: 1;
      }
      
      .action-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #f1f5f9;
        padding-top: 15px;
      }
      .hs-tag {
        font-family: monospace;
        color: #94a3b8;
        font-size: 0.8rem;
      }
      .btn-sm { padding: 8px 16px; font-size: 0.85rem; border-radius: 6px; }
      .mt-20 { margin-top: 20px; }
      .mt-30 { margin-top: 30px; }
    </style>
  `;
};

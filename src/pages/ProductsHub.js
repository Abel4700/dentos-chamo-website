import { products } from '../data/products.js';

export const ProductsHub = (queryParams = {}) => {
  const initialCompany = queryParams.company || 'all';
  const initialCategory = queryParams.category || 'all';

  const generateProductCards = () => {
    return products.map((product, index) => {
      const delay = (index % 12) * 0.05;
      
      return `
      <div class="product-card glass-premium fade-in-up" 
           style="animation-delay: ${delay}s;" 
           data-company="${product.company}" 
           data-category="${product.category}"
           data-segment="${product.segment}">
        
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
          <div class="card-header">
             <span class="segment-tag glow-tag" style="background: var(--primary); color: white; border: none;">${product.company.toUpperCase()}</span>
            <span class="cat-tag">${product.category}</span>
          </div>
          <h3 class="product-title" data-search-target="true">${product.commercial_name}</h3>
          <p class="product-desc">${product.shortDesc}</p>
          
          <div class="action-footer mt-20">
            <span class="hs-tag" data-search-target="true">HS ${product.hs_code || 'N/A'}</span>
            <a href="#/product-details?id=${product.id}" class="btn btn-primary btn-sm btn-hover-lift">View Details &rarr;</a>
          </div>
        </div>
      </div>
      `;
    }).join('');
  };

  setTimeout(() => {
    const searchInput = document.getElementById('catalog-search');
    const cards = document.querySelectorAll('.product-card');
    
    // UI Toggles
    const companyPills = document.querySelectorAll('.filter-pill');
    const categoryPills = document.querySelectorAll('.cat-pill');

    let activeCompany = initialCompany;
    let activeCategory = initialCategory;
    let searchQuery = '';

    // Initialize UI active states based on URL properties 
    companyPills.forEach(btn => {
      if(btn.dataset.value === activeCompany) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    categoryPills.forEach(btn => {
      if(btn.dataset.value === activeCategory) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    function runFilters() {
      let visibleCount = 0;
      cards.forEach(card => {
        const companyMatch = (activeCompany === 'all' || card.getAttribute('data-company') === activeCompany);
        
        const _cardCat = (card.getAttribute('data-category') || 'none').toLowerCase();
        const _cardSeg = (card.getAttribute('data-segment') || 'none').toLowerCase();
        
        let catMatch = false;
        if (activeCategory === 'all') {
            catMatch = true;
        } else if (activeCategory === 'medical' && _cardSeg === 'medical') {
            catMatch = true;
        } else if (activeCategory === 'agriculture' && (_cardCat.includes('agriculture') || _cardSeg === 'organic')) {
            catMatch = true;
        } else if (_cardCat.includes(activeCategory.toLowerCase())) {
            catMatch = true;
        }
        
        let searchMatch = true;
        if (searchQuery) {
          const searchTargets = card.querySelectorAll('[data-search-target="true"]');
          let text = Array.from(searchTargets).map(el => el.textContent.toLowerCase()).join(' ');
          searchMatch = text.includes(searchQuery);
        }
        
        if (companyMatch && catMatch && searchMatch) {
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

      // Update URL parameters dynamically so sharing the URL saves exactly what the user filtered
      const newUrl = new URL(window.location);
      if(activeCompany !== 'all') newUrl.searchParams.set('company', activeCompany);
      else newUrl.searchParams.delete('company');
      
      if(activeCategory !== 'all') newUrl.searchParams.set('category', activeCategory);
      else newUrl.searchParams.delete('category');
      
      const hashSplit = window.location.hash.split('?');
      window.history.replaceState(null, '', `${newUrl.pathname}${newUrl.search}${hashSplit[0]}?${newUrl.searchParams.toString()}`);
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        runFilters();
      });
    }

    // Attach click handlers to Pills
    companyPills.forEach(btn => {
      btn.addEventListener('click', (e) => {
        companyPills.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        activeCompany = e.target.dataset.value;
        runFilters();
      });
    });

    categoryPills.forEach(btn => {
        btn.addEventListener('click', (e) => {
          categoryPills.forEach(b => b.classList.remove('active'));
          // In case they click an icon inside the button, grab closest button
          const targetBtn = e.target.closest('button');
          targetBtn.classList.add('active');
          activeCategory = targetBtn.dataset.value;
          runFilters();
        });
    });

    // Fire immediately to govern starting load bounds
    runFilters();
  }, 50);

  return `
    <style>
      .filter-pill, .cat-pill {
        padding: 10px 24px;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: #64748b;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .filter-pill:hover, .cat-pill:hover {
        color: var(--primary);
        background: rgba(14, 165, 233, 0.1);
      }
      .filter-pill.active {
        background: #0f172a;
        color: #ffffff;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .cat-pill.active {
        background: var(--primary);
        color: #ffffff;
        box-shadow: 0 4px 10px rgba(14, 165, 233, 0.4);
      }
      #catalog-search:focus {
        border-color: var(--primary) !important;
        background: #ffffff !important;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
      }
    </style>

    <div class="app-section bg-light" style="padding-top: 100px;">
      
      <!-- Hero Intro -->
      <div class="container text-center fade-in" style="margin-bottom: 50px;">
        <h1 class="tech-title" style="font-size: 3.8rem; margin-bottom: 20px;">Global <span style="color: var(--primary);">Products Hub</span></h1>
        <p style="font-size: 1.25rem; color: #475569; max-width: 900px; margin: 0 auto; line-height: 1.8;">
          The Products & Services section provides a comprehensive catalogue of all products and solutions offered across Dentose Chamo Trading PLC and its associated business units. Users can explore offerings by category, business unit, or specific product needs.
        </p>
      </div>

      <!-- Advanced Redesigned Filter Matrix -->
      <div class="container">
        <div class="glass-premium fade-in-up" style="position: sticky; top: 90px; z-index: 100; margin-bottom: 50px; padding: 25px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.8); display: flex; flex-direction: column; gap: 20px;">
          
          <!-- Top Row: Search & Company Parameters -->
          <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap; justify-content: space-between;">
            <div style="flex: 1; min-width: 300px; position: relative;">
              <i class="fas fa-search" style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 1.1rem;"></i>
              <input type="text" id="catalog-search" placeholder="Search products, models, or HS codes..." style="width: 100%; padding: 15px 20px 15px 50px; border: 1px solid rgba(226, 232, 240, 1); border-radius: 12px; outline: none; background: rgba(255,255,255,0.7); backdrop-filter: blur(5px); font-size: 1.05rem; color: #0f172a; transition: all 0.3s ease;">
            </div>
            
            <div class="filter-group" style="display: flex; gap: 5px; background: rgba(241, 245, 249, 0.8); padding: 5px; border-radius: 10px; border: 1px solid rgba(226, 232, 240, 0.8);">
              <button class="filter-pill active" data-value="all">All Group</button>
              <button class="filter-pill" data-value="dentose">Dentose Chamo</button>
              <button class="filter-pill" data-value="oradent">Ora-Dent</button>
              <button class="filter-pill" data-value="akedent">Akedent</button>
            </div>
          </div>

          <hr style="border: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(226,232,240,1), transparent); margin: 5px 0;">

          <!-- Bottom Row: Category Scope -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap;" id="category-filters">
            <span style="font-size: 0.9rem; font-weight: 700; color: #64748b; letter-spacing: 0.08em; text-transform: uppercase;">Divisions:</span>
            <button class="cat-pill active" data-value="all"><i class="fas fa-globe"></i> Global</button>
            <button class="cat-pill" data-value="medical"><i class="fas fa-stethoscope"></i> Medical</button>
            <button class="cat-pill" data-value="agriculture"><i class="fas fa-seedling"></i> Agriculture</button>
            <button class="cat-pill" data-value="cosmetics"><i class="fas fa-magic"></i> Cosmetics</button>
            <button class="cat-pill" data-value="pharma"><i class="fas fa-pills"></i> Pharma</button>
          </div>

        </div>
      </div>

      <!-- Live Catalogue Grid -->
      <section class="section" style="padding-top: 0;">
        <div class="container">
          <div class="product-grid" id="visible-grid">
            ${generateProductCards()}
          </div>
          
          <div id="empty-state" class="glass-premium" style="display: none; padding: 60px 20px; text-align: center; max-width: 600px; margin: 40px auto;">
            <i class="fas fa-boxes" style="font-size: 3.5rem; color: #cbd5e1; margin-bottom: 20px;"></i>
            <h3 style="color: #475569; margin-bottom: 10px; font-size: 1.8rem;">No exact matches found.</h3>
            <p style="color: #94a3b8; font-size: 1.1rem;">Try adjusting the intelligent filters above or expanding your search term.</p>
          </div>
        </div>
      </section>

    </div>
  `;
};

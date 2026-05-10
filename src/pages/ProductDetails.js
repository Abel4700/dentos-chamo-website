import { updateSEO, injectProductSchema, createSlug } from '../lib/seo.js';
import { sanityClient } from '../lib/sanity.js';

export const ProductDetails = () => {
  return `
    <div id="details-container" class="app-section bg-light page-offset" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center;">
        <i class="fas fa-circle-notch fa-spin" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
        <h2 style="color: var(--text-main);">Loading Product Details...</h2>
      </div>
    </div>
  `;
};

ProductDetails.mount = async () => {
  const container = document.getElementById('details-container');
  if (!container) return;

  const hash = window.location.hash;
  const nameMatch = hash.match(/\?name=([^&]*)/);
  const productNameSlug = nameMatch ? nameMatch[1] : null;

  try {
    const allProducts = await sanityClient.fetch(`*[_type == "product" && isActive == true && manufacturer->isActive == true] { _id, productName, productId }`);
    const matchingProduct = allProducts.find(p => 
      createSlug(p.productName || '') === productNameSlug || 
      p.productId === productNameSlug
    );

    if (!matchingProduct) {
      container.innerHTML = `<div class="container text-center" style="padding: 150px 0;"><h2>Product Not Found</h2><p><a href="#/products" class="btn btn-primary">Return to Catalog</a></p></div>`;
      return;
    }

    const query = `*[_id == $id][0] {
      productName,
      brand,
      "mfrSlug": manufacturer->slug.current,
      "category": category->title,
      subcategory,
      shortDescription,
      fullDescription,
      intendedUse,
      keyFeatures,
      benefits,
      availability,
      priceType,
      packSize,
      materialComposition,
      sterileStatus,
      shelfLife,
      storageConditions,
      manufacturerName,
      countryOfOrigin,
      certification,
      regulatoryInfo,
      "image": mainImage.asset->url,
      "datasheet": datasheetPdf.asset->url,
      "manual": instructionManual.asset->url,
      specificationGroups,
      "related": relatedProducts[]->{ productName, "image": mainImage.asset->url }
    }`;

    const product = await sanityClient.fetch(query, { id: matchingProduct._id });
    if (!product) throw new Error('Data unavailable');

    updateSEO({ title: product.productName, description: product.shortDescription, image: product.image });

    const theme = (product.mfrSlug === 'oradox' || product.mfrSlug === 'topzir') 
      ? { primary: '#40E0D0', secondary: '#2cb1a5' }
      : { primary: '#1520A6', secondary: '#0e1570' };

    // Section Content Checks
    const hasOverview = !!(product.fullDescription || product.intendedUse || product.keyFeatures || product.benefits);
    const hasSpecs = !!(product.packSize || product.materialComposition || product.sterileStatus || product.shelfLife || product.storageConditions || (product.specificationGroups && product.specificationGroups.length > 0));
    const hasCompliance = !!(product.manufacturerName || product.countryOfOrigin || product.certification || product.regulatoryInfo);
    const hasSupport = !!(product.datasheet || product.manual);

    const tabs = [
      { id: 'overview', label: 'Overview', active: hasOverview },
      { id: 'specs', label: 'Technical Specifications', active: !hasOverview && hasSpecs },
      { id: 'compliance', label: 'Regulatory & Compliance', active: !hasOverview && !hasSpecs && hasCompliance },
      { id: 'support', label: 'Downloads / Support', active: !hasOverview && !hasSpecs && !hasCompliance && hasSupport }
    ].filter(t => {
      if (t.id === 'overview') return hasOverview;
      if (t.id === 'specs') return hasSpecs;
      if (t.id === 'compliance') return hasCompliance;
      if (t.id === 'support') return hasSupport;
      return false;
    });

    // Set first available tab as active
    if (tabs.length > 0) tabs[0].active = true;

    container.outerHTML = `
      <style>
        .detail-view { background: #f8fafc; padding: 180px 0 100px; min-height: 100vh; }
        .hero-section { display: grid; grid-template-columns: 1fr; gap: 50px; margin-bottom: 60px; align-items: start; }
        @media(min-width: 994px) { .hero-section { grid-template-columns: 1fr 1.2fr; } }
        
        .img-stage { background: white; border-radius: 32px; padding: 50px; height: 500px; display: flex; align-items: center; justify-content: center; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
        .img-stage img { max-width: 100%; max-height: 100%; object-fit: contain; }
        
        .hero-info { display: flex; flex-direction: column; gap: 25px; }
        .brand-label { font-weight: 800; font-size: 0.8rem; color: ${theme.primary}; text-transform: uppercase; letter-spacing: 2px; }
        .title-main { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1; letter-spacing: -3px; color: #0f172a; margin: 0; }
        .cat-row { display: flex; gap: 15px; align-items: center; color: #64748b; font-weight: 700; font-size: 1rem; }
        .availability { display: flex; align-items: center; gap: 10px; font-weight: 800; color: #10b981; }
        
        .tabs-strip { display: flex; border-bottom: 2px solid #e2e8f0; margin-top: 40px; gap: 10px; overflow-x: auto; }
        .tab-trigger { padding: 18px 25px; border: none; background: none; font-weight: 800; color: #94a3b8; cursor: pointer; border-bottom: 4px solid transparent; transition: 0.3s; white-space: nowrap; font-size: 0.9rem; }
        .tab-trigger.active { color: ${theme.primary}; border-color: ${theme.primary}; }
        
        .panel { display: none; padding: 50px 0; animation: slideUp 0.4s ease; }
        .panel.active { display: block; }
        
        .info-card { background: white; padding: 30px; border-radius: 20px; border: 1px solid #e2e8f0; }
        .info-label { display: block; color: #94a3b8; font-weight: 800; font-size: 0.75rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .info-val { font-size: 1rem; color: #1e293b; font-weight: 600; line-height: 1.6; margin: 0; }
        
        .spec-row { padding: 18px 0; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .spec-lbl { color: #64748b; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; }
        .spec-v { color: #0f172a; font-weight: 700; text-align: right; }
        
        .dl-box { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .dl-item { display: flex; align-items: center; gap: 20px; background: white; padding: 25px; border-radius: 20px; border: 1px solid #e2e8f0; text-decoration: none; transition: 0.3s; }
        .dl-item:hover { transform: translateY(-5px); border-color: ${theme.primary}; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .dl-item i { font-size: 2rem; color: ${theme.primary}; }
        
        @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
      </style>

      <div class="detail-view">
        <div class="container">
          <a href="#/products" style="text-decoration:none; color:#64748b; font-weight:800; display:inline-flex; align-items:center; gap:10px; margin-bottom:50px;">
            <i class="fas fa-arrow-left"></i> RETURN TO CATALOG
          </a>

          <div class="hero-section">
            <div class="img-stage">
              ${product.image ? `<img src="${product.image}" alt="${product.productName}">` : '<div style="color:#cbd5e1; font-weight:800; text-align:center;"><i class="fas fa-image" style="font-size:3rem; margin-bottom:10px;"></i><br>VISUAL PENDING</div>'}
            </div>
            
            <div class="hero-info">
              <span class="brand-label">${(product.brand || product.mfrSlug || 'Brand').toUpperCase()}</span>
              <h1 class="title-main">${product.productName}</h1>
              
              <div class="cat-row">
                <span>${product.category}</span>
                ${product.subcategory ? `<span style="opacity:0.3;">/</span><span>${product.subcategory}</span>` : ''}
              </div>
              
              ${product.shortDescription ? `<p style="font-size: 1.2rem; color: #475569; line-height: 1.6; margin: 0;">${product.shortDescription}</p>` : ''}
              
              <div class="availability">
                <i class="fas fa-check-circle"></i> ${product.availability || 'Available on Request'}
              </div>

              <div style="margin-top: 10px; display: flex; gap: 20px;">
                <a href="#/contact" class="btn" style="background:${theme.primary}; color:white; text-decoration:none; border:none; padding:12px 25px; border-radius:12px; font-weight:800; font-size:0.9rem; letter-spacing:0.5px; transition:0.3s; display:inline-block;">SUBMIT INQUIRY</a>
              </div>
            </div>
          </div>

          ${tabs.length > 0 ? `
            <nav class="tabs-strip">
              ${tabs.map(t => `<button class="tab-trigger ${t.active ? 'active' : ''}" data-target="${t.id}">${t.label.toUpperCase()}</button>`).join('')}
            </nav>

            <div class="tabs-content">
              <!-- OVERVIEW -->
              ${hasOverview ? `
                <div id="overview" class="panel ${tabs.find(t => t.id === 'overview')?.active ? 'active' : ''}">
                  ${product.fullDescription ? `<p style="font-size: 1.25rem; color: #1e293b; line-height: 1.8; margin-bottom: 50px;">${product.fullDescription}</p>` : ''}
                  
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                    ${product.intendedUse ? `<div class="info-card"><span class="info-label">Intended Use</span><p class="info-val">${product.intendedUse}</p></div>` : ''}
                    ${product.keyFeatures ? `<div class="info-card"><span class="info-label">Key Features</span><p class="info-val">${product.keyFeatures}</p></div>` : ''}
                    ${product.benefits ? `<div class="info-card"><span class="info-label">Benefits</span><p class="info-val">${product.benefits}</p></div>` : ''}
                  </div>
                </div>
              ` : ''}

              <!-- SPECS -->
              ${hasSpecs ? `
                <div id="specs" class="panel ${tabs.find(t => t.id === 'specs')?.active ? 'active' : ''}">
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 80px;">
                    <div>
                      <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 30px; color: #0f172a;">Core Specifications</h3>
                      ${[
                        { label: 'Pack Size', v: product.packSize },
                        { label: 'Material Composition', v: product.materialComposition },
                        { label: 'Sterile Status', v: product.sterileStatus },
                        { label: 'Shelf Life', v: product.shelfLife },
                        { label: 'Storage Conditions', v: product.storageConditions }
                      ].filter(f => f.v).map(f => `
                        <div class="spec-row">
                          <span class="spec-lbl">${f.label}</span>
                          <span class="spec-v">${f.v}</span>
                        </div>
                      `).join('')}
                    </div>

                    ${product.specificationGroups ? product.specificationGroups.map(g => `
                      <div>
                        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 30px; color: #0f172a;">${g.sectionTitle}</h3>
                        ${g.items ? g.items.map(i => `
                          <div class="spec-row">
                            <span class="spec-lbl">${i.label}</span>
                            <span class="spec-v">${i.value}</span>
                          </div>
                        `).join('') : ''}
                      </div>
                    `).join('') : ''}
                  </div>
                </div>
              ` : ''}

              <!-- COMPLIANCE -->
              ${hasCompliance ? `
                <div id="compliance" class="panel ${tabs.find(t => t.id === 'compliance')?.active ? 'active' : ''}">
                  <div style="max-width: 800px;">
                    ${[
                      { label: 'Manufacturer', v: product.manufacturerName },
                      { label: 'Country of Origin', v: product.countryOfOrigin },
                      { label: 'Certification', v: product.certification },
                      { label: 'Regulatory Info', v: product.regulatoryInfo }
                    ].filter(f => f.v).map(f => `
                      <div class="spec-row">
                        <span class="spec-lbl">${f.label}</span>
                        <span class="spec-v">${f.v}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- SUPPORT -->
              ${hasSupport ? `
                <div id="support" class="panel ${tabs.find(t => t.id === 'support')?.active ? 'active' : ''}">
                  <div class="dl-box">
                    ${product.datasheet ? `
                      <a href="${product.datasheet}" target="_blank" class="dl-item">
                        <i class="fas fa-file-medical"></i>
                        <div><strong style="display:block; font-size:1.1rem;">Technical Datasheet</strong><span style="font-size:0.85rem; color:#64748b;">Download PDF Specification</span></div>
                      </a>
                    ` : ''}
                    ${product.manual ? `
                      <a href="${product.manual}" target="_blank" class="dl-item">
                        <i class="fas fa-book-open"></i>
                        <div><strong style="display:block; font-size:1.1rem;">Instruction Manual</strong><span style="font-size:0.85rem; color:#64748b;">Electronic Instructions for Use</span></div>
                      </a>
                    ` : ''}
                  </div>
                </div>
              ` : ''}
            </div>
          ` : ''}

          <!-- RELATED -->
          ${product.related && product.related.length > 0 ? `
            <div style="margin-top: 100px;">
              <h2 style="font-size: 1.8rem; font-weight: 900; margin-bottom: 40px; letter-spacing: -1px;">Related Products</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 30px;">
                ${product.related.map(r => `
                  <a href="#/product-details?name=${createSlug(r.productName)}" style="text-decoration:none; color:inherit;">
                    <div class="info-card" style="padding: 20px; transition:0.3s; cursor:pointer;" onmouseover="this.style.borderColor='${theme.primary}'" onmouseout="this.style.borderColor='#e2e8f0'">
                      <div style="height:180px; display:flex; align-items:center; justify-content:center; margin-bottom:15px;">
                        ${r.image ? `<img src="${r.image}" style="max-width:100%; max-height:100%; object-fit:contain;">` : '<i class="fas fa-image" style="font-size:2rem; color:#e2e8f0;"></i>'}
                      </div>
                      <h4 style="margin:0; font-size:1rem; font-weight:800;">${r.productName}</h4>
                    </div>
                  </a>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // TAB LOGIC
    const btns = document.querySelectorAll('.tab-trigger');
    const pnl = document.querySelectorAll('.panel');
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.classList.remove('active'));
      pnl.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.getElementById(b.dataset.target).classList.add('active');
    }));

  } catch (e) {
    container.innerHTML = `<div class="container text-center" style="padding:150px 0;"><h2>Error: ${e.message}</h2><p><a href="#/products" class="btn btn-primary">Back to Catalog</a></p></div>`;
  }
};

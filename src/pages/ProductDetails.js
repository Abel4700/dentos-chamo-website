import { products } from '../data/products.js';

export const ProductDetails = () => {
  const hash = window.location.hash;
  const idMatch = hash.match(/\?id=([^&]*)/);
  const productId = idMatch ? idMatch[1] : null;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return `
      <div class="app-section bg-light">
        <section class="section">
          <div class="container text-center" style="padding: 100px 0;">
            <h2 style="color: #64748b;">Product Not Found</h2>
            <p style="color: #94a3b8; margin-top: 10px;">The requested product could not be located. <br><a href="#/products" style="color: var(--primary); text-decoration: underline;">Return to Catalog</a></p>
          </div>
        </section>
      </div>
    `;
  }

  const badges = [];
  if (product.safety.hazard_warnings) badges.push(`<span class="badge badge-hazard" title="${product.safety.hazard_warnings}">HAZARD</span>`);
  if (product.safety.is_sterile) badges.push('<span class="badge badge-sterile">STERILE</span>');
  if (product.safety.single_use) badges.push('<span class="badge badge-single">SINGLE USE</span>');
  if (product.safety.fragile) badges.push('<span class="badge badge-fragile">FRAGILE</span>');
  if (product.safety.temperature_limit) badges.push(`<span class="badge badge-temp">MAX ${product.safety.temperature_limit}°C</span>`);

  return `
    <div class="app-section bg-light py-40">
      <div class="container">
        <a href="#/products" class="back-link">&larr; Back to Catalog</a>
        
        <div class="detail-grid mt-20">
          
          <!-- Image and Visuals -->
          <div class="detail-visuals">
            <div class="image-presentation">
              ${product.image ? `<img src="${product.image}" alt="${product.commercial_name}" class="detail-img">` : '<div class="no-img">No Image Available</div>'}
              <div class="iso-badges">
                ${badges.join('')}
              </div>
            </div>
            
            <a href="${product.safety.eIFU_url}" target="_blank" class="btn btn-outline-primary btn-full mt-20">
               Document Center: Download eIFU
            </a>
          </div>
          
          <!-- Product Information -->
          <div class="detail-content">
            <div class="header-band">
              <span class="segment-tag ${product.segment}-tag">${product.segment === 'medical' ? 'Medical Import' : 'Organic Export'}</span>
              <span class="hs-tag">HS ${product.hs_code}</span>
            </div>
            
            <h1 class="main-title">${product.commercial_name}</h1>
            <p class="ref-subtitle"><strong>Model / Reference:</strong> ${product.model_number} &nbsp;|&nbsp; <strong>Category:</strong> ${product.category}</p>
            <p class="udi-block"><strong>UDI:</strong> <span class="mono-code">${product.udi}</span></p>

            ${product.safety.hazard_warnings ? `
              <div class="hazard-alert mt-20">
                <strong>⚠️ Hazard Warning:</strong> ${product.safety.hazard_warnings}
              </div>
            ` : ''}
            
            <div class="info-group mt-30">
              <h4>Intended Use (ISO 20417)</h4>
              <p>${product.intended_use}</p>
            </div>
            
            <div class="info-group mt-20">
              <h4>Technical Description</h4>
              <p>${product.details}</p>
            </div>

            <div class="grid-card-row mt-30">
              <!-- Traceability -->
              <div class="info-card">
                <h4>Traceability (ISO 13485)</h4>
                <ul>
                  <li><span>Lot Number:</span> <strong>${product.traceability.lot_number}</strong></li>
                  <li><span>Manufactured:</span> <strong>${product.traceability.date_of_manufacture}</strong></li>
                  <li><span>Expiry:</span> <strong>${product.traceability.expiry_date}</strong></li>
                </ul>
              </div>

              <!-- Manufacturer -->
              <div class="info-card">
                <h4>Manufacturer Data</h4>
                <p><strong>${product.manufacturer_details.name}</strong></p>
                <p class="muted-text">${product.manufacturer_details.address}<br>${product.manufacturer_details.country}</p>
              </div>
            </div>

            <div class="cta-row mt-40">
              <button class="btn btn-primary btn-lg">Request Tender Quote</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <style>
      .bg-light { background-color: #f8fafc; min-height: 100vh; }
      .py-40 { padding-top: 40px; padding-bottom: 60px; }
      .back-link {
        color: #64748b;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: color 0.2s;
      }
      .back-link:hover { color: var(--primary); }
      
      .detail-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 40px;
        align-items: flex-start;
      }
      @media(min-width: 900px) {
        .detail-grid { grid-template-columns: 400px 1fr; }
      }

      /* Visuals Box */
      .image-presentation {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 30px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      }
      .detail-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      .no-img { color: #94a3b8; }
      .iso-badges {
        position: absolute;
        top: 15px;
        right: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-end;
      }
      
      /* Badges */
      .badge {
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 800;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .badge-sterile { background-color: #16a34a; }
      .badge-fragile { background-color: #ea580c; }
      .badge-single { background-color: #2563eb; }
      .badge-temp { background-color: #0891b2; }
      .badge-hazard { background-color: #dc2626; }

      /* Buttons */
      .btn-full { width: 100%; text-align: center; display: block; padding: 12px 0; }
      .btn-outline-primary {
        background: transparent;
        color: var(--primary);
        border: 2px solid var(--primary);
        font-weight: 600;
      }
      .btn-outline-primary:hover {
        background: var(--primary);
        color: white;
      }
      .btn-lg { padding: 14px 32px; font-size: 1.1rem; }

      /* Content Area */
      .detail-content {
        background: #ffffff;
        border-radius: 12px;
        padding: 40px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      }
      .header-band {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #f1f5f9;
      }
      .segment-tag {
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
      }
      .medical-tag { background: #e0e7ff; color: #3730a3; }
      .organic-tag { background: #fef3c7; color: #b45309; }
      .hs-tag { color: #64748b; font-family: monospace; font-size: 0.9rem; font-weight: 600; }
      
      .main-title {
        font-size: 2rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0 0 10px 0;
        line-height: 1.2;
      }
      .ref-subtitle { color: #475569; font-size: 1rem; margin-bottom: 5px; }
      .udi-block { margin-top: 5px; margin-bottom: 20px; color: #334155; }
      .mono-code {
        font-family: 'Courier New', Courier, monospace;
        background: #f1f5f9;
        padding: 3px 8px;
        border-radius: 4px;
        border: 1px solid #cbd5e1;
        font-weight: 600;
        letter-spacing: 1px;
      }

      .hazard-alert {
        background: #fef2f2;
        border-left: 4px solid #dc2626;
        padding: 12px 16px;
        color: #991b1b;
        border-radius: 0 4px 4px 0;
        font-size: 0.95rem;
      }

      .info-group h4 {
        font-size: 1.1rem;
        color: var(--primary);
        margin-bottom: 8px;
        font-weight: 700;
      }
      .info-group p { color: #334155; line-height: 1.6; }

      .grid-card-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
      }
      @media(min-width: 600px) {
        .grid-card-row { grid-template-columns: 1fr 1fr; }
      }
      .info-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 20px;
      }
      .info-card h4 { margin-top: 0; margin-bottom: 12px; color: #0f172a; font-size: 1rem; border-bottom: 1px solid #cbd5e1; padding-bottom: 8px; }
      .info-card ul { list-style: none; padding: 0; margin: 0; }
      .info-card li { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.9rem; color: #475569; }
      .info-card li strong { color: #0f172a; }
      .muted-text { color: #64748b; font-size: 0.85rem; margin-top: 5px; line-height: 1.5; }

      .mt-20 { margin-top: 20px; }
      .mt-30 { margin-top: 30px; }
      .mt-40 { margin-top: 40px; }
    </style>
  `;
};


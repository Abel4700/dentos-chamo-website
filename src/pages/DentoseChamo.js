export const DentoseChamo = () => `
  <div class="app-section bg-light" style="padding-top: 100px; min-height: 100vh;">
    <!-- Premium Hero -->
    <section class="section" style="background-image: linear-gradient(135deg, rgba(19, 70, 175, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%); padding: 120px 0; margin-top: -100px;">
      <div class="container text-center fade-in">
        <h1 style="font-size: 3.5rem; color: #ffffff; margin-bottom: 25px;">Dentose Chamo Trading PLC</h1>
        <p style="font-size: 1.25rem; color: #cbd5e1; max-width: 900px; margin: 0 auto; line-height: 1.8;">
          Dentose Chamo Trading PLC is actively engaged in the <strong>importing, marketing, and distribution</strong> of world-class medical clinical equipment, laboratory reagents, and healthcare machineries. As a leading medical center business in Ethiopia, we focus on expanding global healthcare innovation into the regional East African market.
        </p>
      </div>
    </section>

    <!-- Business Divisions -->
    <section class="section" style="padding: 80px 0; background: var(--bg-light);">
      <div class="container">
        <h2 style="text-align: center; font-size: 2.5rem; color: #0f172a; margin-bottom: 50px;">Business Divisions</h2>
        <div class="product-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
          
          <div class="glass-premium fade-in-up" style="padding: 50px; display: flex; flex-direction: column; align-items: center; border-top: 5px solid var(--primary); text-align: center;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(19, 70, 175, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 25px;">
              <i class="fas fa-stethoscope" style="font-size: 2.5rem; color: var(--primary);"></i>
            </div>
            <h3 style="color: #0f172a; margin-bottom: 15px; font-size: 1.8rem;">Medical Imports Division</h3>
            <p style="color: #64748b; line-height: 1.6;">Focused on sourcing and distributing certified medical equipment, laboratory instruments, and healthcare supplies to hospitals, clinics, and diagnostic centers.</p>
            <a href="#/products?company=dentose&category=medical" class="btn btn-outline" style="margin-top:30px;">Explore Medical &rarr;</a>
          </div>

          <div class="glass-premium fade-in-up" style="padding: 50px; display: flex; flex-direction: column; align-items: center; border-top: 5px solid #16a34a; animation-delay: 0.1s; text-align: center;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(22, 163, 74, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 25px;">
              <i class="fas fa-seedling" style="font-size: 2.5rem; color: #16a34a;"></i>
            </div>
            <h3 style="color: #0f172a; margin-bottom: 15px; font-size: 1.8rem;">Agricultural Exports Division</h3>
            <p style="color: #64748b; line-height: 1.6;">Dedicated to the export of high-quality agricultural products, supporting global supply chains with trusted sourcing and logistics capabilities.</p>
             <a href="#/products?company=dentose&category=agriculture" class="btn btn-outline" style="margin-top:30px; border-color: #16a34a; color: #16a34a;">Explore Exports &rarr;</a>
          </div>

        </div>
      </div>
    </section>

    <!-- Product Categories Matrix -->
    <section class="section" style="padding: 60px 0; background: white;">
      <div class="container text-center">
        <h2 style="font-size: 2.5rem; color: #0f172a; margin-bottom: 40px;">Core Product Categories</h2>
        
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 50px;">
          <span style="padding: 15px 30px; background: rgba(19, 70, 175, 0.05); color: var(--primary); font-weight: 600; border-radius: 50px; border: 1px solid rgba(19, 70, 175, 0.2);"><i class="fas fa-tooth" style="margin-right: 8px;"></i> Orthodontic Products</span>
          <span style="padding: 15px 30px; background: rgba(19, 70, 175, 0.05); color: var(--primary); font-weight: 600; border-radius: 50px; border: 1px solid rgba(19, 70, 175, 0.2);"><i class="fas fa-syringe" style="margin-right: 8px;"></i> Surgical Instruments</span>
          <span style="padding: 15px 30px; background: rgba(19, 70, 175, 0.05); color: var(--primary); font-weight: 600; border-radius: 50px; border: 1px solid rgba(19, 70, 175, 0.2);"><i class="fas fa-microscope" style="margin-right: 8px;"></i> Laboratory Equipment</span>
          <span style="padding: 15px 30px; background: rgba(19, 70, 175, 0.05); color: var(--primary); font-weight: 600; border-radius: 50px; border: 1px solid rgba(19, 70, 175, 0.2);"><i class="fas fa-heartbeat" style="margin-right: 8px;"></i> Diagnostic Devices</span>
          <span style="padding: 15px 30px; background: rgba(19, 70, 175, 0.05); color: var(--primary); font-weight: 600; border-radius: 50px; border: 1px solid rgba(19, 70, 175, 0.2);"><i class="fas fa-box" style="margin-right: 8px;"></i> Medical Consumables</span>
          <span style="padding: 15px 30px; background: rgba(22, 163, 74, 0.05); color: #16a34a; font-weight: 600; border-radius: 50px; border: 1px solid rgba(22, 163, 74, 0.2);"><i class="fas fa-leaf" style="margin-right: 8px;"></i> Agricultural Seeds & Products</span>
        </div>

        <div style="padding: 60px; background: var(--bg-light); border-radius: 20px;">
          <h3 style="font-size: 1.8rem; margin-bottom: 20px;">Ready to Explore?</h3>
          <p style="color: #64748b; font-size: 1.1rem; margin-bottom: 30px;">Browse the full catalogue in the Products & Services section.</p>
          <a href="#/products?company=dentose" class="btn btn-primary" style="padding: 18px 50px; font-size: 1.2rem;">
            View Full Catalogue &rarr;
          </a>
        </div>
      </div>
    </section>

  </div>

  <style>
    @media (max-width: 640px) {
      .section h1 { font-size: 2.2rem !important; line-height: 1.1; margin-bottom: 20px; }
      .section h2 { font-size: 1.8rem !important; }
      .product-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
      .glass-premium { padding: 30px !important; }
      .app-section { padding-top: 80px !important; }
      .btn-primary { width: 100%; border-radius: 12px; }
    }
  </style>
`;

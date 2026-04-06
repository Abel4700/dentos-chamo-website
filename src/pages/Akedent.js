export const Akedent = () => {
  return `
    <div class="app-section bg-soft page-offset">
      
      <!-- 💊 CLINICAL HERO -->
      <section class="company-hero akedent-theme fade-in">
        <div class="container text-center">
          <div class="hero-badge">INDEPENDENT PHARMACEUTICAL ENTITY</div>
          <h1 class="fluid-title">Akedent <span class="text-accent">Pharmaceutical and Medical Equipment Whole Sale </span></h1>
          <p class="hero-description">
            A pillar of reliability in pharmaceutical distribution and advanced medical equipment. Akedent is dedicated to bridging the supply gap for healthcare providers with certified excellence.
          </p>
        </div>
        <div class="hero-ambient-glow"></div>
      </section>

      <!-- 🍱 BENTO MATRIX -->
      <section class="section">
        <div class="container">
          <div class="sophisticated-grid">
            
            <!-- Operations -->
            <div class="bento-box glass-premium fade-in-up">
              <div class="bento-header">
                <div class="bento-icon"><i class="fas fa-microscope"></i></div>
                <h2 class="bento-title">Core Operations</h2>
              </div>
              <ul class="bento-list">
                <li><i class="fas fa-check-double"></i> Pharma Distribution Hub</li>
                <li><i class="fas fa-check-double"></i> Medical Equipment Logistics</li>
                <li><i class="fas fa-check-double"></i> Diagnostic Solution Support</li>
              </ul>
            </div>

            <!-- Portfolio Shapes -->
            <div class="bento-box glass-premium fade-in-up" style="animation-delay: 0.1s;">
              <div class="bento-header">
                <div class="bento-icon"><i class="fas fa-box-tissue"></i></div>
                <h2 class="bento-title">Supply Spectrum</h2>
              </div>
              <div class="category-grid-modern">
                <div class="modern-card-item">
                   <i class="fas fa-pills"></i>
                   <span>Pharma</span>
                </div>
                <div class="modern-card-item">
                   <i class="fas fa-stethoscope"></i>
                   <span>Supplies</span>
                </div>
                <div class="modern-card-item">
                   <i class="fas fa-laptop-medical"></i>
                   <span>Equipment</span>
                </div>
                <div class="modern-card-item">
                   <i class="fas fa-vial"></i>
                   <span>Lab Tech</span>
                </div>
              </div>
            </div>

          </div>

          <!-- 🚀 ACTION FOOTER -->
          <div class="cta-footer fade-in-up" style="animation-delay: 0.2s;">
             <p>Access the specialized Akedent pharmaceutical and equipment registers.</p>
             <a href="#/products?company=akedent" class="btn-premium-cyan">
               View Akedent Catalogue <i class="fas fa-arrow-right"></i>
             </a>
          </div>
        </div>
      </section>

      <style>
        .akedent-theme { background: linear-gradient(135deg, #0e7490 0%, #083344 100%); }
        .text-accent { color: #67e8f9; }
        
        .company-hero { 
          padding: 120px 0 100px; 
          position: relative; 
          overflow: hidden; 
          color: white;
          border-radius: 0 0 50px 50px;
        }
        .hero-badge { 
          display: inline-block; 
          padding: 8px 20px; 
          background: rgba(103, 232, 249, 0.15); 
          border: 1px solid rgba(103, 232, 249, 0.3); 
          border-radius: 50px; 
          color: #67e8f9; 
          font-weight: 800; 
          font-size: 0.75rem; 
          letter-spacing: 2px; 
          margin-bottom: 30px; 
        }
        .fluid-title { 
          font-size: clamp(2.2rem, 6vw, 4.2rem); 
          font-weight: 800; 
          letter-spacing: -2px; 
          margin-bottom: 25px; 
          line-height: 1.1; 
        }
        .hero-description { 
          font-size: clamp(1.1rem, 2vw, 1.35rem); 
          color: rgba(255,255,255,0.8); 
          max-width: 800px; 
          margin: 0 auto; 
          line-height: 1.7; 
        }
        .hero-ambient-glow {
          position: absolute;
          top: -20%; right: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(103, 232, 249, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .sophisticated-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-top: -50px;
          position: relative;
          z-index: 10;
        }
        .bento-box { padding: 50px; background: white; border-radius: 30px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); }
        .bento-header { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .bento-icon { width: 60px; height: 60px; border-radius: 16px; background: #ecfeff; color: #0891b2; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
        .bento-title { font-size: 1.8rem; font-weight: 800; color: #0f172a; margin: 0; }
        
        .bento-list { list-style: none; padding: 0; margin: 0; }
        .bento-list li { padding: 18px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 15px; color: #475569; font-weight: 500; }
        .bento-list li i { color: #0891b2; }

        .category-grid-modern { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .modern-card-item { 
          padding: 25px; 
          background: #f8fafc; 
          border-radius: 20px; 
          text-align: center; 
          transition: all 0.3s;
          border: 1px solid #f1f5f9;
        }
        .modern-card-item:hover { transform: translateY(-5px); background: white; border-color: #0891b2; }
        .modern-card-item i { display: block; font-size: 2rem; color: #0891b2; margin-bottom: 15px; }
        .modern-card-item span { font-weight: 800; color: #1e293b; font-size: 0.9rem; text-transform: uppercase; }

        .cta-footer { text-align: center; margin-top: 80px; padding: 60px; background: white; border-radius: 30px; }
        .cta-footer p { font-size: 1.15rem; color: #64748b; margin-bottom: 30px; }
        .btn-premium-cyan { display: inline-flex; align-items: center; gap: 12px; padding: 20px 45px; background: #0891b2; color: white; border-radius: 15px; font-weight: 800; text-decoration: none; transition: all 0.3s; }
        .btn-premium-cyan:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(8, 145, 178, 0.2); }

        @media (max-width: 768px) {
          .sophisticated-grid { grid-template-columns: 1fr; margin-top: 20px; }
          .bento-box { padding: 35px 25px; }
          .category-grid-modern { grid-template-columns: 1fr; }
          .cta-footer { padding: 40px 20px; }
          .btn-premium-cyan { width: 100%; justify-content: center; }
          .company-hero { border-radius: 0 0 30px 30px; }
        }
      </style>
    </div>
  `;
};

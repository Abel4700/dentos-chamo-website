export const OraDent = () => {
  return `
    <div class="app-section bg-soft page-offset">
      
      <!-- 💎 SOPHISTICATED HERO -->
      <section class="company-hero oradent-theme fade-in">
        <div class="container text-center">
          <div class="hero-badge">SISTER COMPANY OF DENTOSE CHAMO</div>
          <h1 class="fluid-title">Ora-Dent <span class="text-accent">Oral Cosmetics</span></h1>
          <p class="hero-description">
            Specialized in the alchemy of oral hygiene and aesthetic wellness. Ora-Dent delivers clinical-grade personal care solutions that bridge the gap between healthcare and confidence.
          </p>
        </div>
        <div class="hero-ambient-glow"></div>
      </section>

      <!-- 🍱 BENTO MATRIX -->
      <section class="section">
        <div class="container">
          <div class="sophisticated-grid">
            
            <!-- Focus Area -->
            <div class="bento-box glass-premium fade-in-up">
              <div class="bento-header">
                <div class="bento-icon"><i class="fas fa-sparkles"></i></div>
                <h2 class="bento-title">Strategic Focus</h2>
              </div>
              <ul class="bento-list">
                <li><i class="fas fa-check-circle"></i> Precision Oral Hygiene Systems</li>
                <li><i class="fas fa-check-circle"></i> Aesthetic Dental Enhancements</li>
                <li><i class="fas fa-check-circle"></i> Personal Wellness Formulations</li>
              </ul>
            </div>

            <!-- Categories -->
            <div class="bento-box glass-premium fade-in-up" style="animation-delay: 0.1s;">
              <div class="bento-header">
                <div class="bento-icon"><i class="fas fa-layer-group"></i></div>
                <h2 class="bento-title">Core Portfolio</h2>
              </div>
              <div class="category-pill-grid">
                <span class="modern-pill">Advanced Toothpastes</span>
                <span class="modern-pill">Whitening Technology</span>
                <span class="modern-pill">Hygiene Toolkits</span>
                <span class="modern-pill">Cosmetic Dental Lab</span>
              </div>
            </div>

          </div>

          <!-- 🚀 ACTION FOOTER -->
          <div class="cta-footer fade-in-up" style="animation-delay: 0.2s;">
             <p>Discover the full Ora-Dent collection through our integrated catalogue.</p>
             <a href="#/products?company=oradent" class="btn-premium">
               Browse Ora-Dent Collection <i class="fas fa-arrow-right"></i>
             </a>
          </div>
        </div>
      </section>

      <style>
        .oradent-theme { background: linear-gradient(135deg, #78350f 0%, #451a03 100%); }
        .text-accent { color: #fbbf24; }
        
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
          background: rgba(251, 191, 36, 0.15); 
          border: 1px solid rgba(251, 191, 36, 0.3); 
          border-radius: 50px; 
          color: #fbbf24; 
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
          background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
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
        .bento-box { padding: 50px; background: white; border-radius: 30px; }
        .bento-header { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
        .bento-icon { width: 60px; height: 60px; border-radius: 16px; background: #fffbeb; color: #b45309; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
        .bento-title { font-size: 1.8rem; font-weight: 800; color: #0f172a; margin: 0; }
        
        .bento-list { list-style: none; padding: 0; margin: 0; }
        .bento-list li { padding: 18px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; gap: 15px; color: #475569; font-weight: 500; }
        .bento-list li i { color: #10b981; }
        .bento-list li:last-child { border: none; }

        .category-pill-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .modern-pill { padding: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; font-weight: 700; color: #334155; text-align: center; font-size: 0.95rem; }

        .cta-footer { text-align: center; margin-top: 80px; padding: 60px; background: white; border-radius: 30px; border: 1px solid #f1f5f9; }
        .cta-footer p { font-size: 1.15rem; color: #64748b; margin-bottom: 30px; }
        .btn-premium { display: inline-flex; align-items: center; gap: 12px; padding: 20px 45px; background: #b45309; color: white; border-radius: 15px; font-weight: 800; text-decoration: none; transition: all 0.3s; }
        .btn-premium:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(180, 83, 9, 0.2); }

        @media (max-width: 768px) {
          .sophisticated-grid { grid-template-columns: 1fr; margin-top: 20px; }
          .bento-box { padding: 35px 25px; }
          .category-pill-grid { grid-template-columns: 1fr; }
          .cta-footer { padding: 40px 20px; }
          .btn-premium { width: 100%; justify-content: center; }
          .company-hero { border-radius: 0 0 30px 30px; padding: 80px 0 60px; }
        }
      </style>
    </div>
  `;
};

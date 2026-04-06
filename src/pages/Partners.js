export const Partners = () => {
  return `
    <div class="app-section bg-soft page-offset">
      
      <!-- 🏆 LUMINOUS HERO -->
      <section class="partners-hero fade-in">
        <div class="overlay-mesh"></div>
        <div class="container text-center relative-z">
          <div class="hero-label">GLOBAL COMPLIANCE & STANDARDS</div>
          <h1 class="fluid-title">Partners & <span class="text-primary">Certifications</span></h1>
          <p class="hero-subtitle">Operating with strict adherence to international safety protocols and manufacturing excellence.</p>
        </div>
      </section>

      <!-- 🏛️ CORPORATE CERTIFICATIONS -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Corporate Certifications</h2>
            <div class="title-line"></div>
          </div>

          <div class="cert-grid">
            <div class="cert-card glass-premium fade-in-up">
              <div class="cert-icon-box"><i class="fas fa-certificate"></i></div>
              <div class="cert-body">
                <h3>ISO 9001:2015</h3>
                <p>International Quality Management System certification for operational excellence.</p>
              </div>
            </div>
            
            <div class="cert-card glass-premium fade-in-up" style="animation-delay: 0.1s;">
              <div class="cert-icon-box cyan"><i class="fas fa-shield-virus"></i></div>
              <div class="cert-body">
                <h3>EFDA Approved</h3>
                <p>Official registration with the Ethiopian Food & Drug Authority for medical supplies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🏭 STRATEGIC PARTNERS -->
      <section class="section bg-white" style="border-radius: 50px 50px 0 0;">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Strategic Global Partners</h2>
            <div class="title-line"></div>
          </div>
          
          <div class="roster-placeholder glass-premium">
             <div class="shimmer-box">
               <i class="fas fa-handshake"></i>
               <h3>Global Network in Development</h3>
               <p>We are currently finalizing distribution agreements with leading European and Asian manufacturers.</p>
             </div>
          </div>
        </div>
      </section>

      <style>
        .partners-hero { 
          padding: 160px 0 120px; 
          background: #0f172a; 
          position: relative; 
          color: white; 
          overflow: hidden; 
          border-radius: 0 0 50px 50px;
        }
        .overlay-mesh {
          position: absolute; top:0; left:0; width:100%; height:100%;
          background: url('/images/about1.png') center/cover no-repeat;
          opacity: 0.3;
          filter: grayscale(100%);
        }
        .partners-hero::after {
          content: ''; position: absolute; top:0; left:0; width:100%; height:100%;
          background: linear-gradient(to bottom, rgba(15,23,42,0.9), rgba(15,23,42,0.7));
        }
        .relative-z { position: relative; z-index: 10; }
        .hero-label { font-size: 0.8rem; font-weight: 800; letter-spacing: 3px; color: var(--primary); margin-bottom: 20px; }
        .hero-subtitle { font-size: 1.25rem; color: #94a3b8; max-width: 600px; margin: 0 auto; line-height: 1.6; }

        .section-header { margin-bottom: 50px; }
        .section-title { font-size: 2rem; font-weight: 800; color: #1e293b; margin-bottom: 15px; }
        .title-line { width: 60px; height: 4px; background: var(--primary); border-radius: 2px; }

        .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px; }
        .cert-card { padding: 40px; display: flex; gap: 30px; align-items: center; }
        .cert-icon-box { width: 80px; height: 80px; border-radius: 20px; background: rgba(34, 197, 94, 0.1); color: #22c55e; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; flex-shrink: 0; }
        .cert-icon-box.cyan { background: rgba(14, 165, 233, 0.1); color: #0ea5e3; }
        .cert-body h3 { font-size: 1.4rem; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
        .cert-body p { color: #64748b; font-size: 0.95rem; line-height: 1.5; margin: 0; }

        .roster-placeholder { padding: 80px 20px; text-align: center; background: #f8fafc; border: 2px dashed #e2e8f0; }
        .shimmer-box i { font-size: 4rem; color: #cbd5e1; margin-bottom: 25px; }
        .shimmer-box h3 { color: #475569; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px; }
        .shimmer-box p { color: #94a3b8; max-width: 500px; margin: 0 auto; line-height: 1.6; }

        @media (max-width: 768px) {
          .partners-hero { padding: 120px 0 80px; border-radius: 0 0 30px 30px; }
          .cert-grid { grid-template-columns: 1fr; }
          .cert-card { flex-direction: column; text-align: center; padding: 30px 20px; }
          .fluid-title { font-size: 2.5rem !important; }
        }
      </style>
    </div>
  `;
};

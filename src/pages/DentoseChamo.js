export const DentoseChamo = () => `
  <div class="app-section dentose-parent-hub">
    
    <!-- 🏆 PREMIUM HERO V3 -->
    <section class="hero-v3-dark fade-in">
      <div class="container text-center">
        <div class="hero-badge-v3">GLOBAL PARENT ENTERPRISE</div>
        <h1 class="hero-title-visionary">Dentose Chamo <span class="accent-text">Trading PLC</span></h1>
        <p class="hero-lead">The root enterprise driving global healthcare innovation, clinical medical supply, and premier agricultural exports across the East African market.</p>
        <div class="hero-action-group">
           <a href="#/products?company=dentose" class="btn btn-primary btn-visionary">Explore Medical Infrastructure</a>
        </div>
      </div>
    </section>

    <!-- 🌐 GLOBAL ECOSYSTEM GRID (SUBSIDIARIES) -->
    <section class="section strategic-spacing">
      <div class="container">
        <div class="section-header-centered mb-60 fade-in-up">
           <h2 class="section-title-visionary">The <span class="accent-text">Enterprise Ecosystem</span></h2>
           <p class="text-muted">Explore the specialized subsidiaries that operate under the Dentose Chamo umbrella.</p>
        </div>
        
        <div class="ecosystem-bento-grid">
           <!-- Akedent -->
           <a href="#/companies/akedent" class="eco-card dc-glass-card fade-in-up">
              <div class="eco-glow eco-akedent"></div>
              <div class="eco-icon"><i class="fas fa-microscope"></i></div>
              <h3>AkeDent Pharmaceutical</h3>
              <p>Specialized clinical diagnostics, laboratory reagents, and mission-critical medical machinery.</p>
              <div class="eco-arrow">&rarr;</div>
           </a>

           <!-- Ora-Dent -->
           <a href="#/companies/oradent" class="eco-card dc-glass-card fade-in-up" style="animation-delay: 0.1s;">
              <div class="eco-glow eco-oradent"></div>
              <div class="eco-icon"><i class="fas fa-magic"></i></div>
              <h3>Ora-Dent Cosmetics</h3>
              <p>Premium derma-cosmetics and aesthetic clinical supplies for high-end dermatology centers.</p>
              <div class="eco-arrow">&rarr;</div>
           </a>

           <!-- Dire Dawa -->
           <a href="#/companies/dentos-dire-dawa" class="eco-card dc-glass-card fade-in-up" style="animation-delay: 0.2s;">
              <div class="eco-glow eco-diredawa"></div>
              <div class="eco-icon"><i class="fas fa-shipping-fast"></i></div>
              <h3>Dentos Dire Dawa</h3>
              <p>The primary global logistics and supply chain hub bridging international manufacturers to local markets.</p>
              <div class="eco-arrow">&rarr;</div>
           </a>
        </div>
      </div>
    </section>

    <!-- 🏗️ STRATEGIC DIVISIONS (BENTO) -->
    <section class="section strategic-spacing bg-dark-deep">
      <div class="container">
        <h2 class="section-title-visionary text-center mb-60">Strategic <span class="accent-text">Divisions</span></h2>
        
        <div class="divisions-bento-grid">
          
          <div class="division-card dc-glass-card fade-in-up">
            <div class="div-icon-wrapper div-blue">
               <i class="fas fa-stethoscope"></i>
            </div>
            <h3>Medical Imports Division</h3>
            <p>Focused on sourcing and distributing certified medical equipment, laboratory instruments, and healthcare supplies to hospitals, clinics, and diagnostic centers.</p>
            <a href="#/products?company=dentose&category=medical" class="btn btn-outline-visionary mt-30">Medical Catalogue</a>
          </div>

          <div class="division-card dc-glass-card fade-in-up" style="animation-delay: 0.1s;">
            <div class="div-icon-wrapper div-green">
               <i class="fas fa-seedling"></i>
            </div>
            <h3>Agricultural Exports Division</h3>
            <p>Dedicated to the export of high-quality agricultural products, supporting global supply chains with trusted sourcing, rigorous quality control, and superior logistics capabilities.</p>
            <a href="#/products?company=dentose&category=agriculture" class="btn btn-outline-visionary btn-green mt-30">Explore Exports</a>
          </div>

        </div>
      </div>
    </section>

    <!-- 📊 CORE CATEGORIES MATRIX -->
    <section class="section strategic-spacing">
      <div class="container text-center">
        <h2 class="section-title-visionary mb-50">Core Infrastructure <span class="accent-text">Focus</span></h2>
        
        <div class="category-matrix fade-in-up">
          <a href="#/products?company=dentose" class="matrix-pill"><i class="fas fa-tooth"></i> Orthodontic Products</a>
          <a href="#/products?company=dentose" class="matrix-pill"><i class="fas fa-syringe"></i> Surgical Instruments</a>
          <a href="#/products?company=dentose" class="matrix-pill"><i class="fas fa-microscope"></i> Laboratory Equipment</a>
          <a href="#/products?company=dentose" class="matrix-pill"><i class="fas fa-heartbeat"></i> Diagnostic Devices</a>
          <a href="#/products?company=dentose" class="matrix-pill"><i class="fas fa-box"></i> Medical Consumables</a>
          <a href="#/products?company=dentose&category=agriculture" class="matrix-pill pill-green"><i class="fas fa-leaf"></i> Agricultural Seeds</a>
        </div>

      </div>
    </section>

  </div>

  <style>
    /* 🌑 DARK THEME VARIABLES */
    .dentose-parent-hub {
      background-color: #ffffff;
      color: var(--text-main);
      min-height: 100vh;
      overflow-x: clip;
    }
    .bg-dark-deep { background-color: #f8fafc; }
    .accent-text { color: var(--secondary); }

    /* 🚀 V3 HERO (CINEMATIC DARK) */
    .hero-v3-dark {
      padding: 180px 20px 100px;
      position: relative;
      background-image: linear-gradient(rgba(15, 32, 166, 0.4), rgba(5, 11, 20, 0.2)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #e2e8f0;
    }
    .hero-badge-v3 {
      display: inline-block; padding: 8px 24px; background: rgba(64, 224, 208, 0.1); border: 1px solid rgba(64, 224, 208, 0.2); border-radius: 50px; color: var(--secondary); font-weight: 800; font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 25px; box-shadow: 0 0 20px rgba(64, 224, 208, 0.1);
    }
    .hero-title-visionary { font-size: clamp(3rem, 6vw, 5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; margin-bottom: 25px; color: white; }
    .hero-lead { font-size: clamp(1.1rem, 2vw, 1.3rem); color: rgba(255,255,255,0.85); max-width: 800px; margin: 0 auto 40px auto; line-height: 1.6; }
    
    /* 🌐 ECOSYSTEM GRID */
    .strategic-spacing { padding: 100px 0; }
    .section-title-visionary { font-size: 2.8rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 15px; }
    .mb-60 { margin-bottom: 60px; }
    .mb-50 { margin-bottom: 50px; }
    .mt-30 { margin-top: 30px; }
    
    .ecosystem-bento-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .dc-glass-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid #e2e8f0;
      border-radius: 24px;
      padding: 40px;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    
    .eco-card:hover { transform: translateY(-10px); border-color: var(--secondary); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
    .eco-glow { position: absolute; width: 150px; height: 150px; border-radius: 50%; filter: blur(60px); top: -50px; right: -50px; opacity: 0.4; transition: opacity 0.4s; }
    .eco-card:hover .eco-glow { opacity: 0.8; }
    .eco-akedent { background: #1520A6; }
    .eco-oradent { background: #40E0D0; }
    .eco-diredawa { background: #e2e8f0; }
    
    .eco-icon { font-size: 2.5rem; margin-bottom: 25px; color: var(--primary); }
    .eco-card h3 { font-size: 1.6rem; font-weight: 800; color: var(--text-main); margin-bottom: 15px; }
    .eco-card p { color: #94a3b8; line-height: 1.6; font-size: 1rem; flex-grow: 1; margin-bottom: 30px; }
    .eco-arrow { align-self: flex-end; width: 45px; height: 45px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 1.2rem; transition: all 0.3s; }
    .eco-card:hover .eco-arrow { background: var(--secondary); color: #050b14; transform: scale(1.1); }

    /* 🏗️ DIVISIONS GRID */
    .divisions-bento-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .division-card { align-items: center; text-align: center; padding: 60px 40px; }
    .div-icon-wrapper { width: 90px; height: 90px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 30px; }
    .div-blue { background: rgba(64, 224, 208, 0.1); color: var(--secondary); box-shadow: 0 0 30px rgba(64, 224, 208, 0.2); }
    .div-green { background: rgba(34, 197, 94, 0.1); color: #22c55e; box-shadow: 0 0 30px rgba(34, 197, 94, 0.2); }
    .division-card h3 { font-size: 2rem; color: var(--text-main); margin-bottom: 20px; font-weight: 800; }
    .division-card p { color: #94a3b8; font-size: 1.1rem; line-height: 1.7; margin-bottom: 0; }

    /* 📊 CATEGORY MATRIX */
    .category-matrix {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .matrix-pill {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 16px 32px;
      border-radius: 50px;
      color: var(--text-main);
      font-weight: 600;
      font-size: 1.05rem;
      text-decoration: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .matrix-pill:hover { background: rgba(64, 224, 208, 0.1); border-color: var(--secondary); color: var(--primary); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
    .pill-green:hover { background: rgba(34, 197, 94, 0.15); border-color: #22c55e; color: #22c55e; }

    /* BUTTONS */
    .btn-visionary { padding: 18px 40px; font-weight: 800; border-radius: 12px; font-size: 1.1rem; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; text-decoration: none; display: inline-block; }
    .btn-outline-visionary { background: transparent; border: 2px solid var(--secondary); color: var(--secondary); padding: 16px 35px; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; display: inline-block; }
    .btn-outline-visionary:hover { background: var(--secondary); color: #050b14; box-shadow: 0 10px 20px rgba(0, 188, 197, 0.3); transform: translateY(-2px); }
    .btn-green { border-color: #22c55e; color: #22c55e; }
    .btn-green:hover { background: #22c55e; color: #050b14; box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3); }

    /* RESPONSIVE PADDING & ALIGNMENT */
    @media (max-width: 1024px) {
       .divisions-bento-grid { grid-template-columns: 1fr; }
    }
    
    @media (max-width: 768px), (max-height: 600px) {
       .hero-v3-dark { padding-top: 210px !important; padding-bottom: 60px; }
       .hero-title-visionary { font-size: 2.5rem; }
       .section-title-visionary { font-size: 2.2rem; }
       .hero-badge-v3 { margin-bottom: 15px; }
       .strategic-spacing { padding: 60px 0; }
       .matrix-pill { padding: 12px 20px; font-size: 0.95rem; width: 100%; justify-content: center; }
       .division-card { padding: 40px 20px; }
    }
  </style>
`;

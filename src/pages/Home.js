export const Home = () => {
  // Initialize Hero Slider
  setTimeout(() => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    let current = 0;

    const showSlide = (index) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[index].classList.add('active');
      dots[index].classList.add('active');
    };

    const nextSlide = () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    };

    if (slides.length > 0) {
      const interval = setInterval(nextSlide, 7000);
      dots.forEach((dot, i) => {
        dot.onclick = () => { 
          clearInterval(interval);
          current = i; 
          showSlide(i); 
        };
      });
    }
  }, 100);

  return `
  <div class="app-section home-root dark-theme-page">
    
    <!-- BACKGROUND ANIMATED DECORATION -->
    <div class="global-background-orbs">
       <div class="glass-orb orb-primary"></div>
       <div class="glass-orb orb-accent"></div>
    </div>

    <!-- 🚀 VISIONARY HERO SLIDER V3 (CLINICAL WHITE) -->
    <section class="hero-gateway clinical-white-theme">
      <div class="hero-slider-v3">
        
        <!-- SLIDE 1: THE STRATEGIC GATEWAY -->
        <div class="hero-slide active" style="background-image: linear-gradient(rgba(255, 255, 255, 0.92), rgba(240, 244, 248, 0.85)), url('/images/hero_medical_hub.png')">
          <div class="container hero-container-v3">
            <div class="oradent-hero-content fade-in-up">
              <div class="hero-badge-v3">AFRICAN LOGISTICAL HUB</div>
              <h1 class="section-title-visionary">Africa’s Strategic <span class="accent-text">Gateway</span> to Global Medical Tech</h1>
              <p class="hero-lead">Leveraging the Dentos Dire Dawa Free Trade Zone to bridge world-class medical innovation with the African continent.</p>
              <div class="hero-actions-v3">
                 <a href="#/products?segment=medical" class="btn btn-primary btn-visionary">Explore Medical Solutions</a>
                 <a href="#/partners" class="btn btn-outline btn-visionary">Our Global Partners</a>
              </div>
            </div>
          </div>
        </div>

        <!-- SLIDE 2: DISTRIBUTION HUB -->
        <div class="hero-slide" style="background-image: linear-gradient(rgba(255, 255, 255, 0.92), rgba(240, 244, 248, 0.85)), url('/images/hero_africa_logistics.png')">
           <div class="container hero-container-v3">
            <div class="oradent-hero-content">
              <div class="hero-badge-v3">CONTINENTAL FULFILLMENT</div>
              <h1 class="section-title-visionary">Seamless Distribution <span class="accent-text">Across Africa</span></h1>
              <p class="hero-lead">Merging global medical tech with world-class shipping and logistics in Dire Dawa to ensure healthcare accessibility for all.</p>
              <div class="hero-actions-v3">
                 <a href="#/about" class="btn btn-primary btn-visionary">The Free Trade Zone Hub</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div class="hero-nav-dots-v3">
        <span class="hero-dot active"></span>
        <span class="hero-dot"></span>
      </div>
    </section>

    <!-- 💎 TRUST RIBBON: WHITE CLINICAL EDITION -->
    <section class="trust-ribbon-v2 clinical-white-theme">
      <div class="container">
        <div class="trust-flex-v2">
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-file-medical-alt"></i></div>
            <span>ISO 13485 Certified Hub</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-shipping-fast"></i></div>
            <span>Free Trade Zone Logistics</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-microscope"></i></div>
            <span>Medical-Grade Fulfillment</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-globe-africa"></i></div>
            <span>Pan-African Distribution</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏛️ STRATEGIC MISSION: CINEMATIC DARK -->
    <section class="section about-cinematic">
      <div class="container about-grid-v3">
        <div class="about-content-v3 fade-in">
          <div class="hero-badge-v3 no-margin">STRATEGIC VISION</div>
          <h2 class="section-title-visionary">The Future of African <br><span class="accent-text">Medical Logistics</span></h2>
          <p class="text-muted-standard">
            Dentose Chamo Trading PLC is actively engaged in the <strong>importing, marketing, and distribution</strong> of world-class medical clinical equipment, laboratory reagents, and healthcare machineries. As a leading corporate entity in Ethiopia, we bridge the gap between global innovations and regional medical market segments across East Africa.
          </p>
          <a href="#/about" class="btn btn-primary btn-visionary">Learn About Our Hub <i class="fas fa-arrow-right" style="margin-left: 12px;"></i></a>
        </div>
        <div class="about-visuals-v3">
          <div class="glass-orb-glow"></div>
          <div class="floating-stat-card glass-card-v3 bounce-anim">
             <div class="icon-ring-v3"><i class="fas fa-warehouse accent-text"></i></div>
             <div>
               <h4>Addis Ababa</h4>
               <p>Regional Operations HQ</p>
             </div>
          </div>
          <div class="about-main-img-container">
             <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" alt="Operations" class="img-visionary">
          </div>
        </div>
      </div>
    </section>

    <!-- 🍱 MASTER BENTO: SUBSIDIARY SHOWCASE -->
    <section class="section bento-section-v2">
      <div class="container">
        <div class="section-header-centered fade-in">
          <div class="hero-badge-v3">STRATEGIC DIVISIONS</div>
          <h2 class="section-title-visionary text-center">Explore Our <span class="accent-text">Group Subsidiaries</span></h2>
        </div>
        
        <div class="bento-grid-master">
          <!-- Parent Hub -->
          <a href="#/companies/dentos-chamo" class="bento-v3-item bento-v3-large glass-card-v3 hover-lift group-parent">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Parent Hub</div>
              <h3>Dentose Chamo Trading PLC</h3>
              <p>A dedicated distributor of high-quality medical and laboratory supplies, partnering with trusted global manufacturers to lead the African healthcare market.</p>
              <div class="bento-icon-glow"><i class="fas fa-city"></i></div>
            </div>
          </a>
          
          <!-- Dentos Dire Dawa -->
          <a href="#/companies/dentos-dire-dawa" class="bento-v3-item glass-card-v3 hover-lift dark-bento-card">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Logistics & FTZ</div>
              <h3>Dentos Dire Dawa</h3>
              <p>Specialized logistics facilitator for global medical and pharmaceutical giants within the FTZ.</p>
              <div class="bento-icon-glow"><i class="fas fa-truck-container"></i></div>
            </div>
          </a>
          
          <!-- OraDent -->
          <a href="#/companies/ora-dent" class="bento-v3-item glass-card-v3 hover-lift group-oradent-card">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1609188076864-c35269146b09?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Aesthetic Wellness</div>
              <h3>OraDent Medical</h3>
              <p>Clinical-grade oral care solutions and high-end dental aesthetics distribution.</p>
              <div class="bento-icon-glow"><i class="fas fa-tooth"></i></div>
            </div>
          </a>
          
          <!-- Akedent -->
          <a href="#/companies/akedent" class="bento-v3-item bento-v3-wide glass-card-v3 hover-lift group-akedent-card">
             <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200');"></div>
             <div class="bento-v3-content">
              <div class="bento-tag">Pharma & Laboratory</div>
              <h3>Akedent Pharmaceutical</h3>
              <p>Advanced diagnostic machinery and mission-critical medical laboratory equipment fulfillment.</p>
              <div class="bento-icon-glow"><i class="fas fa-microscope"></i></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 💎 CORE PILLARS: VISIONARY NEO CARDS -->
    <section class="section pillars-cinematic">
      <div class="container">
        <div class="section-header-centered mb-60">
           <div class="hero-badge-v3">OUR PRINCIPLES</div>
           <h2 class="section-title-visionary text-center">Core <span class="accent-text">Visionary Pillars</span></h2>
        </div>
        
        <div class="pillars-grid-v3">
          <div class="pillar-card-v3 glass-card-v3 hover-lift fade-in">
            <div class="pillar-glow"></div>
            <div class="pillar-icon-v3"><i class="fas fa-handshake"></i></div>
            <h3>Integrity</h3>
            <p>Honest and transparent conduct in all strategic dealings and partnerships.</p>
          </div>
          <div class="pillar-card-v3 glass-card-v3 hover-lift fade-in" style="animation-delay: 0.1s;">
            <div class="pillar-glow"></div>
            <div class="pillar-icon-v3"><i class="fas fa-award"></i></div>
            <h3>Quality</h3>
            <p>We provide only verified, top-grade clinical products from global manufacturers.</p>
          </div>
          <div class="pillar-card-v3 glass-card-v3 hover-lift fade-in" style="animation-delay: 0.2s;">
            <div class="pillar-glow"></div>
            <div class="pillar-icon-v3"><i class="fas fa-users"></i></div>
            <h3>Customer Focus</h3>
            <p>To extend service beyond client expectations is our primary corporate mission.</p>
          </div>
          <div class="pillar-card-v3 glass-card-v3 hover-lift fade-in" style="animation-delay: 0.3s;">
            <div class="pillar-glow"></div>
            <div class="pillar-icon-v3"><i class="fas fa-lightbulb"></i></div>
            <h3>Innovation</h3>
            <p>Embracing new healthcare technologies and trends to lead regional segments.</p>
          </div>
        </div>
      </div>
    </section>

    <style>
      :root {
        --home-primary: #002F7F;
        --home-navy: #001F7F;
        --home-accent: #38bdf8;
        --home-bg: #050b14;
        --home-border: #242424;
      }

      .dark-theme-page { background: radial-gradient(circle at center, rgba(14, 38, 75, 0.4) 0%, var(--home-bg) 70%), url('https://www.transparenttextures.com/patterns/cubes.png'); color: white; width: 100%; position: relative; overflow-x: clip; }
      .accent-text { color: var(--home-accent); }
      .primary-text { color: var(--home-primary); }

      /* GLOBAL DECORATION */
      .global-background-orbs { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; }
      .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.12; animation: orbMove 25s infinite alternate ease-in-out; }
      .orb-primary { width: 600px; height: 600px; background: var(--home-primary); top: -200px; right: -100px; }
      .orb-accent { width: 400px; height: 400px; background: var(--home-accent); bottom: 100px; left: -100px; animation-delay: -5s; }
      @keyframes orbMove { from { transform: translate(0,0); } to { transform: translate(150px, 150px); } }

      /* HERO SLIDER V3 */
      .hero-gateway { position: relative; }
      .hero-slider-v3 { display: grid; }
      .hero-slide { grid-area: 1 / 1; width:100%; padding: 180px 20px 100px; background-size: cover; background-position: center; display: flex; flex-direction: column; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 1.2s ease; }
      .hero-slide.active { opacity: 1; pointer-events: auto; z-index: 5; }
      .hero-container-v3 { z-index: 10; width: 100%; }
      .oradent-hero-content { max-width: 900px; text-align: left; }
      .hero-slide.active .oradent-hero-content { animation: fadeInUp 0.8s forwards; }
      
      .hero-badge-v3 { display: inline-block; padding: 10px 22px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 50px; color: var(--home-accent); font-weight: 800; font-size: 0.75rem; letter-spacing: 2.5px; margin-bottom: 30px; text-transform: uppercase; }
      .hero-badge-v3.no-margin { margin-bottom: 20px; }
      
      .section-title-visionary { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; margin-bottom: 25px; }
      .hero-lead { font-size: clamp(1.1rem, 2vw, 1.4rem); color: rgba(255,255,255,0.7); max-width: 750px; margin-bottom: 45px; line-height: 1.6; }
      .hero-actions-v3 { display: flex; gap: 20px; }
      .hero-nav-dots-v3 { position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 20; }
      .hero-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; transition: 0.4s; }
      .hero-dot.active { width: 35px; border-radius: 10px; background: var(--home-accent); box-shadow: 0 0 15px var(--home-accent); }

      /* CLINICAL WHITE OVERRIDES */
      .clinical-white-theme { color: #0f172a; }
      .clinical-white-theme .hero-badge-v3 { background: rgba(14, 165, 233, 0.1); border-color: rgba(14, 165, 233, 0.3); color: #0ea5e9; }
      .clinical-white-theme .hero-lead { color: #475569; }
      .clinical-white-theme .section-title-visionary { color: #0f172a; }
      .clinical-white-theme .hero-dot { background: rgba(0,0,0,0.15); }
      .clinical-white-theme .hero-dot.active { background: #0ea5e9; box-shadow: 0 0 15px rgba(14, 165, 233, 0.5); }
      .clinical-white-theme.trust-ribbon-v2 { background: #ffffff; border-color: #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.03); backdrop-filter: none; }
      .clinical-white-theme .trust-icon-v3 { color: #0ea5e9; text-shadow: none; }
      .clinical-white-theme .btn-outline { border-color: #cbd5e1; color: #0f172a !important; }
      .clinical-white-theme .btn-outline:hover { background: #f1f5f9; border-color: #0ea5e9; color: #0ea5e9 !important; }
      .clinical-white-theme .btn-primary { background: #0ea5e9; border-color: #0ea5e9; color: #ffffff; }
      .clinical-white-theme .btn-primary:hover { background: #0284c7; box-shadow: 0 15px 30px rgba(14, 165, 233, 0.3); }

      /* TRUST RIBBON V2 */
      .trust-ribbon-v2 { background: rgba(255,255,255,0.03); border-top: 1px solid var(--home-border); border-bottom: 1px solid var(--home-border); padding: 40px 0; position: relative; z-index: 5; backdrop-filter: blur(10px); }
      .trust-flex-v2 { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 30px; }
      .trust-item-v2 { display: flex; align-items: center; gap: 15px; font-weight: 700; font-size: 1.1rem; }
      .trust-icon-v3 { font-size: 2rem; color: var(--home-accent); text-shadow: 0 0 15px rgba(56, 189, 248, 0.4); }

      /* ABOUT CINEMATIC */
      .about-grid-v3 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
      .text-muted-standard { font-size: 1.25rem; color: #94a3b8; line-height: 1.8; margin-bottom: 40px; }
      .about-visuals-v3 { position: relative; height: 550px; display: flex; align-items: center; justify-content: center; }
      .about-main-img-container { width: 100%; height: 500px; border-radius: 40px; overflow: hidden; border: 1px solid var(--home-border); box-shadow: 0 40px 100px rgba(0,0,0,0.6); }
      .img-visionary { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .about-main-img-container:hover .img-visionary { transform: scale(1.05); }
      .glass-orb-glow { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%); top: -50px; right: -50px; z-index: 1; }
      .floating-stat-card { position: absolute; bottom: 40px; left: -40px; z-index: 10; padding: 25px 35px; display: flex; align-items: center; gap: 20px; }
      .bounce-anim { animation: floatBounce 4s infinite ease-in-out; }
      @keyframes floatBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }

      /* BENTO MASTER GRID */
      .bento-grid-master { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 340px; gap: 30px; position: relative; z-index: 5; }
      .glass-card-v3 { background: rgba(29, 29, 29, 0.7); backdrop-filter: blur(30px); border: 1px solid var(--home-border); border-radius: 35px; transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .bento-v3-item { position: relative; overflow: hidden; text-decoration:none; color:white; }
      .bento-v3-large { grid-column: span 2; grid-row: span 2; }
      .bento-v3-wide { grid-column: span 2; }
      
      .group-parent { background: linear-gradient(135deg, #001F7F 0%, #002F7F 100%); border: none; }
      .dark-bento-card { background: linear-gradient(135deg, #000F48 0%, #001F7F 100%); border: none; }
      .group-oradent-card { border-color: #273EBE; }
      .group-oradent-card:hover { border-color: var(--home-accent); background: rgba(56, 189, 248, 0.05); }
      .group-akedent-card { border-color: var(--home-navy); }
      
      .bento-v3-content { position: relative; z-index: 10; padding: 30px; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; }
      .bento-v3-large .bento-v3-content { padding: 45px; }
      .bento-bg { position: absolute; top:0; left:0; width:100%; height:100%; background-size:cover; background-position:center; opacity: 0.15; z-index:1; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .bento-v3-item:hover .bento-bg { transform: scale(1.1); opacity: 0.3; }
      .bento-v3-item:hover { transform: translateY(-15px); box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
      
      .bento-icon-glow { font-size: 3.2rem; color: var(--home-accent); margin-top: auto; text-shadow: 0 0 25px rgba(56, 189, 248, 0.5); }
      .bento-v3-item h3 { font-size: 1.65rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
      .bento-v3-large h3 { font-size: 3.2rem; margin-bottom: 20px; }
      .bento-v3-item p { color: #94a3b8; line-height: 1.6; font-size: 1.05rem; }
      .group-parent p, .dark-bento-card p { color: rgba(255,255,255,0.7); }

      /* PILLARS CINEMATIC */
      .pillars-grid-v3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
      .pillar-card-v3 { padding: 50px 30px; text-align: center; position: relative; }
      .pillar-icon-v3 { font-size: 3.5rem; color: var(--home-accent); margin-bottom: 30px; text-shadow: 0 0 20px rgba(56, 189, 248, 0.3); }
      .pillar-card-v3 h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 15px; }
      .pillar-card-v3 p { color: #94a3b8; font-size: 1rem; line-height: 1.5; }
      .pillar-glow { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 50% 10%, rgba(56, 189, 248, 0.05) 0%, transparent 70%); opacity: 0; transition: opacity 0.5s ease; }
      .pillar-card-v3:hover .pillar-glow { opacity: 1; }

      /* BUTTON VISIONARY */
      .btn-visionary { padding: 18px 40px; font-weight: 800; border-radius: 18px; font-size: 1.05rem; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .btn-primary { background: var(--home-primary); border-color: var(--home-primary); color: white; }
      .btn-primary:hover { background: var(--home-navy); transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0, 47, 127, 0.4); }
      .btn-outline:hover { background: rgba(255, 255, 255, 0.05); border-color: var(--home-accent); color: var(--home-accent) !important; }

      /* RESPONSIVE */
      @media (max-width: 1200px) {
        .bento-grid-master { grid-template-columns: repeat(2, 1fr); }
        .bento-v3-large, .bento-v3-wide { grid-column: span 2; }
        .about-grid-v3 { grid-template-columns: 1fr; gap: 50px; }
        .about-visuals-v3 { height: 450px; }
        .floating-stat-card { left: 20px; bottom: 20px; }
      }
      @media (max-width: 768px), (max-height: 600px) {
        .hero-slide { padding: 150px 20px 80px; align-items: flex-start !important; justify-content: flex-start; }
        .hero-gateway { height: auto; min-height: auto; }
        .bento-grid-master { grid-template-columns: 1fr; grid-auto-rows: auto; }
        .bento-v3-large, .bento-v3-wide { grid-column: span 1; grid-row: span 1; }
        .bento-v3-item { min-height: 300px; }
        .section-title-visionary { font-size: 2.5rem; text-align: center; }
        .hero-actions-v3 { flex-direction: column; width: 100%; max-width: 320px; margin: 0 auto; }
        .btn-visionary { width: 100%; text-align: center; }
        .trust-flex-v2 { flex-direction: column; align-items: flex-start; padding-left: 20px; gap: 20px; }
        .pillars-grid-v3 { grid-template-columns: 1fr; }
        .hero-lead { text-align: center; margin-bottom: 35px; }
        .oradent-hero-content { text-align: center; }
      }
    </style>
  </div>
  `;
};

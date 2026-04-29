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
<<<<<<< HEAD
      setInterval(nextSlide, 6000);
      dots.forEach((dot, i) => {
        dot.onclick = () => { current = i; showSlide(i); };
=======
      const interval = setInterval(nextSlide, 7000);
      dots.forEach((dot, i) => {
        dot.onclick = () => {
          clearInterval(interval);
          current = i;
          showSlide(i);
        };
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
      });
    }
  }, 100);

  return `
<<<<<<< HEAD
  <div class="app-section home-root">
    
    <!-- VISIONARY HERO SLIDER -->
    <section class="hero-gateway">
      <div class="hero-slider-v2">
        
        <!-- SLIDE 1: THE STRATEGIC GATEWAY -->
        <div class="hero-slide active" style="background-image: linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.4)), url('/images/hero_medical_hub.png')">
          <div class="container hero-content-v2" style="padding-top: 120px; display: flex; justify-content: center; text-align: center;">
            <div class="glass-hero-card fade-in-up" style="max-width: 800px;">
              <div class="hero-tag">African Logistical Hub</div>
              <h1>Africa’s Strategic <span class="primary-text">Gateway</span> <br> to Global Medical Technology</h1>
              <p>Leveraging the <strong>Dentos Dire Dawa Free Trade Zone</strong> to bridge world-class medical innovation with the African continent.</p>
              <div class="hero-actions" style="display: flex; justify-content: center; gap: 15px;">
                <a href="#/products?segment=medical" class="btn btn-primary">Explore Medical Solutions</a>
                <a href="#/partners" class="btn btn-outline">Our Global Partners</a>
=======
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
              <p class="hero-lead">Leveraging the Dentose Dire Dawa Free Trade Zone to bridge world-class medical innovation with the African continent.</p>
              <div class="hero-actions-v3">
                 <a href="#/products?segment=medical" class="btn btn-primary btn-visionary">Explore Medical Solutions</a>
                 <a href="#/partners" class="btn btn-outline btn-visionary">Our Global Partners</a>
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <!-- SLIDE 2: DISTRIBUTION HUB (Logistics & Tech) -->
        <div class="hero-slide" style="background-image: linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.4)), url('/images/hero_africa_logistics.png')">
          <div class="container hero-content-v2" style="padding-top: 120px; display: flex; justify-content: center; text-align: center;">
            <div class="glass-hero-card" style="max-width: 800px;">
              <div class="hero-tag">Continental Fulfillment</div>
              <h1>Seamless Distribution <br> <span class="primary-text">Across Africa</span></h1>
              <p>Merging global medical tech with world-class shipping and logistics in Dire Dawa to ensure healthcare accessibility for all.</p>
              <div class="hero-actions" style="display: flex; justify-content: center;">
                <a href="#/about" class="btn btn-primary">The Free Trade Zone Hub</a>
=======
        <!-- SLIDE 2: DISTRIBUTION HUB -->
        <div class="hero-slide" style="background-image: linear-gradient(rgba(255, 255, 255, 0.92), rgba(240, 244, 248, 0.85)), url('/images/hero_africa_logistics.png')">
           <div class="container hero-container-v3">
            <div class="oradent-hero-content">
              <div class="hero-badge-v3">CONTINENTAL FULFILLMENT</div>
              <h1 class="section-title-visionary">Seamless Distribution <span class="accent-text">Across Africa</span></h1>
              <p class="hero-lead">Merging global medical tech with world-class shipping and logistics in Dire Dawa to ensure healthcare accessibility for all.</p>
              <div class="hero-actions-v3">
                 <a href="#/about" class="btn btn-primary btn-visionary">The Free Trade Zone Hub</a>
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
              </div>
            </div>
          </div>
        </div>

      </div>
      
<<<<<<< HEAD
      <div class="hero-nav-dots">
=======
      <div class="hero-nav-dots-v3">
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
        <span class="hero-dot active"></span>
        <span class="hero-dot"></span>
      </div>
    </section>

<<<<<<< HEAD
    <!-- Trust Ribbon (Certifications) -->
    <section class="trust-ribbon pattern-bg">
      <div class="container trust-flex">
        <div class="trust-item">
          <i class="fas fa-file-medical-alt glow-icon"></i>
          <span>ISO 13485 Certified Hub</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-shipping-fast glow-icon"></i>
          <span>Free Trade Zone Logistics</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-microscope glow-icon"></i>
          <span>Medical-Grade Fulfillment</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-globe-africa glow-icon"></i>
          <span>Pan-African Distribution</span>
        </div>
      </div>
    </section>

    <!-- Core About Section (Pivoted) -->
    <section class="section about-premium fade-in bg-light">
      <div class="container about-grid">
        <div class="about-content">
          <div class="subtitle text-primary">Strategic Vision</div>
          <h2 style="font-size: 2.8rem; line-height: 1.1; margin-bottom: 20px;">The Future of African <span class="primary-text">Medical Logistics</span></h2>
          <p class="text-muted" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
            Dentose Chamo Trading PLC operates at the intersection of global medical manufacturing and African market accessibility. Through our <strong>Dentos Dire Dawa Free Trade Zone</strong>, we provide an streamlined logistical corridor for the continent's most critical healthcare supplies.
          </p>
          <a href="#/about" class="btn btn-primary" style="padding: 15px 35px;">Learn About Our Hub <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
        </div>
        <div class="about-visuals">
          <div class="glass-orb orb-1"></div>
          <div class="glass-orb orb-2"></div>
          <div class="glass-card-accent glass-premium">
             <div class="icon-ring"><i class="fas fa-warehouse text-primary"></i></div>
             <div>
               <h4 style="margin:0; font-size: 1.2rem;">Addis Ababa</h4>
               <p style="margin:0; font-size: 0.9rem; color: var(--text-muted);">Regional Operations HQ</p>
=======
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
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
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
          
          <!-- Dentose Dire Dawa -->
          <a href="#/companies/dentos-dire-dawa" class="bento-v3-item glass-card-v3 hover-lift dark-bento-card">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Logistics & FTZ</div>
              <h3>Dentose Dire Dawa</h3>
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
<<<<<<< HEAD

  <style>
    /* Generic Typography Enhancements */
    .primary-text { color: var(--primary); }
    .text-secondary { color: var(--secondary); }
    .mb-40 { margin-bottom: 40px; }
    .mb-10 { margin-bottom: 10px; }
    .text-muted { color: var(--text-muted); }
    
    .subtitle {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      margin-bottom: 10px;
      display: inline-block;
      padding: 5px 15px;
      background: rgba(19, 70, 175, 0.1);
      border-radius: 50px;
    }

    /* Premium Glassmorphism */
    .glass-premium {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
    }
    
    .hover-lift {
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    }
    .hover-lift:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    /* Split Hero Layout (Original) */
    /* VISIONARY HERO SLIDER FIX */
    .hero-gateway { width: 100%; height: 100vh; position: relative; overflow: hidden; margin-top: -80px; }
    .hero-slider-v2 { width: 100%; height: 100%; position: relative; }
    
    .hero-slide {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover; background-position: center;
      display: none; align-items: center; justify-content: center;
      transition: opacity 1.2s ease;
    }
    .hero-slide.active { display: flex; opacity: 1; z-index: 1; animation: fadeIn 1.2s ease; }
    
    .hero-content-v2 { z-index: 10; width: 100%; display: flex; justify-content: center; }
    .glass-hero-card {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 60px;
      border-radius: 40px;
      max-width: 900px;
      color: white;
      text-align: center;
      box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    }
    
    .hero-tag {
      display: inline-block; padding: 6px 18px; background: var(--secondary);
      color: black; font-weight: 800; border-radius: 50px; font-size: 0.75rem;
      text-transform: uppercase; letter-spacing: 2px; margin-bottom: 25px;
    }
    .glass-hero-card h1 { font-size: 3.8rem; line-height: 1.15; font-weight: 800; margin-bottom: 25px; letter-spacing: -2px; }
    .glass-hero-card p { font-size: 1.3rem; line-height: 1.6; opacity: 0.9; margin-bottom: 35px; max-width: 700px; margin-left: auto; margin-right: auto; font-weight: 500; }
    
    .hero-actions { display: flex; gap: 20px; justify-content: center; }
    .hero-nav-dots { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 20; }
    .hero-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.3); cursor: pointer; transition: 0.3s; }
    .hero-dot.active { background: var(--secondary); width: 35px; border-radius: 10px; }

    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    @media (max-width: 768px) {
      .hero-gateway { height: 100vh; }
      .glass-hero-card { padding: 40px 20px; border-radius: 0; background: rgba(10, 25, 47, 0.8); height: 100%; display: flex; flex-direction: column; justify-content: center; width: 100%; max-width: 100%; }
      .glass-hero-card h1 { font-size: 2.2rem; }
      .hero-actions { flex-direction: column; width: 100%; }
      .hero-actions .btn { width: 100%; }
    }

    /* Asymmetric About Section */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .about-visuals {
      position: relative;
      height: 450px;
      width: 100%;
      border-radius: 30px;
      perspective: 1000px;
    }
    .visual-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      position: relative;
      z-index: 2;
    }
    .glass-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      z-index: 1;
      opacity: 0.6;
    }
    .orb-1 {
      width: 300px; height: 300px;
      background: var(--primary);
      top: -50px; right: -50px;
    }
    .orb-2 {
      width: 250px; height: 250px;
      background: var(--secondary);
      bottom: -30px; left: -30px;
    }
    .glass-card-accent {
      position: absolute;
      bottom: 30px; right: -30px;
      padding: 20px 25px;
      z-index: 5;
      display: flex;
      align-items: center;
      gap: 15px;
      animation: float 6s ease-in-out infinite;
    }
    .icon-ring {
      width: 50px; height: 50px;
      border-radius: 50%;
      background: rgba(19, 70, 175, 0.1);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem;
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    @media (max-width: 992px) {
      .about-grid { grid-template-columns: 1fr; }
      .glass-card-accent { right: 20px; }
    }

    /* Trust Ribbon */
    .trust-ribbon {
      background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
      padding: 30px 0;
      color: white;
      position: relative;
      overflow: hidden;
    }
    .pattern-bg::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(rgba(255,255,255,0.1) 2px, transparent 2px);
      background-size: 30px 30px;
      opacity: 0.3;
    }
    .trust-flex {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 20px;
      position: relative;
      z-index: 2;
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .glow-icon {
      font-size: 1.8rem;
      color: #fff;
      text-shadow: 0 0 15px rgba(255,255,255,0.6);
    }
    .glow-icon-secondary {
      font-size: 1.8rem;
      color: var(--secondary);
      text-shadow: 0 0 15px rgba(255,219,63,0.6);
    }

    /* Bento Grid System */
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 250px;
      gap: 20px;
    }
    .bento-item {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .bento-large {
      grid-column: span 2;
      grid-row: span 2;
    }
    .bento-wide {
      grid-column: span 2;
    }
    .bento-content {
      position: relative;
      z-index: 2;
      padding: 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      background: rgba(255, 255, 255, 0.9);
    }
    .dark-theme .bento-content {
      background: linear-gradient(135deg, var(--primary-dark), var(--primary));
      color: white;
    }
    .dark-theme h3, .dark-theme p {
      color: white;
    }
    .bento-item h3 {
      font-size: 1.5rem; margin-bottom: 10px;
    }
    .bento-large h3 {
      font-size: 2.2rem;
    }
    .bento-item p {
      color: var(--text-muted);
      margin-bottom: 20px;
      font-size: 0.95rem;
    }
    .bento-large p { font-size: 1.1rem; max-width: 80%; }
    .icon-wrapper {
      width: 60px; height: 60px;
      border-radius: 15px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem;
      margin-bottom: auto;
    }
    .text-white { color: white !important; }
    
    .bento-link {
      display: inline-flex; align-items: center; gap: 8px;
      font-weight: 700; color: var(--primary);
      text-transform: uppercase; letter-spacing: 1px; font-size: 0.9rem;
    }
    .bento-link-sm { color: white; display: inline-flex; align-items: center; gap: 5px; font-weight: 600; }
    
    .bento-item:hover .icon-wrapper {
      background: var(--primary);
    }
    .bento-item:hover .icon-wrapper i {
      color: white !important;
    }
    .dark-theme:hover .icon-wrapper i {
       color: var(--primary) !important;
    }
    .dark-theme:hover .icon-wrapper {
       background: white;
    }
    
    .bento-bg {
      position: absolute; top:0; left:0; width:100%; height:100%;
      background-size: cover; background-position: center;
      opacity: 0.15; z-index: 1; transition: transform 0.8s ease;
    }
    .bento-item:hover .bento-bg {
      transform: scale(1.05);
      opacity: 0.25;
    }
    .bg-organic { opacity: 0.1; }

    @media (max-width: 900px) {
      .bento-grid { grid-template-columns: 1fr; grid-auto-rows: minmax(250px, auto); }
      .bento-large, .bento-wide { grid-column: span 1; grid-row: auto; }
      .bento-large p { max-width: 100%; }
    }

    /* Glowing Core Pillars */
    .premium-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
    }
    .neo-card {
      padding: 40px 20px;
      text-align: center;
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }
    .neo-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(19, 70, 175, 0.1);
      border-color: rgba(19, 70, 175, 0.3);
    }
    .neo-icon {
      font-size: 2.5rem;
      margin-bottom: 20px;
      position: relative;
      z-index: 2;
      color: var(--primary);
    }
    .neo-ring {
      position: absolute;
      width: 150px; height: 150px;
      border-radius: 50%;
      top: -20px; right: -40px;
      background: radial-gradient(circle, rgba(19,70,175,0.1) 0%, rgba(255,255,255,0) 70%);
      z-index: 1;
      transition: all 0.5s ease;
    }
    .neo-card:hover .neo-ring {
      transform: scale(1.5);
      background: radial-gradient(circle, rgba(255,219,63,0.15) 0%, rgba(255,255,255,0) 70%);
    }
    @media (max-width: 992px) {
      .premium-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 576px) {
      .premium-grid { grid-template-columns: 1fr; }
    }

  </style>
`;
=======
  `;
>>>>>>> 63cc4de30d4d3a76c73990b0e27448ef7e24d276
};

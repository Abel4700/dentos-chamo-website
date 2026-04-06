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
      setInterval(nextSlide, 6000);
      dots.forEach((dot, i) => {
        dot.onclick = () => { current = i; showSlide(i); };
      });
    }
  }, 100);

  return `
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
              </div>
            </div>
          </div>
        </div>

        <!-- SLIDE 2: DISTRIBUTION HUB (Logistics & Tech) -->
        <div class="hero-slide" style="background-image: linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.4)), url('/images/hero_africa_logistics.png')">
          <div class="container hero-content-v2" style="padding-top: 120px; display: flex; justify-content: center; text-align: center;">
            <div class="glass-hero-card" style="max-width: 800px;">
              <div class="hero-tag">Continental Fulfillment</div>
              <h1>Seamless Distribution <br> <span class="primary-text">Across Africa</span></h1>
              <p>Merging global medical tech with world-class shipping and logistics in Dire Dawa to ensure healthcare accessibility for all.</p>
              <div class="hero-actions" style="display: flex; justify-content: center;">
                <a href="#/about" class="btn btn-primary">The Free Trade Zone Hub</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div class="hero-nav-dots">
        <span class="hero-dot active"></span>
        <span class="hero-dot"></span>
      </div>
    </section>

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
             </div>
          </div>
          <img src="/images/about1.png" alt="Operations" class="visual-img" onerror="this.src='https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800';">
        </div>
      </div>
    </section>

    <!-- Trust Ribbon (Certifications) -->
    <section class="trust-ribbon pattern-bg">
      <div class="container trust-flex">
        <div class="trust-item">
          <i class="fas fa-file-medical-alt glow-icon"></i>
          <span>ISO 13485 Certified</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-tag glow-icon"></i>
          <span>ISO 20417 Compliant</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-microscope glow-icon"></i>
          <span>Prevest Authorized</span>
        </div>
        <div class="trust-item">
          <i class="fas fa-leaf glow-icon-secondary"></i>
          <span>Verified Organic</span>
        </div>
      </div>
    </section>

    <!-- Modern Bento Box Catalog -->
    <section class="section bento-section">
      <div class="container">
        <div class="text-center mb-40 fade-in">
          <div class="subtitle text-primary">Capabilities</div>
          <h2 style="font-size: 2.5rem;">Explore Our <span class="primary-text">Divisions</span></h2>
        </div>
        
        <div class="bento-grid">
          <!-- Large Feature (Orthodontics) -->
          <div class="bento-item bento-large group-ortho glass-premium hover-lift">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-content">
              <div class="icon-wrapper glass"><i class="fas fa-tooth text-primary"></i></div>
              <h3>Orthodontics</h3>
              <p>Advanced brackets, gauges, power chains, and arch wires designed for absolute precision alignment.</p>
              <a href="#/products?segment=medical&category=orthodontics" class="bento-link">View Division <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
          
          <!-- Endodontics -->
          <div class="bento-item group-endo glass-premium hover-lift dark-theme">
            <div class="bento-content">
              <div class="icon-wrapper glass"><i class="fas fa-syringe text-white"></i></div>
              <h3>Endodontics</h3>
              <p>High-quality sealers, posts, and specialized medicaments.</p>
              <a href="#/products?segment=medical" class="bento-link-sm">Explore <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
          
          <!-- Composites -->
          <div class="bento-item group-comp glass-premium hover-lift">
             <div class="bento-content">
              <div class="icon-wrapper glass"><i class="fas fa-fill-drip text-primary"></i></div>
              <h3>Composites</h3>
              <p>Universal restoratives and dynamic bonding agents.</p>
              <a href="#/products?segment=medical" class="bento-link-sm">Explore <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
          
          <!-- Wide Feature (Organic) -->
          <div class="bento-item bento-wide group-organic glass-premium border-secondary hover-lift">
             <div class="bento-bg bg-organic" style="background-image: url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800');"></div>
             <div class="bento-content">
              <div class="icon-wrapper glass"><i class="fas fa-seedling text-secondary"></i></div>
              <h3>Organic Agriculture</h3>
              <p>Premium grade oil seeds, including sesame and soy, sustainably sourced for global export standards.</p>
              <a href="#/products?segment=organic" class="bento-link text-secondary">View Commodities <i class="fas fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Glowing Core Pillars -->
    <section class="section values-premium bg-light">
      <div class="container text-center">
        <div class="subtitle text-primary mb-10">Our Principles</div>
        <h2 class="mb-40" style="font-size: 2.5rem;">Core <span class="primary-text">Pillars</span></h2>
        
        <div class="premium-grid">
          <div class="neo-card glass-premium fade-in">
            <div class="neo-ring ring-1"></div>
            <div class="neo-icon"><i class="fas fa-award"></i></div>
            <h3>Quality</h3>
            <p class="text-muted" style="font-size: 0.95rem;">Exceeding client expectations with fully certified products.</p>
          </div>
          <div class="neo-card glass-premium fade-in" style="animation-delay: 0.2s;">
            <div class="neo-ring ring-2"></div>
            <div class="neo-icon"><i class="fas fa-handshake"></i></div>
            <h3>Trust</h3>
            <p class="text-muted" style="font-size: 0.95rem;">Building legacy relationships through undeniable reliability.</p>
          </div>
          <div class="neo-card glass-premium fade-in" style="animation-delay: 0.4s;">
            <div class="neo-ring ring-3"></div>
            <div class="neo-icon"><i class="fas fa-shipping-fast"></i></div>
            <h3>Delivery</h3>
            <p class="text-muted" style="font-size: 0.95rem;">Global logistics ensured at the exact right time.</p>
          </div>
          <div class="neo-card glass-premium fade-in" style="animation-delay: 0.6s;">
            <div class="neo-ring ring-4"></div>
            <div class="neo-icon"><i class="fas fa-shield-alt"></i></div>
            <h3>Warranty</h3>
            <p class="text-muted" style="font-size: 0.95rem;">Full support and quality guarantee on all services.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

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
      .hero-gateway { height: 100vh; padding-top: 0; }
      .glass-hero-card { 
        padding: 40px 24px; 
        border-radius: 32px; 
        background: rgba(255, 255, 255, 0.08); 
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        height: auto; 
        width: 92%; 
        max-width: 92%; 
        margin: 0 auto;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      }
      .glass-hero-card h1 { font-size: 2.1rem; line-height: 1.2; letter-spacing: -1px; }
      .glass-hero-card p { font-size: 1.05rem; margin-bottom: 25px; }
      .hero-actions { flex-direction: column; width: 100%; gap: 12px; }
      .hero-actions .btn { width: 100%; padding: 14px; font-size: 0.95rem; }
      .hero-tag { margin-bottom: 15px; font-size: 0.7rem; }
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
};

export const Home = () => `
  <div class="app-section home-portal">
    <!-- Symmetrical Split Hero -->
    <div class="portal-container">
      <!-- Medical Import Segment -->
      <div class="portal-segment medical-segment" style="background-image: linear-gradient(rgba(19, 70, 175, 0.7), rgba(19, 70, 175, 0.7)), url('/images/hero1.png')">
        <div class="portal-content">
          <div class="segment-icon"><i class="fas fa-microscope"></i></div>
          <h2>Medical <span class="accent">Import</span></h2>
          <p>Premium Dental Equipment, Orthodontic Materials & Laboratory Reagents.</p>
          <a href="#/products?segment=medical" class="btn btn-secondary">Enter Medical Portal</a>
        </div>
      </div>

      <!-- Organic Export Segment -->
      <div class="portal-segment organic-segment" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/about1.png')">
        <div class="portal-content">
          <div class="segment-icon"><i class="fas fa-seedling"></i></div>
          <h2>Organic <span class="accent">Export</span></h2>
          <p>High-Quality Sesame Seeds, Oil Crops & Organic Pulses.</p>
          <a href="#/products?segment=organic" class="btn btn-secondary">Enter Organic Portal</a>
        </div>
      </div>
    </div>
    
    <!-- Dynamic Product Slider (Impact Showcase) -->
    <section class="section slider-section fade-in">
      <div class="container">
        <div class="text-center mb-40">
          <div class="subtitle text-primary">Featured Impact</div>
          <h2>Discover Our <span class="primary-text">Innovations</span></h2>
        </div>
        <div id="home-slider" class="premium-slider-container glass"></div>
      </div>
    </section>

    <!-- Sophisticated Asymmetric About Section -->
    <section class="section about-premium fade-in bg-light">
      <div class="container about-grid">
        <div class="about-content">
          <div class="subtitle text-primary">Our Genesis</div>
          <h2 style="font-size: 2.8rem; line-height: 1.1; margin-bottom: 20px;">Bridging Healthcare & <span class="primary-text">Agriculture</span></h2>
          <p class="text-muted" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
            Dentos Chamo Import & Export PLC connects premium global healthcare innovation with high-yield organic agriculture in East Africa. We provide elite, certified dental solutions and sustainably sourced commodities under strict B2B compliance standards.
          </p>
          <a href="#/about" class="btn btn-primary" style="padding: 15px 35px;">Discover Our Legacy <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
        </div>
        <div class="about-visuals">
          <div class="glass-orb orb-1"></div>
          <div class="glass-orb orb-2"></div>
          <div class="glass-card-accent glass-premium">
             <div class="icon-ring"><i class="fas fa-globe-africa text-primary"></i></div>
             <div>
               <h4 style="margin:0; font-size: 1.2rem;">East Africa</h4>
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
    .home-portal { margin-top: -80px; }
    .portal-container { display: flex; height: 100vh; width: 100%; position: relative; overflow: hidden; }
    .portal-segment { flex: 1; height: 100%; background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); position: relative; }
    .portal-segment:hover { flex: 1.2; }
    .portal-content { text-align: center; color: var(--white); max-width: 400px; padding: 20px; z-index: 10; }
    .segment-icon { font-size: 3rem; margin-bottom: 20px; color: var(--secondary); }
    .portal-content h2 { font-size: 3rem; margin-bottom: 15px; }
    @media (max-width: 992px) { .portal-container { flex-direction: column; height: 160vh; } }

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

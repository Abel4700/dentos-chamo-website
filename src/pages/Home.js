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
        <h2 class="text-center mb-20">Featured <span class="primary-text">Impact</span></h2>
        <div id="home-slider" class="premium-slider-container glass"></div>
      </div>
    </section>

    <!-- Company Overview & Certifications -->
    <section class="section bg-light text-center">
      <div class="container">
        <h2>About <span class="primary-text">Dentos Chamo</span></h2>
        <p class="max-600 mb-20" style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 40px;">
          Dentos Chamo Import & Export PLC bridges the gap between premium global healthcare innovation and 
          high-yield organic agriculture. Operating in East Africa, we provide certified dental solutions and 
          sustainably sourced agricultural commodities, adhering strictly to international B2B standards.
        </p>

        <div class="grid-4 mb-20">
          <div class="value-card glass fade-in">
            <i class="fas fa-file-medical-alt"></i>
            <h3>ISO 13485</h3>
            <p>Quality management systems for medical devices and traceability.</p>
          </div>
          <div class="value-card glass fade-in">
            <i class="fas fa-tag"></i>
            <h3>ISO 20417</h3>
            <p>Information and labeling provided by medical manufacturers.</p>
          </div>
          <div class="value-card glass fade-in">
            <i class="fas fa-microscope"></i>
            <h3>Prevest Dental</h3>
            <p>Authorized distributor of top-tier endodontic compounds.</p>
          </div>
          <div class="value-card glass fade-in">
            <i class="fas fa-leaf"></i>
            <h3>Organic Certified</h3>
            <p>Sustainable, pure-grade agricultural exports.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leading Categories Grid -->
    <section class="section" style="padding-top: 40px;">
      <div class="container text-center">
        <h2 class="mb-20">Browse Our <span class="primary-text">Catalog</span></h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
          <div class="glass" style="padding: 20px; border-radius: 15px; background: white;">
            <i class="fas fa-tooth text-primary" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>Orthodontics</h3>
            <p class="text-muted" style="font-size: 0.9rem;">Brackets, gauges, power chains, and wires.</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: 15px; background: white;">
            <i class="fas fa-syringe text-primary" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>Endodontics</h3>
            <p class="text-muted" style="font-size: 0.9rem;">Sealers, pastes, and medicaments.</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: 15px; background: white;">
            <i class="fas fa-fill-drip text-primary" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>Composites</h3>
            <p class="text-muted" style="font-size: 0.9rem;">Universal restoratives and bonding agents.</p>
          </div>
          <div class="glass" style="padding: 20px; border-radius: 15px; background: white;">
            <i class="fas fa-seedling text-secondary" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>Oil Seeds</h3>
            <p class="text-muted" style="font-size: 0.9rem;">Premium grade sesame and soy seeds.</p>
          </div>
        </div>
        <div style="margin-top: 40px;">
          <a href="#/products" class="btn btn-primary" style="padding: 12px 30px; font-size: 1.1rem;">Explore Full Catalog <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="section values-section bg-light" style="padding-top: 0;">
      <div class="container grid-4">
        <div class="value-card glass fade-in">
          <i class="fas fa-award"></i>
          <h3>Quality</h3>
          <p>Exceeding client expectations with certified products.</p>
        </div>
        <div class="value-card glass fade-in">
          <i class="fas fa-handshake"></i>
          <h3>Trust</h3>
          <p>Building legacy relationships through reliability.</p>
        </div>
        <div class="value-card glass fade-in">
          <i class="fas fa-shipping-fast"></i>
          <h3>Delivery</h3>
          <p>Global logistics ensured at the right time.</p>
        </div>
        <div class="value-card glass fade-in">
          <i class="fas fa-shield-alt"></i>
          <h3>Warranty</h3>
          <p>Full support and quality guarantee on all services.</p>
        </div>
      </div>
    </section>

    <!-- Brief Intro -->
    <section class="section">
      <div class="container text-center">
        <h2>Bridging Dental Innovation & <span class="primary-text">Global Agriculture</span></h2>
        <p class="max-600">Dentos Chamo Import & Export PLC is a multi-disciplinary corporate entity dedicated to healthcare excellence and organic commodity distribution in East Africa.</p>
      </div>
    </section>
  </div>

  <style>
    .home-portal {
      margin-top: -80px;
    }
    
    .portal-container {
      display: flex;
      height: 100vh;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .portal-segment {
      flex: 1;
      height: 100%;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .portal-segment:hover {
      flex: 1.2;
    }

    .portal-content {
      text-align: center;
      color: var(--white);
      max-width: 400px;
      padding: 20px;
      z-index: 10;
    }

    .segment-icon {
      font-size: 3rem;
      margin-bottom: 20px;
      color: var(--secondary);
    }

    .portal-content h2 {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .brand-anchor {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 15px 30px;
      border-radius: 50px;
      z-index: 20;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    .brand-anchor img {
      height: 60px;
      width: auto;
    }

    .slogan-badge {
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: var(--primary);
      text-transform: uppercase;
      background: var(--secondary);
      padding: 4px 12px;
      border-radius: 20px;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .value-card {
      padding: 30px;
      text-align: center;
      border-radius: 20px;
    }

    .value-card i {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 15px;
    }

    .max-600 { margin: 20px auto 0; max-width: 600px; }

    @media (max-width: 992px) {
      .portal-container { flex-direction: column; height: 160vh; }
      .brand-anchor { transform: translate(-50%, -50%) scale(0.8); }
      .grid-4 { grid-template-columns: 1fr 1fr; }
    }
  </style>
`;

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
  <div class="app-section home-root">
    
    <!-- BACKGROUND ANIMATED DECORATION -->
    <div class="global-background-orbs">
       <div class="glass-orb orb-primary"></div>
       <div class="glass-orb orb-accent"></div>
    </div>
 
    <!-- 🚀 VISIONARY HERO SLIDER V3 (ORA-DENT THEME) -->
    <section class="hero-gateway">
      <div class="hero-slider-v3">
        
        <!-- SLIDE 1: THE STRATEGIC GATEWAY -->
        <div class="hero-slide active" style="background-image: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('/images/hero_medical_hub.png')">
          <div class="container hero-container-v3">
            <div class="oradent-hero-content fade-in-up">
              <div class="hero-badge-v3">CLINICAL EXCELLENCE</div>
              <h1 class="section-title-visionary">The New Frontier of <span class="accent-text">Clinical Aesthetics</span></h1>
              <p class="hero-lead">Ora-Dent specializes in the precision of oral hygiene and the science of aesthetic wellness, delivering expert solutions that bridge healthcare and confidence.</p>
              <div class="hero-actions-v3">
                 <a href="#/products" class="btn btn-primary btn-visionary">Explore Collection</a>
                 <a href="#/contact" class="btn btn-outline btn-visionary">Contact Specialist</a>
              </div>
            </div>
          </div>
        </div>

        <!-- SLIDE 2: DISTRIBUTION HUB -->
        <div class="hero-slide" style="background-image: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('/images/hero_africa_logistics.png')">
           <div class="container hero-container-v3">
            <div class="oradent-hero-content">
              <div class="hero-badge-v3">DISTRIBUTION HUB</div>
              <h1 class="section-title-visionary">Global Medical Tech <span class="accent-text">Delivered</span></h1>
              <p class="hero-lead">We connect world-class medical innovation with regional markets, ensuring quality healthcare solutions reach every specialist.</p>
              <div class="hero-actions-v3">
                 <a href="#/about" class="btn btn-primary btn-visionary">Our Operations</a>
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

    <!-- 💎 TRUST RIBBON: ORA-DENT EDITION -->
    <section class="trust-ribbon-v2">
      <div class="container">
        <div class="trust-flex-v2">
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-certificate"></i></div>
            <span>Certified Clinical Standards</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-flask"></i></div>
            <span>Aesthetic Science Hub</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-user-md"></i></div>
            <span>Specialist-First Distribution</span>
          </div>
          <div class="trust-item-v2">
            <div class="trust-icon-v3"><i class="fas fa-shield-alt"></i></div>
            <span>Premium Product Guarantee</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏛️ STRATEGIC MISSION -->
    <section class="section mission-clinical">
      <div class="container about-grid-v3">
        <div class="about-content-v3 fade-in">
          <div class="hero-badge-v3 no-margin">OUR MISSION</div>
          <h2 class="section-title-visionary">Empowering Practitioners <br>with <span class="accent-text">Advanced Tools</span></h2>
          <p class="text-muted-standard">
            Ora-Dent Medical is committed to elevating the standard of oral healthcare across Africa. We bridge the gap between global innovations and local practitioners by providing mission-critical equipment and reagents.
          </p>
          <a href="#/about" class="btn btn-primary btn-visionary">Learn About Ora-Dent <i class="fas fa-arrow-right" style="margin-left: 12px;"></i></a>
        </div>
        <div class="about-visuals-v3">
          <div class="glass-orb-glow"></div>
          <div class="about-main-img-container">
             <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" alt="Ora-Dent Operations" class="img-visionary">
          </div>
        </div>
      </div>
    </section>

    <!-- 🍱 MASTER BENTO: SUBSIDIARY SHOWCASE -->
    <section class="section bento-section-v2">
      <div class="container">
        <div class="section-header-centered fade-in">
          <div class="hero-badge-v3">GROUP OVERVIEW</div>
          <h2 class="section-title-visionary text-center">The Dentose Chamo <span class="accent-text">Group Advantage</span></h2>
        </div>
        
        <div class="bento-grid-master">
          <!-- Parent Hub -->
          <a href="#/companies/dentos-chamo" class="bento-v3-item bento-v3-large glass-card-v3 hover-lift group-parent">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Parent Hub</div>
              <h3>Dentose Chamo Trading</h3>
              <p>The strategic core of our medical and laboratory distribution network across the region.</p>
              <div class="bento-icon-glow"><i class="fas fa-city"></i></div>
            </div>
          </a>
          
          <!-- Dentose Dire Dawa -->
          <a href="#/companies/dentos-dire-dawa" class="bento-v3-item glass-card-v3 hover-lift">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">FTZ Division</div>
              <h3>Dire Dawa Logistics</h3>
              <p>Specialized Free Trade Zone fulfillment ensuring regional accessibility.</p>
              <div class="bento-icon-glow"><i class="fas fa-truck-container"></i></div>
            </div>
          </a>
          
          <!-- OraDent -->
          <a href="#/companies/ora-dent" class="bento-v3-item glass-card-v3 hover-lift active-card">
            <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1609188076864-c35269146b09?auto=format&fit=crop&q=80&w=800');"></div>
            <div class="bento-v3-content">
              <div class="bento-tag">Aesthetic Specialist</div>
              <h3>Ora-Dent Oral Cosmetics</h3>
              <p>Our flagship division for high-end dental aesthetics and oral cosmetics.</p>
              <div class="bento-icon-glow"><i class="fas fa-tooth"></i></div>
            </div>
          </a>
          
          <!-- Akedent -->
          <a href="#/companies/akedent" class="bento-v3-item bento-v3-wide glass-card-v3 hover-lift">
             <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200');"></div>
             <div class="bento-v3-content">
              <div class="bento-tag">Pharmaceutical</div>
              <h3>Akedent Whole Sale</h3>
              <p>Heavy machinery and pharmaceutical distribution for hospitals and research labs.</p>
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
        --home-primary: var(--primary);
        --home-accent: var(--secondary);
        --home-bg: var(--bg-light);
        --home-border: var(--glass-border);
      }

      .home-root { background: var(--home-bg); color: var(--text-main); width: 100%; position: relative; overflow-x: clip; }
      .accent-text { color: var(--home-accent); }
      .primary-text { color: var(--home-primary); }

      /* GLOBAL DECORATION */
      .global-background-orbs { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; }
      .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.08; animation: orbMove 25s infinite alternate ease-in-out; }
      .orb-primary { width: 600px; height: 600px; background: var(--home-primary); top: -200px; right: -100px; }
      .orb-accent { width: 400px; height: 400px; background: var(--home-accent); bottom: 100px; left: -100px; animation-delay: -5s; }
      @keyframes orbMove { from { transform: translate(0,0); } to { transform: translate(150px, 150px); } }

      /* HERO SLIDER V3 (CINEMATIC DARK OVERLAY) */
      .hero-gateway { position: relative; }
      .hero-slider-v3 { display: grid; }
      .hero-slide { 
        grid-area: 1 / 1; 
        width:100%; 
        padding: 240px 20px 120px; 
        background-size: cover; 
        background-position: center; 
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        opacity: 0; 
        pointer-events: none; 
        transition: opacity 1.2s ease;
        color: white;
      }
      .hero-slide.active { opacity: 1; pointer-events: auto; z-index: 5; }
      .hero-container-v3 { z-index: 10; width: 100%; }
      .oradent-hero-content { max-width: 900px; text-align: left; }
      .hero-slide.active .oradent-hero-content { animation: fadeInUp 0.8s forwards; }
      
      .hero-badge-v3 { display: inline-block; padding: 10px 22px; background: rgba(0, 209, 193, 0.15); border: 1px solid rgba(0, 209, 193, 0.4); border-radius: 50px; color: var(--secondary); font-weight: 800; font-size: 0.75rem; letter-spacing: 2.5px; margin-bottom: 30px; text-transform: uppercase; }
      .hero-badge-v3.no-margin { margin-bottom: 20px; }
      
      .section-title-visionary { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; margin-bottom: 25px; color: white; }
      .hero-lead { font-size: clamp(1.1rem, 2vw, 1.4rem); color: rgba(255, 255, 255, 0.8); max-width: 750px; margin-bottom: 45px; line-height: 1.6; }
      .hero-actions-v3 { display: flex; gap: 20px; }
      .hero-nav-dots-v3 { position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 20; }
      .hero-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.2); cursor: pointer; transition: 0.4s; }
      .hero-dot.active { width: 35px; border-radius: 10px; background: var(--home-accent); box-shadow: 0 0 15px var(--home-accent); }

      /* TRUST RIBBON V2 */
      .trust-ribbon-v2 { background: #ffffff; border-top: 1px solid var(--home-border); border-bottom: 1px solid var(--home-border); padding: 40px 0; position: relative; z-index: 5; box-shadow: var(--shadow-sm); }
      .trust-flex-v2 { display: flex; justify-content: space-around; flex-wrap: wrap; gap: 30px; }
      .trust-item-v2 { display: flex; align-items: center; gap: 15px; font-weight: 700; font-size: 1.1rem; }
      .trust-icon-v3 { font-size: 2rem; color: var(--home-accent); }

      /* MISSION CLINICAL */
      .about-grid-v3 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
      .text-muted-standard { font-size: 1.25rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 40px; }
      .about-visuals-v3 { position: relative; height: 500px; display: flex; align-items: center; justify-content: center; }
      .about-main-img-container { width: 100%; height: 500px; border-radius: 40px; overflow: hidden; box-shadow: var(--shadow-lg); }
      .img-visionary { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .about-main-img-container:hover .img-visionary { transform: scale(1.05); }
      .glass-orb-glow { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0, 209, 193, 0.1) 0%, transparent 70%); top: -50px; right: -50px; z-index: 1; }

      /* BENTO MASTER GRID */
      .bento-grid-master { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 340px; gap: 30px; position: relative; z-index: 5; }
      .glass-card-v3 { background: #ffffff; border: 1px solid var(--home-border); border-radius: 35px; transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); box-shadow: var(--shadow-md); }
      .bento-v3-item { position: relative; overflow: hidden; text-decoration:none; color: var(--text-main); }
      .bento-v3-large { grid-column: span 2; grid-row: span 2; }
      .bento-v3-wide { grid-column: span 2; }
      
      .active-card { border-color: var(--home-accent); box-shadow: 0 20px 40px rgba(0, 209, 193, 0.15); }
      
      .bento-v3-content { position: relative; z-index: 10; padding: 30px; height: 100%; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; }
      .bento-v3-large .bento-v3-content { padding: 45px; }
      .bento-bg { position: absolute; top:0; left:0; width:100%; height:100%; background-size:cover; background-position:center; opacity: 0.05; z-index:1; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
      .bento-v3-item:hover .bento-bg { transform: scale(1.1); opacity: 0.1; }
      .bento-v3-item:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
      
      .bento-tag { display: inline-block; padding: 6px 14px; background: #f1f5f9; border-radius: 50px; font-size: 0.7rem; font-weight: 800; color: var(--text-muted); margin-bottom: 20px; text-transform: uppercase; }
      .bento-icon-glow { font-size: 3.2rem; color: var(--home-accent); margin-top: auto; }
      .bento-v3-item h3 { font-size: 1.65rem; font-weight: 800; margin-bottom: 12px; line-height: 1.2; color: var(--text-main); }
      .bento-v3-large h3 { font-size: 3.2rem; margin-bottom: 20px; }
      .bento-v3-item p { color: var(--text-muted); line-height: 1.6; font-size: 1.05rem; }

      /* PILLARS CINEMATIC */
      .pillars-grid-v3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
      .pillar-card-v3 { padding: 50px 30px; text-align: center; position: relative; background: #ffffff; border-radius: 30px; box-shadow: var(--shadow-md); border: 1px solid var(--home-border); }
      .pillar-icon-v3 { font-size: 3.5rem; color: var(--home-accent); margin-bottom: 30px; }
      .pillar-card-v3 h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 15px; color: var(--text-main); }
      .pillar-card-v3 p { color: var(--text-muted); font-size: 1rem; line-height: 1.5; }

      /* BUTTON VISIONARY */
      .btn-visionary { padding: 18px 40px; font-weight: 800; border-radius: 18px; font-size: 1.05rem; transition: var(--transition); }
      .btn-primary { background: var(--primary); color: white; border: none; }
      .btn-primary:hover { background: var(--primary-dark); transform: translateY(-5px); box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3); }
      .btn-outline { border: 2px solid #e2e8f0; color: var(--text-main); }
      .btn-outline:hover { background: #f8fafc; border-color: var(--home-accent); color: var(--home-accent) !important; }

      /* RESPONSIVE */
      @media (max-width: 1200px) {
        .bento-grid-master { grid-template-columns: repeat(2, 1fr); }
        .bento-v3-large, .bento-v3-wide { grid-column: span 2; }
        .about-grid-v3 { grid-template-columns: 1fr; gap: 50px; }
      }
      @media (max-width: 768px) {
        .bento-grid-master { grid-template-columns: 1fr; grid-auto-rows: auto; }
        .bento-v3-large, .bento-v3-wide { grid-column: span 1; grid-row: span 1; }
        .bento-v3-item { min-height: 300px; }
        .section-title-visionary { font-size: 2.5rem; text-align: center; }
        .hero-actions-v3 { flex-direction: column; }
        .trust-flex-v2 { flex-direction: column; align-items: flex-start; padding-left: 20px; }
        .pillars-grid-v3 { grid-template-columns: 1fr; }
        .oradent-hero-content { text-align: center; }
      }
    </style>
  </div>
  `;
};

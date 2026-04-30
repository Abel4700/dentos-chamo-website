export const OraDent = () => {
  return `
    <div class="app-section oradent-root dark-theme-page">
      
      <!-- BACKGROUND ANIMATED ORBS -->
      <div class="bg-decoration">
        <div class="glass-orb orb-primary"></div>
        <div class="glass-orb orb-accent"></div>
        <div class="glass-orb orb-secondary"></div>
      </div>

      <!-- PREMIUM HERO SECTION: THE ALCHEMY OF ORAL EXCELLENCE -->
      <section class="oradent-hero">
        <div class="container hero-container-v3">
          <div class="oradent-hero-content fade-in-up">
            <div class="oradent-logo-hero-container">
               <img src="/assets/ora_dent oral_white_logo.png" alt="Ora-Dent Logo" class="oradent-hero-logo">
            </div>
            <h1>The New Frontier of <span class="accent-text">Clinical Aesthetics</span></h1>
            <p class="hero-lead">Ora-Dent specializes in the precision of oral hygiene and the science of aesthetic wellness, delivering expert solutions that bridge healthcare and confidence.</p>
            <div class="hero-actions-v3">
               <a href="#/products?company=oradent" class="btn btn-primary btn-visionary">Explore Collection</a>
               <a href="#/contact" class="btn btn-outline text-white btn-visionary">Contact Specialist</a>
            </div>
          </div>
        </div>
        <div class="oradent-hero-overlay"></div>
      </section>

      <!-- STRATEGIC FOCUS: BENTO MATRIX 2.0 -->
      <section class="section">
        <div class="container">
          <h2 class="section-title-visionary">Strategic <span class="accent-text">Focus Areas</span></h2>
          <div class="oradent-bento-grid">
            
            <!-- Precision Hygiene -->
            <div class="bento-v3-item bento-v3-large glass-card-v3 hover-lift dark-bento">
              <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800');"></div>
              <div class="bento-v3-content">
                <div class="bento-tag">Innovation</div>
                <h3>Precision Oral Hygiene Systems</h3>
                <p>Deploying advanced clinical-grade formulations designed for maximum diagnostic efficacy and preventative care.</p>
                <div class="bento-icon-glow"><i class="fas fa-sparkles"></i></div>
              </div>
            </div>

            <!-- Aesthetic Enhancement -->
            <div class="bento-v3-item glass-card-v3 hover-lift">
               <div class="bento-v3-content">
                <div class="bento-icon-glow"><i class="fas fa-magic"></i></div>
                <div class="bento-tag">Aesthetics</div>
                <h3>Clinical Enhancements</h3>
                <p>Professional-grade whitening and restorative technology.</p>
              </div>
            </div>

            <!-- Wellness Formulations -->
            <div class="bento-v3-item glass-card-v3 hover-lift">
               <div class="bento-v3-content">
                <div class="bento-icon-glow"><i class="fas fa-flask"></i></div>
                <div class="bento-tag">Wellness</div>
                <h3>Personal Wellness</h3>
                <p>Hybrid solutions merging hygiene with aesthetic vitality.</p>
              </div>
            </div>

            <!-- Portfolio Extension -->
            <div class="bento-v3-item bento-v3-wide glass-card-v3 hover-lift">
              <div class="bento-bg" style="background-image: url('https://images.unsplash.com/photo-1609840114035-3c981b782def?auto=format&fit=crop&q=80&w=800');"></div>
              <div class="bento-v3-content">
                <div class="bento-tag">Portfolio Extension</div>
                <h3>Advanced Care Technology</h3>
                <p>Comprehensive hygiene toolkits and cosmetic dental lab solutions for practitioners and distributors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO SHOWCASE: BENTO CATEGORIES -->
      <section class="section" style="background: rgba(39, 62, 190, 0.03);">
        <div class="container">
          <h2 class="section-title-visionary">Core <span class="accent-text">Portfolio Hive</span></h2>
            <div class="highlight-card glass-card-v3">
               <div class="highlight-icon"><i class="fas fa-tooth"></i></div>
               <h3>Advanced Toothpastes</h3>
               <p>Clinical-grade pastes optimized for sensitivity, whitening, and periodontal health.</p>
            </div>
            <div class="highlight-card glass-card-v3">
               <div class="highlight-icon"><i class="fas fa-bolt"></i></div>
               <h3>Whitening Tech</h3>
               <p>Next-generation LED and chemical accelerators for professional shade enhancement.</p>
            </div>
            <div class="highlight-card glass-card-v3">
               <div class="highlight-icon"><i class="fas fa-briefcase-medical"></i></div>
               <h3>Hygiene Toolkits</h3>
               <p>Specialized physical tools and electronic devices for professional oral maintenance.</p>
            </div>
            <div class="highlight-card glass-card-v3">
               <div class="highlight-icon"><i class="fas fa-vial"></i></div>
               <h3>Lab Cosmetics</h3>
               <p>In-lab aesthetics solutions for dental technicians and cosmetic practitioners.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- GROUP INTEGRATION CTA -->
      <section class="section oradent-cta">
        <div class="container text-center">
            <h2 class="text-white mb-30" style="font-size: 3rem;">A Unified <span class="accent-text">Aesthetic Ecosystem</span></h2>
            <p class="text-muted mb-60" style="font-size: 1.2rem; max-width: 800px; margin-left: auto; margin-right: auto;">Ora-Dent serves as the specialized aesthetic cosmetics unit of the Dentose Chamo Group, fully integrated into our regional distribution network.</p>
            <div class="cta-btns-centered">
               <a href="#/products?company=oradent" class="btn btn-primary btn-visionary">Explore Collection</a>
               <a href="#/contact" class="btn btn-outline text-white btn-visionary">Contact Division</a>
            </div>
        </div>
      </section>

      <style>
        :root {
          --od-primary: #273EBE;
          --od-accent: #00FFEE;
          --od-bg-dark: #0C0C0C;
          --od-border: #242424;
          --od-text-muted: #94a3b8;
        }

        .dark-theme-page { background-color: var(--od-bg-dark); color: white; overflow-x: clip; }
        .accent-text { color: var(--od-accent); }
        .primary-text { color: var(--od-primary); }

        /* ANIMATED BACKGROUND ORBS */
        .bg-decoration { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 0; pointer-events: none; }
        .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15; animation: orbFloat 20s infinite alternate ease-in-out; }
        .orb-primary { width: 600px; height: 600px; background: var(--od-primary); top: -200px; right: -100px; }
        .orb-accent { width: 400px; height: 400px; background: var(--od-accent); bottom: 100px; left: -100px; animation-delay: -5s; }
        .orb-secondary { width: 300px; height: 300px; background: #273EBE; top: 40%; right: 20%; animation-delay: -10s; }

        @keyframes orbFloat { from { transform: translate(0, 0); } to { transform: translate(100px, 100px); } }

        /* GLASS CARD V3 (PREMIUM DARK) */
        .glass-card-v3 {
          background: rgba(29, 29, 29, 0.7); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
          border: 1px solid var(--od-border); border-radius: 30px; box-shadow: 0 25px 80px rgba(0,0,0,0.5);
        }

        /* ORADENT HERO (CINEMATIC) */
        .oradent-hero {
          padding: 180px 20px 100px; position: relative; display: flex; flex-direction: column; justify-content: center; overflow: hidden;
          background: linear-gradient(to right, rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.4)), url('https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1920');
          background-size: cover; background-position: center; border-bottom: 1px solid var(--od-border);
        }
        .oradent-hero-content { max-width: 900px; text-align: center; color: white; z-index: 10; padding: 0 20px; }
        .oradent-hero-content h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; margin-bottom: 25px; }
        .hero-lead { font-size: clamp(1.1rem, 2vw, 1.4rem); color: var(--od-text-muted); max-width: 750px; margin: 0 auto 40px; line-height: 1.6; }
        .hero-badge-v3 { display: inline-block; padding: 8px 20px; background: rgba(0, 255, 238, 0.1); border: 1px solid rgba(0, 255, 238, 0.3); border-radius: 50px; color: var(--od-accent); font-weight: 800; font-size: 0.75rem; letter-spacing: 2.5px; margin-bottom: 30px; text-transform: uppercase; }
        .hero-actions-v3 { display: flex; gap: 20px; justify-content: center; }
        
        /* LOGO STYLING */
        .oradent-hero-logo { height: 120px; width: auto; margin-bottom: 20px; filter: drop-shadow(0 0 15px rgba(0, 255, 238, 0.4)); animation: logoPulse 4s infinite alternate ease-in-out; }
        .oradent-section-logo { height: 60px; margin-bottom: 15px; }
        .oradent-cta-logo { height: 90px; margin-bottom: 30px; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3)); }
        
        @keyframes logoPulse { 
          from { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0, 255, 238, 0.3)); } 
          to { transform: scale(1.03); filter: drop-shadow(0 0 25px rgba(0, 255, 238, 0.6)); } 
        }

        .section-header-branded { display: flex; flex-direction: column; align-items: flex-start; margin-bottom: 40px; }
        .oradent-cta-branding { display: flex; justify-content: center; }

        .section-title-visionary { font-size: clamp(2.5rem, 4.5vw, 4.2rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 30px; }

        /* BENTO FOCUS GRID */
        .oradent-bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 340px; gap: 25px; }
        .bento-v3-item { position: relative; border-radius: 30px; overflow: hidden; display: flex; flex-direction: column; text-decoration: none; color: inherit; transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .bento-v3-large { grid-column: span 2; grid-row: span 2; }
        .bento-v3-wide { grid-column: span 2; }
        
        .dark-bento { background: linear-gradient(135deg, #1A2A80 0%, var(--od-primary) 100%); color: white; border: none; }
        .bento-v3-content { position: relative; z-index: 5; padding: 40px; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%); width: 100%; box-sizing: border-box; }
        .bento-tag { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--od-accent); font-weight: 800; margin-bottom: 12px; }
        .bento-icon-glow { font-size: 3rem; color: var(--od-accent); margin-bottom: auto; transition: all 0.4s ease; text-shadow: 0 0 30px rgba(0, 255, 238, 0.5); display: flex; align-items: center; justify-content: flex-start; }
        .bento-v3-item h3 { font-size: 1.6rem; margin-bottom: 12px; font-weight: 800; }
        .bento-v3-large h3 { font-size: 2.8rem; }
        .bento-v3-item p { color: rgba(255,255,255,0.8); line-height: 1.6; font-size: 1rem; }
        .bento-bg { position: absolute; top:0; left:0; width:100%; height:100%; background-size: cover; background-position: center; opacity: 0.15; z-index: 1; transition: transform 0.8s ease; }
        .bento-v3-item:hover { transform: translateY(-12px); box-shadow: 0 40px 80px rgba(0,0,0,0.4); }
        .bento-v3-item:hover .bento-bg { transform: scale(1.08); opacity: 0.3; }

        /* HIGHLIGHTS GRID */
        .highlights-grid-v3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .highlight-card { padding: 45px 30px; background: rgba(255,255,255,0.02); border: 1px solid var(--od-border); border-radius: 30px; transition: all 0.4s ease; text-align: center; }
        .highlight-card:hover { border-color: var(--od-accent); background: rgba(0, 255, 238, 0.05); transform: translateY(-10px); }
        .highlight-icon { font-size: 3.2rem; color: var(--od-accent); margin-bottom: 25px; text-shadow: 0 0 20px rgba(0, 255, 238, 0.3); }
        .highlight-card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; }
        .highlight-card p { color: var(--od-text-muted); line-height: 1.5; font-size: 0.95rem; }

        /* CTA ACTIONS */
        .cta-btns-centered { display: flex; justify-content: center; gap: 20px; align-items: center; flex-wrap: wrap; }
        .btn-visionary { padding: 16px 35px; font-weight: 800; border-radius: 15px; font-size: 1rem; transition: all 0.3s; }
        .btn-primary { background: var(--od-primary); border-color: var(--od-primary); color: white; }
        .btn-primary:hover { background: #1A2A80; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(39, 62, 190, 0.3); }
        .btn-outline:hover { background: rgba(0, 255, 238, 0.1); border-color: var(--od-accent); color: var(--od-accent) !important; }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
           .oradent-bento-grid { grid-template-columns: repeat(2, 1fr); }
           .hero-actions-v3 { flex-direction: column; align-items: center; gap: 15px; }
        }
        @media (max-width: 768px), (max-height: 600px) {
           .oradent-hero { padding: 150px 20px 80px !important; align-items: flex-start !important; justify-content: flex-start !important; height: auto !important; min-height: auto !important; }
           .oradent-bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
           .bento-v3-item { min-height: 280px; }
           .bento-v3-large, .bento-v3-wide { grid-column: span 1; grid-row: span 1; }
           .section { padding: 70px 0; }
           .btn-visionary { padding: 12px 25px; font-size: 0.9rem; width: 100%; text-align: center; }
           .cta-btns-centered { flex-direction: column; width: 100%; max-width: 300px; margin: 0 auto; gap: 15px; }
           .section-title-visionary { font-size: 2.2rem; text-align: left; }
        }
      </style>
    </div>
  `;
};

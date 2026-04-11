export const Partners = () => {
  return `
    <div class="app-section partners-root dark-theme-page">
      
      <!-- 🌏 VISIONARY PARTNERS HERO -->
      <section class="partners-hero-v3 fade-in">
        <div class="container relative-z">
          <div class="hero-editorial-grid-v3">
            <div class="hero-content-v3">
              <div class="hero-badge-v3">GLOBAL SYNERGY</div>
              <h1 class="section-title-visionary" style="font-size: clamp(3rem, 7vw, 6rem);">World-Class <br/><span class="accent-text">Strategic Network</span></h1>
              <p class="hero-lead">
                Bridging global manufacturing excellence with African healthcare needs through a strictly vetted network of international innovators.
              </p>
              
              <div class="hero-partners-stats mt-60">
                 <div class="p-stat">
                    <span class="accent-text">11+</span>
                    <label>GLOBAL LABS</label>
                 </div>
                 <div class="p-divider"></div>
                 <div class="p-stat">
                    <span class="accent-text">6</span>
                    <label>HUB COUNTRIES</label>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-v3-overlay"></div>
      </section>

      <!-- 🗺️ GLOBAL NETWORK VISUALIZATION -->
      <section class="section map-interactive-v3">
        <div class="container">
           <div class="section-header-centered mb-100">
              <div class="hero-badge-v3">OUR REACH</div>
              <h2 class="section-title-visionary text-center">Strategic <span class="accent-text">Innovation Flow</span></h2>
           </div>
           
           <div class="world-connectivity-box glass-card-v3">
              <div class="world-map-svg-placeholder">
                 <!-- Stylized Dot Map -->
                 <div class="map-dot hub-india" data-label="India: Specialist Manufacturing"></div>
                 <div class="map-dot hub-swiss" data-label="Switzerland: Precision Engineering"></div>
                 <div class="map-dot hub-china" data-label="China: Scaled Production"></div>
                 <div class="map-dot hub-usa" data-label="USA: R&D Centers"></div>
                 <div class="map-dot hub-pakistan" data-label="Pakistan: Surgical Hub"></div>
                 <div class="map-dot hub-ethiopia primary-hub" data-label="Ethiopia: Dentos Dire Dawa FTZ"></div>
                 
                 <!-- Animated Flow Lines -->
                 <svg class="connection-lines" viewBox="0 0 1200 600">
                    <path d="M800 200 Q 600 300 450 450" class="flow-line"></path> <!-- India to Eth -->
                    <path d="M500 150 Q 480 300 450 450" class="flow-line"></path> <!-- Swiss to Eth -->
                    <path d="M1000 250 Q 700 350 450 450" class="flow-line"></path> <!-- China to Eth -->
                    <path d="M200 200 Q 300 350 450 450" class="flow-line"></path> <!-- USA to Eth -->
                 </svg>
              </div>
              <div class="map-legend">
                 <div class="legend-item"><span class="dot primary"></span> Final Destination: Dire Dawa Hub</div>
                 <div class="legend-item"><span class="dot accent"></span> Global Strategic Manufacturer</div>
              </div>
           </div>
        </div>
      </section>

      <!-- 🏛️ REGULATORY COMPLIANCE -->
      <section class="section compliance-master">
        <div class="container">
          <div class="section-header-centered mb-80">
            <div class="hero-badge-v3">STANDARDS</div>
            <h2 class="section-title-visionary text-center">Regulatory <span class="accent-text">Excellence</span></h2>
          </div>

          <div class="compliance-row">
            <div class="compliance-card glass-card-v3 fade-in">
              <div class="comp-icon-box"><i class="fas fa-certificate"></i></div>
              <div class="comp-content">
                <h3>ISO 9001:2015</h3>
                <p>Ensuring world-standard Quality Management Systems across all import and logistical operations.</p>
                <div class="verified-badge"><i class="fas fa-check-circle"></i> VERIFIED</div>
              </div>
            </div>
            
            <div class="compliance-card glass-card-v3 fade-in" style="animation-delay: 0.1s;">
              <div class="comp-icon-box cyan"><i class="fas fa-shield-virus"></i></div>
              <div class="comp-content">
                <h3>EFDA REGISTRATION</h3>
                <p>Full licensing by the Ethiopian Food & Drug Authority for all specialized medical & dental materials.</p>
                <div class="verified-badge"><i class="fas fa-check-circle"></i> LICENSED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 🏭 PARTNER BENTOS: BY SPECIALIZATION -->
      <section class="section partners-showcase">
        <div class="container">
          
          <!-- Category 1: Dental & Specialist Hub -->
          <div class="category-block mt-120">
             <div class="category-header mb-60">
                <i class="fas fa-tooth accent-text"></i>
                <h3 class="section-title-visionary">Dental <span class="accent-text">Innovation Hub</span></h3>
                <p>Our network of specialist laboratories and endodontic manufacturers.</p>
             </div>
             
             <div class="partners-bento">
                <div class="partner-item glass-card-v3 bento-wide">
                   <div class="p-logo-wrap"><img src="/src/assets/prevest_logo.webp" alt="Prevest" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Prevest Denpro Limited</h4>
                      <p>International leader in dental materials and endodontic research.</p>
                      <span class="p-flag">🇮🇳 INDIA</span>
                   </div>
                </div>
                <div class="partner-item glass-card-v3">
                   <div class="p-flag-float">🇨🇭</div>
                   <div class="p-info">
                      <h4>I-RES Sagl</h4>
                      <p>Swiss precision engineering for dental implants.</p>
                   </div>
                </div>
                <div class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/src/assets/tozier_logo.svg" alt="TopZir" class="p-logo"></div>
                   <div class="p-info">
                      <h4>TopZir Crown Chain</h4>
                      <p>Elite aesthetic zirconia solutions.</p>
                   </div>
                </div>
                <div class="partner-item glass-card-v3">
                   <div class="p-flag-float">🇮🇳</div>
                   <div class="p-info">
                      <h4>PYRAX Polymars</h4>
                      <p>Polymere expertise for prosthetic dentistry.</p>
                   </div>
                </div>
             </div>
          </div>

          <!-- Category 2: Life Science & General Medical -->
          <div class="category-block mt-120 mb-120">
             <div class="category-header mb-60">
                <i class="fas fa-hospital-user accent-text"></i>
                <h3 class="section-title-visionary">Life Science <span class="accent-text">& Diagnostics</span></h3>
                <p>World-class medical instruments and laboratory diagnostic equipment.</p>
             </div>
             
             <div class="partners-bento">
                <div class="partner-item glass-card-v3 bento-wide">
                   <div class="p-logo-wrap"><img src="/src/assets/acc-med_logo.webp" alt="Accu-Med" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Accu-Med Instrument Co.</h4>
                      <p>Pakistan's premier surgical and clinical instrument manufacturer.</p>
                      <span class="p-flag">🇵🇰 PAKISTAN</span>
                   </div>
                </div>
                <div class="partner-item glass-card-v3">
                   <div class="p-flag-float">🇨🇳</div>
                   <div class="p-info">
                      <h4>Suzhou RAMO</h4>
                      <p>Diagnostic laboratory equipment specialists.</p>
                   </div>
                </div>
                <div class="partner-item glass-card-v3">
                   <div class="p-flag-float">🇵🇰</div>
                   <div class="p-info">
                      <h4>Durable Hospital Supplies</h4>
                      <p>Standard-setting clinical fulfillment solutions.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      <style>
        :root {
           --partners-primary: #002F7F;
           --partners-accent: #00FFEE;
           --partners-bg: #0C0C0C;
           --partners-border: #242424;
        }

        .partners-root { background: var(--partners-bg); color: white; overflow-x: hidden; width: 100%; position: relative; }
        .accent-text { color: var(--partners-accent); }

        /* HERO V3 */
        .partners-hero-v3 { 
          height: 85vh; 
          position: relative; 
          display: flex; 
          align-items: center; 
          background: linear-gradient(rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.5)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          margin-top: -80px;
          border-bottom: 1px solid var(--partners-border);
        }
        .hero-v3-overlay { position: absolute; bottom: 0; left: 0; width: 100%; height: 200px; background: linear-gradient(to top, var(--partners-bg), transparent); }
        .hero-partners-stats { display: flex; gap: 40px; align-items: center; }
        .p-stat { display: flex; flex-direction: column; }
        .p-stat span { font-size: 3rem; font-weight: 900; line-height: 1; }
        .p-stat label { font-size: 0.75rem; letter-spacing: 2px; font-weight: 700; color: #94a3b8; margin-top: 10px; }
        .p-divider { width: 1px; height: 50px; background: rgba(255,255,255,0.1); }

        /* WORLD MAP VISUAL */
        .world-connectivity-box { padding: 60px; min-height: 500px; position: relative; overflow: hidden; }
        .world-map-svg-placeholder { width: 100%; height: 450px; background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png'); position: relative; }
        
        .map-dot { position: absolute; width: 12px; height: 12px; background: var(--partners-accent); border-radius: 50%; box-shadow: 0 0 20px var(--partners-accent); transition: all 0.3s ease; cursor: pointer; }
        .map-dot::after { content: attr(data-label); position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); padding: 5px 15px; border-radius: 5px; font-size: 0.7rem; white-space: nowrap; opacity: 0; transition: 0.3s; pointer-events: none; border: 1px solid var(--partners-accent); }
        .map-dot:hover { transform: scale(1.5); }
        .map-dot:hover::after { opacity: 1; transform: translateX(-50%) translateY(-5px); }
        
        .primary-hub { background: #fff; width: 20px; height: 20px; box-shadow: 0 0 30px #fff; }
        
        .hub-india { top: 45%; left: 70%; }
        .hub-swiss { top: 30%; left: 48%; }
        .hub-china { top: 35%; left: 80%; }
        .hub-usa { top: 35%; left: 20%; }
        .hub-pakistan { top: 40%; left: 65%; }
        .hub-ethiopia { top: 55%; left: 55%; }
        
        .connection-lines { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; }
        .flow-line { fill: none; stroke: var(--partners-accent); stroke-width: 1; stroke-dasharray: 5; animation: dash 20s linear infinite; opacity: 0.3; }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
        
        .map-legend { display: flex; gap: 30px; margin-top: 40px; justify-content: center; }
        .legend-item { display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: #94a3b8; }
        .legend-item .dot { width: 8px; height: 8px; border-radius: 50%; }
        .legend-item .dot.primary { background: #fff; box-shadow: 0 0 10px #fff; }
        .legend-item .dot.accent { background: var(--partners-accent); box-shadow: 0 0 10px var(--partners-accent); }

        /* COMPLIANCE */
        .compliance-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .compliance-card { padding: 50px; display: flex; gap: 40px; align-items: center; }
        .comp-icon-box { width: 100px; height: 100px; border-radius: 30px; background: rgba(0, 255, 238, 0.05); color: var(--partners-accent); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; flex-shrink: 0; }
        .comp-icon-box.cyan { color: #0ea5e9; }
        .comp-content h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 12px; }
        .comp-content p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px; }
        .verified-badge { font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; color: var(--partners-accent); display: flex; align-items: center; gap: 8px; }

        /* PARTNER BENTOS */
        .partners-bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .partner-item { padding: 40px; position: relative; display: flex; flex-direction: column; justify-content: flex-end; min-height: 280px; transition: all 0.4s ease; }
        .bento-wide { grid-column: span 2; flex-direction: row; align-items: center; justify-content: flex-start; gap: 40px; }
        .p-logo-wrap { width: 160px; height: 80px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.03); border-radius: 15px; padding: 15px; }
        .p-logo { max-width: 100%; max-height: 100%; object-fit: contain; filter: brightness(0) invert(1) opacity(0.8); }
        .partner-item:hover .p-logo { filter: brightness(1) invert(0) opacity(1); }
        .partner-item:hover { border-color: var(--partners-accent); transform: translateY(-10px); }
        
        .p-flag-float { font-size: 2.5rem; margin-bottom: 40px; }
        .p-info h4 { font-size: 1.4rem; font-weight: 800; margin-bottom: 10px; }
        .p-info p { color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px; }
        .p-flag { font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; color: var(--partners-accent); }

        .mt-120 { margin-top: 120px; }
        .mb-120 { margin-bottom: 120px; }
        .category-header { max-width: 600px; }
        .category-header i { font-size: 2rem; margin-bottom: 20px; display: block; }
        .category-header p { font-size: 1.2rem; color: #94a3b8; margin-top: 15px; }

        @media (max-width: 1100px) {
           .partners-bento { grid-template-columns: 1fr 1fr; }
           .bento-wide { grid-column: span 2; }
           .compliance-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
           .partners-bento { grid-template-columns: 1fr; }
           .bento-wide { grid-column: span 1; flex-direction: column; align-items: flex-start; }
           .world-connectivity-box { padding: 30px 15px; }
           .hero-partners-stats { flex-direction: column; align-items: flex-start; gap: 20px; }
           .p-divider { display: none; }
        }
      </style>
    </div>
  `;
};

export const Partners = () => {
   return `
    <div class="app-section partners-root light-theme-page">
      
      <!-- 🌏 VISIONARY PARTNERS HERO -->
      <section class="partners-hero-v3 fade-in" style="background: linear-gradient(rgba(15, 32, 166, 0.92), rgba(5, 11, 20, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920'); background-size: cover; background-position: center; padding: 220px 0 120px; position: relative;">
        <div class="container relative-z">
          <div class="hero-editorial-grid-v3">
            <div class="hero-content-v3">
              <div class="hero-badge-v3">GLOBAL SYNERGY</div>
              <h1 class="section-title-visionary" style="font-size: clamp(3rem, 7vw, 6rem); color: white;">World-Class <br/><span class="accent-text">Strategic Network</span></h1>
              <p class="hero-lead" style="color: rgba(255,255,255,0.9);">
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
        <div class="hero-editorial-overlay"></div>
      </section>

      <!-- 🗺️ GLOBAL NETWORK VISUALIZATION -->
      <section class="section map-interactive-v3">
        <div class="container">
           <div class="section-header-centered mb-100">
              <div class="hero-badge-v3">OUR REACH</div>
              <h2 class="section-title-visionary text-center">Strategic <span class="accent-text">Innovation Flow</span></h2>
           </div>
           
           <div class="world-connectivity-box glass-card-v3">
              <div class="radar-scan">
                 <div class="radar-ring ring-1"></div>
                 <div class="radar-ring ring-2"></div>
                 <div class="radar-ring ring-3"></div>
              </div>
              <div class="world-map-svg-placeholder">
                 <!-- Stylized Dot Map -->
                 <div class="map-dot hub-india" data-label="India: Specialist Manufacturing"></div>
                 <div class="map-dot hub-swiss" data-label="Switzerland: Precision Engineering"></div>
                 <div class="map-dot hub-china" data-label="China: Scaled Production"></div>
                 <div class="map-dot hub-usa" data-label="USA: R&D Centers"></div>
                 <div class="map-dot hub-pakistan" data-label="Pakistan: Surgical Hub"></div>
                 <div class="map-dot hub-ethiopia primary-hub" data-label="Ethiopia: Dentos Dire Dawa FTZ"></div>
                 
                 <!-- Animated Flow Lines -->
                 <svg class="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M70 45 Q 60 40 55 55" class="flow-line" vector-effect="non-scaling-stroke"></path>
                    <path d="M48 30 Q 55 40 55 55" class="flow-line" vector-effect="non-scaling-stroke"></path>
                    <path d="M80 35 Q 65 35 55 55" class="flow-line" vector-effect="non-scaling-stroke"></path>
                    <path d="M20 35 Q 35 30 55 55" class="flow-line" vector-effect="non-scaling-stroke"></path>
                    <path d="M65 40 Q 60 45 55 55" class="flow-line" vector-effect="non-scaling-stroke"></path>
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
                <p>Full licensing by the Ethiopian Food & Drug Authority for all specialized healthcare & medical materials.</p>
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
          <div class="category-block mt-80">
             <div class="category-header mb-60">
                <i class="fas fa-tooth accent-text"></i>
                <h3 class="section-title-visionary">Medical <span class="accent-text">Innovation Hub</span></h3>
                <p>Our network of specialist laboratories and endodontic manufacturers.</p>
             </div>
             
             <div class="partners-bento">
                <a href="https://www.prevestdenpro.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3 bento-wide">
                   <div class="p-logo-wrap"><img src="/assets/prevest_logo-01.webp" alt="Prevest" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Prevest Denpro Limited</h4>
                      <p>International leader in clinical materials and medical research. Known for their world-class composites and clinical cements used globally.</p>
                      <span class="p-flag">🇮🇳 INDIA</span>
                   </div>
                </a>
                <a href="https://www.en.ires.dental/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/assets/ires_logo.svg" alt="I-RES Sagl" class="p-logo"></div>
                   <div class="p-info">
                      <h4>I-RES Sagl</h4>
                      <p>Swiss precision engineering for medical implants. Provides advanced implantology and regenerative solutions.</p>
                   </div>
                </a>
                <a href="https://www.topzir.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/assets/tozier_logo.svg" alt="TopZir" class="p-logo"></div>
                   <div class="p-info">
                      <h4>TopZir Crown Chain</h4>
                      <p>Elite aesthetic restoration solutions. Providing highly durable zirconia blocks for modern medical laboratories.</p>
                   </div>
                </a>

                <a href="https://www.precident.in/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3" style="grid-column: 3;">
                   <div class="p-logo-wrap"><img src="/assets/precident-logo-01.webp" alt="PreciDent" class="p-logo"></div>
                   <div class="p-info">
                      <h4>PreciDent</h4>
                      <p>Specialized in manufacturing premium clinical rotary instruments and high-precision burs for advanced medical operations.</p>
                      <span class="p-flag">🇮🇳 INDIA</span>
                   </div>
                </a>

             </div>
          </div>

          <!-- Category 2: Life Science & General Medical -->
          <div class="category-block mt-80 mb-80">
             <div class="category-header mb-60">
                <i class="fas fa-hospital-user accent-text"></i>
                <h3 class="section-title-visionary">Life Science <span class="accent-text">& Diagnostics</span></h3>
                <p>World-class medical instruments and laboratory diagnostic equipment.</p>
             </div>
             
             <div class="partners-bento">
                <a href="https://accumedinstrument.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3 bento-wide">
                   <div class="p-logo-wrap"><img src="/assets/accu-med_logo.png" alt="Accu-Med" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Accu-Med Instrument Co.</h4>
                      <p>Pakistan's premier surgical and clinical instrument manufacturer. They provide meticulously crafted instruments for major global hospitals.</p>
                      <span class="p-flag">🇵🇰 PAKISTAN</span>
                   </div>
                </a>
                <a href="https://www.ramomedical.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/assets/ramo_medical_logo.webp" alt="Suzhou RAMO" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Suzhou Ramo Medical Instrument Co., Ltd.</h4>
                      <p>Diagnostic laboratory equipment specialists. Developing cutting-edge pathological testing instruments.</p>
                      <span class="p-flag">🇨🇳 CHINA</span>
                   </div>
                </a>
                <a href="http://www.durablehs.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/assets/durable-hospital-supplies-logo.webp" alt="Durable HS" class="p-logo"></div>
                   <div class="p-info">
                      <h4>Durable Hospital Supplies</h4>
                      <p>Standard-setting clinical fulfillment solutions. Dedicated to outfitting modern healthcare facilities with robust equipment.</p>
                      <span class="p-flag">🇵🇰 PAKISTAN</span>
                   </div>
                </a>
                <a href="https://sincereinstruments.com/" target="_blank" rel="noopener noreferrer" class="partner-item glass-card-v3">
                   <div class="p-logo-wrap"><img src="/assets/sincere-people-instruments.png" alt="Sincere Instruments" class="p-logo" style="transform: scale(1.4);"></div>
                   <div class="p-info">
                      <h4>Sincere People Instrument</h4>
                      <p>A leading producer of highly reliable medical and surgical instruments, ensuring top-tier performance for healthcare professionals.</p>
                   </div>
                </a>
             </div>
          </div>

        </div>
      </section>

      <style>
        :root {
           --partners-primary: #1520A6;
           --partners-accent: #40E0D0;
           --partners-bg: #ffffff;
           --partners-border: #e2e8f0;
        }

        .light-theme-page { 
          background: linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%); 
          color: var(--text-main); width: 100%; position: relative; overflow-x: clip; min-height: 100vh;
        }
        .accent-text { color: var(--partners-accent); }

        /* HERO V3 */
        .partners-hero-v3 { 
          padding: 220px 0 120px; 
          position: relative; 
          background: linear-gradient(to right, rgba(15, 32, 166, 0.95), rgba(5, 11, 20, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920');
          background-size: cover; 
          background-position: center;
          border-bottom: 1px solid #e2e8f0;
        }
        .hero-editorial-overlay { position: absolute; bottom:0; left:0; width:100%; height:150px; background: linear-gradient(to top, #ffffff, transparent); }
        .hero-partners-stats { display: flex; gap: 40px; align-items: center; }
        .p-stat { display: flex; flex-direction: column; }
        .p-stat span { font-size: 3rem; font-weight: 900; line-height: 1; }
        .p-stat label { font-size: 0.75rem; letter-spacing: 2px; font-weight: 700; color: #94a3b8; margin-top: 10px; }
        .p-divider { width: 1px; height: 50px; background: rgba(255,255,255,0.1); }

        /* WORLD MAP VISUAL */
        .world-connectivity-box { 
          padding: 60px; min-height: 500px; position: relative; overflow: hidden; 
          background: radial-gradient(circle at 55% 55%, rgba(56, 189, 248, 0.06) 0%, transparent 60%),
                      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 100% 100%, 40px 40px, 40px 40px;
        }
        .radar-ring { position: absolute; top: 55%; left: 55%; transform: translate(-50%, -50%); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 50%; pointer-events: none; }
        .ring-1 { width: 150px; height: 150px; animation: expand 3s linear infinite; }
        .ring-2 { width: 300px; height: 300px; animation: expand 3s linear infinite 1s; }
        .ring-3 { width: 450px; height: 450px; animation: expand 3s linear infinite 2s; }
        @keyframes expand { 0% { width: 0; height: 0; opacity: 1; } 100% { width: 800px; height: 800px; opacity: 0; } }

        .world-map-svg-placeholder { width: 100%; height: 450px; position: relative; z-index: 2; }
        
        .map-dot { position: absolute; width: 12px; height: 12px; background: var(--partners-accent); border-radius: 50%; box-shadow: 0 0 20px var(--partners-accent); transition: all 0.3s ease; cursor: pointer; transform: translate(-50%, -50%); }
        .map-dot::after { content: attr(data-label); position: absolute; top: 25px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.9); padding: 8px 15px; border-radius: 6px; font-size: 0.75rem; white-space: nowrap; opacity: 0; transition: 0.3s; pointer-events: none; border: 1px solid var(--partners-border); z-index: 10; color: white; }
        .map-dot:hover { transform: translate(-50%, -50%) scale(1.5); }
        .map-dot:hover::after { opacity: 1; transform: translateX(-50%) translateY(0); }
        
        .primary-hub { background: var(--partners-primary); width: 22px; height: 22px; box-shadow: 0 0 30px var(--partners-primary); z-index: 5; }
        
        .hub-india { top: 45%; left: 70%; }
        .hub-swiss { top: 30%; left: 48%; }
        .hub-china { top: 35%; left: 80%; }
        .hub-usa { top: 35%; left: 20%; }
        .hub-pakistan { top: 40%; left: 65%; }
        .hub-ethiopia { top: 55%; left: 55%; }
        
        .connection-lines { position: absolute; top:0; left:0; width:100%; height:100%; pointer-events: none; z-index: 1; }
        .flow-line { fill: none; stroke: var(--partners-accent); stroke-width: 1.5px; stroke-dasharray: 6; animation: dash 1s linear infinite; opacity: 0.7; }
        @keyframes dash { to { stroke-dashoffset: -20; } }
        
        .map-legend { display: flex; gap: 30px; margin-top: 40px; justify-content: center; }
        .legend-item { display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: #94a3b8; }
        .legend-item .dot { width: 8px; height: 8px; border-radius: 50%; }
        .legend-item .dot.primary { background: var(--partners-primary); box-shadow: 0 0 10px var(--partners-primary); }
        .legend-item .dot.accent { background: var(--partners-accent); box-shadow: 0 0 10px var(--partners-accent); }

        /* COMPLIANCE */
        .compliance-row { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .compliance-card { padding: 50px; display: flex; gap: 40px; align-items: center; }
        .comp-icon-box { width: 100px; height: 100px; border-radius: 30px; background: rgba(56, 189, 248, 0.05); color: var(--partners-accent); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; flex-shrink: 0; }
        .comp-icon-box.cyan { color: #0ea5e9; }
        .comp-content .section-title-visionary { font-weight: 900; letter-spacing: -3px; line-height: 1; color: white; }
        .hero-lead { font-size: 1.2rem; color: rgba(255,255,255,0.8); max-width: 800px; line-height: 1.6; margin-top: 30px; }
        .comp-content h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 12px; }
        .comp-content p { color: #94a3b8; font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px; }
        .verified-badge { font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; color: var(--partners-accent); display: flex; align-items: center; gap: 8px; }

        /* PARTNER BENTOS */
        .partners-bento { display: flex; flex-direction: column; gap: 30px; }
        .partner-item { padding: 45px; position: relative; display: flex; flex-direction: row; align-items: center; gap: 40px; min-height: 200px; transition: all 0.4s ease; text-decoration: none; color: inherit; }
        .bento-wide { grid-column: span 1; }
        .p-logo-wrap { height: 60px; margin-bottom: 25px; display: flex; align-items: center; justify-content: flex-start; }
        .p-logo { height: 60px; width: 180px; object-fit: contain; transform-origin: left center; transition: all 0.3s ease; }
        .partner-item:hover .p-logo { transform: scale(1.05); }
        .partner-item:hover { border-color: var(--partners-accent); transform: translateY(-10px); background: white; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        
        .p-flag-float { font-size: 2.5rem; margin-bottom: 40px; }
        .p-info h4 { font-size: 1.4rem; font-weight: 800; margin-bottom: 10px; color: var(--text-main); }
        .p-info p { color: #475569; font-size: 0.95rem; line-height: 1.5; margin-bottom: 15px; }
        .p-flag { font-size: 0.7rem; font-weight: 900; letter-spacing: 2px; color: var(--partners-accent); }

        .mt-80 { margin-top: 80px; }
        .mb-80 { margin-bottom: 80px; }
        .category-header { max-width: 600px; }
        .category-header i { font-size: 2rem; margin-bottom: 20px; display: block; }
        .category-header p { font-size: 1.2rem; color: #94a3b8; margin-top: 15px; }

        @media (max-width: 1100px) {
           .partners-bento { grid-template-columns: 1fr 1fr; }
           .bento-wide { grid-column: span 2; }
           .compliance-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
           .partners-hero-v3 { align-items: flex-start !important; padding-top: 150px !important; height: auto !important; min-height: auto !important; padding-bottom: 100px !important; }
           .partners-bento { flex-direction: column; gap: 20px; }
           .partner-item { 
             flex-direction: column; 
             text-align: center; 
             padding: 40px 20px;
           }
           .p-logo-wrap { justify-content: center; margin-bottom: 20px; }
           .p-info h4 { font-size: 1.2rem; }
           .world-connectivity-box { padding: 30px 15px; }
           .hero-partners-stats { flex-direction: column; align-items: flex-start; gap: 20px; }
           .p-divider { display: none; }
           .compliance-card { flex-direction: column; text-align: center; padding: 30px 20px; gap: 20px; }
           .comp-icon-box { width: 70px; height: 70px; font-size: 1.8rem; margin: 0 auto; }
           .verified-badge { justify-content: center; }
        }
      </style>
    </div>
  `;
};

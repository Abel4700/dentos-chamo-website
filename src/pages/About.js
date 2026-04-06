export const About = () => `
  <div class="app-section about-premium-page">
    
    <!-- Immersive Editorial Hero -->
    <section class="section hero-editorial" style="background-image: linear-gradient(135deg, rgba(10, 37, 95, 0.95) 0%, rgba(19, 70, 175, 0.8) 100%), url('/images/about1.png')">
      <div class="container hero-editorial-grid">
        <div class="hero-editorial-content fade-in">
          <h1 class="text-white hero-title">A Legacy of <br/><span class="text-secondary glow-text">Trust & Vision</span></h1>
          <p class="hero-subtitle">
            Bridging the gap between global healthcare innovation and sustainable East African agriculture for over two decades.
          </p>
          <div class="hero-metrics flex gap-20 mt-40">
            <div class="metric-item">
              <h3 class="text-secondary">20+</h3>
              <span>Years Legacy</span>
            </div>
            <div class="metric-item">
              <h3 class="text-secondary">2</h3>
              <span>Global Divisions</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-overlay-graphic"></div>
    </section>

    <!-- Overlapping Founder Narrative -->
    <section class="section founder-section bg-light">
      <div class="container">
        <div class="founder-grid">
          <div class="founder-image-wrapper fade-in">
            <div class="image-accent-glow"></div>
            <img src="/images/about1.png" alt="Dr. Aklilu Berhanu" class="founder-img" onerror="this.src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800';">
            
            <!-- Floating Floating Quote -->
            <div class="floating-quote glass-premium hover-lift">
              <i class="fas fa-quote-left text-primary"></i>
              <p class="quote-text">"Our commitment has always been uncompromising quality—whether supplying advanced endodontic materials or exporting premium organic sesame."</p>
              <div class="quote-author">
                <span class="author-name">Dr. Aklilu Berhanu</span>
                <span class="author-title">Founder & CEO</span>
              </div>
            </div>
          </div>

          <div class="founder-content fade-in" style="animation-delay: 0.2s;">
            <div class="subtitle text-primary">Our Genesis</div>
            <h2 class="mb-20" style="font-size: 2.8rem;">Roots Built on <span class="primary-text">Integrity</span></h2>
            <p class="text-muted" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
              Dentos Chamo was established under visionary leadership, starting as a highly focused dental medical import center. 
            </p>
            <p class="text-muted" style="font-size: 1.1rem; line-height: 1.8;">
              Driven by the unwavering mantra of <strong>Quality, Trust, Delivery, and Warranty</strong>, the company systematically expanded into a robust organic commodity export powerhouse, ensuring compliance with strict ISO and international trade standards across all divisions.
            </p>
            
            <ul class="founder-list mt-30">
              <li><i class="fas fa-check-circle text-primary"></i> Unwavering focus on specialized endodontic supply.</li>
              <li><i class="fas fa-check-circle text-primary"></i> Scaled agricultural exports to global markets.</li>
              <li><i class="fas fa-check-circle text-primary"></i> ISO 13485 & 20417 regulatory alignment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision (Luminescent Cards) -->
    <section class="section dark-theme mission-vision-section" style="background-color: var(--primary-dark);">
      <div class="container">
        <div class="text-center mb-40 fade-in">
          <div class="subtitle text-secondary">Corporate Objectives</div>
          <h2 class="text-white" style="font-size: 2.5rem;">Dual <span class="text-secondary">Mission</span></h2>
        </div>

        <div class="grid-2 gap-40">
          <!-- Medical Mission Luminescent -->
          <div class="luminescent-card card-medical glass-premium hover-lift fade-in">
            <div class="ambient-glow glow-blue"></div>
            <div class="card-content">
              <div class="icon-ring border-primary mb-20"><i class="fas fa-stethoscope text-primary"></i></div>
              <h3 class="card-title text-primary">Medical Division</h3>
              
              <div class="objective-block">
                <h5 class="obj-label">Our Mission</h5>
                <p class="obj-text">To extend services beyond client expectations by supplying ISO-certified dental products at the right prices and the precise right time.</p>
              </div>
              
              <div class="objective-block">
                <h5 class="obj-label">Our Vision</h5>
                <p class="obj-text">To unequivocally become the most reputable dental materials manufacturer and distributor operating within East Africa.</p>
              </div>
            </div>
          </div>

          <!-- Organic Mission Luminescent -->
          <div class="luminescent-card card-organic glass-premium hover-lift fade-in" style="animation-delay: 0.2s;">
            <div class="ambient-glow glow-gold"></div>
            <div class="card-content">
              <div class="icon-ring border-secondary mb-20"><i class="fas fa-seedling text-secondary"></i></div>
              <h3 class="card-title text-secondary">Organic Exports</h3>
              
              <div class="objective-block">
                <h5 class="obj-label text-secondary">Our Mission</h5>
                <p class="obj-text">To introduce ultra-high-quality Ethiopian agricultural products to the global market while maintaining strict sustainable organic practices.</p>
              </div>
              
              <div class="objective-block">
                <h5 class="obj-label text-secondary">Our Vision</h5>
                <p class="obj-text">To be universally recognized as the leading global exporter of organic oil seeds, spices, and premium pulses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Corporate Milestones Timeline -->
    <section class="section timeline-section bg-light">
      <div class="container">
        <div class="text-center mb-40 fade-in">
          <div class="subtitle text-primary">The Journey</div>
          <h2 style="font-size: 2.5rem;">Corporate <span class="primary-text">Milestones</span></h2>
        </div>
        
        <div class="timeline">
          <div class="timeline-item fade-in">
            <div class="timeline-dot"></div>
            <div class="timeline-date text-primary font-700">The Beginning</div>
            <div class="timeline-content glass-premium hover-lift">
              <h3>Foundation Established</h3>
              <p class="text-muted">Dentos Chamo begins as an exclusive importer of highly specialized dental and orthodontic materials for local practitioners.</p>
            </div>
          </div>
          <div class="timeline-item fade-in">
            <div class="timeline-dot"></div>
            <div class="timeline-date text-primary font-700">Expansion</div>
            <div class="timeline-content glass-premium hover-lift">
              <h3>Agricultural Division Launched</h3>
              <p class="text-muted">Recognizing global demand, the company establishes its organic export division focusing on premium sesame and oil crops.</p>
            </div>
          </div>
          <div class="timeline-item fade-in">
            <div class="timeline-dot"></div>
            <div class="timeline-date text-primary font-700">Standards</div>
            <div class="timeline-content glass-premium hover-lift">
              <h3>ISO Compliance Integration</h3>
              <p class="text-muted">Full adoption of strict B2B compliance standards including ISO 13485 (Medical Devices) and ISO 20417, elevating the catalog verification capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Leadership Roster -->
    <section class="section team-section">
      <div class="container">
        <div class="text-center mb-40 fade-in">
          <div class="subtitle text-primary">The People Behind Our Success</div>
          <h2 style="font-size: 2.8rem;">Executive <span class="primary-text">Leadership</span></h2>
          <p class="max-600 text-muted mt-10" style="font-size: 1.1rem;">A multidisciplinary team of clinical experts, agronomists, and international trade specialists dedicated to operational excellence.</p>
        </div>

        <div class="team-grid mt-40">
          <!-- Team Member 1 -->
          <div class="team-glass-card hover-lift fade-in">
            <div class="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="Dr. Aklilu Berhanu" class="team-avatar">
            </div>
            <div class="team-info">
              <h3>Dr. Aklilu Berhanu</h3>
              <div class="team-title text-secondary">Founder & CEO</div>
              <p class="text-muted">Guiding the overall strategic vision of both the medical import and organic export divisions.</p>
            </div>
          </div>

          <!-- Team Member 2 -->
          <div class="team-glass-card hover-lift fade-in" style="animation-delay: 0.2s;">
            <div class="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Jane Doe" class="team-avatar">
            </div>
            <div class="team-info">
              <h3>Jane Doe</h3>
              <div class="team-title text-primary">Chief Clinical Director</div>
              <p class="text-muted">Overseeing ISO compliance and supply chain logistics for all incoming dental materials.</p>
            </div>
          </div>

          <!-- Team Member 3 -->
          <div class="team-glass-card hover-lift fade-in" style="animation-delay: 0.4s;">
            <div class="team-img-wrapper">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" alt="John Smith" class="team-avatar">
            </div>
            <div class="team-info">
              <h3>John Smith</h3>
              <div class="team-title" style="color: #d4a000;">Head of Agronomy</div>
              <p class="text-muted">Managing direct partnerships with organic farmers and ensuring rigorous export quality control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .about-premium-page { margin-top: -80px; }
    
    /* Reused utilities */
    .subtitle { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 10px; display: inline-block; padding: 5px 15px; background: rgba(19, 70, 175, 0.1); border-radius: 50px; }
    .bg-light { background-color: var(--bg-light); }
    .primary-text { color: var(--primary); }
    .text-secondary { color: var(--secondary); }
    .text-primary { color: var(--primary); }
    .text-white { color: white; }
    .text-muted { color: var(--text-muted); }
    .mb-20 { margin-bottom: 20px; }
    .mb-40 { margin-bottom: 40px; }
    .mt-10 { margin-top: 10px; }
    .mt-30 { margin-top: 30px; }
    .mt-40 { margin-top: 40px; }
    .gap-20 { gap: 20px; }
    .gap-40 { gap: 40px; }
    .flex { display: flex; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; }
    .font-700 { font-weight: 700; }
    
    .glass-premium {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
    }
    .hover-lift { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease; }
    .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

    /* Immersive Hero */
    .hero-editorial {
      position: relative;
      padding: 180px 0 100px;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      overflow: hidden;
      border-bottom-right-radius: 80px;
    }
    .hero-editorial-grid { position: relative; z-index: 2; display: flex; align-items: center; min-height: 400px; }
    .hero-editorial-content { max-width: 600px; }
    .glow-badge {
      display: inline-block; padding: 6px 18px; border-radius: 20px;
      background: rgba(255, 219, 63, 0.15); color: var(--secondary);
      border: 1px solid rgba(255, 219, 63, 0.3); font-weight: 700;
      text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem;
    }
    .hero-title { font-size: 4.5rem; line-height: 1.1; margin-bottom: 20px; font-weight: 800; }
    .glow-text { text-shadow: 0 0 20px rgba(255, 219, 63, 0.4); }
    .hero-subtitle { font-size: 1.25rem; opacity: 0.9; font-weight: 300; line-height: 1.6; color: white; }
    .metric-item { display: flex; flex-direction: column; }
    .metric-item h3 { font-size: 2.5rem; line-height: 1; margin-bottom: 5px; }
    .metric-item span { font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.7); font-weight: 600; }
    
    .hero-overlay-graphic {
      position: absolute; right: -5%; bottom: -10%; width: 50%; height: 120%;
      background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
      transform: rotate(-15deg); z-index: 1; pointer-events: none;
    }
    
    @media (max-width: 768px) {
      .hero-title { font-size: 3rem; }
      .hero-editorial { border-bottom-right-radius: 40px; padding: 140px 0 60px; }
    }

    /* Overlapping Founder Narrative */
    .founder-section { padding: 100px 0; }
    .founder-grid { display: grid; grid-template-columns: 5fr 6fr; gap: 80px; align-items: center; }
    .founder-image-wrapper { position: relative; }
    .founder-img {
      width: 100%; border-radius: 30px; aspect-ratio: 3/4; object-fit: cover;
      box-shadow: 0 25px 50px rgba(0,0,0,0.15); position: relative; z-index: 2;
    }
    .image-accent-glow {
      position: absolute; top: -20px; left: -20px; right: 20px; bottom: 20px;
      border: 3px solid var(--primary); border-radius: 30px; opacity: 0.2; transform: translate(-10px, -10px); z-index: 1;
    }
    .floating-quote {
      position: absolute; bottom: -30px; right: -40px; width: 320px; padding: 30px; z-index: 3;
    }
    .floating-quote i { font-size: 2rem; margin-bottom: 15px; opacity: 0.8; }
    .quote-text { font-style: italic; font-weight: 500; line-height: 1.6; margin-bottom: 20px; color: var(--text-main); }
    .quote-author { display: flex; flex-direction: column; }
    .author-name { font-weight: 700; color: var(--primary); font-size: 1.1rem; }
    .author-title { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
    
    .founder-list { list-style: none; padding: 0; }
    .founder-list li { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 15px; font-size: 1.05rem; color: var(--text-main); }
    .founder-list i { margin-top: 4px; }
    
    @media (max-width: 992px) {
      .founder-grid { grid-template-columns: 1fr; gap: 60px; }
      .floating-quote { position: relative; bottom: 0; right: 0; width: 90%; margin: -40px auto 0; }
    }

    /* Luminescent Mission Cards */
    .mission-vision-section { padding: 100px 0; }
    .luminescent-card {
      position: relative; overflow: hidden; padding: 40px;
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    }
    .card-content { position: relative; z-index: 2; }
    .ambient-glow {
      position: absolute; width: 300px; height: 300px; border-radius: 50%;
      filter: blur(80px); opacity: 0.4; z-index: 1; transition: opacity 0.4s ease; top: -50px; right: -50px;
    }
    .glow-blue { background: var(--primary); }
    .glow-gold { background: var(--secondary); }
    .luminescent-card:hover .ambient-glow { opacity: 0.7; }
    
    .icon-ring {
      width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem; background: rgba(255,255,255,0.1); border: 2px solid transparent;
    }
    .border-primary { border-color: rgba(19, 70, 175, 0.4); }
    .border-secondary { border-color: rgba(255, 219, 63, 0.4); }
    .card-title { font-size: 2rem; margin-bottom: 30px; font-weight: 700; }
    
    .objective-block { margin-bottom: 25px; }
    .obj-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px; font-weight: 700; color: rgba(255,255,255,0.6); }
    .card-medical .obj-label { color: var(--primary); }
    .card-organic .obj-label { color: var(--secondary); }
    .obj-text { color: rgba(255,255,255,0.85); line-height: 1.6; font-size: 1.05rem; }
    
    @media (max-width: 768px) {
      .mission-vision-section .grid-2 { grid-template-columns: 1fr; }
    }

    /* Timeline */
    .timeline-section { padding: 100px 0; overflow: hidden; }
    .timeline { position: relative; max-width: 800px; margin: 0 auto; padding-left: 50px; }
    .timeline::before {
      content: ''; position: absolute; left: 14px; top: 0; height: 100%; width: 2px;
      background: linear-gradient(to bottom, var(--primary) 0%, rgba(19,70,175,0.2) 100%);
    }
    .timeline-item { position: relative; margin-bottom: 50px; }
    .timeline-item:last-child { margin-bottom: 0; }
    .timeline-dot {
      position: absolute; left: -42px; top: 5px; width: 14px; height: 14px; border-radius: 50%;
      background: var(--white); border: 3px solid var(--primary);
      box-shadow: 0 0 10px rgba(19,70,175,0.5); z-index: 2; transition: all 0.3s ease;
    }
    .timeline-item:hover .timeline-dot { transform: scale(1.3); background: var(--secondary); border-color: var(--secondary); box-shadow: 0 0 15px rgba(255,219,63,0.6); }
    .timeline-date { margin-bottom: 10px; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 2px; }
    .timeline-content { padding: 30px; position: relative; }
    .timeline-content::before {
      content: ''; position: absolute; left: -10px; top: 20px;
      border-style: solid; border-width: 10px 10px 10px 0; border-color: transparent rgba(255,255,255,0.85) transparent transparent;
    }
    .timeline-content h3 { font-size: 1.4rem; margin-bottom: 10px; }

    /* Premium Leadership Roster */
    .team-section { padding: 100px 0; }
    .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
    .team-glass-card {
      background: var(--white); border-radius: 20px; overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.02);
    }
    .team-img-wrapper { overflow: hidden; height: 350px; position: relative; }
    .team-avatar {
      width: 100%; height: 100%; object-fit: cover;
      filter: grayscale(100%); transition: filter 0.5s ease, transform 0.8s ease;
    }
    .team-glass-card:hover .team-avatar { filter: grayscale(0%); transform: scale(1.05); }
    
    /* Overlay gradient for text contrast */
    .team-img-wrapper::after {
      content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 50%;
      background: linear-gradient(to top, rgba(0,0,0,0.1), transparent); pointer-events: none;
    }
    
    .team-info { padding: 30px; text-align: center; }
    .team-info h3 { font-size: 1.5rem; margin-bottom: 5px; }
    .team-title { font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
    .team-info p { font-size: 0.95rem; line-height: 1.6; }

  </style>
`;

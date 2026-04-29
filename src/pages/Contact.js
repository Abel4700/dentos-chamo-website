export const Contact = () => `
  <div class="app-section contact-page">
    
    <!-- MODERNIZED HERO (ORA-DENT CLINICAL) -->
    <section class="contact-hero-v3 fade-in">
      <div class="container text-center" style="padding-top: 30px;">
        <div class="hero-badge-v3">GET IN TOUCH</div>
        <h1 class="contact-title">Clinical Support &<br><span class="primary-text">Professional Consultation</span></h1>
        <p class="hero-lead">Connect with our specialized clinical experts and medical distribution team for precision healthcare solutions.</p>
      </div>
    </section>

    <!-- BENTO GRID LAYOUT -->
    <section class="section contact-main-content">
      <div class="container">
        <div class="contact-bento-grid">
          
          <!-- Details Left -->
          <div class="modern-bento-card glass-premium fade-in-up">
            <h2>Ora-Dent Medical</h2>
            <p class="bento-subtitle">Leading the frontier of clinical aesthetics and oral healthcare distribution across Africa.</p>
            
            <div class="contact-list">
              <div class="c-item">
                <div class="c-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="c-text">
                  <strong>Headquarters</strong>
                  <span>Nifas Silk Lafto Woreda 01, Infront of Lebu Medhani-alem Church, Addis Ababa, Ethiopia</span>
                </div>
              </div>
              
              <div class="c-item mt-20">
                <div class="c-icon"><i class="fas fa-phone"></i></div>
                <div class="c-text">
                  <strong>Direct Lines</strong>
                  <span>+251 913 70 07 18</span>
                  <span>+251 986 23 23 27</span>
                </div>
              </div>

              <div class="c-item mt-20">
                <div class="c-icon"><i class="fas fa-envelope"></i></div>
                <div class="c-text">
                  <strong>Digital Comm</strong>
                  <a href="mailto:info@oradent.com">info@oradent.com</a>
                  <a href="mailto:clinical@oradent.com">clinical@oradent.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Form Right -->
          <div class="modern-bento-card glass-premium fade-in-up" style="animation-delay: 0.1s;">
            <h2>Inquiry Portal</h2>
            <form id="contact-form" class="modern-contact-form">
              <div class="form-row">
                 <div class="form-group">
                   <label>First Name</label>
                   <input type="text" placeholder="John" required>
                 </div>
                 <div class="form-group">
                   <label>Last Name</label>
                   <input type="text" placeholder="Doe" required>
                 </div>
              </div>
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required>
              </div>
              <div class="form-group">
                <label>Inquiry Type</label>
                <select class="modern-select">
                   <option>Clinical Consultation</option>
                   <option>Product Distribution</option>
                   <option>Technical Support</option>
                   <option>Partnership Proposal</option>
                   <option>Aesthetic Solutions</option>
                </select>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Describe your clinical or distribution needs..." rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-visionary w-100 mt-10">Send Inquiry</button>
            </form>
          </div>

          <!-- Map Bottom Full width -->
          <div class="modern-bento-card map-bento glass-premium bento-wide fade-in-up" style="animation-delay: 0.2s;">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.852150993952!2d38.729112999999996!3d8.9856519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8686e0c704f5%3A0xc6c7bc37dd2b6ced!2sLebu%20Medhanialem%20Church!5e0!3m2!1sen!2sus!4v1713000000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
        </div>
      </div>
    </section>

  </div>

  <style>
    /* VARIABLES & THEME */
    :root {
      --contact-primary: var(--primary);
      --contact-accent: var(--secondary);
    }
    
    .contact-page { background-color: var(--bg-light); color: var(--text-main); min-height: 100vh; overflow-x: hidden; }
    .primary-text { color: var(--contact-primary); }

    /* HERO STYLING (CINEMATIC DARK OVERLAY) */
    .contact-hero-v3 {
      padding: 180px 20px 100px;
      background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920');
      background-size: cover;
      background-position: center;
      border-bottom: 1px solid var(--glass-border);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .contact-hero-v3 .contact-title { color: white; }
    .contact-hero-v3 .hero-lead { color: rgba(255, 255, 255, 0.8); }
    .hero-badge-v3 { display: inline-block; padding: 8px 20px; background: rgba(0, 47, 127, 0.05); border: 1px solid rgba(0, 47, 127, 0.1); border-radius: 50px; color: var(--contact-primary); font-weight: 800; font-size: 0.75rem; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 25px; }
    .contact-title { font-size: clamp(3rem, 5vw, 4.5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; margin-bottom: 20px; color: var(--text-main); }
    .hero-lead { font-size: clamp(1.05rem, 1.8vw, 1.3rem); color: var(--text-muted); max-width: 650px; margin: 0 auto; line-height: 1.6; }

    /* BENTO SYSTEM */
    .contact-main-content { padding-top: 40px; padding-bottom: 120px; }
    .contact-bento-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
    .bento-wide { grid-column: span 2; }
    
    .glass-premium {
      background: white;
      border: 1px solid var(--glass-border);
      border-radius: 25px;
      box-shadow: var(--shadow-md);
    }
    .modern-bento-card { padding: 50px; }
    
    .modern-bento-card h2 { font-size: 2rem; font-weight: 800; margin-bottom: 15px; color: var(--text-main); letter-spacing: -1px; }
    .bento-subtitle { color: var(--text-muted); font-size: 1rem; line-height: 1.6; margin-bottom: 40px; }

    /* LEFT PANE - DETAILS */
    .contact-list { display: flex; flex-direction: column; gap: 35px; }
    .c-item { display: flex; gap: 20px; align-items: flex-start; }
    .c-icon { width: 50px; height: 50px; background: rgba(0, 209, 193, 0.05); color: var(--contact-accent); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; flex-shrink: 0; }
    .c-text { display: flex; flex-direction: column; gap: 6px; }
    .c-text strong { font-size: 1.1rem; color: var(--text-main); font-weight: 800; }
    .c-text span, .c-text a { color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; text-decoration: none; transition: color 0.3s; }
    .c-text a:hover { color: var(--contact-accent); }

    /* RIGHT PANE - FORM */
    .modern-contact-form { display: flex; flex-direction: column; gap: 20px; }
    .form-row { display: flex; gap: 20px; }
    .form-row .form-group { flex: 1; }
    .form-group { display: flex; flex-direction: column; gap: 8px; }
    .form-group label { font-size: 0.85rem; font-weight: 700; color: var(--text-main); text-transform: uppercase; letter-spacing: 0.5px; }
    
    .modern-contact-form input, .modern-contact-form textarea, .modern-select {
       width: 100%; box-sizing: border-box; padding: 16px 20px; border-radius: 14px; border: 1px solid var(--glass-border); background: #f8fafc; font-family: inherit; font-size: 1rem; color: var(--text-main); transition: all 0.3s ease;
    }
    .modern-contact-form input:focus, .modern-contact-form textarea:focus, .modern-select:focus { 
       outline: none; border-color: var(--contact-accent); background: white; box-shadow: 0 0 0 4px rgba(0, 209, 193, 0.05);
    }
    .modern-select { appearance: none; background-image: url('data:image/svg+xml;utf8,<svg fill="%2364748b" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'); background-repeat: no-repeat; background-position-x: 95%; background-position-y: 50%; cursor: pointer; }

    /* BUTTON */
    .btn-visionary { padding: 18px 40px; font-weight: 800; border-radius: 14px; font-size: 1.05rem; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); cursor: pointer; border: none; }
    .btn-primary { background: var(--contact-primary); color: white; }
    .btn-primary:hover { background: var(--primary-dark); transform: translateY(-3px); box-shadow: var(--shadow-lg); }
    
    .w-100 { width: 100%; }
    .mt-10 { margin-top: 10px; }

    /* MAP BENTO */
    .map-bento { padding: 0; min-height: 450px; overflow: hidden; position: relative; }
    .map-bento iframe { width: 100%; height: 100%; position: absolute; top:0; left:0; filter: grayscale(10%) contrast(1.05); transition: filter 0.5s ease; }
    .map-bento:hover iframe { filter: grayscale(0%) contrast(1); }

    /* RESPONSIVE */
    @media (max-width: 1024px) {
       .contact-bento-grid { grid-template-columns: 1fr; }
       .bento-wide { grid-column: span 1; }
    }
    
    @media (max-width: 768px), (max-height: 600px) {
       .contact-hero-v3 { padding: 150px 20px 80px; }
       .contact-title { font-size: 2.8rem; text-align: left; }
       .hero-lead { text-align: left; font-size: 1.05rem; }
       
       .form-row { flex-direction: column; gap: 20px; }
       .modern-bento-card { padding: 30px; text-align: center; }
       .c-item { flex-direction: column; align-items: center; text-align: center; gap: 15px; }
       .c-text { align-items: center; text-align: center; }
    }
  </style>
`;


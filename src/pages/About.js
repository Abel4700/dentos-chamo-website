export const About = () => `
  <div class="app-section">
    <!-- Corporate Hero -->
    <section class="section page-header" style="background-image: linear-gradient(rgba(19, 70, 175, 0.4), rgba(10, 37, 95, 0.8)), url('/images/about1.png')">
      <div class="container text-center" style="text-shadow: 0 4px 15px rgba(0,0,0,0.4);">
        <span class="slogan-badge mb-20" style="display: inline-block; background: var(--secondary); color: var(--black); padding: 6px 18px; border-radius: 20px; font-weight: 700; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; box-shadow: 0 4px 10px rgba(0,0,0,0.3); text-shadow: none;">Corporate Profile</span>
        <h1 class="text-white" style="font-size: 4rem; margin-bottom: 20px; font-weight: 800;">Our Legacy of <span style="color: var(--secondary);">Trust</span></h1>
        <p class="text-white max-600" style="font-size: 1.25rem; opacity: 0.95; font-weight: 500;">
          Bridging the gap between global healthcare innovation and sustainable East African agriculture since our inception.
        </p>
      </div>
    </section>

    <!-- Founder's Vision -->
    <section class="section" style="padding: 100px 0;">
      <div class="container grid-2" style="align-items: center; gap: 60px;">
        <div class="about-image" style="position: relative;">
          <div style="position: absolute; top: -20px; left: -20px; width: 100%; height: 100%; border: 2px solid var(--primary); border-radius: 30px; z-index: -1;"></div>
          <img src="/images/about1.png" alt="Dr. Aklilu Berhanu" class="rounded-30 shadow-lg" style="width: 100%; object-fit: cover; aspect-ratio: 4/5;">
          <div class="glass" style="position: absolute; bottom: 30px; right: -30px; padding: 20px 30px; border-radius: 15px;">
            <h3 style="margin: 0; color: var(--primary);">20+ Years</h3>
            <p style="margin: 0; font-size: 0.9rem; font-weight: 600;">Clinical & Export Excellence</p>
          </div>
        </div>
        <div class="about-content">
          <h4 class="sub-title" style="color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Founding Leadership</h4>
          <h2 style="font-size: 3rem; margin-bottom: 30px;">Dr. Aklilu <span class="primary-text">Berhanu</span></h2>
          <p style="font-size: 1.1rem; line-height: 1.8; color: #555; border-left: 4px solid var(--secondary); padding-left: 20px; font-style: italic; margin-bottom: 30px;">
            "Our commitment has always been uncompromising quality—whether supplying advanced endodontic materials to local clinics or exporting premium organic sesame to the global market."
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #444;">
            Dentos Chamo was established under visionary leadership, starting as a focused dental medical import center. Driven by the mantra of <strong>Quality, Trust, Delivery, and Warranty</strong>, the company systematically expanded into a robust organic commodity export powerhouse, ensuring compliance with strict ISO and international trade standards.
          </p>
        </div>
      </div>
    </section>

    <!-- Dual Mission & Vision (Glassmorphism Cards) -->
    <section class="section bg-light" style="padding: 80px 0;">
      <div class="container">
        <h2 class="text-center mb-40" style="font-size: 2.5rem;">Corporate <span class="primary-text">Objectives</span></h2>
        <div class="grid-2" style="gap: 40px;">
          <!-- Medical Mission -->
          <div class="vm-segment glass" style="padding: 50px; border-radius: 30px; background: white; box-shadow: 0 20px 40px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <div style="width: 60px; height: 60px; background: rgba(19, 70, 175, 0.1); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
              <i class="fas fa-stethoscope"></i>
            </div>
            <h3 style="font-size: 1.8rem; margin-bottom: 25px;">Medical <span class="primary-text">Division</span></h3>
            <div style="margin-bottom: 20px;">
              <h5 style="color: var(--primary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Our Mission</h5>
              <p style="line-height: 1.6; color: #666;">To extend services beyond client expectations by supplying ISO-certified dental products at the right prices and the right time.</p>
            </div>
            <div>
              <h5 style="color: var(--primary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Our Vision</h5>
              <p style="line-height: 1.6; color: #666;">To be the most reputable dental materials manufacturer and distributor in East Africa.</p>
            </div>
          </div>

          <!-- Organic Mission -->
          <div class="vm-segment glass" style="padding: 50px; border-radius: 30px; background: white; box-shadow: 0 20px 40px rgba(0,0,0,0.05); transition: transform 0.3s ease;">
            <div style="width: 60px; height: 60px; background: rgba(255, 219, 63, 0.2); color: #d4a000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 20px;">
              <i class="fas fa-seedling"></i>
            </div>
            <h3 style="font-size: 1.8rem; margin-bottom: 25px;">Organic <span style="color: #d4a000;">Exports</span></h3>
            <div style="margin-bottom: 20px;">
              <h5 style="color: #d4a000; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Our Mission</h5>
              <p style="line-height: 1.6; color: #666;">To introduce high-quality Ethiopian agricultural products to the global market while maintaining sustainable organic practices.</p>
            </div>
            <div>
              <h5 style="color: #d4a000; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">Our Vision</h5>
              <p style="line-height: 1.6; color: #666;">To be the leading global exporter of organic oil seeds, spices, and premium pulses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW: Leadership Team Section -->
    <section class="section" style="padding: 100px 0;">
      <div class="container">
        <div class="text-center mb-40">
          <h4 class="sub-title" style="color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">The People Behind Our Success</h4>
          <h2 style="font-size: 2.8rem; margin-top: 10px;">Executive <span class="primary-text">Leadership</span></h2>
          <p class="max-600" style="margin: 15px auto; color: #666; font-size: 1.1rem;">A multidisciplinary team of clinical experts, agronomists, and international trade specialists dedicated to operational excellence.</p>
        </div>

        <div class="team-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px;">
          <!-- Team Member 1 -->
          <div class="team-card text-center" style="background: #fff; padding: 40px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: all 0.3s ease;">
            <div class="member-img mb-20">
              <img src="https://ui-avatars.com/api/?name=Aklilu+Berhanu&background=1346AF&color=fff&size=150&font-size=0.4" alt="Dr. Aklilu Berhanu" style="border-radius: 50%; border: 5px solid #f0f4f8; width: 150px; height: 150px; object-fit: cover;">
            </div>
            <h3 style="font-size: 1.4rem; margin-bottom: 5px;">Dr. Aklilu Berhanu</h3>
            <p style="color: var(--secondary); font-weight: 700; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 15px;">Founder & CEO</p>
            <p style="color: #777; font-size: 0.95rem; line-height: 1.5; padding: 0 10px;">Guiding the overall strategic vision of both the medical import and organic export divisions.</p>
          </div>

          <!-- Team Member 2 -->
          <div class="team-card text-center" style="background: #fff; padding: 40px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: all 0.3s ease;">
            <div class="member-img mb-20">
              <img src="https://ui-avatars.com/api/?name=Clinical+Director&background=1346AF&color=fff&size=150&font-size=0.4" alt="Clinical Director" style="border-radius: 50%; border: 5px solid #f0f4f8; width: 150px; height: 150px; object-fit: cover;">
            </div>
            <h3 style="font-size: 1.4rem; margin-bottom: 5px;">Jane Doe</h3>
            <p style="color: var(--primary); font-weight: 700; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 15px;">Chief Clinical Director</p>
            <p style="color: #777; font-size: 0.95rem; line-height: 1.5; padding: 0 10px;">Overseeing ISO compliance and supply chain logistics for all incoming dental materials.</p>
          </div>

          <!-- Team Member 3 -->
          <div class="team-card text-center" style="background: #fff; padding: 40px 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); transition: all 0.3s ease;">
            <div class="member-img mb-20">
              <img src="https://ui-avatars.com/api/?name=Agronomy+Lead&background=FFDB3F&color=000&size=150&font-size=0.4" alt="Export Operations" style="border-radius: 50%; border: 5px solid #f0f4f8; width: 150px; height: 150px; object-fit: cover;">
            </div>
            <h3 style="font-size: 1.4rem; margin-bottom: 5px;">John Smith</h3>
            <p style="color: #d4a000; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 15px;">Head of Agronomy Exports</p>
            <p style="color: #777; font-size: 0.95rem; line-height: 1.5; padding: 0 10px;">Managing direct partnerships with organic farmers and ensuring rigorous export quality control.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .page-header {
      padding: 120px 0 100px;
      background-size: cover;
      background-position: center;
      margin-top: -80px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    }
    
    .vm-segment:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.08) !important;
    }

    .team-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(19, 70, 175, 0.1) !important;
    }
    
    .team-card .member-img img {
      transition: transform 0.4s ease;
    }

    .team-card:hover .member-img img {
      transform: scale(1.05);
    }
  </style>
`;

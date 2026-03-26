export const About = () => `
  <div class="app-section">
    <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/about1.png')">
      <div class="container text-center">
        <h1 class="text-white">Our Story & Legacy</h1>
        <p class="text-white">Dentos Chamo Import & Export PLC: Excellence in Dual Domains.</p>
      </div>
    </section>

    <!-- Founder's Profile -->
    <section class="section">
      <div class="container grid-2">
        <div class="about-image">
          <img src="/images/about1.png" alt="Dr. Aklilu Berhanu" class="rounded-30 shadow-lg">
        </div>
        <div class="about-content">
          <h4 class="sub-title">Founding Leadership</h4>
          <h2>The Journey of <span class="primary-text">Dr. Aklilu Berhanu</span></h2>
          <p>Dentos Chamo was established under the visionary leadership of Dr. Aklilu Berhanu, starting as a focused dental medical import center and expanding into a robust organic commodity export powerhouse.</p>
          <p class="mt-20">Our core values revolve around the mantra: <strong>Quality + TRUST + Delivery + Warranty</strong>. This commitment has made us a household name for practitioners and commodity buyers alike across East Africa.</p>
        </div>
      </div>
    </section>

    <!-- Dual Mission/Vision -->
    <section class="section bg-light">
      <div class="container">
        <div class="grid-2">
          <div class="vm-segment glass p-40">
            <h3>Medical <span class="accent">Import</span></h3>
            <p><strong>Mission:</strong> To extend services beyond client expectations to ensure we supply the right dental products, at the right prices, at the right time.</p>
            <p class="mt-10"><strong>Vision:</strong> To be the most reputable dental materials manufacturer and distributor in East Africa.</p>
          </div>
          <div class="vm-segment glass p-40">
            <h3>Organic <span class="accent">Export</span></h3>
            <p><strong>Mission:</strong> To introduce high-quality Ethiopian agricultural products to the global market while maintaining sustainable organic practices.</p>
            <p class="mt-10"><strong>Vision:</strong> To be the leading exporter of organic oil seeds and pulses globally.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="text-center">Our Core <span class="primary-text">Global Commitment</span></h2>
        <div class="values-grid-alt mt-40">
          <div class="v-card">
            <h4>Quality Assurance</h4>
            <p>Rigorous testing and certification for all medical and agricultural supplies.</p>
          </div>
          <div class="v-card">
            <h4>Sustainable Sourcing</h4>
            <p>Direct partnership with local organic farmers for premium oil seeds and pulses.</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .page-header {
      padding: 100px 0;
      background-size: cover;
      background-position: center;
      margin-top: -80px;
    }
    .text-white { color: var(--white); }
    .shadow-lg { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
    
    .vm-segment h3 { margin-bottom: 20px; color: var(--primary); }
    .p-40 { padding: 40px; border-radius: 30px; }
    
    .values-grid-alt {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    
    .v-card {
      padding: 30px;
      border-bottom: 4px solid var(--secondary);
      background: #fff;
    }
    
    .v-card h4 { margin-bottom: 10px; color: var(--primary); }
  </style>
`;

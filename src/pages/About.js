export const About = () => `
  <div class="app-section">
    <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/about1.png')">
      <div class="container text-center">
        <h1 class="text-white">About Us</h1>
        <p class="text-white">Discover the story and heart of Dentos Chamo.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid-2">
        <div class="about-image">
          <img src="/images/about1.png" alt="Our History" class="rounded-30 blur-in">
        </div>
        <div class="about-content">
          <h2>Our <span class="primary-text">Vision & Story</span></h2>
          <p>Founded in 2010, Dentos Chamo began with a simple idea: to revolutionize how dental services are delivered to the corporate world. Today, we are a leading provider of innovative healthcare infrastructure.</p>
          
          <div class="vm-grid">
            <div class="vm-card">
              <h3><i class="fas fa-eye"></i> Vision</h3>
              <p>To be the global benchmark for excellence in dental healthcare technology and service integration.</p>
            </div>
            <div class="vm-card">
              <h3><i class="fas fa-bullseye"></i> Mission</h3>
              <p>Empowering dental professionals with cutting-edge tools and strategy to enhance patient outcomes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="text-center">Meet Our <span class="accent">Leadership</span></h2>
        <div class="team-grid">
          <div class="team-card glass">
            <div class="team-img-placeholder">JD</div>
            <h3>John Doe</h3>
            <span>CEO & Founder</span>
          </div>
          <div class="team-card glass">
            <div class="team-img-placeholder">JS</div>
            <h3>Jane Smith</h3>
            <span>Technical Director</span>
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
    
    .rounded-30 { border-radius: 30px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    
    .vm-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 30px;
    }
    
    .vm-card {
      padding: 20px;
      border-left: 4px solid var(--secondary);
      background: #fff;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      margin-top: 50px;
    }

    .team-card {
      padding: 30px;
      text-align: center;
      border-radius: 20px;
    }

    .team-img-placeholder {
      width: 100px;
      height: 100px;
      background: var(--primary);
      color: var(--white);
      margin: 0 auto 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
    }
  </style>
`;

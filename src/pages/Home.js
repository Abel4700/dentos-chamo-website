export const Home = () => `
  <div class="app-section">
    <!-- Hero Slider -->
    <section class="hero-slider">
      <div class="slide active" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/hero1.png')">
        <div class="container hero-content">
          <h1>Pioneering <span class="accent">Excellence</span> In Dental Care</h1>
          <p>Innovating dental healthcare systems with premium corporate solutions and state-of-the-art technology.</p>
          <div class="hero-btns">
            <a href="#/products" class="btn btn-primary">explore products</a>
            <a href="#/about" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section intro-section">
      <div class="container grid-2">
        <div class="intro-text">
          <h4 class="sub-title">Welcome to Dentos Chamo</h4>
          <h2>A Legacy of Professional <span class="primary-text">Health Solutions</span></h2>
          <p>Dentos Chamo stands at the forefront of the dental industry, providing comprehensive corporate services and high-quality equipment to practitioners worldwide. Our mission is to bridge the gap between technology and patient care.</p>
          <ul class="check-list">
            <li><i class="fas fa-check-circle"></i> Certified Medical Equipment</li>
            <li><i class="fas fa-check-circle"></i> Specialized Consulting Services</li>
            <li><i class="fas fa-check-circle"></i> Global Supply Chain Distribution</li>
          </ul>
        </div>
        <div class="intro-image glass">
          <img src="/images/product1.png" alt="Featured Service">
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="section products-preview bg-light">
      <div class="container">
        <div class="section-header text-center">
          <h2>Featured <span class="accent">Equipment</span></h2>
          <p>Modern solutions for modern practices.</p>
        </div>
        <div class="product-grid-mini">
          <div class="product-card glass">
            <img src="/images/product1.png" alt="Dental Chair">
            <div class="p-info">
              <h3>D-Series Ergonomic Chair</h3>
              <p>Premium comfort and precision.</p>
              <a href="#/product-details" class="link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div class="product-card glass">
            <img src="/images/product2.png" alt="X-Ray">
            <div class="p-info">
              <h3>X-Scan Panoramic</h3>
              <p>Advanced digital imaging.</p>
              <a href="#/product-details" class="link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="text-center mt-40">
          <a href="#/products" class="btn btn-outline">Explore All Products</a>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials">
      <div class="container">
        <h2 class="text-center">Trusted By Professionals</h2>
        <div class="testimonial-slider">
          <div class="testimonial glass">
            <p>"Dentos Chamo has transformed our clinic with their state-of-the-art solutions. Highly recommended!"</p>
            <div class="auth">
              <strong>Dr. Sarah Jenkins</strong>
              <span>Chief Surgeon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .hero-slider {
      height: 100vh;
      position: relative;
      margin-top: -80px;
    }
    
    .slide {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: var(--white);
    }

    .hero-content {
      max-width: 800px;
    }

    .hero-content h1 {
      font-size: 4rem;
      margin-bottom: 20px;
    }

    .hero-btns {
      display: flex;
      gap: 20px;
      margin-top: 30px;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .sub-title {
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    .check-list {
      margin-top: 20px;
    }

    .check-list li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .check-list i {
      color: var(--secondary);
    }

    .product-grid-mini {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 50px;
    }

    .product-card {
      padding: 20px;
      border-radius: 20px;
      overflow: hidden;
      text-align: center;
    }

    .product-card img {
      border-radius: 15px;
      margin-bottom: 20px;
      transition: var(--transition);
    }

    .product-card:hover img {
      transform: scale(1.05);
    }

    .link {
      color: var(--primary);
      font-weight: 600;
      display: inline-block;
      margin-top: 10px;
    }

    .bg-light { background: var(--bg-light); }
    .text-center { text-align: center; }
    .mt-40 { margin-top: 40px; }

    .testimonial {
      padding: 40px;
      border-radius: 30px;
      max-width: 600px;
      margin: 40px auto;
      text-align: center;
    }

    .testimonial p {
      font-size: 1.2rem;
      font-style: italic;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      .grid-2, .product-grid-mini { grid-template-columns: 1fr; }
      .hero-content h1 { font-size: 2.5rem; }
    }
  </style>
`;

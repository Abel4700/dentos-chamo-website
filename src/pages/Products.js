export const Products = () => `
  <div class="app-section">
    <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/hero1.png')">
      <div class="container text-center">
        <h1 class="text-white">Our Products</h1>
        <p class="text-white">Professional dental equipment and specialized tools.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="product-filters text-center">
          <button class="btn btn-outline active" data-filter="all">All</button>
          <button class="btn btn-outline" data-filter="medical">Medical Import</button>
          <button class="btn btn-outline" data-filter="organic">Organic Export</button>
        </div>

        <div class="product-grid mt-40">
          <!-- Medical Products -->
          <div class="product-card glass medical-item">
            <img src="/images/product1.png" alt="Dental Chair">
            <div class="p-info">
              <h3>D-Series Ergonomic Chair</h3>
              <p>Segment: Medical Import</p>
              <div class="price">Inquire for Price</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Details</a>
            </div>
          </div>
          <div class="product-card glass medical-item">
            <img src="/images/product2.png" alt="X-Ray">
            <div class="p-info">
              <h3>X-Scan Panoramic</h3>
              <p>Segment: Medical Import</p>
              <div class="price">Inquire for Price</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Details</a>
            </div>
          </div>
          <div class="product-card glass medical-item">
            <div class="p-info">
              <h3>Fusion Bond 5</h3>
              <p>Category: Adhesives & Etchants</p>
              <p>Segment: Medical Import</p>
              <a href="#/product-details" class="btn btn-primary mt-20">View Details</a>
            </div>
          </div>

          <!-- Organic Products -->
          <div class="product-card glass organic-item">
            <img src="/images/sesame.png" alt="Sesame Seeds">
            <div class="p-info">
              <h3>Premium White Sesame Seeds</h3>
              <p>Segment: Organic Export</p>
              <div class="price">Bulk Pricing Available</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Details</a>
            </div>
          </div>
          <div class="product-card glass organic-item">
            <img src="/images/oil_seeds.png" alt="Oil Seeds">
            <div class="p-info">
              <h3>Organic Oil Seeds & Pulses</h3>
              <p>Segment: Organic Export</p>
              <div class="price">Bulk Pricing Available</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .product-filters {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
    }
    .price {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
      margin-top: 10px;
    }
    .mt-20 { margin-top: 20px; }
  </style>
`;

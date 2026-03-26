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
          <button class="btn btn-outline active">All</button>
          <button class="btn btn-outline">Dental Chairs</button>
          <button class="btn btn-outline">Imaging</button>
          <button class="btn btn-outline">Tools</button>
        </div>

        <div class="product-grid mt-40">
          <div class="product-card glass">
            <img src="/images/product1.png" alt="Dental Chair">
            <div class="p-info">
              <h3>D-Series Ergonomic Chair</h3>
              <p>Category: Dental Chairs</p>
              <div class="price">$5,400</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Product</a>
            </div>
          </div>
          <div class="product-card glass">
            <img src="/images/product2.png" alt="X-Ray">
            <div class="p-info">
              <h3>X-Scan Panoramic</h3>
              <p>Category: Imaging</p>
              <div class="price">$12,000</div>
              <a href="#/product-details" class="btn btn-primary mt-20">View Product</a>
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

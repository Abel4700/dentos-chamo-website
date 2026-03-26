export const ProductDetails = () => `
  <div class="app-section">
    <section class="section">
      <div class="container grid-2">
        <div class="product-image glass">
          <img src="/images/product1.png" alt="Product Detail">
        </div>
        <div class="product-info-details">
          <h2>D-Series <span class="primary-text">Ergonomic Chair</span></h2>
          <div class="price-large">$5,400</div>
          <p class="mt-20">The D-Series ergonomic chair is designed for maximum practitioner comfort and patient relaxation during long procedures. It features a seamless medical-grade upholstery and intuitive controls.</p>
          
          <div class="variations mt-30">
            <h4>Color Variations</h4>
            <div class="color-options">
              <span class="color-circle" style="background: #ffffff"></span>
              <span class="color-circle" style="background: #e2e8f0"></span>
              <span class="color-circle" style="background: #1346af"></span>
            </div>
          </div>

          <div class="cta-btns mt-40">
            <button class="btn btn-primary">Request Quote</button>
            <button class="btn btn-outline">Check Availability</button>
          </div>

          <div class="related-products mt-60">
            <h3>Related Products</h3>
            <div class="related-list">
              <a href="#/product-details" class="related-item">
                <img src="/images/product2.png" alt="Related">
                <span>X-Scan X-Ray</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .price-large {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary);
    }
    .color-options {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
    .color-circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    .related-list {
      display: flex;
      gap: 20px;
      margin-top: 20px;
    }
    .related-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
    .related-item img {
      width: 100px;
      border-radius: 10px;
    }
    .mt-30 { margin-top: 30px; }
    .mt-60 { margin-top: 60px; }
  </style>
`;

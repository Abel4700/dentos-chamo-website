export const Contact = () => `
  <div class="app-section">
    <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/about1.png')">
      <div class="container text-center text-white">
        <h1>Contact Us</h1>
        <p>Connect with our corporate team for inquiries and support.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid-2">
        <div class="contact-form-container glass">
          <h2>Send us a Message</h2>
          <form id="contact-form" class="mt-30">
            <div class="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email Address" required>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea placeholder="How can we help?" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit Message</button>
          </form>
        </div>
        <div class="contact-details">
          <div class="details-card glass">
            <h3>Corporate Office</h3>
            <p><i class="fas fa-map-marker-alt"></i>Nifas Silk Lafto Woreda 01, Infront of Lebu Medhani-alem Church, Addis Ababa, Ethiopia</p>
            <p style="align-items: flex-start;">
              <i class="fas fa-phone" style="margin-top: 5px;"></i> 
              <span>
                +251 913 70 07 18<br>
                +251 986 23 23 27<br>
                +251 989 12 12 16
              </span>
            </p>
            <p style="align-items: flex-start;">
              <i class="fas fa-envelope" style="margin-top: 5px;"></i> 
              <span>
                <a href="mailto:dentosechamotradingplc88@gmail.com" style="color: inherit; text-decoration: none;">dentosechamotradingplc88@gmail.com</a><br>
                <a href="mailto:dentose1@gmail.com" style="color: inherit; text-decoration: none;">dentose1@gmail.com</a>
              </span>
            </p>
          </div>
          <div class="map-mock mt-30 glass">
            <div class="map-placeholder">
              <i class="fas fa-map-marked-alt"></i>
              <span>Google Maps Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .contact-form-container {
      padding: 40px;
      border-radius: 30px;
    }
    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    input, textarea {
      padding: 12px 15px;
      border-radius: 10px;
      border: 1px solid #e2e8f0;
      font-family: inherit;
    }
    .w-100 { width: 100%; margin-top: 10px; }
    .details-card {
      padding: 30px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .map-mock {
      height: 300px;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f1f5f9;
      color: var(--text-muted);
    }
    .map-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      font-size: 1.2rem;
    }
    .map-placeholder i { font-size: 3rem; color: var(--primary); }
  </style>
`;

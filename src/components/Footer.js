export const Footer = () => `
  <footer class="section">
    <div class="container footer-grid">
      <div class="footer-info">
        <h3>DENTOSE <span class="accent">CHAMO TRADING PLC.</span></h3>
        <p>Your professional corporate partner for high-end dental solutions and community health.</p>
        <div class="social-links">
          <a href="https://m.me/dentosechamo.tradingplc" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="https://t.me/Dentosechamo" target="_blank"><i class="fab fa-telegram"></i></a>
          <a href="https://instagram.com/dentose_chamo" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://tiktok.com/@dentosedentalmaterial" target="_blank"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/about">About Us</a></li>
          <li><a href="#/products">Products</a></li>
          <li><a href="#/blog">Latest News</a></li>
        </ul>
      </div>
      <div class="footer-links">
        <h4>Support</h4>
        <ul>
          <li><a href="#/contact">Contact Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4>Connect</h4>
        <p><i class="fas fa-map-marker-alt"></i>Nifas Silk Lafto Woreda 01, Infront of Lebu Medhani-alem Church, Addis Ababa</p>
        <p style="gap: 15px; align-items: flex-start;">
          <i class="fas fa-phone" style="margin-top: 5px;"></i> 
          <span>
            +251 913 70 07 18<br>
            +251 986 23 23 27<br>
            +251 989 12 12 16
          </span>
        </p>
        <p style="gap: 15px; align-items: flex-start;">
          <i class="fas fa-envelope" style="margin-top: 5px;"></i>
          <span>
            <a href="mailto:dentosechamotradingplc88@gmail.com" style="color: #cbd5e1; text-decoration: none;">dentosechamotradingplc88@gmail.com</a>
          </span>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; 2026 Dentos Chamo. All Rights Reserved.</p>
      </div>
    </div>
  </footer>

  <style>
    footer {
      background-color: var(--primary);
      color: var(--white);
      padding-bottom: 20px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 40px;
    }

    h3, h4 { margin-bottom: 20px; }
    
    .accent { color: var(--secondary); }
    
    .footer-info p {
      color: #cbd5e1;
      margin-bottom: 20px;
      max-width: 300px;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-links a {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.2rem;
    }

    .social-links a:hover {
      background: var(--secondary);
      color: var(--black);
    }

    .footer-links ul li {
      margin-bottom: 10px;
    }

    .footer-links a {
      color: #cbd5e1;
    }

    .footer-links a:hover {
      color: var(--secondary);
      padding-left: 5px;
    }

    .footer-contact p {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #cbd5e1;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 40px;
      padding-top: 20px;
      text-align: center;
      font-size: 0.9rem;
      color: #94a3b8;
    }

    @media (max-width: 992px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 576px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
`;

export const Footer = () => `
  <footer class="partners-footer-v3">
    <div class="footer-geometric-texture"></div>
    <div class="container footer-grid-v3">
      <div class="footer-brand-v3">
        <h3 class="section-title-visionary" style="font-size: 1.8rem; margin-bottom: 20px; color: var(--text-main);">DENTOSE <span class="accent-text">CHAMO</span></h3>
        <p class="text-muted-standard" style="font-size: 1rem; margin-bottom: 30px;">Africa’s Strategic Gateway to Global Medical Technology. Bridging world-class innovation with continental accessibility.</p>
        <div class="social-links-v3">
          <a href="https://m.me/dentosechamo.tradingplc" target="_blank" class="social-orb"><i class="fab fa-facebook"></i></a>
          <a href="https://t.me/Dentosechamo" target="_blank" class="social-orb"><i class="fab fa-telegram"></i></a>
          <a href="https://instagram.com/dentose_chamo" target="_blank" class="social-orb"><i class="fab fa-instagram"></i></a>
          <a href="https://tiktok.com/@dentosedentalmaterial" target="_blank" class="social-orb"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>

      <div class="footer-links-v3">
        <h4 class="accent-text" style="font-weight: 800; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 25px;">Strategic Hub</h4>
        <ul>
          <li><a href="#/">Home Gateway</a></li>
          <li><a href="#/about">About the Hub</a></li>
          <li><a href="#/partners">Partner Network</a></li>
          <li><a href="#/products">Medical Solutions</a></li>
        </ul>
      </div>

      <div class="footer-links-v3">
        <h4 class="accent-text" style="font-weight: 800; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 25px;">Support & Policy</h4>
        <ul>
          <li><a href="#/contact">Contact Command</a></li>
          <li><a href="#">F.A.Q</a></li>
          <li><a href="#">Privacy Protocol</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>

      <div class="footer-contact-v3">
        <h4 class="accent-text" style="font-weight: 800; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 25px;">Headquarters</h4>
        <p><i class="fas fa-map-marker-alt accent-text"></i> Nifas Silk Lafto Woreda 01, Addis Ababa</p>
        <p><i class="fas fa-phone accent-text"></i> +251 913 70 07 18</p>
        <p style="margin-bottom: 10px;"><i class="fas fa-envelope accent-text"></i> <a href="mailto:info@dentosechamo.com">info@dentosechamo.com</a></p>
        <p><i class="fas fa-envelope accent-text" style="opacity:0;"></i> <a href="mailto:sales@dentosechamo.com">sales@dentosechamo.com</a></p>
      </div>
    </div>

    <div class="footer-bottom-v3">
      <div class="container">
        <div class="bottom-flex-v3">
          <p>&copy; 2026 DENTOSE CHAMO. STRATEGIC MEDICAL HUB.</p>
          <div class="footer-legal-v3">
             <span>ISO 13485 CERTIFIED</span>
             <span class="dot-separator"></span>
             <span>FTZ COMPLIANT</span>
          </div>
        </div>
      </div>
    </div>

    <style>
      .partners-footer-v3 {
        background: #f1f5f9;
        color: var(--text-main);
        padding: 100px 0 40px;
        position: relative;
        overflow: hidden;
        border-top: 1px solid #e2e8f0;
      }

      .footer-geometric-texture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
        opacity: 0.05;
        pointer-events: none;
      }

      .footer-grid-v3 {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
        gap: 60px;
        position: relative;
        z-index: 5;
      }

      .footer-brand-v3 { max-width: 400px; }
      
      .social-links-v3 { display: flex; gap: 15px; }
      .social-orb {
        width: 45px;
        height: 45px;
        background: white;
        border: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease;
      }
      .social-orb:hover {
        background: rgba(21, 32, 166, 0.1);
        border-color: var(--primary);
        color: var(--primary);
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(21, 32, 166, 0.2);
      }

      .footer-links-v3 ul li { margin-bottom: 12px; }
      .footer-links-v3 a {
        color: #64748b;
        transition: all 0.3s ease;
        font-size: 0.95rem;
      }
      .footer-links-v3 a:hover {
        color: var(--primary);
        padding-left: 8px;
      }

      .footer-contact-v3 p {
        display: flex;
        gap: 15px;
        color: #64748b;
        margin-bottom: 20px;
        font-size: 0.95rem;
      }

      .footer-bottom-v3 {
        margin-top: 80px;
        padding-top: 30px;
        border-top: 1px solid #e2e8f0;
      }

      .bottom-flex-v3 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #64748b;
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 1px;
      }

      .footer-legal-v3 { display: flex; align-items: center; gap: 20px; }
      .dot-separator { width: 4px; height: 4px; background: rgba(64, 224, 208, 0.3); border-radius: 50%; }

      @media (max-width: 992px) {
        .footer-grid-v3 { grid-template-columns: 1fr 1fr; gap: 40px; }
      }
      @media (max-width: 576px) {
        .footer-grid-v3 { grid-template-columns: 1fr; }
        .bottom-flex-v3 { flex-direction: column; gap: 20px; text-align: center; }
      }
    </style>
  </footer>
`;

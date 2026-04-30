export const Header = () => `
  <header id="main-header" class="glass">
    <div class="container nav-container">
      <a href="#/" class="logo">
        <img src="/images/dentosechamo-logo.png" alt="Dentos Chamo Group Logo" class="brand-logo">
      </a>
      
      <nav class="nav-links">
        <a href="#/">Home</a>
        <a href="#/about">About</a>
       
        
        <!-- Multi-Entity Dropdown -->
        <div class="dropdown">
          <button class="dropbtn">Our Companies <i class="fas fa-chevron-down" style="font-size: 0.8em; margin-left: 5px;"></i></button>
          <div class="dropdown-content glass-premium">
            <a href="#/companies/dentos-chamo">
              <strong>Dentose Chamo Trading PLC</strong>
              <span class="sub-text">Medical Devices & Agricultural Export</span>
            </a>
            <a href="#/companies/dentos-dire-dawa">
              <strong>Dentose Dire Dawa Logistics PLC</strong>
              <span class="sub-text">Regional Logistics & FTZ Division</span>
            </a>
            <a href="#/companies/ora-dent">
              <strong>Ora-Dent Oral Cosmetics</strong>
              <span class="sub-text">Aesthetic Dental & Cosmetics</span>
            </a>
            <a href="#/companies/akedent">
              <strong>Akedent Pharmaceutical and Medical Equipment Whole Sale</strong>
              <span class="sub-text">Pharma & Heavy Lab Machinery</span>
            </a>
          </div>
        </div>
         <a href="#/products">Products</a>

        <a href="#/partners">Partners</a>
        <a href="#/blog">News</a>
        <a href="#/contact" class="btn btn-primary contact-btn">Contact</a>
      </nav>

      <button class="mobile-menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <style>
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      height: 80px;
      display: flex;
      align-items: center;
      transition: var(--transition);
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }

    .brand-logo {
      height: 60px;
      width: auto;
      object-fit: contain;
    }

    .nav-links {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .nav-links > a, .dropbtn {
      font-weight: 600;
      color: var(--text-main);
      position: relative;
      background: none;
      border: none;
      font-family: inherit;
      font-size: 1rem;
      cursor: pointer;
      padding: 10px 0;
      text-decoration: none;
    }

    .nav-links > a::after, .dropbtn::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: var(--transition);
    }

    .nav-links > a:hover::after, .dropdown:hover .dropbtn::after {
      width: 100%;
    }

    /* Dropdown Logic */
    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: -50px;
      background-color: #ffffff;
      min-width: 320px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
      border-radius: 12px;
      overflow: hidden;
      z-index: 1001;
      border: 1px solid rgba(0,0,0,0.05);
      animation: fadeIn 0.2s ease;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropdown-content a {
      color: #0f172a;
      padding: 15px 20px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #f1f5f9;
      transition: background 0.2s;
    }
    .dropdown-content a:last-child {
      border-bottom: none;
    }
    .dropdown-content a:hover {
      background-color: #f8fafc;
    }
    .dropdown-content strong {
      font-size: 0.95rem;
      color: var(--primary);
      margin-bottom: 3px;
    }
    .sub-text {
      font-size: 0.8rem;
      color: #64748b;
    }

    .contact-btn {
      color: var(--white) !important;
      padding: 10px 25px !important;
      background-color: var(--primary) !important;
    }
    .contact-btn:hover {
      background-color: var(--primary-dark) !important;
    }
    .contact-btn::after { display: none !important; }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .mobile-menu-btn span {
      display: block;
      width: 25px;
      height: 3px;
      background: var(--primary);
      border-radius: 3px;
    }

    @media (max-width: 1024px) {
      .mobile-menu-btn { display: flex; }
      .nav-links {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: var(--white);
        flex-direction: column;
        padding: 50px 0;
        transition: var(--transition);
        overflow-y: auto;
      }
      .nav-links.active { left: 0; }
      
      .dropdown-content {
        position: static;
        display: none;
        box-shadow: none;
        border: none;
        border-radius: 0;
        background: #f8fafc;
        width: 100%;
      }
      .dropdown.active .dropdown-content {
        display: block;
      }
      .dropdown-content a {
        align-items: center;
        text-align: center;
      }
      .dropdown { text-align: center; width: 100%; }
    }
  </style>

  <script>
    // Unified Header & Dropdown UX Controller
    document.addEventListener('click', (e) => {
      const dropbtn = e.target.closest('.dropbtn');
      const dropdownItem = e.target.closest('.dropdown-content a');
      const dropdown = document.querySelector('.dropdown');
      const dropdownContent = document.querySelector('.dropdown-content');

      // --- MOBILE HAMBURGER TOGGLE ---
      const menuBtn = e.target.closest('.mobile-menu-btn');
      if (menuBtn) {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        return; 
      }

      // --- DROPDOWN TOGGLE (HEADER CLICK) ---
      if (dropbtn) {
        e.preventDefault();
        e.stopPropagation();
        
        if (window.innerWidth <= 1024) {
          // MOBILE: Standard Accordion Toggle
          dropdown.classList.toggle('active');
        } else {
          // DESKTOP: Hover Override (Retract on click)
          if (dropdownContent && window.getComputedStyle(dropdownContent).display === 'block') {
            dropdownContent.style.display = 'none';
            setTimeout(() => { dropdownContent.style.display = ''; }, 100);
          }
        }
        return;
      }

      // --- LINK CLICKED (NAVIGATE & CLOSE) ---
      if (dropdownItem || e.target.closest('.nav-links > a')) {
        closeAllMenus();
        return;
      }

      // --- CLICK OUTSIDE TO CLOSE ---
      if (!e.target.closest('.dropdown') && !e.target.closest('.nav-links')) {
        closeAllMenus();
      }
    });

    // Scroll handler for visibility
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    function closeAllMenus() {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('active');
      const menuBtn = document.querySelector('.mobile-menu-btn');
      if (menuBtn) menuBtn.classList.remove('active');
      const dropdown = document.querySelector('.dropdown');
      if (dropdown) dropdown.classList.remove('active');
      document.body.style.overflow = '';
    }
  </script>
  <style>
    header.scrolled {
      background: white !important;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      height: 70px;
    }
  </style>
`;

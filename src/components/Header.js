export const Header = () => `
  <header class="glass">
    <div class="container nav-container">
      <a href="#/" class="logo">
        <span class="logo-text">DENTOS <span class="accent">CHAMO</span></span>
      </a>
      <nav class="nav-links">
        <a href="#/">Home</a>
        <a href="#/about">About Us</a>
        <a href="#/products">Products</a>
        <a href="#/blog">Blog</a>
        <a href="#/media">Media</a>
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
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: 1px;
      color: var(--primary);
      text-decoration: none;
    }

    .accent {
      color: var(--secondary);
    }

    .nav-links {
      display: flex;
      gap: 30px;
      align-items: center;
    }

    .nav-links a {
      font-weight: 500;
      color: var(--text-main);
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--secondary);
      transition: var(--transition);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .contact-btn {
      color: var(--white) !important;
      padding: 10px 25px !important;
    }
    
    .contact-btn::after { display: none; }

    .mobile-menu-btn {
      display: none;
      flex-direction: column;
      gap: 5px;
    }

    .mobile-menu-btn span {
      display: block;
      width: 25px;
      height: 3px;
      background: var(--primary);
      border-radius: 3px;
    }

    @media (max-width: 768px) {
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
      }
      .nav-links.active { left: 0; }
    }
  </style>
`;

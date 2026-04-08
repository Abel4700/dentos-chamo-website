import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { ProductDetails } from './pages/ProductDetails.js';
import { Blog } from './pages/Blog.js';
import { Media } from './pages/Media.js';
import { Contact } from './pages/Contact.js';

// Multi-Entity Components
import { DentoseChamo } from './pages/DentoseChamo.js';
import { OraDent } from './pages/OraDent.js';
import { Akedent } from './pages/Akedent.js';
import { DentosDireDawa } from './pages/DentosDireDawa.js';
import { Partners } from './pages/Partners.js';

// Centralised Products Hub
import { ProductsHub } from './pages/ProductsHub.js';

const routes = {
  '/': Home,
  '#/': Home,
  '#/about': About,
  '#/companies/dentos-chamo': DentoseChamo,
  '#/companies/ora-dent': OraDent,
  '#/companies/akedent': Akedent,
  '#/companies/dentos-dire-dawa': DentosDireDawa,
  '#/partners': Partners,
  '#/products': ProductsHub, // Global Centralized Catalog
  '#/product-details': ProductDetails,
  '#/blog': Blog,
  '#/media': Media,
  '#/contact': Contact
};

export function initRouter() {
  const app = document.getElementById('app');

  const render = () => {
    const fullPath = window.location.hash || '#/';
    const [basePath, queryString] = fullPath.split('?');
    
    // Parse query parameters beautifully
    const queryParams = {};
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      for (const [key, value] of urlParams.entries()) {
        queryParams[key] = value;
      }
    }

    const component = routes[basePath] || Home;
    
    // Inject the parsed query params into the rendering component
    app.innerHTML = component(queryParams);
    window.scrollTo(0, 0);
    
    // Trigger entrance animations globally after mount
    document.querySelectorAll('.app-section').forEach(sec => {
      sec.classList.add('fade-in');
    });
  };

  window.addEventListener('hashchange', render);
  window.addEventListener('load', render);
  
  // Initial render
  render();
}

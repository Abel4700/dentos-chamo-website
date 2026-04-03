import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Products } from './pages/Products.js';
import { ProductDetails } from './pages/ProductDetails.js';
import { Blog } from './pages/Blog.js';
import { Media } from './pages/Media.js';
import { Contact } from './pages/Contact.js';

// New Multi-Entity Components
import { OraDent } from './pages/OraDent.js';
import { Akedent } from './pages/Akedent.js';
import { Partners } from './pages/Partners.js';

const routes = {
  '/': Home,
  '#/': Home,
  '#/about': About,
  '#/companies/dentos-chamo': Products, // Currently reusing the robust products catalog
  '#/companies/ora-dent': OraDent,
  '#/companies/akedent': Akedent,
  '#/partners': Partners,
  '#/product-details': ProductDetails,
  '#/blog': Blog,
  '#/media': Media,
  '#/contact': Contact,
  
  // Legacy short routes mapping to the new structure
  '#/products': Products
};

export function initRouter() {
  const app = document.getElementById('app');

  const render = () => {
    // Strip out query parameters (split by '?') before routing
    const fullPath = window.location.hash || '#/';
    const basePath = fullPath.split('?')[0];
    const component = routes[basePath] || Home;
    
    app.innerHTML = component();
    window.scrollTo(0, 0);
    
    // Trigger entrance animations
    document.querySelectorAll('.app-section').forEach(sec => {
      sec.classList.add('fade-in');
    });
  };

  window.addEventListener('hashchange', render);
  window.addEventListener('load', render);
  
  // Initial render
  render();
}

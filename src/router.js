import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Products } from './pages/Products.js';
import { ProductDetails } from './pages/ProductDetails.js';
import { Blog } from './pages/Blog.js';
import { Media } from './pages/Media.js';
import { Contact } from './pages/Contact.js';

const routes = {
  '/': Home,
  '#/': Home,
  '#/about': About,
  '#/products': Products,
  '#/product-details': ProductDetails,
  '#/blog': Blog,
  '#/media': Media,
  '#/contact': Contact,
};

export function initRouter() {
  const app = document.getElementById('app');

  const render = () => {
    const path = window.location.hash || '#/';
    const component = routes[path] || Home;
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

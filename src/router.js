import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { ProductDetails } from './pages/ProductDetails.js';
import { Blog } from './pages/Blog.js';
import { BlogPost } from './pages/BlogPost.js';
import { Media } from './pages/Media.js';
import { Contact } from './pages/Contact.js';

// Multi-Entity Components
import { DentoseChamo } from './pages/DentoseChamo.js';
import { OraDent } from './pages/OraDent.js';
import { Akedent } from './pages/Akedent.js';
import { DentosDireDawa } from './pages/DentosDireDawa.js';
import { Partners } from './pages/Partners.js';

import { updateSEO, injectProductSchema } from './lib/seo.js';

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

const routeSEO = {
  '#/': { title: 'Home', description: 'Premium Medical Solutions & Agricultural Innovation in East Africa.' },
  '#/about': { title: 'About Us', description: 'A legacy of medical excellence and strategic healthcare distribution.' },
  '#/products': { title: 'Medical Portfolio', description: 'Comprehensive catalog of premium medical, clinical, and surgical supplies.' },
  '#/partners': { title: 'Our Partners', description: 'Collaborating with global leaders in medical manufacturing.' },
  '#/blog': { title: 'Healthcare News', description: 'Insights and updates from the Dentos Chamo Group.' },
  '#/contact': { title: 'Contact Support', description: 'Get in touch with our medical distribution and procurement experts.' }
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

    let component = routes[basePath] || Home;
    
    // Dynamic Route Handling: Catch #/blog/:slug
    if (basePath.startsWith('#/blog/') && basePath !== '#/blog') {
      const slug = basePath.replace('#/blog/', '');
      queryParams.slug = slug;
      component = BlogPost;
    }
    
    // Update SEO Metadata
    const meta = routeSEO[basePath] || routeSEO['#/'];
    updateSEO(meta);

    // Track Page View for Google Analytics
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_title: meta.title,
        page_location: window.location.href,
        page_path: window.location.hash
      });
    }

    // Inject the parsed query params into the rendering component
    app.innerHTML = component(queryParams);
    window.scrollTo(0, 0);
    
    // Lifecycle Hook: Execute mount function if component exposes it (Best Practice for Async Data)
    if (typeof component.mount === 'function') {
      component.mount(queryParams);
    }
    
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

import './style.css';
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
import { initRouter } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { initChatbot } from './components/Chatbot.js';
import { Slider } from './components/Slider.js';

document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  // Render static components
  document.getElementById('header').innerHTML = Header();
  document.getElementById('footer').innerHTML = Footer();
  
  // Initialize dynamic components
  initRouter();
  initChatbot();
  renderDynamicComponents();

  // Handle mobile menu toggle (delegation)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu-btn')) {
      document.querySelector('.nav-links').classList.toggle('active');
    }
    if (e.target.closest('.nav-links a') || e.target.closest('.footer-links-v3 a')) {
      if (document.querySelector('.nav-links')) {
        document.querySelector('.nav-links').classList.remove('active');
      }
      window.scrollTo(0, 0);
    }
    
    // Product Filtering Logic
    if (e.target.matches('.product-filters .btn')) {
      const filter = e.target.getAttribute('data-filter');
      document.querySelectorAll('.product-filters .btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      
      const items = document.querySelectorAll('.product-card');
      items.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else if (item.classList.contains(filter + '-item')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });

  function renderDynamicComponents() {
    // Initialize Slider if on Home page
    const homeSlider = document.getElementById('home-slider');
    if (homeSlider) {
      Slider([
        '/images/hero1.png',
        '/images/oil_seeds.png',
        '/images/about1.png',
        '/images/sesame.png'
      ], 'home-slider');
    }

    // Header accent logic
    const header = document.querySelector('header');
    if (header) {
      const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
      const segment = urlParams.get('segment');
      header.classList.remove('medical-accent', 'organic-accent');
      if (segment === 'medical') header.classList.add('medical-accent');
      if (segment === 'organic') header.classList.add('organic-accent');
    }
  }

  // Handle URL segment parameter and initialization of dynamic components on route change
  window.addEventListener('hashchange', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      renderDynamicComponents();
      const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
      const segment = urlParams.get('segment');
      if (segment) {
        const btn = document.querySelector(`.product-filters .btn[data-filter="${segment}"]`);
        if (btn) btn.click();
      }
    }, 100);
  });
});

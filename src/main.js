import './style.css';
import { initRouter } from './router.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { initChatbot } from './components/Chatbot.js';

document.addEventListener('DOMContentLoaded', () => {
  // Render static components
  document.getElementById('header').innerHTML = Header();
  document.getElementById('footer').innerHTML = Footer();
  
  // Initialize dynamic components
  initRouter();
  initChatbot();

  // Handle mobile menu toggle (delegation)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu-btn')) {
      document.querySelector('.nav-links').classList.toggle('active');
    }
    if (e.target.closest('.nav-links a')) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

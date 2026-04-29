import { fetchNewsPosts } from '../lib/sanity.js';

export const Blog = () => `
  <div class="app-section">
    <section class="section blog-hero">
      <div class="container text-center">
        <h1>Blog & News</h1>
        <p>Insights into the dental industry and corporate updates.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-grid" id="sanity-blog-grid">
          <!-- Skeletons while fetching -->
          <div class="blog-card glass skeleton-wrapper">
             <div class="skeleton skeleton-img"></div>
             <div class="skeleton skeleton-text" style="width: 40%; margin-top: 20px;"></div>
             <div class="skeleton skeleton-text" style="width: 80%; height: 25px; margin-top: 10px;"></div>
             <div class="skeleton skeleton-text" style="width: 100%; margin-top: 10px;"></div>
             <div class="skeleton skeleton-text" style="width: 90%;"></div>
          </div>
          <div class="blog-card glass skeleton-wrapper">
             <div class="skeleton skeleton-img"></div>
             <div class="skeleton skeleton-text" style="width: 40%; margin-top: 20px;"></div>
             <div class="skeleton skeleton-text" style="width: 80%; height: 25px; margin-top: 10px;"></div>
             <div class="skeleton skeleton-text" style="width: 100%; margin-top: 10px;"></div>
             <div class="skeleton skeleton-text" style="width: 90%;"></div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .blog-page-root { background: var(--bg-light); min-height: 100vh; }
    
    /* HERO SECTION (CINEMATIC DARK OVERLAY) */
    .blog-hero {
      padding: 220px 20px 100px;
      background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920');
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid var(--glass-border);
      color: white;
    }
    .blog-hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; color: white; margin-bottom: 15px; letter-spacing: -2px; }
    .blog-hero p { font-size: 1.2rem; color: rgba(255, 255, 255, 0.8); font-weight: 500; }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      padding: 80px 0;
    }
    .blog-card {
      padding: 0;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      background: white;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--glass-border);
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      overflow: hidden;
    }
    .blog-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-lg);
      border-color: var(--secondary);
    }
    .blog-card-image {
      width: 100%;
      height: 280px;
      background-size: cover;
      background-position: center;
      background-color: var(--bg-light);
      transition: transform 0.8s ease;
    }
    .blog-card:hover .blog-card-image { transform: scale(1.05); }
    
    .blog-card-content { padding: 40px; flex-grow: 1; display: flex; flex-direction: column; }
    .blog-date {
      color: var(--secondary);
      font-size: 0.8rem;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 800;
    }
    .blog-card h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: var(--text-main);
      font-weight: 900;
      line-height: 1.2;
    }
    .blog-card p {
      color: var(--text-muted);
      margin-bottom: 30px;
      line-height: 1.7;
      font-size: 1.05rem;
      font-weight: 500;
    }
    
    .read-more-link { display: inline-flex; align-items: center; gap: 10px; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; }
    .read-more-link i { transition: transform 0.3s; }
    .read-more-link:hover i { transform: translateX(5px); }

    /* Skeletons */
    .skeleton {
      background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 4px;
    }
    .skeleton-img { height: 280px; border-radius: 0; }
    .skeleton-text { height: 15px; margin-bottom: 15px; }
    
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    @media (max-width: 900px) {
      .blog-grid { grid-template-columns: 1fr; gap: 30px; }
    }
    @media (max-width: 768px) {
      .blog-hero { padding: 150px 20px 80px; }
    }
  </style>
`;

Blog.mount = async () => {
  const grid = document.getElementById('sanity-blog-grid');
  if (!grid) return;
  
  const posts = await fetchNewsPosts();
  
  if (!posts || posts.length === 0) {
    grid.innerHTML = '<p class="text-muted text-center" style="grid-column: 1/-1; padding: 40px;">No news articles available yet. Check back soon!</p>';
    return;
  }
  
  const html = posts.map(post => {
    const date = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const imgStyle = post.imageUrl ? `style="background-image: url('${post.imageUrl}'); height: 240px;"` : '';
    
    return `
      <div class="blog-card">
        ${post.imageUrl ? `<div class="blog-card-image" ${imgStyle}></div>` : ''}
        <div class="blog-date">${date}</div>
        <h3>${post.title}</h3>
        <p>${post.excerpt || 'Read more about this corporate update...'}</p>
        <a href="#/blog/${post.slug}" class="primary-text font-700">Read Article <i class="fas fa-chevron-right"></i></a>
      </div>
    `;
  }).join('');
  
  // Add a small fade-in effect to the new content
  grid.style.opacity = '0';
  grid.innerHTML = html;
  setTimeout(() => {
    grid.style.transition = 'opacity 0.5s ease';
    grid.style.opacity = '1';
  }, 50);
};

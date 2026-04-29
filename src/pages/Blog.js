import { fetchNewsPosts } from '../lib/sanity.js';

export const Blog = () => `
  <div class="app-section">
    <section class="section blog-hero" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/about1.png')">
      <div class="container text-center text-white">
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
    .blog-hero {
      padding: 180px 20px 100px;
      background-size: cover;
      background-position: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .blog-card {
      padding: 30px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      background: white;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
    }
    .blog-card:hover {
      transform: translateY(-5px);
    }
    .blog-card-image {
      margin: -30px -30px 20px -30px;
      border-radius: 20px 20px 0 0;
      background-size: cover;
      background-position: center;
      background-color: #f1f5f9;
    }
    .blog-date {
      color: var(--text-muted);
      font-size: 0.85rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }
    .blog-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #0f172a;
    }
    .blog-card p {
      color: #64748b;
      margin-bottom: 25px;
      line-height: 1.6;
      flex-grow: 1;
    }
    
    /* Skeletons */
    .skeleton {
      background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
      background-size: 200% 100%;
      animation: skeleton-loading 1.5s infinite;
      border-radius: 4px;
    }
    .skeleton-img { height: 200px; margin: -30px -30px 0 -30px; border-radius: 20px 20px 0 0; }
    .skeleton-text { height: 15px; margin-bottom: 10px; }
    
    @keyframes skeleton-loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    @media (max-width: 768px) {
      .blog-hero { padding: 150px 20px 80px; }
      .blog-grid { grid-template-columns: 1fr; }
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

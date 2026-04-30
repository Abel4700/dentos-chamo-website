import { fetchNewsPosts } from '../lib/sanity.js';

export const Blog = () => `
  <div class="app-section light-theme-page">
    
    <!-- BACKGROUND ANIMATED ORBS -->
    <div class="global-background-orbs">
      <div class="glass-orb orb-primary"></div>
      <div class="glass-orb orb-accent"></div>
    </div>

    <!-- PREMIUM HERO: EDITORIAL V3 -->
    <section class="hero-editorial-v3">
      <div class="hero-editorial-content-v3 fade-in">
        <div class="hero-badge-v3">INSIGHTS & UPDATES</div>
        <h1 class="section-title-visionary" style="color: white;">Dentos Chamo <span class="accent-text">Journal</span></h1>
        <p class="hero-lead" style="color: rgba(255,255,255,0.9);">Exploring the convergence of medical technology, clinical excellence, and the future of healthcare across the horn of Africa.</p>
        
        <div class="hero-metrics-v3">
          <div class="metric-item-v3">
             <span class="metric-number" style="color: white;">News</span>
             <span class="metric-label" style="color: rgba(255,255,255,0.7);">Corporate Announcements</span>
          </div>
          <div class="metric-divider"></div>
          <div class="metric-item-v3">
             <span class="metric-number" style="color: white;">Case</span>
             <span class="metric-label" style="color: rgba(255,255,255,0.7);">Clinical Breakthroughs</span>
          </div>
        </div>
      </div>
      <div class="hero-editorial-overlay"></div>
    </section>

    <!-- CONTENT SECTION: BENTO GRID JOURNAL -->
    <section class="section pt-100 pb-120">
      <div class="container">
        <div class="blog-grid-v3" id="sanity-blog-grid">
          <!-- Skeletons while fetching -->
          <div class="blog-card-v3 glass-card-v3 skeleton-wrapper-v3">
             <div class="skeleton-v3 skeleton-img-v3"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 40%; margin-top: 25px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 80%; height: 35px; margin-top: 15px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 100%; margin-top: 20px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 90%;"></div>
          </div>
          <div class="blog-card-v3 glass-card-v3 skeleton-wrapper-v3">
             <div class="skeleton-v3 skeleton-img-v3"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 40%; margin-top: 25px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 80%; height: 35px; margin-top: 15px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 100%; margin-top: 20px;"></div>
             <div class="skeleton-v3 skeleton-text-v3" style="width: 90%;"></div>
          </div>
        </div>
      </div>
    </section>

  <style>
      :root {
        --blog-primary: #1520A6;
        --blog-accent: #40E0D0;
        --blog-bg: #ffffff;
        --blog-border: #e2e8f0;
      }

      .light-theme-page { 
        background: linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%); 
        color: var(--text-main); width: 100%; position: relative; overflow-x: clip; min-height: 100vh;
      }
      .accent-text { color: var(--blog-accent); }
      
      /* GLOBAL BACKGROUND ORBS */
      .global-background-orbs { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; }
      .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.08; animation: orbMove 30s infinite alternate ease-in-out; }
      .orb-primary { width: 600px; height: 600px; background: var(--blog-primary); top: -100px; right: -150px; }
      .orb-accent { width: 450px; height: 450px; background: var(--blog-accent); bottom: 100px; left: -100px; animation-delay: -7s; }
      @keyframes orbMove { from { transform: translate(0,0); } to { transform: translate(200px, 150px); } }

      /* HERO EDITORIAL V3 */
      .hero-editorial-v3 { 
        padding: 220px 20px 120px; 
        position: relative; 
        background: linear-gradient(rgba(15, 32, 166, 0.95), rgba(5, 11, 20, 0.7)), url('https://images.unsplash.com/photo-1504164996022-09080787b6b3?auto=format&fit=crop&q=80&w=1920');
        background-size: cover; 
        background-position: center;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        justify-content: center;
      }
      .hero-editorial-overlay { position: absolute; bottom:0; left:0; width:100%; height:150px; background: linear-gradient(to top, #ffffff, transparent); }
      .hero-editorial-content-v3 { max-width: 1000px; z-index: 10; margin-left: 5%; }
      .hero-badge-v3 { display: inline-block; padding: 6px 14px; background: rgba(21, 32, 166, 0.05); border: 1px solid rgba(21, 32, 166, 0.1); color: var(--blog-primary); border-radius: 100px; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 25px; }
      .section-title-visionary { font-size: clamp(2.5rem, 5.5vw, 4.5rem); font-weight: 900; letter-spacing: -2px; line-height: 1.1; color: var(--text-main); }
      .hero-lead { font-size: clamp(1.1rem, 2vw, 1.4rem); color: #64748b; max-width: 750px; margin-top: 30px; line-height: 1.7; }
      
      .hero-metrics-v3 { display: flex; align-items: center; gap: 60px; margin-top: 60px; }
      .metric-item-v3 { display: flex; flex-direction: column; }
      .metric-number { font-size: 3.5rem; font-weight: 900; line-height: 1; color: var(--blog-primary); }
      .metric-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: #94a3b8; font-weight: 700; margin-top: 10px; }
      .metric-divider { width: 1px; height: 50px; background: #e2e8f0; }

      /* BLOG GRID V3 */
      .blog-grid-v3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 40px; position: relative; z-index: 10; }

      .glass-card-v3 { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid var(--blog-border); border-radius: 24px; padding: 0; overflow: hidden; transition: var(--transition); box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
      .hover-lift:hover { transform: translateY(-10px); border-color: var(--blog-accent); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }

      .blog-card-v3 { display: flex; flex-direction: column; height: 100%; }
      .blog-image-wrapper-v3 { position: relative; height: 280px; overflow: hidden; }
      .blog-img-v3 { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
      .blog-card-v3:hover .blog-img-v3 { transform: scale(1.1); }
      
      .blog-content-v3 { padding: 35px; flex-grow: 1; display: flex; flex-direction: column; }
      .blog-date-v3 { font-size: 0.8rem; color: var(--blog-accent); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 15px; }
      .blog-card-v3 h3 { font-size: 1.8rem; font-weight: 800; line-height: 1.3; margin-bottom: 20px; color: var(--text-main); }
      .blog-excerpt-v3 { color: #64748b; line-height: 1.7; margin-bottom: 30px; flex-grow: 1; font-size: 1.05rem; }
      
      .read-more-v3 { display: flex; align-items: center; gap: 10px; color: var(--blog-primary); font-weight: 700; text-decoration: none; font-size: 0.9rem; transition: gap 0.3s ease; }
      .read-more-v3 i { font-size: 0.7rem; color: var(--blog-accent); }
      .read-more-v3:hover { color: var(--blog-accent); gap: 15px; }

      /* SKELETONS V3 */
      .skeleton-v3 { background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite; }
      .skeleton-img-v3 { height: 280px; border-radius: 24px 24px 0 0; }
      .skeleton-text-v3 { height: 12px; border-radius: 100px; margin-bottom: 12px; }
      @keyframes skeleton-loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

      .pt-100 { padding-top: 100px; }
      .pb-120 { padding-bottom: 120px; }

      /* MOBILE OPTIMIZATIONS */
      @media (max-width: 768px) {
        .hero-editorial-v3 { padding: 150px 20px 80px; }
        .hero-editorial-content-v3 { margin-left: 0; }
        .hero-metrics-v3 { flex-direction: column; align-items: flex-start; gap: 30px; margin-top: 40px; }
        .metric-divider { width: 40px; height: 1px; }
        .metric-number { font-size: 2.8rem; }
        
        .blog-grid-v3 { grid-template-columns: 1fr; gap: 30px; }
        .blog-image-wrapper-v3 { height: 220px; }
        .blog-content-v3 { padding: 25px; }
        .blog-card-v3 h3 { font-size: 1.5rem; }
        
        .pt-100 { padding-top: 60px; }
        .pb-120 { padding-bottom: 80px; }
      }
  </style>
  </div>
`;

Blog.mount = async () => {
  const grid = document.getElementById('sanity-blog-grid');
  if (!grid) return;
  
  const posts = await fetchNewsPosts();
  
  if (!posts || posts.length === 0) {
    grid.innerHTML = '<div class="glass-card-v3" style="grid-column: 1/-1; padding: 60px; text-align: center;"><p class="hero-lead" style="margin: 0 auto;">Our journal is currently being prepared. Check back soon for the latest industry insights.</p></div>';
    return;
  }
  
  const html = posts.map(post => {
    const date = new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const imgUrl = post.imageUrl || 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800';
    
    return `
      <div class="blog-card-v3 glass-card-v3 hover-lift">
        <div class="blog-image-wrapper-v3">
          <img src="${imgUrl}" alt="${post.title}" class="blog-img-v3">
        </div>
        <div class="blog-content-v3">
          <div class="blog-date-v3">${date}</div>
          <h3>${post.title}</h3>
          <p class="blog-excerpt-v3">${post.excerpt || 'Discover the latest breakthroughs and corporate milestones from the Dentos Chamo Group...'}</p>
          <a href="#/blog/${post.slug}" class="read-more-v3">Read Full Article <i class="fas fa-chevron-right"></i></a>
        </div>
      </div>
    `;
  }).join('');
  
  grid.style.opacity = '0';
  grid.innerHTML = html;
  setTimeout(() => {
    grid.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    grid.style.opacity = '1';
  }, 50);
};

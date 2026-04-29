import { fetchPostBySlug } from '../lib/sanity.js';
import { toHTML } from '@portabletext/to-html';

export const BlogPost = () => `
  <div class="app-section">
    <div id="post-content-container">
      <!-- SKELETON LOADER -->
      <section class="section post-hero skeleton-wrapper" style="background: #f1f5f9; height: 400px;"></section>
      <div class="container" style="max-width: 800px; margin-top: -60px;">
        <div class="glass" style="padding: 40px; border-radius: 20px;">
          <div class="skeleton" style="width: 30%; height: 20px; margin-bottom: 20px;"></div>
          <div class="skeleton" style="width: 90%; height: 40px; margin-bottom: 20px;"></div>
          <div class="skeleton" style="width: 100%; height: 20px; margin-bottom: 10px;"></div>
          <div class="skeleton" style="width: 100%; height: 20px; margin-bottom: 10px;"></div>
          <div class="skeleton" style="width: 80%; height: 20px;"></div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .post-hero {
      height: 550px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-bottom: 1px solid var(--glass-border);
    }
    .post-hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 250px;
      background: linear-gradient(to top, var(--bg-light), transparent);
    }
    .post-body {
      color: var(--text-main);
      line-height: 1.8;
      font-size: 1.15rem;
      font-weight: 500;
    }
    .post-body h2 { margin-top: 50px; margin-bottom: 25px; color: var(--text-main); font-weight: 900; font-size: 2rem; }
    .post-body h3 { margin-top: 40px; margin-bottom: 20px; color: var(--text-main); font-weight: 800; font-size: 1.5rem; }
    .post-body p { margin-bottom: 25px; }
    .post-body ul { margin-bottom: 25px; padding-left: 25px; }
    .post-body li { margin-bottom: 12px; }
    
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      color: var(--primary);
      text-decoration: none;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.85rem;
      transition: var(--transition);
    }
    .back-btn:hover { transform: translateX(-5px); }
  </style>
`;

BlogPost.mount = async (params) => {
  const container = document.getElementById('post-content-container');
  if (!container || !params.slug) return;

  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    container.innerHTML = `
      <div class="container text-center" style="padding: 150px 20px;">
        <h1 class="section-title-visionary">Article Not Found</h1>
        <p class="text-muted-standard">The clinical insights you are looking for have been moved or archived.</p>
        <a href="#/blog" class="btn btn-primary btn-visionary mt-20">Back to News</a>
      </div>
    `;
    return;
  }

  const date = new Date(post.publishedAt).toLocaleDateString('en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  });

  // Convert PortableText to HTML
  const bodyHtml = post.body ? toHTML(post.body) : '<p>No content available for this post.</p>';

  container.innerHTML = `
    <section class="section post-hero" style="background-image: url('${post.imageUrl || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920'}')"></section>
    
    <div class="container" style="max-width: 900px; margin-top: -120px; position: relative; z-index: 10; padding-bottom: 120px;">
      <article class="glass-card-v3" style="padding: 80px; background: white; box-shadow: var(--shadow-lg); border: 1px solid var(--glass-border);">
        <a href="#/blog" class="back-btn"><i class="fas fa-arrow-left"></i> Back to Insights</a>
        
        <div class="blog-date" style="color: var(--secondary); font-weight: 800; letter-spacing: 2px; margin-bottom: 20px; text-transform: uppercase; font-size: 0.85rem;">${date}</div>
        <h1 style="font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 40px; color: var(--text-main); line-height: 1.1; font-weight: 900; letter-spacing: -2px;">${post.title}</h1>
        
        <div class="post-body">
          ${bodyHtml}
        </div>
        
        <div style="margin: 60px 0; border: 0; border-top: 1px solid var(--glass-border);"></div>
        
        <div class="share-box text-center">
          <p style="color: var(--text-muted); font-weight: 600;">Share this clinical update:</p>
          <div style="display: flex; justify-content: center; gap: 30px; margin-top: 25px; font-size: 1.8rem;">
            <a href="#" style="color: var(--primary); transition: var(--transition);"><i class="fab fa-facebook"></i></a>
            <a href="#" style="color: var(--primary); transition: var(--transition);"><i class="fab fa-twitter"></i></a>
            <a href="#" style="color: var(--primary); transition: var(--transition);"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </article>
    </div>
  `;
};

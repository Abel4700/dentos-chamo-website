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
      height: 450px;
      background-size: cover;
      background-position: center;
      position: relative;
    }
    .post-hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 200px;
      background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
    }
    .post-body {
      color: #334155;
      line-height: 1.8;
      font-size: 1.1rem;
    }
    .post-body h2 { margin-top: 40px; margin-bottom: 20px; color: #0f172a; }
    .post-body h3 { margin-top: 30px; margin-bottom: 15px; color: #0f172a; }
    .post-body p { margin-bottom: 20px; }
    .post-body ul { margin-bottom: 20px; padding-left: 20px; }
    .post-body li { margin-bottom: 10px; }
    
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }
  </style>
`;

BlogPost.mount = async (params) => {
  const container = document.getElementById('post-content-container');
  if (!container || !params.slug) return;

  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    container.innerHTML = `
      <div class="container text-center" style="padding: 100px 20px;">
        <h1>Article Not Found</h1>
        <p>The story you are looking for has been moved or deleted.</p>
        <a href="#/blog" class="back-btn"><i class="fas fa-arrow-left"></i> Back to News</a>
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
    <section class="section post-hero" style="background-image: url('${post.imageUrl || '/images/about1.png'}')"></section>
    
    <div class="container" style="max-width: 900px; margin-top: -80px; position: relative; z-index: 10;">
      <article class="glass" style="padding: 60px; border-radius: 20px; background: white; box-shadow: 0 20px 50px rgba(0,0,0,0.1);">
        <a href="#/blog" class="back-btn"><i class="fas fa-arrow-left"></i> Back to News</a>
        
        <div class="blog-date" style="margin-bottom: 15px;">${date}</div>
        <h1 style="font-size: 3rem; margin-bottom: 30px; color: #0f172a; line-height: 1.2;">${post.title}</h1>
        
        <div class="post-body">
          ${bodyHtml}
        </div>
        
        <hr style="margin: 50px 0; border: 0; border-top: 1px solid #e2e8f0;">
        
        <div class="share-box text-center">
          <p class="text-muted">Thanks for reading! Share this update:</p>
          <div style="display: flex; justify-content: center; gap: 20px; margin-top: 15px; font-size: 1.5rem;">
            <a href="#" class="primary-text"><i class="fab fa-facebook"></i></a>
            <a href="#" class="primary-text"><i class="fab fa-twitter"></i></a>
            <a href="#" class="primary-text"><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </article>
    </div>
  `;
};

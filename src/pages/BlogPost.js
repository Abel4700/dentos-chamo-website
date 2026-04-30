import { fetchPostBySlug } from '../lib/sanity.js';
import { toHTML } from '@portabletext/to-html';

export const BlogPost = () => `
  <div class="app-section light-theme-page">
    
    <!-- BACKGROUND ANIMATED ORBS -->
    <div class="global-background-orbs">
      <div class="glass-orb orb-primary"></div>
      <div class="glass-orb orb-accent"></div>
    </div>

    <div id="post-content-container">
      <!-- SKELETON LOADER -->
      <section class="post-hero-v3 skeleton-v3" style="height: 500px;"></section>
      <div class="container" style="max-width: 900px; margin-top: -160px; position: relative; z-index: 20;">
        <div class="glass-card-v3-post" style="padding: 60px; min-height: 400px;">
          <div class="skeleton-v3" style="width: 30%; height: 20px; margin-bottom: 30px; border-radius: 100px;"></div>
          <div class="skeleton-v3" style="width: 90%; height: 60px; margin-bottom: 30px; border-radius: 12px;"></div>
          <div class="skeleton-v3" style="width: 100%; height: 20px; margin-bottom: 15px; border-radius: 100px;"></div>
          <div class="skeleton-v3" style="width: 100%; height: 20px; margin-bottom: 15px; border-radius: 100px;"></div>
          <div class="skeleton-v3" style="width: 80%; height: 20px; border-radius: 100px;"></div>
        </div>
      </div>
    </div>

  <style>
      :root {
        --post-primary: #1520A6;
        --post-accent: #40E0D0;
        --post-bg: #ffffff;
        --post-border: #e2e8f0;
      }

      .light-theme-page { 
        background: linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%); 
        color: var(--text-main); width: 100%; position: relative; overflow-x: clip; min-height: 100vh;
        padding-top: 100px;
      }
      .accent-text { color: var(--post-accent); }
      
      /* GLOBAL BACKGROUND ORBS */
      .global-background-orbs { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; }
      .glass-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.1; animation: orbMove 30s infinite alternate ease-in-out; }
      .orb-primary { width: 600px; height: 600px; background: var(--post-primary); top: -100px; right: -150px; }
      .orb-accent { width: 450px; height: 450px; background: var(--post-accent); bottom: 100px; left: -100px; animation-delay: -7s; }
      @keyframes orbMove { from { transform: translate(0,0); } to { transform: translate(200px, 150px); } }

      /* POST HERO V3 */
      .post-hero-v3 { height: 650px; background-size: cover; background-position: center; position: relative; }
      .post-hero-v3::before { content: ''; position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(rgba(15, 32, 166, 0.9), rgba(5, 11, 20, 0.7)); }
      .post-hero-v3::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 350px; background: linear-gradient(to top, var(--post-bg), transparent); }

      /* ENHANCED GLASS CARD */
      .glass-card-v3-post { 
        background: rgba(255, 255, 255, 0.85); 
        backdrop-filter: blur(25px); 
        border: 1px solid var(--post-border); 
        border-radius: 40px; 
        box-shadow: 0 20px 60px rgba(0,0,0,0.05);
        position: relative;
        overflow: hidden;
      }
      .glass-card-v3-post::before {
        content: ''; position: absolute; top:0; left:0; width:100%; height:2px;
        background: linear-gradient(90deg, transparent, var(--post-accent), transparent);
        opacity: 0.5;
      }
      
      .back-link-v3 { 
        display: inline-flex; align-items: center; gap: 12px; color: var(--post-accent); 
        font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 2.5px; 
        font-size: 0.75rem; margin-bottom: 40px; transition: all 0.3s ease; 
        opacity: 0.8;
      }
      .back-link-v3:hover { opacity: 1; transform: translateX(-5px); gap: 18px; }

      .post-title-v3 { 
        font-size: clamp(2.8rem, 6vw, 4.5rem); 
        font-weight: 900; letter-spacing: -2.5px; line-height: 1.05; 
        margin-bottom: 45px; color: var(--text-main);
      }
      .post-meta-v3 { 
        font-size: 0.85rem; color: var(--post-accent); font-weight: 800; 
        text-transform: uppercase; letter-spacing: 4px; margin-bottom: 20px; 
        display: flex; align-items: center; gap: 15px;
      }
      .post-meta-v3::before { content: ''; width: 40px; height: 1px; background: var(--post-accent); opacity: 0.4; }

      .post-body-v3 { color: #334155; line-height: 1.85; font-size: 1.25rem; }
      .post-body-v3 h2 { font-size: 2.4rem; font-weight: 800; margin: 70px 0 35px; color: var(--text-main); letter-spacing: -1px; }
      .post-body-v3 h3 { font-size: 1.9rem; font-weight: 800; margin: 45px 0 25px; color: var(--text-main); }
      .post-body-v3 p { margin-bottom: 35px; }
      .post-body-v3 ul, .post-body-v3 ol { margin-bottom: 35px; padding-left: 30px; }
      .post-body-v3 li { margin-bottom: 18px; }
      .post-body-v3 blockquote { 
        border-left: 5px solid var(--post-accent); padding: 35px 45px; 
        background: #f8fafc; border-radius: 4px 24px 24px 4px; 
        margin: 50px 0; font-style: italic; font-size: 1.5rem; color: #1e293b;
        line-height: 1.6;
      }

      .post-footer-v3 { 
        margin-top: 100px; padding-top: 60px; 
        border-top: 1px solid var(--post-border); 
        display: flex; flex-direction: column; align-items: center; 
      }
      .share-title-v3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 3px; color: #64748b; font-weight: 800; margin-bottom: 30px; }
      .share-links-v3 { display: flex; gap: 40px; }
      .share-links-v3 a { font-size: 1.6rem; color: #94a3b8; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
      .share-links-v3 a:hover { transform: translateY(-8px) scale(1.3); color: var(--post-accent); }

      /* SKELETONS V3 */
      .skeleton-v3 { background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite; }
      @keyframes skeleton-loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

      @media (max-width: 768px) {
        .glass-card-v3-post { padding: 40px 25px; border-radius: 24px; }
        .post-hero-v3 { height: 400px; }
        .container { margin-top: -120px !important; }
        .post-title-v3 { font-size: 2rem; letter-spacing: -1px; margin-bottom: 30px; }
        .post-meta-v3 { font-size: 0.75rem; letter-spacing: 2px; }
        .post-body-v3 { font-size: 1.1rem; }
        .post-body-v3 h2 { font-size: 1.8rem; margin: 40px 0 20px; }
        .post-body-v3 h3 { font-size: 1.5rem; }
        .post-body-v3 blockquote { padding: 25px; font-size: 1.2rem; margin: 30px 0; }
        .share-links-v3 { gap: 25px; }
      }
  </style>
  </div>
`;

BlogPost.mount = async (params) => {
  const container = document.getElementById('post-content-container');
  if (!container || !params.slug) return;

  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    container.innerHTML = `
      <div class="container text-center" style="padding: 180px 20px;">
        <div class="hero-badge-v3">ERROR 404</div>
        <h1 class="post-title-v3">Article Not Found</h1>
        <p class="hero-lead">The journal entry you are looking for does not exist or has been moved.</p>
        <div style="margin-top: 50px;">
          <a href="#/blog" class="back-link-v3"><i class="fas fa-arrow-left"></i> Return to Journal</a>
        </div>
      </div>
    `;
    return;
  }

  // Robust Date Handling
  let date = 'Recent Update';
  if (post.publishedAt) {
    const postDate = new Date(post.publishedAt);
    if (!isNaN(postDate.getTime())) {
      date = postDate.toLocaleDateString('en-US', { 
        year: 'numeric', month: 'long', day: 'numeric' 
      });
    }
  }

  const bodyHtml = post.body ? toHTML(post.body) : '<p>The content for this journal entry is currently being finalized.</p>';

  container.innerHTML = `
    <section class="post-hero-v3" style="background-image: url('${post.imageUrl || 'https://images.unsplash.com/photo-1579154235602-3c2cfa99e1bc?auto=format&fit=crop&q=80&w=1920'}')"></section>
    
    <div class="container" style="max-width: 950px; margin-top: -200px; position: relative; z-index: 20; padding-bottom: 120px;">
      <article class="glass-card-v3-post" style="padding: 80px 90px;">
        <a href="#/blog" class="back-link-v3"><i class="fas fa-arrow-left"></i> Back to Journal</a>
        
        <div class="post-meta-v3">${date}</div>
        <h1 class="post-title-v3">${post.title}</h1>
        
        <div class="post-body-v3">
          ${bodyHtml}
        </div>
        
        <footer class="post-footer-v3">
          <div class="share-title-v3">Share this Update</div>
          <div class="share-links-v3">
            <a href="#" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </footer>
      </article>
    </div>
  `;
};

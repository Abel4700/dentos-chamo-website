export const Media = () => {
  return `
    <div class="app-section bg-soft page-offset">
      
      <!-- 📡 MODERN MEDIA HERO -->
      <section class="media-hero fade-in">
        <div class="container text-center relative-z">
          <div class="hero-label">NEWSROOM & RELEASES</div>
          <h1 class="fluid-title">Media & <span>Press</span></h1>
          <p class="hero-subtitle">Official announcements, industry insights, and media coverage for Dentos Chamo.</p>
        </div>
      </section>

      <!-- 🗞️ NEWS LISTING -->
      <section class="section">
        <div class="container">
          <div class="media-grid">
            
            <div class="media-card glass-premium fade-in-up">
              <div class="media-tag">Press Release</div>
              <h3 class="media-title">Dentos Chamo Announces New Regional Headquarters</h3>
              <p class="media-excerpt">Expanding our footprint to better serve our growing client base with centralized logistics and clinical support.</p>
              <div class="media-footer">
                <span class="media-date"><i class="far fa-calendar-alt"></i> Feb 15, 2026</span>
                <a href="#" class="read-more">Read Full Release →</a>
              </div>
            </div>

            <div class="media-card glass-premium fade-in-up" style="animation-delay: 0.1s;">
              <div class="media-tag">Market Insight</div>
              <h3 class="media-title">Featured in Medical Technology Magazine</h3>
              <p class="media-excerpt">"Dentos Chamo is redefining dental corporate identity," says editor in the latest quarterly edition.</p>
              <div class="media-footer">
                <span class="media-date"><i class="far fa-calendar-alt"></i> Jan 10, 2026</span>
                <a href="#" class="read-more">Read Article →</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>
        .media-hero { 
          padding: 220px 0 120px; 
          background: linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.5)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920');
          background-size: cover;
          background-position: center;
          position: relative; 
          color: white; 
          overflow: hidden; 
          border-bottom: 1px solid var(--glass-border);
        }
        .relative-z { position: relative; z-index: 10; }
        .hero-label { font-size: 0.8rem; font-weight: 800; letter-spacing: 3px; color: var(--secondary); margin-bottom: 20px; }
        .fluid-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -2px; margin-bottom: 25px; color: white; }
        .hero-subtitle { font-size: 1.25rem; color: rgba(255, 255, 255, 0.8); max-width: 600px; margin: 0 auto; line-height: 1.6; }

        .media-grid { display: grid; grid-template-columns: 1fr; gap: 30px; max-width: 900px; margin: 0 auto; }
        .media-card { padding: 40px; border-radius: 30px; position: relative; }
        .media-tag { 
          display: inline-block; 
          padding: 6px 14px; 
          background: #f1f5f9; 
          color: #64748b; 
          font-size: 0.75rem; 
          font-weight: 800; 
          border-radius: 6px; 
          text-transform: uppercase; 
          margin-bottom: 20px; 
        }
        .media-title { font-size: 1.8rem; font-weight: 800; color: #0f172a; margin-bottom: 15px; line-height: 1.3; }
        .media-excerpt { color: #475569; font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px; }
        
        .media-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 25px; }
        .media-date { color: #94a3b8; font-size: 0.9rem; font-weight: 600; display: flex; align-items: center; gap: 8px; }
        .read-more { color: var(--primary); text-decoration: none; font-weight: 800; font-size: 0.95rem; }

        @media (max-width: 768px) {
          .media-hero { padding: 120px 0 80px; border-radius: 0 0 30px 30px; }
          .media-card { padding: 30px 20px; }
          .media-title { font-size: 1.5rem; }
          .media-footer { flex-direction: column; gap: 20px; align-items: flex-start; }
          .fluid-title { font-size: 2.5rem !important; }
        }
      </style>
    </div>
  `;
};

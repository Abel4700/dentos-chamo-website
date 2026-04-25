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
        <div class="blog-grid">
          <div class="blog-card glass">
            <div class="blog-date">March 25, 2026</div>
            <h3>Future of Dental Technology</h3>
            <p>How AI is revolutionizing diagnostic imaging in dentistry.</p>
            <a href="#" class="primary-text font-700">Read More <i class="fas fa-chevron-right"></i></a>
          </div>
          <div class="blog-card glass">
            <div class="blog-date">March 20, 2026</div>
            <h3>Dentos Chamo Q1 Growth</h3>
            <p>A look at our expansion into regional markets.</p>
            <a href="#" class="primary-text font-700">Read More <i class="fas fa-chevron-right"></i></a>
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
    }
    .blog-date {
      color: var(--text-muted);
      font-size: 0.85rem;
      margin-bottom: 10px;
    }
    @media (max-width: 768px) {
      .blog-hero { padding: 150px 20px 80px; }
      .blog-grid { grid-template-columns: 1fr; }
    }
  </style>
`;

export const Media = () => `
  <div class="app-section">
    <section class="section page-header" style="background-image: linear-gradient(rgba(19,70,175,0.8), rgba(19,70,175,0.8)), url('/images/about1.png')">
      <div class="container text-center text-white">
        <h1>Media & Press</h1>
        <p>Official announcements and media coverage for Dentos Chamo.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="media-list">
          <div class="media-item glass">
            <div class="media-type">Press Release</div>
            <h3>Dentos Chamo Announces New Regional Headquarters</h3>
            <p>Expanding our footprint to better serve our growing client base.</p>
            <span class="date">Feb 15, 2026</span>
          </div>
          <div class="media-item glass">
            <div class="media-type">In the News</div>
            <h3>Featured in Medical Technology Magazine</h3>
            <p>"Dentos Chamo is redefining dental corporate identity," says editor.</p>
            <span class="date">Jan 10, 2026</span>
          </div>
        </div>
      </div>
    </section>
  </div>

  <style>
    .media-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .media-item {
      padding: 30px;
      border-radius: 20px;
    }
    .media-type {
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--secondary);
      margin-bottom: 5px;
    }
    .date {
      display: block;
      margin-top: 15px;
      color: var(--text-muted);
      font-size: 0.85rem;
    }
  </style>
`;

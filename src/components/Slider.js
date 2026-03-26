export const Slider = (images, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentSlide = 0;
  const slideCount = images.length;

  container.innerHTML = `
    <div class="slider-wrapper">
      ${images.map((img, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${img}')"></div>
      `).join('')}
      <div class="slider-controls">
        <button class="prev-slide"><i class="fas fa-chevron-left"></i></button>
        <button class="next-slide"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="slider-dots">
        ${images.map((_, index) => `<span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`).join('')}
      </div>
    </div>
  `;

  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.dot');

  const goToSlide = (n) => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  };

  container.querySelector('.next-slide').onclick = () => goToSlide(currentSlide + 1);
  container.querySelector('.prev-slide').onclick = () => goToSlide(currentSlide - 1);

  dots.forEach(dot => {
    dot.onclick = () => goToSlide(parseInt(dot.dataset.index));
  });

  // Auto-play
  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
};

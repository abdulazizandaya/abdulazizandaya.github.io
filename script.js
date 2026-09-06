// Cinematic Parallax + Fade System by Abdulaziz Andaya

// ------------------------------------------------------
// Smooth scroll parallax (optimized with requestAnimationFrame)
// ------------------------------------------------------
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.willChange = 'transform'; // Optimization
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ------------------------------------------------------
// Fade-in animation on page load
// ------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 1.5s ease-out';
      el.style.opacity = 1;
    }, 300);
  });
});

// ------------------------------------------------------
// Mouse-based parallax for cinematic depth
// ------------------------------------------------------
document.addEventListener('mousemove', e => {
  const layers = document.querySelectorAll('.parallax');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    layer.style.willChange = 'transform'; // Optimization
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// ------------------------------------------------------
// Hero text fade-out on scroll (cinematic dissolve)
// ------------------------------------------------------
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-text');
  if (hero) {
    hero.style.opacity = 1 - window.scrollY / 400;
  }
});

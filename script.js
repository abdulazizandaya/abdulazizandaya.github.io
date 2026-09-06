// Cinematic Parallax + Fade System by Abdulaziz Andaya

// Smooth scroll parallax
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.willChange = 'transform';
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }

  const hero = document.querySelector('.hero-text');
  if (hero) {
    hero.style.opacity = 1 - window.scrollY / 400;
  }
});

// Fade-in on load
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

// Mouse-based parallax
document.addEventListener('mousemove', e => {
  const layers = document.querySelectorAll('.parallax');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    layer.style.willChange = 'transform';
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// Dark / Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 800);
});

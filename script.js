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

// Dark / Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 800); // cinematic delay
});
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

/* MOBILE NAVIGATION TOGGLE */
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

/* Close menu when clicking outside */
document.addEventListener("click", function (event) {
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
    nav.classList.remove("active");
  }
});

/* SMOOTH SCROLLING */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    document.querySelector("nav").classList.remove("active");
  });
});

/* FADE-IN ON SCROLL */
const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

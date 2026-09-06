/* --------------------------------------------------
   HAMBURGER MENU TOGGLE
-------------------------------------------------- */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

/* Close menu when clicking a link (mobile) */
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

/* --------------------------------------------------
   LOADING SCREEN
-------------------------------------------------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hidden");
});

/* --------------------------------------------------
   FADE-IN ANIMATION ON SCROLL
-------------------------------------------------- */
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.transition = "opacity 1.2s ease";
      el.style.opacity = 1;
    }
  });
};

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

/* --------------------------------------------------
   SMOOTH SCROLL FOR ANCHORS
-------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// === 1. FADE-OUT LOADER ===
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

// === 2. DARK MODE TOGGLE ===
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// === 3. HAMBURGER MENU ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav-links a").forEach(link =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  })
);

// === 4. RIPPLE BUTTON LOGIC ===
document.querySelectorAll(".ripple-button").forEach(button => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// === 5. SCROLL REVEAL ANIMATION ===
const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;

    if (elTop < triggerBottom) {
      el.classList.add("visible", "reveal");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// === 6. BACK TO TOP BUTTON ===
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.innerText = "↑ Top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

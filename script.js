const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 64);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

const hamburger = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.add("nav-appear");
  document.body.classList.add("no-scroll");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

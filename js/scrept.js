// document.addEventListener("DOMContentLoaded", function () {
//   const ulNavbar = document.querySelector(".navbar .ul-navbar");
//   const hoverNavbar = document.getElementById("hover-navbar");
//   const productMenu = hoverNavbar
//     ? hoverNavbar.querySelector(".product-menu")
//     : null;

//   if (hoverNavbar && productMenu) {
//     hoverNavbar.addEventListener("mouseenter", function () {
//       productMenu.style.display = "block";
//       productMenu.classList.add("fade-in");
//     });

//     hoverNavbar.addEventListener("mouseleave", function () {
//       productMenu.style.display = "none";
//       productMenu.classList.remove("fade-in");
//     });
//   }
// });

const menuToggle = document.querySelector(".mobile-nav-container");
const slidMenu = document.querySelector(".slid-menu");
const closeBtn = document.getElementById("cross-icon");

menuToggle.addEventListener("click", function () {
  console.log("slam");
  slidMenu.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  slidMenu.classList.remove("active");
});

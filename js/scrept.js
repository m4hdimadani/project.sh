// ---------------------------------------------
const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuLi = document.querySelector(".hamburger-menu ul li");
const crossIcon = document.querySelector(".cross-icon");

hamburgerIcon.addEventListener("click", function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

hamburgerMenuLi.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

// ----------------------------------------------

let accButtons = document.querySelectorAll(".accordion-button");

accButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");

    let content = this.nextElementSibling;
    if (this.parentElement.classList.content("active")) {
      content.style.maxHeight = null;
    }
  });
});

// ------------------------------------------------

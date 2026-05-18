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
const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

toggleButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

const toggleButtonTow = document.getElementById('toggleButtonTow');
const dropdownMenuTow = document.getElementById('dropdownMenuTow');

toggleButtonTow.addEventListener('click', () => {
  dropdownMenuTow.classList.toggle('active');
  toggleButtonTow.classList.toggle('active');
});


// --------------------------------------------------
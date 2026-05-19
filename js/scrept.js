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
const toggleButton = document.getElementById("toggleButton");
const dropdownMenu = document.getElementById("dropdownMenu");

toggleButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

const toggleButtonTow = document.getElementById("toggleButtonTow");
const dropdownMenuTow = document.getElementById("dropdownMenuTow");

toggleButtonTow.addEventListener("click", () => {
  dropdownMenuTow.classList.toggle("active");
  toggleButtonTow.classList.toggle("active");
});
const toggleButtonThree = document.getElementById("toggleButtonThree");
const dropdownMenuThree = document.getElementById("dropdownMenuThree");

toggleButtonThree.addEventListener("click", () => {
  dropdownMenuThree.classList.toggle("active");
  toggleButtonThree.classList.toggle("active");
});

const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

function toPersianNumber(num) {
  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function getPersianDate(date) {
  const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return formatter.formatToParts(date);
}

function renderCalendar(date) {
  calendarDays.innerHTML = "";

  const parts = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  const year = parts.find((p) => p.type === "year").value;
  const month = parseInt(parts.find((p) => p.type === "month").value) - 1;

  monthYear.textContent = `${persianMonths[month]} ${toPersianNumber(year)}`;

  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const startDay = (firstDay.getDay() + 1) % 7; 
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("empty");
    calendarDays.appendChild(empty);
  }

  const today = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());

  const todayDay = parseInt(today.find((p) => p.type === "day").value);

  for (let day = 1; day <= daysInMonth; day++) {
    const dayEl = document.createElement("div");
    dayEl.textContent = toPersianNumber(day);

    if (day === todayDay) {
      dayEl.classList.add("today");
    }

    calendarDays.appendChild(dayEl);
  }
}

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);

// --------------------------------------------------

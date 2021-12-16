const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
let navText = document.querySelector(".main-nav__toggle-button");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    navText.textContent = "Закрыть меню";
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    navText.textContent = "Открыть меню";
  }
});

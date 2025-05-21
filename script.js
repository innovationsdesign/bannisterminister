const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".sidebar").classList.toggle("change");
  hamburgerMenu.classList.toggle("change");
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".sidebar").classList.toggle("change");
  hamburgerMenu.classList.toggle("change");
});

const scrollbtn = document.querySelector(".scroll-btn");
scrollbtn.addEventListener("click", function () {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(function () {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

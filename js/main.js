//Get the button:
const mybutton = document.getElementById("scrollUp");

function scrollFunction() {
  if (
    document.body.scrollTop > sticky ||
    document.documentElement.scrollTop > sticky
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Functional Sticky Navbar
window.onscroll = function () {
  myFunction();
  scrollFunction();
};

const navbar = document.querySelector("nav");
const services = document.querySelector("#features");
const sticky = services.offsetTop;
const mobileNav = document.getElementById("myNav");
const mobileNavButton = document.getElementById("mobileNav");

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  //   Nice Select Initialization
  $("select").niceSelect();
});

// Navbar Open Function on Mobile Menu
function openNav() {
  $("#myNav").css("width", "100%");
  if (mobileNav) {
    mobileNav.setAttribute("aria-hidden", "false");
  }
  if (mobileNavButton) {
    mobileNavButton.setAttribute("aria-expanded", "true");
  }
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  $("#myNav").css("width", "0");
  if (mobileNav) {
    mobileNav.setAttribute("aria-hidden", "true");
  }
  if (mobileNavButton) {
    mobileNavButton.setAttribute("aria-expanded", "false");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const themeIcon = document.getElementById("theme-icon");
const phoneIcon = document.getElementById("phone-icon");
const mailIcon = document.getElementById("mail-icon");
const locationIcon = document.getElementById("location-icon");
const navToggleIcon = document.getElementById("nav-toggle-icon");

themeIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    console.log("DARK");
    navToggleIcon.src = "assets/icons/hamburger-dark.svg";
    themeIcon.src = "assets/icons/sun.png";
    phoneIcon.src = "assets/icons/phone-dark.svg";
    mailIcon.src = "assets/icons/mail-dark.svg";
    locationIcon.src = "assets/icons/location-dark.svg";
    
  } else {
    themeIcon.src = "assets/icons/moon.png";
    phoneIcon.src = "assets/icons/phone.svg";
    mailIcon.src = "assets/icons/mail.svg";
    locationIcon.src = "assets/icons/location.svg";
    navToggleIcon.src = "assets/icons/humburger.svg";
  }
};

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav-items");
navToggle.onclick = function () {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }
};

const navLinks = document.querySelectorAll(".nav-items li");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "true") {
      nav.setAttribute("data-visible", false);
    }
  });
});

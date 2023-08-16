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


const themeIcon = document.getElementById('theme-icon');
const phoneIcon = document.getElementById('phone-icon');
const mailIcon = document.getElementById('mail-icon');
const locationIcon = document.getElementById('location-icon');

themeIcon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    
    if(document.body.classList.contains('dark-theme')){
        themeIcon.src = 'assets/icons/sun.png';
        phoneIcon.src = 'assets/icons/phone-dark.svg';
        mailIcon.src = 'assets/icons/mail-dark.svg';
        locationIcon.src = 'assets/icons/location-dark.svg';
    }else{
        themeIcon.src = 'assets/icons/moon.png';
        phoneIcon.src = 'assets/icons/phone.svg';
        mailIcon.src = 'assets/icons/mail.svg';
        locationIcon.src = 'assets/icons/location.svg';
    }
}

const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.nav-items');
navToggle.onclick = function(){
    const visibility = nav.getAttribute("data-visible");
console.log(visibility)
    if(visibility === "false"){
        nav.setAttribute("data-visible", true)
    }else{
        nav.setAttribute("data-visible", false)
    }
}

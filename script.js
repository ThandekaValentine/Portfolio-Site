let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

// Menu toggle for mobile nav
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Typing animation
const textArray = [
  "Junior Workforce Management Consultant",
  "Programmer",
  "Creative Thinker"
];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    textIndex++;
    if (textIndex < textArray.length) {
      setTimeout(() => {
        typingText.textContent = "";  // Clear and restart
        charIndex = 0;
        type();
      }, 1000);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Slideshow logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  slideIndex = index;
}

document.querySelector(".nav.next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

document.querySelector(".nav.prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.getAttribute("data-index")));
  });
});

// Show first slide by default
showSlide(slideIndex);



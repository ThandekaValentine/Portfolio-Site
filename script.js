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

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.className = 'error';
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'error';
    return;
  }

  formMessage.textContent = 'Sending...';
  formMessage.className = '';

  setTimeout(() => {
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'success';
    form.reset();
  }, 1000);
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formMessage = document.getElementById('form-message');

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thanks for your message! I’ll get back to you soon.';
      form.reset();
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
  }
});


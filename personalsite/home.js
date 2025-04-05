import { quotes } from './quote.js';

document.addEventListener("DOMContentLoaded", () => {
  // QUOTE SLIDESHOW
  const quoteSlideshow = document.getElementById("quote-text");
  let quoteIndex = 0;
  const slides = [];

  quotes.forEach((quote) => {
    const span = document.createElement("span");
    span.classList.add("quote-slide");
    span.textContent = `"${quote.text}" — ${quote.author}`;
    span.style.display = "none"; // Hide initially
    quoteSlideshow.appendChild(span);
    slides.push(span);
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "inline" : "none";
    });
  }

  showSlide(quoteIndex);
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % slides.length;
    showSlide(quoteIndex);
  }, 5000);

  // MENU TOGGLE
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    // Only animate nav ONCE on page load
    nav.classList.add("animate-nav-on-load");
  }
});

const logo = document.querySelector('.logo');

logo.addEventListener('mouseenter', () => {
  logo.classList.add('pop');
});

logo.addEventListener('animationend', () => {
  logo.classList.remove('pop');
});

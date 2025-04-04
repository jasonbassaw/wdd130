import { quotes } from './quote.js';

document.addEventListener("DOMContentLoaded", () => {
  const quoteSlideshow = document.getElementById("quote-text");
  let quoteIndex = 0;

  // Create slides with forEach
  const slides = [];
  quotes.forEach((quote) => {
    const span = document.createElement("span");
    span.classList.add("quote-slide");
    span.textContent = `"${quote.text}" — ${quote.author}`;
    span.style.display = "none"; // hide by default
    quoteSlideshow.appendChild(span);
    slides.push(span);
  });

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "inline" : "none";
    });
  }

  showSlide(quoteIndex); // show first
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % slides.length;
    showSlide(quoteIndex);
  }, 5000);

  // Menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});

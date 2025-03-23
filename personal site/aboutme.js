let slideIndex = 0;
let slides;

function showSlides() {
  slides = document.querySelectorAll(".slide");

  slides.forEach(slide => {
    slide.style.opacity = "0";
    slide.style.zIndex = "0";
  });

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.opacity = "1";
  slides[slideIndex - 1].style.zIndex = "1";

  setTimeout(showSlides, 4000); // change every 4 sec
}

document.addEventListener("DOMContentLoaded", showSlides);


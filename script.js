let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 4000);
}

document.addEventListener("DOMContentLoaded", showSlides);

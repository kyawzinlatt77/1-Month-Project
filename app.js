const slides = document.querySelectorAll(".top-series");
const totalSlides = slides.length;
let index = 0;

const prevBtn = document
  .querySelector(".prev-btn")
  .addEventListener("click", moveToPrevSlide);

const nextBtn = document
  .querySelector(".next-btn")
  .addEventListener("click", moveToNextSlide);

function hideAll() {
  for (let slide of slides) {
    slide.classList.remove("visible");
  }
}

function moveToPrevSlide() {
  hideAll();
  if (index === 0) {
    index = totalSlides - 1;
  } else {
    index--;
  }
  slides[index].classList.add("visible");
}

function moveToNextSlide() {
  hideAll();
  if (index === totalSlides - 1) {
    index = 0;
  } else {
    index++;
  }
  slides[index].classList.add("visible");
}

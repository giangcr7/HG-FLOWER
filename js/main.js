const prevButton = document.querySelector(".slideshow .prev-button");
const nextButton = document.querySelector(".slideshow .next-button");
const slideList = document.querySelector(".slideshow .slide-list");
const imageCount = slideList.childElementCount;
let currentStep = 0;
let intervalId = setInterval(() => {
  nextStep();
}, 5000);
prevButton.addEventListener("click", () => {
  prevStep();
});
nextButton.addEventListener("click", () => {
  nextStep();
});
function moveToStep(step) {
  slideList.style.transform = `translateX(${step * -100}%)`;
  currentStep = step;
}
function nextStep() {
  if (currentStep == 0) {
    moveToStep(imageCount - 1);
  } else {
    moveToStep(currentStep - 1);
  }
}
function prevStep() {
  if (currentStep == imageCount - 1) {
    moveToStep(0);
  } else {
    moveToStep(currentStep + 1);
  }
}

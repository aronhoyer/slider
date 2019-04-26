const slider = document.querySelector('.slider');
const slidesContainer = slider.querySelector('.slider__slides');
const slides = slidesContainer.querySelectorAll('.slides__slide');
const slidesOffset = [...slides].map(s => (
  document.body.getBoundingClientRect().left
  - s.getBoundingClientRect().left
  + parseFloat(window.getComputedStyle(slides[0]).paddingLeft)
  - parseFloat(window.getComputedStyle(s).paddingLeft)
));
const buttons = document.querySelectorAll('.nav__button');

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if (this.classList.contains('nav__button--next')) {
      return nextSlide();
    } else if (this.classList.contains('nav__button--prev')) {
      return prevSlide();
    }
  });
});

let activeSlide = 0;

function nextSlide() {
  if (activeSlide === slides.length - 2) return;
  activeSlide += 1;
  slidesContainer.style.transform = `translateX(${slidesOffset[activeSlide]}px)`;
}

function prevSlide() {
  if (activeSlide === 0) return;
  activeSlide -= 1;
  slidesContainer.style.transform = `translateX(${slidesOffset[activeSlide]}px)`;
}
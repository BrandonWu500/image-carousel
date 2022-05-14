const btns = document.querySelectorAll('.carousel-btn');
const carouselNav = document.querySelector('.carousel-nav');
const dots = [...carouselNav.children];
const slides = document.querySelector('.slides');
const arrSlides = [...slides.children];

const dotBtns = document.querySelectorAll('.dot');

dotBtns.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    let newIdx = dots.indexOf(e.target);
    const activeSlide = slides.querySelector('.active');
    const activeDot = carouselNav.querySelector('.active');
    updateSlide(arrSlides, dots, activeSlide, activeDot, newIdx);
  });
});

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const offset = btn.classList.contains('next') ? 1 : -1;
    const activeSlide = slides.querySelector('.active');
    const activeDot = carouselNav.querySelector('.active');
    let newIdx = arrSlides.indexOf(activeSlide) + offset;
    if (newIdx < 0) {
      newIdx = arrSlides.length - 1;
    } else if (newIdx >= arrSlides.length) {
      newIdx = 0;
    }
    updateSlide(arrSlides, dots, activeSlide, activeDot, newIdx);
  });
});

function updateSlide(arrSlides, dots, activeSlide, activeDot, newIdx) {
  if (arrSlides[newIdx] !== activeSlide) {
    arrSlides[newIdx].classList.add('active');
    dots[newIdx].classList.add('active');
    activeSlide.classList.remove('active');
    activeDot.classList.remove('active');
  }
}

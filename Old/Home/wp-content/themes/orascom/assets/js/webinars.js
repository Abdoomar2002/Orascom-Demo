let webinarsSliderSelector  = '.webinars-slider';

// Webinars Slider
let webinarsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#home-webinars .center-div')[0]);
let webinarsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView: 4,
  slidesOffsetBefore: webinarsSliderAlignment,
  touchRatio: .5,
  preloadImages: true,
  lazy: false,
  loadPrevNext: 1,
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  freeMode: true,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.webinars-slider-next',
    prevEl: '.webinars-slider-prev',
  },
  pagination: {
    el: '.webinars-slider-progress',
    type: 'progressbar',
  }
};
let webinarsSlider = new Swiper(webinarsSliderSelector, webinarsSliderOptions);

window.addEventListener('resize', function () {
  let webinarsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#home-webinars .center-div')[0]);
  webinarsSlider.params.slidesOffsetBefore = webinarsSliderAlignment;
});
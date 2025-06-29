let articlesSliderSelector  = '.articles-slider';

// News and Articles Slider
let articlesSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#home-news .center-div')[0]);
let articlesSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView: 6,
  slidesOffsetBefore: articlesSliderAlignment,
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
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
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
    nextEl: '.news-slider-next',
    prevEl: '.news-slider-prev',
  },
  pagination: {
    el: '.news-slider-progress',
    type: 'progressbar',
  }
};
let articlesSlider = new Swiper(articlesSliderSelector, articlesSliderOptions);



window.addEventListener('resize', function () {
  let articlesSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#home-news .center-div')[0]);
  articlesSlider.params.slidesOffsetBefore = articlesSliderAlignment;
});
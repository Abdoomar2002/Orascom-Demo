let projectsSliderSelector        = '.projects-slider',
projectsBackgroundsSliderSelector = '.projects-background-slider';

//Projects backgrounds slider
let projectsBackgroundsSliderOptions = {
  loop: false,
  speed:1000,
  //freeMode: true,
  effect: 'fade'
};
let projectsBackgroundsSlider = new Swiper(projectsBackgroundsSliderSelector, projectsBackgroundsSliderOptions);


// Projects Slider
let projectsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#featured-projects .center-div')[0]);
let projectsSliderOptions = {
  speed:1000,
  spaceBetween: 110,
  slidesOffsetAfter: projectsSliderAlignment * 2.25,
  slidesPerView: 3,
  slidesOffsetBefore: projectsSliderAlignment,
  preloadImages: true,
  lazy: false,
  loadPrevNext: 1,
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    375: {
      slidesPerView: 1.3,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 110
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
      slidesOffsetAfter: 400
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 110,
      slidesOffsetAfter: 500
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 110
    }
  },
  //freeMode: true,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.projects-slider-next',
    prevEl: '.projects-slider-prev',
  },
  pagination: {
    el: '.projects-slider-progress',
    type: 'progressbar',
  }
};
let projectsSlider = new Swiper(projectsSliderSelector, projectsSliderOptions);

// Matching projects sliders
if(projectsBackgroundsSlider.controller){
  projectsBackgroundsSlider.controller.control = projectsSlider;
  projectsSlider.controller.control = projectsBackgroundsSlider;
}

window.addEventListener('resize', function () {
  let projectsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#featured-projects .center-div')[0]);
  projectsSlider.params.slidesOffsetAfter = projectsSliderAlignment * 2.25,
  projectsSlider.params.slidesOffsetBefore = projectsSliderAlignment;
});
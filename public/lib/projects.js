// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded. Skipping projects slider initialization.');
    return;
  }

  let projectsSliderSelector        = '.projects-slider',
      projectsBackgroundsSliderSelector = '.projects-background-slider';

  //Projects backgrounds slider
  let projectsBackgroundsSliderOptions = {
    loop: false,
    speed:1000,
    //freeMode: true,
    effect: 'fade'
  };

  let projectsBackgroundsSliderElement = document.querySelector(projectsBackgroundsSliderSelector);
  let projectsBackgroundsSlider = null;
  if (projectsBackgroundsSliderElement) {
    projectsBackgroundsSlider = new Swiper(projectsBackgroundsSliderSelector, projectsBackgroundsSliderOptions);
    window.projectsBackgroundsSlider = projectsBackgroundsSlider; // Make it globally accessible
  }

  // Projects Slider
  let centerDiv = document.querySelectorAll('section#featured-projects .center-div')[0];
  if (!centerDiv) {
    console.warn('Featured projects section center-div not found. Skipping projects slider initialization.');
    return;
  }

  let projectsSliderAlignment = sliderLeftAlignment(centerDiv);
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

  let projectsSliderElement = document.querySelector(projectsSliderSelector);
  let projectsSlider = null;
  if (projectsSliderElement) {
    projectsSlider = new Swiper(projectsSliderSelector, projectsSliderOptions);
    window.projectsSlider = projectsSlider; // Make it globally accessible
  }

  // Matching projects sliders
  if(projectsBackgroundsSlider && projectsBackgroundsSlider.controller && projectsSlider){
    projectsBackgroundsSlider.controller.control = projectsSlider;
    projectsSlider.controller.control = projectsBackgroundsSlider;
  }

  window.addEventListener('resize', function () {
    let centerDiv = document.querySelectorAll('section#featured-projects .center-div')[0];
    if (centerDiv && window.projectsSlider) {
      let projectsSliderAlignment = sliderLeftAlignment(centerDiv);
      window.projectsSlider.params.slidesOffsetAfter = projectsSliderAlignment * 2.25;
      window.projectsSlider.params.slidesOffsetBefore = projectsSliderAlignment;
    }
  });
});
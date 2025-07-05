// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded. Skipping webinars slider initialization.');
    return;
  }

  let webinarsSliderSelector  = '.webinars-slider';

  // Webinars Slider
  let centerDiv = document.querySelectorAll('section#home-webinars .center-div')[0];
  if (!centerDiv) {
    console.warn('Webinars section center-div not found. Skipping webinars slider initialization.');
    return;
  }

  let webinarsSliderAlignment = sliderLeftAlignment(centerDiv);
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

  let webinarsSliderElement = document.querySelector(webinarsSliderSelector);
  if (webinarsSliderElement) {
    let webinarsSlider = new Swiper(webinarsSliderSelector, webinarsSliderOptions);
    window.webinarsSlider = webinarsSlider; // Make it globally accessible

    window.addEventListener('resize', function () {
      let centerDiv = document.querySelectorAll('section#home-webinars .center-div')[0];
      if (centerDiv && window.webinarsSlider) {
        let webinarsSliderAlignment = sliderLeftAlignment(centerDiv);
        window.webinarsSlider.params.slidesOffsetBefore = webinarsSliderAlignment;
      }
    });
  }
});
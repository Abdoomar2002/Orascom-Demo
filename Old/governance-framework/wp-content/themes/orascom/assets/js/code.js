let ethicsSliderSelector         = '.ethics-slider',
    excellenceSliderSelector     = '.excellence-slider',
    identitySliderSelector       = '.identity-slider';

let identitySliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#identity .center-div')[0]);


// Ethics Slider
let ethicsSliderOptions = {
  speed:1000,
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.ethics-slider-next',
    prevEl: '.ethics-slider-prev',
  },
  pagination: {
    el: '.ethics-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><svg id="hexagon" viewBox="0 0 115 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke-width="1" fill="none">
      <polygon points="0 49.8966942 28.5616533 0 86.4128929 0 114.974546 49.8966942 86.4128929 99.84371 28.5616533 100"></polygon>
    </svg><span>0${(index + 1)}</span></span>`;
    },
  }
};

if ( document.querySelectorAll( `${ ethicsSliderSelector } .swiper-slide` ).length > 1 ) {
  new Swiper(ethicsSliderSelector, ethicsSliderOptions);
}

// Excellence Slider
let excellenceSliderOptions = {
  speed:1000,
  spaceBetween: 20,
  loop: true,
  slidesPerView: 1,
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.excellence-slider-next',
    prevEl: '.excellence-slider-prev',
  },
  pagination: {
    el: '.excellence-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><svg id="hexagon" viewBox="0 0 115 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke-width="1" fill="none">
      <polygon points="0 49.8966942 28.5616533 0 86.4128929 0 114.974546 49.8966942 86.4128929 99.84371 28.5616533 100"></polygon>
    </svg><span>0${(index + 1)}</span></span>`;
    },
  }
};

if ( document.querySelectorAll( `${ excellenceSliderSelector } .swiper-slide` ).length > 1 ) {
  new Swiper( excellenceSliderSelector, excellenceSliderOptions );
}

// Identity Slider
let identitySliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView: 7,
  slidesOffsetBefore: identitySliderAlignment,
  slideToClickedSlide: false,
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
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.identity-slider-next',
    prevEl: '.identity-slider-prev',
  },
  pagination: {
    el: '.identity-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let identitySlider = new Swiper(identitySliderSelector, identitySliderOptions);

window.addEventListener('resize', function () {
  let identitySliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#identity .center-div')[0]);
  identitySlider.params.slidesOffsetBefore = identitySliderAlignment;
});
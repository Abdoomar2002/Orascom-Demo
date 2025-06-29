let financialSliderSelector     = '.financial-slider',
    earningsSliderSelector      = '.earnings-slider',
    presentationsSliderSelector = '.presentations-slider',
    corporateSliderSelector     = '.corporate-slider',
    shareholderSliderSelector   = '.shareholder-slider',
    disclosuresSliderSelector   = '.disclosures-slider',
    eventsSliderSelector        = '.events-slider',
    researchSliderSelector      = '.research-slider';
let financialSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#financial-reports-section .center-div')[0]);

// Financial Reports Slider
let financialSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.financial-slider-next',
    prevEl: '.financial-slider-prev',
  },
  pagination: {
    el: '.financial-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let financialSlider = new Swiper(financialSliderSelector, financialSliderOptions);


// Earnings Slider
let earningsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.earnings-slider-next',
    prevEl: '.earnings-slider-prev',
  },
  pagination: {
    el: '.earnings-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let earningsSlider = new Swiper(earningsSliderSelector, earningsSliderOptions);


// Presentations Slider
let presentationsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.presentations-slider-next',
    prevEl: '.presentations-slider-prev',
  },
  pagination: {
    el: '.presentations-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let presentationsSlider = new Swiper(presentationsSliderSelector, presentationsSliderOptions);


// Croporate Slider
let corporateSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.corporate-slider-next',
    prevEl: '.corporate-slider-prev',
  },
  pagination: {
    el: '.corporate-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let corporateSlider = new Swiper(corporateSliderSelector, corporateSliderOptions);


// Shareholder Slider
let shareholderSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.shareholder-slider-next',
    prevEl: '.shareholder-slider-prev',
  },
  pagination: {
    el: '.shareholder-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let shareholderSlider = new Swiper(shareholderSliderSelector, shareholderSliderOptions);


// Disclosures Slider
let disclosuresSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 1.5,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.disclosures-slider-next',
    prevEl: '.disclosures-slider-prev',
  },
  pagination: {
    el: '.disclosures-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let disclosuresSlider = new Swiper(disclosuresSliderSelector, disclosuresSliderOptions);


// Events Slider
let eventsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 6.8,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.events-slider-next',
    prevEl: '.events-slider-prev',
  },
  pagination: {
    el: '.events-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let eventsSlider = new Swiper(eventsSliderSelector, eventsSliderOptions);


// Research Slider
let researchSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView:9,
  slidesOffsetBefore: financialSliderAlignment,
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
      slidesPerView: 1.2,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1.2,
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
      slidesPerView: 4.5,
      spaceBetween: 30
    },
    1680: {
      slidesPerView:4.5,
      spaceBetween: 30
    },
    1920: {
      slidesPerView: 4.5,
      spaceBetween: 50
    },
    3000: {
      slidesPerView: 4.5,
      spaceBetween: 50
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.research-slider-next',
    prevEl: '.research-slider-prev',
  },
  pagination: {
    el: '.research-slider-progress',
    type: 'progressbar',
  },
  on: {
  }
};
let researchSlider = new Swiper(researchSliderSelector, researchSliderOptions);


document.getElementById('dividends-view-more').addEventListener(evtClick, toggleAllRows);
if (document.querySelector('.share-information .view-more')) {
  document.querySelector('.share-information .view-more').addEventListener(evtClick, showAllListitems);
}

function showAllListitems(e){
  let table = document.querySelector('.info-wrapper.list.data-table-container');

  if(!table.classList.contains('all'))
    table.classList.add('all');
  else
  table.classList.remove('all');
}

function toggleAllRows(e){
  let table = document.getElementById('dividends-table');

  if(!table.classList.contains('all'))
    table.classList.add('all');
  else
  table.classList.remove('all');
}



window.addEventListener('resize', function () {
  let financialSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#financial-reports-section .center-div')[0]);
  financialSlider.params.slidesOffsetBefore = financialSliderAlignment;
  earningsSlider.params.slidesOffsetBefore = financialSliderAlignment;
  presentationsSlider.params.slidesOffsetBefore = financialSliderAlignment;
  corporateSlider.params.slidesOffsetBefore = financialSliderAlignment;
  shareholderSlider.params.slidesOffsetBefore = financialSliderAlignment;
  disclosuresSlider.params.slidesOffsetBefore = financialSliderAlignment;
  eventsSlider.params.slidesOffsetBefore = financialSliderAlignment;
  researchSlider.params.slidesOffsetBefore = financialSliderAlignment;
});
//Slider selectors
let historySliderSelector        = '.main-intro-slider',
    yearsSliderSelector          = '.years-slider',
    pillarsSliderSelector        = '.pillars-slider',
    brandsSliderSelector         = '.brands-slider',
    brandsModalSliderSelector    = '.brands-modal-slider',
    directorsSliderSelector      = '.directors-slider',
    directorsModalSliderSelector = '.directors-modal-slider';
    
let interleaveOffset        = 0.5;

let brandsModalEl           = document.getElementById('brands-modal'),
    closeBrandsModalEl      = document.getElementById('close-brands-modal'),
    directorsModalEl        = document.getElementById('directors-modal'),
    closeDirectorsModalEl   = document.getElementById('close-directors-modal');

// History Slider
let historySliderOptions = {
  speed:1000,
  direction: 'vertical',
  watchSlidesProgress: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.main-slider-next',
    prevEl: '.main-slider-prev',
  },
  pagination: {
    el: '.main-slider-progress',
    type: 'progressbar',
  },
  on: {
    init: function(){
      let swiper = this;
      swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
      swiper.slides[swiper.activeIndex].querySelector('.title').classList.add('show');
    },
    slideChangeTransitionEnd: function(){
      let swiper = this,
          captions = swiper.el.querySelectorAll('.caption'),
          titles = swiper.el.querySelectorAll('.title');
      for (let i = 0; i < captions.length; ++i) {
        captions[i].classList.remove('show');
      }
      swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');

      for (let i = 0; i < titles.length; ++i) {
        titles[i].classList.remove('show');
      }
      swiper.slides[swiper.activeIndex].querySelector('.title').classList.add('show');
    },
    progress: function(data){
      let swiper = this;
      if(windowWidth >= 640){
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.height * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;
          
          swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateY(" + innerTranslate + "px)";
        }
      }else{
        for (let i = 0; i < swiper.slides.length; i++) {
          let slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;
          
          swiper.slides[i].querySelector(".slide-bgimg").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      }
    },
    touchStart: function() {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },
    setTransition: function(speed) {
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-bgimg").style.transition =
          speed + "ms";
      }
    }
  },
  breakpoints: {
    640: {
      direction: 'horizontal'
    }
  }
};
let historySlider = new Swiper(historySliderSelector, historySliderOptions);


// Years Slider
let yearsSliderOptions = {
  //loop: true,
  //loopAdditionalSlides: 10,
  slidesPerView: 7,
  centeredSlides : true,
  slideToClickedSlide: true,
  freeMode: false,
  //touchRatio: 3,
  direction: 'vertical',
  on: {
    click: function(){
      historySlider.autoplay.stop();
    }
  },
  breakpoints: {
    640: {
      direction: 'horizontal',
      slidesPerView: 5
    }
  }
};
let yearsSlider = new Swiper(yearsSliderSelector, yearsSliderOptions);

// Matching History sliders
historySlider.controller.control = yearsSlider;
yearsSlider.controller.control = historySlider;


// Pillars Slider
let pillarsSliderOptions = {
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
    nextEl: '.pillars-slider-next',
    prevEl: '.pillars-slider-prev',
  },
  pagination: {
    el: '.pillars-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><svg id="hexagon" viewBox="0 0 115 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke-width="1" fill="none">
      <polygon points="0 49.8966942 28.5616533 0 86.4128929 0 114.974546 49.8966942 86.4128929 99.84371 28.5616533 100"></polygon>
    </svg><span>0${(index + 1)}</span></span>`;
    },
  }
};
let pillarsSlider = new Swiper(pillarsSliderSelector, pillarsSliderOptions);


// Brands Slider
let brandsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#brands .center-div')[0]);
let brandsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView: 6,
  slidesOffsetBefore: brandsSliderAlignment,
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
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.brands-slider-next',
    prevEl: '.brands-slider-prev',
  },
  pagination: {
    el: '.brands-slider-progress',
    type: 'progressbar',
  },
  on: {
    click: function(){
      openBrandsModal(this.clickedIndex);
    }
  }
};
let brandsSlider = new Swiper(brandsSliderSelector, brandsSliderOptions);


// Brands Modal Slider
//let brandsModalSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#brands .center-div')[0]);
let brandsModalSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 300,
  slidesPerView: 1,
  //slidesOffsetBefore: brandsModalSliderAlignment,
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
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.brands-modal-slider-next',
    prevEl: '.brands-modal-slider-prev',
  },
  pagination: {
    el: '.brands-modal-slider-progress',
    type: 'progressbar',
  }
};
let brandsModalSlider = new Swiper(brandsModalSliderSelector, brandsModalSliderOptions);

//Directors Slider
let directorsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#leadership .center-div')[0]);
let directorsSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 50,
  slidesPerView: 6,
  slidesOffsetBefore: directorsSliderAlignment,
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
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.directors-slider-next',
    prevEl: '.directors-slider-prev',
  },
  pagination: {
    el: '.directors-slider-progress',
    type: 'progressbar',
  },
  on: {
    click: function(){
      openDirectorsModal(this.clickedIndex);
    }
  }
};
let directorsSlider = new Swiper(directorsSliderSelector, directorsSliderOptions);


// Directors Modal Slider
let directorsModalSliderOptions = {
  speed:1000,
  spaceBetween: 50,
  slidesOffsetAfter: 300,
  slidesPerView: 1,
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
      slidesPerView: 1,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  },
  freeMode: false,
  direction: 'horizontal',
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.directors-modal-slider-next',
    prevEl: '.directors-modal-slider-prev',
  },
  pagination: {
    el: '.directors-modal-slider-progress',
    type: 'progressbar',
  }
};
let directorsModalSlider = new Swiper(directorsModalSliderSelector, directorsModalSliderOptions);


function openBrandsModal(index){
  brandsModalEl.classList.add('active');
  brandsModalSlider.update();
  brandsModalSlider.slideTo(index);
  closeBrandsModalEl.addEventListener(evtClick, closeBrandsModal);
}

function closeBrandsModal(e){
  brandsModalEl.classList.remove('active');
  closeBrandsModalEl.removeEventListener(evtClick, closeBrandsModal);
}

function openDirectorsModal(index){
  directorsModalEl.classList.add('active');
  directorsModalSlider.update();
  directorsModalSlider.slideTo(index);
  closeDirectorsModalEl.addEventListener(evtClick, closeDirectorsModal);
}

function closeDirectorsModal(e){
  directorsModalEl.classList.remove('active');
  closeDirectorsModalEl.removeEventListener(evtClick, closeDirectorsModal);
}


Array.from(document.querySelectorAll('.counter')).forEach((el) => {
  let counterEl   = el;
  
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);

      let current = 0,
          target  = parseInt(counterEl.getAttribute('data-count'));

      let counterCheck = setInterval(() => { 
        if(current <= target){
          current++;
          [...counterEl.childNodes][0].textContent = current;
        }else{
          clearInterval(counterCheck);
        }
      }, 25);
    }
  }, 100);

});



window.addEventListener('resize', function () {
  let brandsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#brands .center-div')[0]);
  brandsSlider.params.slidesOffsetBefore = brandsSliderAlignment;

  let directorsSliderAlignment = sliderLeftAlignment(document.querySelectorAll('section#leadership .center-div')[0]);
  directorsSlider.params.slidesOffsetBefore = directorsSliderAlignment;
});
//Slider selectors
let mainSliderSelector                = '.main-intro-slider',
    navSliderSelector                 = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
  loop: true,
  speed:2000,
  autoplay:{
    delay:4000
  },
  loopAdditionalSlides: 10,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.main-slider-next',
    prevEl: '.main-slider-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      function numberAppend(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
      }
      return '<span class="swiper-pagination-current">' + numberAppend(current) + '</span><span class="swiper-pagination-line"></span> <span class="swiper-pagination-total">' + numberAppend(total) + "</span>"; 
    }
  },
  on: {
    init: function(){
      //this.autoplay.stop();
    },
    imagesReady: function(){
      //this.autoplay.start();
    },
    slideChangeTransitionEnd: function(){
      let swiper = this,
          captions = swiper.el.querySelectorAll('.caption');
      // for (let i = 0; i < captions.length; ++i) {
      //   captions[i].classList.remove('show');
      // }
      //swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
    },
    progress: function(data){
      let swiper = this;
      for (let i = 0; i < swiper.slides.length; i++) {
        let slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;
        
        swiper.slides[i].querySelector(".slide-bgimg").style.transform =
          "translateX(" + innerTranslate + "px)";
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
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);


// Navigation Slider
let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  speed:1000,
  spaceBetween: 30,
  slidesPerView: 1.7,
  centeredSlides : false,
  touchRatio: 0.7,
  slideToClickedSlide: false,
  freeMode: false,
  direction: 'horizontal',
  pagination: {
    el: '.main-slider-progress',
    type: 'progressbar',
  },
  on: {
    click: function(){
      //mainSlider.autoplay.stop();
    }
  }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

//Matching Intro sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;


// Home services
Array.from(document.getElementById('home-services-units').querySelectorAll('li')).forEach((el, i) => {
  //var link = el.querySelectorAll('.have-subs-trigger')[0];
  
  el.addEventListener(evtIn, function(e) {
    Array.from(document.getElementById('home-services-images').querySelectorAll('img')).forEach((el) => {
      el.classList.remove('active');
    });
    document.getElementById('home-services-images').querySelectorAll('img')[i].classList.add('active');
  });
});

// stop autoplay while scrolling
var isScrolling;
window.addEventListener('scroll', function ( event ) {
  if(mainSlider.autoplay.running)
    mainSlider.autoplay.stop();

  window.clearTimeout( isScrolling );
  
	isScrolling = setTimeout(function() {
		if(!mainSlider.autoplay.running)
      mainSlider.autoplay.start();
	}, 66);
}, false);
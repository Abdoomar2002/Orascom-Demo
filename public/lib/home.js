// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not loaded. Skipping slider initialization.');
    return;
  }

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
          
          let slideBgImg = swiper.slides[i].querySelector(".slide-bgimg");
          if (slideBgImg) {
            slideBgImg.style.transform = "translateX(" + innerTranslate + "px)";
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
          let slideBgImg = swiper.slides[i].querySelector(".slide-bgimg");
          if (slideBgImg) {
            slideBgImg.style.transition = speed + "ms";
          }
        }
      }
    }
  };

  // Initialize main slider if element exists
  let mainSliderElement = document.querySelector(mainSliderSelector);
  if (mainSliderElement) {
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
    window.mainSlider = mainSlider; // Make it globally accessible
  }

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

  // Initialize nav slider if element exists
  let navSliderElement = document.querySelector(navSliderSelector);
  if (navSliderElement) {
    let navSlider = new Swiper(navSliderSelector, navSliderOptions);
    window.navSlider = navSlider; // Make it globally accessible
  }

  //Matching Intro sliders
  if (window.mainSlider && window.navSlider) {
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
  }

  // Home services
  let homeServicesUnits = document.getElementById('home-services-units');
  if (homeServicesUnits) {
    Array.from(homeServicesUnits.querySelectorAll('li')).forEach((el, i) => {
      //var link = el.querySelectorAll('.have-subs-trigger')[0];
      
      el.addEventListener(evtIn, function(e) {
        let homeServicesImages = document.getElementById('home-services-images');
        if (homeServicesImages) {
          Array.from(homeServicesImages.querySelectorAll('img')).forEach((el) => {
            el.classList.remove('active');
          });
          let images = homeServicesImages.querySelectorAll('img');
          if (images[i]) {
            images[i].classList.add('active');
          }
        }
      });
    });
  }

  // stop autoplay while scrolling
  var isScrolling;
  window.addEventListener('scroll', function ( event ) {
    if(window.mainSlider && window.mainSlider.autoplay && window.mainSlider.autoplay.running)
      window.mainSlider.autoplay.stop();

    window.clearTimeout( isScrolling );
    
    isScrolling = setTimeout(function() {
      if(window.mainSlider && window.mainSlider.autoplay && !window.mainSlider.autoplay.running)
        window.mainSlider.autoplay.start();
    }, 66);
  }, false);
});
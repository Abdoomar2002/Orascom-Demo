jQuery(document).on("sf:ajaxfinish", ".searchandfilter", function(evt){
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


  // Earnings Slider
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
  function toggleAllRows(e){
    let table = document.getElementById('dividends-table');

    if(!table.classList.contains('all'))
      table.classList.add('all');
    else
    table.classList.remove('all');
  }


  //tabs
  var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent) {
		var clickedTab = tabClickEvent.currentTarget;
		for (var i = 0; i < myTabs.length; i++) {
			let currentTabParent = clickedTab.parentElement;
			Array.from(currentTabParent.querySelectorAll("li")).forEach((el) => {
        el.classList.remove("active");
      });
    }
    
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    
    var anchorReference = tabClickEvent.currentTarget.querySelectorAll("a")[0];
    var activePaneId = anchorReference.getAttribute("href");
		var activePane = document.querySelector(activePaneId);
		
		var currentParent = activePane.parentElement;
		var myContentPanes = currentParent.querySelectorAll(".tab-pane");

		for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }
    if(activePane)
      activePane.classList.add("active");
    
    if(activePane && activePane.hasAttribute('data-slider')){
      let tabSlider = eval(activePane.getAttribute('data-slider'));
      
      if(Array.isArray(tabSlider)){
				Array.from(tabSlider).forEach((el) => {
					el.update();
				});
			} else {
				tabSlider.update();
			}
    }
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
  }
  //console.log(myTabs[0]);
  var myTabHolders = document.querySelectorAll("ul.nav-tabs.reload");
  Array.from(myTabHolders).forEach((el) => {
    el.querySelectorAll("li")[0].click();
  });
  //myTabs[0].click();
});
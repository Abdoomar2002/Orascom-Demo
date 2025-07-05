// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if required dependencies are available
  if (typeof ScrollMagic === 'undefined') {
    console.warn('ScrollMagic library not loaded. Skipping scroll effects.');
    return;
  }
  
  if (typeof TweenMax === 'undefined') {
    console.warn('TweenMax library not loaded. Skipping scroll effects.');
    return;
  }

  if(getDeviceType() == 'desktop'){
    var controller = new ScrollMagic.Controller();

    //Tweens
    var homePatternOneTween = new TimelineMax ()
    .add([
      TweenMax.fromTo("#home-pattern-one", 1, {y: 0}, {y: 300, ease: Linear.easeNone})
    ]);

    //home who we are
    let homePatternOne = document.getElementById('home-pattern-one');
    if (homePatternOne) {
      var scene = new ScrollMagic.Scene({triggerElement: "#home-pattern-one", triggerHook: 'onEnter', duration: "100%"})
        .setTween(homePatternOneTween)
        .addTo(controller);
    }

    let homeWho = document.getElementById('home-who');
    if (homeWho) {
      var scene = new ScrollMagic.Scene({triggerElement: "#home-who", triggerHook: 'onEnter',duration: "80%"})
        .setTween(TweenMax.fromTo("#home-who-img-one", 1, {yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1}))
        //.addIndicators({name: "#home-who-img-one"})
        .addTo(controller);

      var scene = new ScrollMagic.Scene({triggerElement: "#home-who", triggerHook: 'onEnter',duration: "80%"})
        .setTween(TweenMax.fromTo("#home-who-img-two", 1, {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1}))
        .addTo(controller);  
    }

    // var scene = new ScrollMagic.Scene({triggerElement: "#home-who", triggerHook: 'onEnter', duration: 700})
    //   .setTween(TweenMax.staggerFromTo("#who-we-are-data>*", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2))
    //   .addTo(controller);

    //home news
    let homeNews = document.getElementById('home-news');
    if (homeNews) {
      var scene = new ScrollMagic.Scene({triggerElement: "#home-news", triggerHook: 'onEnter', duration: "100%"})
        .setTween(TweenMax.fromTo("#home-pattern-two", 1, {y: 90}, {y: 0}))
        .addTo(controller);

      // var scene = new ScrollMagic.Scene({triggerElement: "#home-news", triggerHook: 'onEnter', duration: 700})
      //   .setTween(TweenMax.staggerFromTo("#newsroom-data>*", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2))
      //   .addTo(controller);

      var scene = new ScrollMagic.Scene({triggerElement: "#home-news", triggerHook: 'onEnter',duration: 600})
        .setTween(TweenMax.fromTo("#home-news-gray", 1, {width: 0}, {width: '100vw'}))
        .addTo(controller);  
    }

    //home services
    let homeServices = document.getElementById('home-services');
    if (homeServices) {
      var scene = new ScrollMagic.Scene({triggerElement: "#home-services", triggerHook: 'onEnter', duration: "100%"})
        .setTween(TweenMax.fromTo("#home-pattern-three", 1, {y: 200}, {y: 0}))
        .addTo(controller);

      var scene = new ScrollMagic.Scene({triggerElement: "#home-services", triggerHook: 'onEnter', duration: "100%"})
        .setTween(TweenMax.fromTo(".home-services-content", 1, {y: 400, opacity: 0}, {y: 0, opacity: 1}))
        .addTo(controller);

      // var scene = new ScrollMagic.Scene({triggerElement: "#home-services", triggerHook: 'onEnter', duration: 700})
      //   .setTween(TweenMax.staggerFromTo("#services-data>*", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2))
      //   .addTo(controller);

      var scene = new ScrollMagic.Scene({triggerElement: "#home-services", triggerHook: 'onCenter',duration: 600})
        .setTween(TweenMax.fromTo("#home-services-gray", 1, {width: 0}, {width: '100vw'}))
        .addTo(controller);  
    }

    //Featured projects
    let featuredProjects = document.getElementById('featured-projects');
    if (featuredProjects) {
      var scene = new ScrollMagic.Scene({triggerElement: "#featured-projects", triggerHook: 'onEnter', duration: "100%"})
        .setTween(TweenMax.fromTo("#home-pattern-four", 1, {y: 0}, {y: -300}))
        .addTo(controller);

      // var scene = new ScrollMagic.Scene({triggerElement: "#featured-projects", triggerHook: 'onEnter', duration: 700})
      //   .setTween(TweenMax.staggerFromTo("#featured-projects-data>*", 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2))
      //   .addTo(controller);
    }

    Array.from(document.querySelectorAll('section')).forEach((el) => {
      let section           = el,
          sectionData       = el.querySelectorAll('.section-data')[0],
          modifier          = 'onEnter';
          
      if(sectionData){
        // console.log(el);
        // console.log(`offset top: ${el.offsetTop} - ${windowHeight}`);
        
        if(getElementOffset(el).top >= windowHeight){
          let sectionDataChilds = sectionData.querySelectorAll("h1,h2,h3,p,a.cta");
          var scene = new ScrollMagic.Scene({triggerElement: section, triggerHook: modifier, duration: 700})
          .setTween(TweenMax.staggerFromTo(sectionDataChilds, 1, {x: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2))
          .addTo(controller);
        }
      }
    });

    Array.from(document.querySelectorAll('.two-image-col')).forEach((el) => {
      let twoImagesHolder   = el,
          modifier          = 'onEnter';

      if(twoImagesHolder && !el.classList.contains('no-animation')){
        let firstImage  = twoImagesHolder.querySelectorAll("img")[0];
        let secondImage = twoImagesHolder.querySelectorAll("img")[1];

        if(getElementOffset(el).top > windowHeight){
          var scene = new ScrollMagic.Scene({triggerElement: twoImagesHolder, triggerHook: modifier, duration: 700})
            .setTween(TweenMax.fromTo(firstImage, 1, {yPercent: -30, opacity: 0}, {yPercent: 0, opacity: 1}))
            .addTo(controller);

          var scene = new ScrollMagic.Scene({triggerElement: twoImagesHolder, triggerHook: modifier, duration: 700})
            .setTween(TweenMax.fromTo(secondImage, 1, {yPercent: 50, opacity: 0}, {yPercent: 0, opacity: 1}))
            .addTo(controller);
        }
        else{
          let stateCheck = setInterval(() => {
            if (document.readyState === 'complete') {
              clearInterval(stateCheck);
              if (firstImage) firstImage.classList.remove('hide');
              if (secondImage) secondImage.classList.remove('hide-reverse');
            }
          }, 100);
        }
      }
    });

    Array.from(document.querySelectorAll('.one-image-col')).forEach((el) => {
      let oneImagesHolder   = el,
          modifier          = 'onEnter';

      if(oneImagesHolder && !el.classList.contains('no-animation')){
        let firstImage  = oneImagesHolder.querySelectorAll("img")[0];

        if(getElementOffset(el).top > windowHeight){
          var scene = new ScrollMagic.Scene({triggerElement: oneImagesHolder, triggerHook: modifier, duration: 700})
            .setTween(TweenMax.fromTo(firstImage, 1, {yPercent: -30, opacity: 0}, {yPercent: 0, opacity: 1}))
            .addTo(controller);
        }
      }
    });

    Array.from(document.querySelectorAll('.grid-view>div.grid-unit')).forEach((el) => {
      let gridUnit   = el,
          modifier          = 'onEnter';

      if(gridUnit){
        var scene = new ScrollMagic.Scene({triggerElement: gridUnit, triggerHook: modifier, duration: 700})
            .setTween(TweenMax.fromTo(gridUnit, 1, {y: 60, opacity: 0}, {y: 0, opacity: 1}))
            .addTo(controller);
      }
    });

    Array.from(document.querySelectorAll('.single-project-gallery')).forEach((el) => {
      let gallery           = el,
          modifier          = 'onEnter';

      if(gallery){
        
        let image1 = gallery.querySelectorAll("img")[0],
            image2 = gallery.querySelectorAll("img")[1],
            image3 = gallery.querySelectorAll("img")[2];
        
        if (image1) {
          var scene = new ScrollMagic.Scene({triggerElement: gallery, triggerHook: modifier, duration: 800})
          .setTween(TweenMax.fromTo(image1, 1, {yPercent: 500, opacity: 0}, {yPercent: 0, opacity: 1}))
          .addTo(controller);
        }

        if (image2) {
          var scene = new ScrollMagic.Scene({triggerElement: gallery, triggerHook: modifier, duration: 800})
          .setTween(TweenMax.fromTo(image2, 1, {yPercent: 300, opacity: 0}, {yPercent: 0, opacity: 1}))
          .addTo(controller);
        }

        if (image3) {
          var scene = new ScrollMagic.Scene({triggerElement: gallery, triggerHook: modifier, duration: 800})
          .setTween(TweenMax.fromTo(image3, 1, {xPercent: 20, opacity: 0}, {xPercent: 0, opacity: 1}))
          .addTo(controller);
        }

        var scene = new ScrollMagic.Scene({triggerElement: gallery, triggerHook: 'onLeave', duration: 800})
        .setTween(TweenMax.to(gallery, 1, {scale:0, opacity:0, ease:Linear.easeNone}))
        .addTo(controller);
      }
    });

    Array.from(document.querySelectorAll('.community-engagement')).forEach((el) => {
      let com           = el,
          modifier      = 'onEnter';
          
      if(com){
        if(getElementOffset(el).top > windowHeight){
          let comUnits = com.querySelectorAll("div");
          var scene = new ScrollMagic.Scene({triggerElement: com, triggerHook: modifier, duration: 700})
          .setTween(TweenMax.staggerFromTo(comUnits, 1, {y: 400, opacity: 0}, {y: 0, opacity: 1}, 0.2))
          .addTo(controller);
        }
      }
    });

    let innerBanner = document.querySelector('.inner-banner');
    if(innerBanner){
      var scene = new ScrollMagic.Scene({triggerElement: innerBanner, triggerHook: 'onLeave', duration: 700})
        .setTween(TweenMax.to(innerBanner, 1, {scale:0, opacity:0, ease:Linear.easeNone}))
        .addTo(controller);
    }
  }
});
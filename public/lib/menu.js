// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  //elements
  let megaTitleElement           = document.getElementById('mega-menu-title'),
      headerElement              = document.getElementById("header"),
      currentMegaMenuLinkElement = null;

  let templateUrl = window.args ? window.args.templateUrl : window.location.origin;

  function openMegaMenu(el){
    let pattern;

    //stop carousel's autoplay
    if(window.mainSlider && window.mainSlider.autoplay)
      window.mainSlider.autoplay.stop();	

    //disable scrolling
    if (typeof bodyScrollLock !== 'undefined' && headerElement) {
      bodyScrollLock.disableBodyScroll(headerElement);
    }
          
    //add open classes
    if (headerElement) headerElement.classList.add('show-dropdown');
    if (el) el.classList.add('current');
    if (window.overlayElement) window.overlayElement.classList.add('active');

    //global current active link
    currentMegaMenuLinkElement = el;

    //add and draw the menu patern svg
    if (typeof Vivus !== 'undefined') {
      pattern = new Vivus('nav-pattern', { duration: 100, file: templateUrl + '/assets/svg/patterns/mega.svg' });
    }
  }

  function closeMegaMenu(el){
    let pattern = document.getElementById('nav-pattern');
    if (pattern) {
      let svg = pattern.querySelectorAll('svg')[0];
      if (svg) svg.remove();
    }

    //start carousel's autoplay
    if(window.mainSlider && window.mainSlider.autoplay)
      window.mainSlider.autoplay.start();

    //enable scrolling
    if (typeof bodyScrollLock !== 'undefined' && headerElement) {
      bodyScrollLock.enableBodyScroll(headerElement);
    }
        
    //remove open classes
    if (headerElement) headerElement.classList.remove('show-dropdown');

    if(el)
      el.classList.remove('current');

    if (window.overlayElement) window.overlayElement.classList.remove('active');

    //global current active link
    currentMegaMenuLinkElement = null;
  }

  if (window.overlayElement) {
    overlayElement.addEventListener(evtClick, function(e) {
      closeMegaMenu(currentMegaMenuLinkElement);
    });
  }

  //if(windowWidth >= 992){
    //Mega menu sub links hover
    let desktopNav = document.getElementById('desktop-nav'),
        mobileNav = document.getElementById('mobile-nav');

    if (desktopNav) {
      //console.log(desktopNav.querySelectorAll('.sub-menu-item'));

      Array.from(desktopNav.querySelectorAll('.sub-menu-item')).forEach((el) => {
        //const imgs = Array.from(el.querySelectorAll('img'));
        if (typeof hoverEffect !== 'undefined') {
          new hoverEffect({
            hoverElement: el,
            imagesHolder: el.querySelectorAll('.sub-menu-panel')[0].querySelectorAll('.canvas-holder')[0],
            intensity: el.dataset.intensity || undefined,
            speedIn: el.dataset.speedin || undefined,
            speedOut: el.dataset.speedout || undefined,
            easing: el.dataset.easing || undefined,
            hover: el.dataset.hover || undefined,
            image1: el.dataset.imagesrc,
            image2: el.dataset.imagesrc,
            displacementImage: el.dataset.displacement
          });
        }

        const anchors = Array.from(el.querySelectorAll('a'));

        Array.from(anchors).forEach((anchor) => {
          anchor.addEventListener(evtClick, function(e) {
            closeMegaMenu(currentMegaMenuLinkElement);
          });
        });

      });

      //Mega menu main links with subs click handling
      Array.from(desktopNav.querySelectorAll('.have-subs')).forEach((el) => {
        var link = el.querySelectorAll('.have-subs-trigger')[0];
        //console.log(link);

        if (link) {
          link.addEventListener(evtClick, function(e) {
            //title effect
            if (megaTitleElement) {
              megaTitleElement.innerHTML = '';
              var str = el.dataset.title ? el.dataset.title.split("") : [];
              (function animate() {
                str.length > 0 ? megaTitleElement.innerHTML += str.shift() : clearTimeout(running); 
                var running = setTimeout(animate, 50);
              })();
            }

            //open panel for the first time
            if(!headerElement.classList.contains('show-dropdown')){
              openMegaMenu(el);
            }
            //close panel or switch to another link
            else{
              //click on the current link again will close the panel
              if(el.classList.contains('current')){
                closeMegaMenu(el);
              }
              //click on another link
              else{
                //remove the previous current
                Array.from(desktopNav.querySelectorAll('.have-subs')).forEach((el) => {
                  el.classList.remove('current');
                });
            
                //new current
                el.classList.add('current');
              }
            }
          });
        }
        
      });
    }
  //}else{
    //remove the spcial desktop markup when show on small devices
    // Array.from(document.querySelectorAll('.sub-menu-panel')).forEach((el) => {
    //   el.remove();
    // });
    //megaTitleElement.remove();

    //burger menu
    let burgerMenu = document.getElementById('burger-menu');
    if (burgerMenu) {
      burgerMenu.addEventListener(evtClick, function(e) {
        let el = headerElement;
        
        if(!el.classList.contains('show-dropdown')){
          el.classList.add('show-dropdown');
          if (typeof bodyScrollLock !== 'undefined') {
            bodyScrollLock.disableBodyScroll(headerElement);
          }
          if (typeof Vivus !== 'undefined') {
            pattern = new Vivus('nav-pattern', { duration: 100, file: templateUrl + '/assets/svg/patterns/mega.svg' });
          }

          if(document.body.classList.contains("home") && window.mainSlider && window.mainSlider.autoplay)
            window.mainSlider.autoplay.stop();	
        }else{
          el.classList.remove('show-dropdown');
          if (typeof bodyScrollLock !== 'undefined') {
            bodyScrollLock.enableBodyScroll(headerElement);
          }
          let navPattern = document.getElementById('nav-pattern');
          if (navPattern) {
            let svg = navPattern.querySelectorAll('svg')[0];
            if (svg) svg.remove();
          }

          if(document.body.classList.contains("home") && window.mainSlider && window.mainSlider.autoplay)
            window.mainSlider.autoplay.start();
        }
      });
    }

    //sub menu accordion
    if (mobileNav) {
      Array.from(mobileNav.querySelectorAll('.have-subs')).forEach((el) => {
        var link = el.querySelectorAll('.have-subs-trigger')[0];
        var evtClick = "click";

        if (link) {
          link.addEventListener(evtClick, function(e) {
            if(!el.classList.contains('current'))
              el.classList.add('current');
            else
            el.classList.remove('current');
          });
        }
      });
    }
  //}

  //refresh on horizontal resizing
  window.addEventListener('resize', function () {
    if(headerElement && headerElement.classList.contains('show-dropdown')){
      closeMegaMenu(currentMegaMenuLinkElement);
      if (desktopNav) {
        Array.from(desktopNav.querySelectorAll('.have-subs')).forEach((el) => {
          el.classList.remove('current');
        });
      }
    }
    if (window.innerWidth !== windowWidth && window.innerWidth >= 992 && windowWidth < 992) {
      if (desktopNav) {
        Array.from(desktopNav.querySelectorAll('.sub-menu-item')).forEach((el) => {
          //remove the old canavas
          let canvasHolder = el.querySelectorAll('.sub-menu-panel')[0];
          if (canvasHolder) {
            let canvas = canvasHolder.querySelectorAll('.canvas-holder')[0];
            if (canvas) {
              Array.from(canvas.children).forEach((can) => {
                can.remove();
              });
            }
          }
          
          //const imgs = Array.from(el.querySelectorAll('img'));
          if (typeof hoverEffect !== 'undefined') {
            new hoverEffect({
              hoverElement: el,
              imagesHolder: el.querySelectorAll('.sub-menu-panel')[0].querySelectorAll('.canvas-holder')[0],
              intensity: el.dataset.intensity || undefined,
              speedIn: el.dataset.speedin || undefined,
              speedOut: el.dataset.speedout || undefined,
              easing: el.dataset.easing || undefined,
              hover: el.dataset.hover || undefined,
              image1: el.dataset.imagesrc,
              image2: el.dataset.imagesrc,
              displacementImage: el.dataset.displacement
            });
          }
      
          const anchors = Array.from(el.querySelectorAll('a'));
      
          Array.from(anchors).forEach((anchor) => {
            anchor.addEventListener(evtClick, function(e) {
              closeMegaMenu(currentMegaMenuLinkElement);
            });
          });
      
        });
      }
    }
  });
});








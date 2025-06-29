//elements
let megaTitleElement           = document.getElementById('mega-menu-title'),
    headerElement              = document.getElementById("header"),
    currentMegaMenuLinkElement = null;

let templateUrl = args.templateUrl;


function openMegaMenu(el){
  let pattern;

  //stop carousel's autoplay
  if(document.querySelectorAll('.main-slider')[0])
    mainSlider.autoplay.stop();	

  //disable scrolling
  bodyScrollLock.disableBodyScroll(headerElement);
        
  //add open classes
  headerElement.classList.add('show-dropdown');
  el.classList.add('current');
  overlayElement.classList.add('active');

  //global current active link
  currentMegaMenuLinkElement = el;

  //add and draw the menu patern svg
  pattern = new Vivus('nav-pattern', { duration: 100, file: templateUrl + '/assets/svg/patterns/mega.svg' });
}

function closeMegaMenu(el){
  let pattern = document.getElementById('nav-pattern').querySelectorAll('svg')[0];

  //start carousel's autoplay
  if(document.querySelectorAll('.main-slider')[0])
    mainSlider.autoplay.start();

  //enable scrolling
  bodyScrollLock.enableBodyScroll(headerElement);
      
  //remove open classes
  headerElement.classList.remove('show-dropdown');

  if(el)
    el.classList.remove('current');

  overlayElement.classList.remove('active');

  //global current active link
  currentMegaMenuLinkElement = null;

  //remove menu pattern svg
  if(pattern)
    pattern.remove();
}

overlayElement.addEventListener(evtClick, function(e) {
  closeMegaMenu(currentMegaMenuLinkElement);
});
//if(windowWidth >= 992){
  //Mega menu sub links hover
  let desktopNav = document.getElementById('desktop-nav'),
      mobileNav = document.getElementById('mobile-nav');

  //console.log(desktopNav.querySelectorAll('.sub-menu-item'));

  Array.from(desktopNav.querySelectorAll('.sub-menu-item')).forEach((el) => {
    //const imgs = Array.from(el.querySelectorAll('img'));
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

    link.addEventListener(evtClick, function(e) {
      //title effect
      megaTitleElement.innerHTML = '';
      var str = el.dataset.title.split("");
      (function animate() {
        str.length > 0 ? megaTitleElement.innerHTML += str.shift() : clearTimeout(running); 
        var running = setTimeout(animate, 50);
      })();

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
    
  });
//}else{
  //remove the spcial desktop markup when show on small devices
  // Array.from(document.querySelectorAll('.sub-menu-panel')).forEach((el) => {
  //   el.remove();
  // });
  //megaTitleElement.remove();

  //burger menu
  document.getElementById('burger-menu').addEventListener(evtClick, function(e) {
    let el = headerElement;
    
    if(!el.classList.contains('show-dropdown')){
      el.classList.add('show-dropdown');
      bodyScrollLock.disableBodyScroll(headerElement);
      pattern = new Vivus('nav-pattern', { duration: 100, file: templateUrl + '/assets/svg/patterns/mega.svg' });

      if(document.body.classList.contains("home"))
        mainSlider.autoplay.stop();	
    }else{
      el.classList.remove('show-dropdown');
      bodyScrollLock.enableBodyScroll(headerElement);
      document.getElementById('nav-pattern').querySelectorAll('svg')[0].remove();

      if(document.body.classList.contains("home"))
        mainSlider.autoplay.start();
    }
  });

  //sub menu accordion
  Array.from(mobileNav.querySelectorAll('.have-subs')).forEach((el) => {
    var link = el.querySelectorAll('.have-subs-trigger')[0];
    var evtClick = "click";

    link.addEventListener(evtClick, function(e) {
      if(!el.classList.contains('current'))
        el.classList.add('current');
      else
      el.classList.remove('current');
    });
  });
//}

//refresh on horizontal resizing
window.addEventListener('resize', function () {
  if(headerElement.classList.contains('show-dropdown')){
    closeMegaMenu(currentMegaMenuLinkElement);
    Array.from(desktopNav.querySelectorAll('.have-subs')).forEach((el) => {
      el.classList.remove('current');
    });
  }
  if (window.innerWidth !== windowWidth && window.innerWidth >= 992 && windowWidth < 992) {
    Array.from(desktopNav.querySelectorAll('.sub-menu-item')).forEach((el) => {
      //remove the old canavas
      Array.from(el.querySelectorAll('.sub-menu-panel')[0].querySelectorAll('.canvas-holder')[0].children).forEach((can) => {
        can.remove();
      });
      
      //const imgs = Array.from(el.querySelectorAll('img'));
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
  
      const anchors = Array.from(el.querySelectorAll('a'));
  
      Array.from(anchors).forEach((anchor) => {
        anchor.addEventListener(evtClick, function(e) {
          closeMegaMenu(currentMegaMenuLinkElement);
        });
      });
  
    });
  }
});








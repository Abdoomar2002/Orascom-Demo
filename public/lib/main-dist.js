// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  //elements
  let preloaderElement = document.getElementById('preloader'),
      cursorElement    = document.getElementById('cursor'),
      overlayElement   = document.getElementById('overlay');

  //events
  let evtIn = "mouseenter",
      evtOut = "mouseleave",
      evtClick = "click";

  if(getDeviceType() == 'tablet')
    document.body.classList.add('tablet');

  else if(getDeviceType() == 'mobile')
    document.body.classList.add('mobile');

  //preloader
  if (preloaderElement) {
    window.addEventListener("load", function() {
      preloaderElement.classList.add('done');
      
      setTimeout(() => {
        if (cursorElement) {
          cursorElement.classList.remove('is-active');
        }
        preloaderElement.remove();
      }, 500);
    });
  }

  //Cursor
  if(getDeviceType() == 'desktop' && cursorElement){
    document.body.classList.add('custom_cursor');
    let cursor = new Cursor();
  }

  //refresh on horizontal resizing
  // window.addEventListener('resize', function () {
    
  //   //start big resize to small
  //   if (window.innerWidth !== windowWidth && window.innerWidth <= 992 && windowWidth > 992) {
  //     location.reload();
  //   }
  //   //start small resize to big
  //   if (window.innerWidth !== windowWidth && window.innerWidth >= 992 && windowWidth < 992) {
  //     location.reload();
  //   }
  // });
});






jQuery(document).on("sf:ajaxfinish", ".searchandfilter", function(){
  if(getDeviceType() == 'desktop'){
    //Grid animation
    Array.from(document.querySelectorAll('.grid-view>div.grid-unit')).forEach((el) => {
      let gridUnit   = el,
          modifier          = 'onEnter';

      if(gridUnit){
        var scene = new ScrollMagic.Scene({triggerElement: gridUnit, triggerHook: modifier, duration: 700})
            .setTween(TweenMax.fromTo(gridUnit, 1, {y: 60, opacity: 0}, {y: 0, opacity: 1}))
            .addTo(controller);
      }
    });
    
    //Cursor
    document.body.classList.add('custom_cursor');
    let cursor = new Cursor();
  }
});
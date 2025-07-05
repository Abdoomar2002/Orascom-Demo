// Wait for DOM and dependencies to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Check if TweenMax is available
  if (typeof TweenMax === 'undefined') {
    console.warn('TweenMax library not loaded. Skipping distortion effect initialization.');
    return;
  }

  var hoverEffect = function(opts) {

      var imagesHolder = opts.imagesHolder || console.warn("no images holder");
      var hoverElement = opts.hoverElement || console.warn("no hover element");
      var dispImage = opts.displacementImage || console.warn("displacement image missing");
      var image1 = opts.image1 || console.warn("first image missing");
      var image2 = opts.image2 || console.warn("second image missing");
      var intensity = opts.intensity || 1;
      var speedIn = opts.speedIn || 1.6;
      var speedOut = opts.speedOut || 1.2;
      var userHover = (opts.hover === undefined) ? true : opts.hover;
      var easing = opts.easing || (typeof Expo !== 'undefined' ? Expo.easeOut : 'power2.out');

      if (!imagesHolder || !hoverElement) {
        console.warn('Required elements not found for distortion effect');
        return;
      }

      imagesHolder.innerHTML = `<img src="${image1}" />`;

      var addEvents = function(){
          var evtIn = "mouseenter";
          var evtOut = "mouseleave";
          var evtMove = "mousemove";
          hoverElement.addEventListener(evtIn, function(e) {
              setTimeout(() => {
                  hoverElement.classList.add('hover');
              }, 0);
              
              // Check if mat and mat.uniforms exist before using them
              if (typeof mat !== 'undefined' && mat.uniforms && mat.uniforms.dispFactor) {
                TweenMax.to(mat.uniforms.dispFactor, speedIn, {
                    value: 1,
                    ease: easing
                });
              }
          });

          hoverElement.addEventListener(evtOut, function(e) {
              setTimeout(() => {
                  hoverElement.classList.remove('hover');
              }, 0);
              
              // Check if mat and mat.uniforms exist before using them
              if (typeof mat !== 'undefined' && mat.uniforms && mat.uniforms.dispFactor) {
                TweenMax.to(mat.uniforms.dispFactor, speedOut, {
                    value: 0,
                    ease: easing
                });
              }
              
              // Check if canvas exists before using it
              if (typeof canvas !== 'undefined') {
                TweenMax.to(canvas, 0.5, {
                    x: 0,
                    y: 0
                });
              }
          });

          hoverElement.addEventListener(evtMove, function(e) {
              TweenMax.to(imagesHolder, 0.5, {
                  x: (e.clientX / window.innerWidth) * 100,
              });
          });
      };

      if (userHover) {
          addEvents();
      }

      this.next = function(){
          if (typeof mat !== 'undefined' && mat.uniforms && mat.uniforms.dispFactor) {
            TweenMax.to(mat.uniforms.dispFactor, speedIn, {
                value: 1,
                ease: easing
            });
          }
      }

      this.previous = function(){
          if (typeof mat !== 'undefined' && mat.uniforms && mat.uniforms.dispFactor) {
            TweenMax.to(mat.uniforms.dispFactor, speedOut, {
                value: 0,
                ease: easing
            });
          }
      };
  };

  // Make hoverEffect globally available
  window.hoverEffect = hoverEffect;
});
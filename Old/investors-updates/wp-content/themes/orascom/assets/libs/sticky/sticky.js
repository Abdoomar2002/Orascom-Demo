/*
		By Osvaldas Valutis, www.osvaldas.info
		Available for use under the MIT License
	*/

	;( function ( document, window, index )
	{
		'use strict';

		let element = document.getElementById("header");
		
		if( !element ) return true;

		var elHeight		= 0,
			elTop			= 0,
			dHeight			= 0,
			wHeight			= 0,
			wScrollCurrent	= 0,
			wScrollBefore	= 0,
			wScrollDiff		= 0;

		window.addEventListener( 'scroll', function()
		{
			elHeight		= element.offsetHeight;
			dHeight			= document.body.offsetHeight;
			wHeight			= window.innerHeight;
			wScrollCurrent	= window.pageYOffset;
			wScrollDiff		= wScrollBefore - wScrollCurrent;
			elTop			= parseInt( window.getComputedStyle( element ).getPropertyValue( 'top' ) ) + wScrollDiff;

			if( wScrollCurrent <= 0 ){ // scrolled to the very top; element sticks to the top
        element.style.top = '0px';
        element.classList.remove('sticky-header');
      }

			else if( wScrollDiff > 0 ){ // scrolled up; element slides in
        element.style.top = ( elTop > 0 ? 0 : elTop ) + 'px';
        element.classList.add('sticky-header');
      }

			else if( wScrollDiff < 0 ) // scrolled down
			{
				element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
          if(elHeight === ( Math.abs( elTop ) > elHeight ? elHeight : elTop ))
            element.classList.remove('sticky-header');
			}

			// else if( wScrollDiff < 0 ) // scrolled down
			// {
			// 	if( wScrollCurrent + wHeight >= dHeight - elHeight ){  // scrolled to the very bottom; element slides in
      //     element.style.top = ( ( elTop = wScrollCurrent + wHeight - dHeight ) < 0 ? elTop : 0 ) + 'px';
      //     element.classList.add('sticky-header');
      //   }

			// 	else{ // scrolled down; element slides out
      //     element.style.top = ( Math.abs( elTop ) > elHeight ? -elHeight : elTop ) + 'px';
      //     if(elHeight === ( Math.abs( elTop ) > elHeight ? elHeight : elTop ))
      //       element.classList.remove('sticky-header');
      //   }
			// }

			wScrollBefore = wScrollCurrent;
		});

	}( document, window, 0 ));
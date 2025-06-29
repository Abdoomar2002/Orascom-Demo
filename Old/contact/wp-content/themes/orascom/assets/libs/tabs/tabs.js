window.addEventListener("load", function() {
	// store tabs variable
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
		
		var relatedFiltersId = anchorReference.getAttribute("data-filters");
		if(relatedFiltersId){
			var activeFilters = document.querySelector(relatedFiltersId);
			var filters = document.querySelectorAll(".banner-filter");
			
			for (i = 0; i < filters.length; i++) {
				filters[i].classList.remove("active");
			}

			if(activeFilters)
				activeFilters.classList.add("active");
				
		}
  }
  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks)
  }
});
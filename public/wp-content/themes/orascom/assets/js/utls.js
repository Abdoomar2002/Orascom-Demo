let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

// Fix iOS viewport
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function sliderLeftAlignment(centeredContainer = window.innerWidth){
  let _windowWidth = window.innerWidth,
    containerWidth = centeredContainer.offsetWidth,
    halfCenterValue = (_windowWidth - containerWidth) / 2;

  return halfCenterValue;
}

function getElementOffset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
  };
}

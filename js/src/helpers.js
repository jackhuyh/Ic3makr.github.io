function hasMobileUA () {
  var nav = window.navigator;
  var ua = nav.userAgent;
  var pa = /iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;

  return pa.test(ua);
}


function isTablet () {
  return screen.width < 992 && screen.width > 767 && hasMobileUA();
}

function isMobile () {
  return screen.width < 767 && hasMobileUA();
}

function isDesktop () {
  return !isTablet() && !isMobile();
}

function escapeSelector (selector) {
  return selector.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, "\\$&")
}

function displaySidebar () {
  if (!isDesktop()) {
    return;
  }
  $('.sidebar-toggle').trigger('click');
}

function isMist () {
  return CONFIG.scheme === 'Mist';
}

function isPisces () {
  return CONFIG.scheme === 'Pisces';
}

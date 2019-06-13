'use strict';
(function() {

  window.onscroll = function() {
    var offset = 0;
    var sticky = false;
    var top = window.scrollY;
    var stickyh = document.querySelector(".menu__longform").outerHeight;

    if (document.querySelector(".overall").offsetTop < top) {
      document.querySelector(".menu__longform").classList.add("sticky");
      sticky = true;
    } else {
      document.querySelector(".menu__longform").classList.remove("sticky");
    }

  };

})();
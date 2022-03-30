// Check if element is in the viewport
function isInViewport(elem) {
    var  rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// 
var upfot = document.getElementById("topFot");
var backTop = document.getElementById("scrollTop");

// 
window.onscroll = function () {
    backTopFunc();
    topFotFunc();
  };

// 
function backTopFunc() {
    if (
      document.documentElement.scrollTop > 20
    ) {
      backTop.style.display = "block";
    } else {
      backTop.style.display = "none";
    }
  };

  function topFotFunc() {
      if (
          isInViewport(upfot)
      ) {
          backTop.style.position = "absolute";
          backTop.style.bottom = "auto";
          backTop.style.top = upfot.offsetTop - 35 +"px";
      } else {
          backTop.style.position = "fixed";
          backTop.style.bottom = "10px";
          backTop.style.top = "auto";
      }
  };
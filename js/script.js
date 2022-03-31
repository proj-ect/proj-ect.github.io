// Variables, elements etc
var rUrls = document.getElementsByClassName("redirectURL"); // Element for form redirect
var body_bottom = document.getElementById("body_bottom"); // Element to define body bottom
var top_button = document.getElementById("top_button"); // Button for page top scrolling
var collapse_elem1 = document.getElementById("Starter_Guide");

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

// Execute a JavaScript when window is being scrolled
window.onscroll = function () {
  top_buttonFunc();
  body_bottomFunc();
};

// Show button after scrolling 20px down otherwise hide
function top_buttonFunc() {
  if (
    document.documentElement.scrollTop > 20
  ) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
};

 // Define location of the top_button
 // If body_bottom is visible in the viewport button is placed 10px on top of the bottom bar
function body_bottomFunc() {
  if (
      isInViewport(body_bottom)
  ) {
      top_button.style.position = "absolute";
      top_button.style.bottom = "auto";
      top_button.style.top = body_bottom.offsetTop - 35 +"px";
  } else {
      top_button.style.position = "fixed";
      top_button.style.bottom = "10px";
      top_button.style.top = "auto";
  }
};

// At the firs time loading page. Check if content is defined
// If content isn't defined. Redirect to home page
if(window.location.href.split("?")[1] == undefined) {
  window.location.assign("?index#");
};

// Jquery part
// Wait until document is fully loaded before execute
$(document).ready( function() {
  // Load and place page content to the placeholders
  // Navigation bar
  $("#navbar_placeholder").load("assets/navbar.html");

  // Content
  // Define site content usign domain's query string
  $("#content_placeholder").load("pages/"+location.href.split("?")[1].split("#")[0]+".html");

  // Bottom bar
  $("#bottom_bar_placeholder").load("assets/bottom_bar.html");

  // Footer
  $("#footer_placeholder").load("assets/footer.html");
});
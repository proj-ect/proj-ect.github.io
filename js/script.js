// Variables, elements etc
var body_bottom = document.getElementById("body_bottom"); // Element to define body bottom
var top_button = document.getElementById("top_button"); // Button for page top scrolling

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
window.location.assign("index.html?index#");};

// 
$(document).ready(function() {
  //
  $("#Starter_Guide, #Five_Tips").on("shown.bs.collapse", function() {
    console.log("collapsed");
    setTimeout(() => {$('html, body').scrollTop($(this).offset().top);}, 250);
  });

  // Load and place navigation bar
  $("#navbar_placeholder").load("assets/navbar.html");

  // Load and place upper footer
  $("#bottom_bar_placeholder").load("assets/bottom_bar.html");

  // Load and place footer
  $("#footer_placeholder").load("assets/footer.html");

  // Define site content usign domain's query string. Load and place content
  $("#content_placeholder").load("pages/"+location.href.split("?")[1].split("#")[0]+".html");

  // Remove class "active" from links
  $(".active").removeClass("active");

  // Define current page using domain's query string and add class "active" to its link
  $("#"+location.href.split("?")[1].slice(0,-1)).addClass("active");

  // Set all redirectUrls values to current url
  var rUrls = document.getElementsByClassName("redirectURL");
  for (let i = 0; i < rUrls.length; i++) {
    rUrls[i].setAttribute("value", window.location.href);
  };
});

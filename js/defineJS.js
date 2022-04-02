 // Add js files
 function addJS(jsfile) {
    var src = document.createElement("script");
    src.setAttribute("src", jsfile);
    document.getElementsByTagName("body")[0].appendChild(src);
  };

// Wait until document ready
$("#navbarTop").ready(function() {
 // Add script on to the page
 addJS("/js/script.js");
 // Add fslightbox on to the page
 addJS("/js/fslightbox.js");
});

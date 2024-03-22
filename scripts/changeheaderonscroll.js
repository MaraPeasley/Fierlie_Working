/*
MUST INCLUDE THIS CSS:
#header{
  background-color: #f1f1f1; // Grey background
  font-size: 90px; // Big font size
  position: fixed; // Fixed position - sit on top of the page
  top: 0;
  width: 100%; // Full width
  transition: 0.2s; // Add a transition effect (when scrolling - and font size is decreased)
}

MUST INCLUDE THIS HTML:

id="header"

*/

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header").style.backgroundColor = "#5B6B50";
    document.getElementById("header").style.color = "#F3EDDD";
    document.getElementById("header").style.padding = "0 1.5em";
    document.getElementById("headerTitle").style.fontSize = ".75em";
    document.getElementById("headerTitle").style.color = "#F3EDDD";
    document.getElementById("desktopOnly").style.marginTop = "2em";
    document.getElementById("desktopOnly").style.padding = "0 1em";
  } else {
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, .5)";
    document.getElementById("header").style.color = "#211A51";
    document.getElementById("header").style.padding = ".5em 1.5em";
    document.getElementById("headerTitle").style.fontSize = "1em";
    document.getElementById("headerTitle").style.color = "#211A51";
    document.getElementById("desktopOnly").style.marginTop = "2.5em";
    document.getElementById("desktopOnly").style.padding = ".25em 1em";
  }
} 
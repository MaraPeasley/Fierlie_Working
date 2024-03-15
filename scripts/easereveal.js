/*HOW TO USE:
Eases in anything with the class="reveal" at the bottom of the window
Original code found here: https://codepen.io/alvarotrigo/pen/PoKamZy

LESS must contain this:
.reveal{
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  transition: 700ms all ease;
}
  //transition determines how fast the section comes in
  //transform determines how far below the section fades in from
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

ADD BACK IN IF YOU WANT EASE TO HAPPEN ON EVERY SCROLL:
(add the line after: reveals[i].classList.add("active");)
else {
      reveals[i].classList.remove("active");
    }
*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 5;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
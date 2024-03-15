/*
MUST INCLUDE THIS IN HTML:
<header>
    <h2>Website Title</h2>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>
</header>

<nav id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
</nav>

MUST INCLUDE THIS IN LESS FILE:
.sidenav {
    height: 100%; // 100% Full-height 
    width: 0; // 0 width - change this with JavaScript 
    position: fixed; // Stay in place 
    z-index: 1; // Stay on top 
    top: 0; // Stay at the top 
    left: 0;
    background-color: @color5;
    overflow-x: hidden; // Disable horizontal scroll 
    padding-top: 1em; // Place content 60px from the top 
    transition: 0.5s; // 0.5 second transition effect to slide in the sidenav 
}

// The navigation menu links 
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1em;
    color: @color1;
    display: block;
    transition: 0.3s;
}

// When you mouse over the navigation links, change their color
.sidenav a:hover {
    color: #f1f1f1;
}

// Position and style the close button (top right corner)
.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}
*/

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
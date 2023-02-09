var mobilemenu = document.getElementById("menu-icon-shape");
var bartop = document.getElementById("top");
var barmiddle = document.getElementById("middle");
var barbottom = document.getElementById("bottom");
var overlay_nav = document.getElementById("overlay-nav");
menu();
function menu(){
mobilemenu.addEventListener("click", function (event) {
  mobilemenu.classList.toggle("active");
  bartop.classList.toggle("active");
  barmiddle.classList.toggle("active");
  barbottom.classList.toggle("active");
  overlay_nav.classList.toggle("active");


});

}
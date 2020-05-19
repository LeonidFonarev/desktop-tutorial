var menuBar = document.getElementById('menu-bar');
var menuItems = document.getElementsByClassName('menu-item');

menuBar.onclick = function() {
   for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('hide');
   }

}
menuBar.onmouseout = function() {
    for (let i = 0; i < menuItems.length; i++) {
     menuItems[i].classList.add('hide');
    }
 
 }
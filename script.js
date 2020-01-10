
/* function show_hide(id){
var item = document.getElementById(id);
if (item.style.display == 'none') {item.style.display = 'block';}
else item.style.display = 'none';
};
 */
/* document.getElementById("")
document.getElementsByClassName("")
document.querySelector("")
document.querySelectorAll("")
document.getElementsByTagName("") */

document.getElementById("burger").onclick = function(){
    openCloseMenu()
};

function openCloseMenu() {
    document.getElementById("menu").classList.toggle("open")
};


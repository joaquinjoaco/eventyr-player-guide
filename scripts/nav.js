// get the menu and the checkbox
const menu = document.getElementById('menu');
const checkbox = document.getElementById("checkbox");

// listen for clicks outside the menu to close it
document.onclick = function (clickEvent) {
     if (clickEvent.target.id !== 'menu' && clickEvent.target.id !== 'checkbox') {
          document.getElementById("checkbox").checked = false;
     }
}
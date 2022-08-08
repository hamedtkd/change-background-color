const inputcode = document.getElementById('inputcode');
const btn = document.getElementById("btn")
const body = document.getElementsByTagName("body")
setInterval(function() {backgroundColor()}, 10);

function backgroundColor() {
    body[0].style.background =inputcode.value; 
}

var modal1 = document.getElementById('disclaimer');
var btn1 = document.getElementById("open-modal-1");
var span1 = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}

span1.onclick = function() {
    modal1.style.display = "none";
}

var modal2 = document.getElementById('get-slides');
var btn2 = document.getElementById("open-modal-2");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

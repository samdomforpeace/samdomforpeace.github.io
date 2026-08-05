// Copyright 2018 - Samuel Dominic Chukwuemeka (SamDom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.chukwuemeka-samuel.appspot.com

"use strict";


var expand1 = document.getElementById("expandButton1");
expand1.click();

var expand2 = document.getElementById("expandButton2");
expand2.click();

var expand3 = document.getElementById("expandButton3");
expand3.click();

var expand4 = document.getElementById("expandButton4");
expand4.click();

var expand5 = document.getElementById("expandButton5");
expand5.click();

var expand6 = document.getElementById("expandButton6");
expand6.click();

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
                x.previousElementSibling.className.replace(" w3-green", "");
    }
}



// Automatic Slideshow - change image every 7 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 7000);    
}       
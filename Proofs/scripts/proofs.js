// Copyright 2020 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com

// www.samdomforpeace.com
// https://samdomforpeace.com/
// www.samdomforpeace.com/Proofs/proofs.html


//"use strict";

// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display === '')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}


// Accordion 
function proofIndirect() {
    var x = document.getElementById("indirectProof");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

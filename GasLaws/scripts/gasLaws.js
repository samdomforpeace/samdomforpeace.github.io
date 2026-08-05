// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.chukwuemeka-samuel.appspot.com
// www.samdomforpeace.appspot.com
// www.samdomforpeace.appspot.com/stoichiometry/stoichiometry.html

"use strict";


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


// Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

function openLink1(evt, linkName1) {
  var j, y, tablinks1;
  y = document.getElementsByClassName("myLink1");
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablink1");
  for (j = 0; j < y.length; j++) {
    tablinks1[j].className = tablinks1[j].className.replace(" w3-red", "");
  }
  document.getElementById(linkName1).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();


// Click on the second tablink on load
document.getElementsByClassName("tablink1")[0].click();
// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com

// https://samdomforpeace.com/
// https://samdomforpeace.com/projectiles/projectileMotion.html
// message 1

"use strict";


// Solutions to the Questions
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

function toggle(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'none')
        e.style.display = 'inline-block';
    else
        e.style.display = 'none';
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// Case 1
// Calculations on Projectiles
// Given: initial velocity, angle of projection with the horizontal, acceleration due to gravity
// To Find: other details
document.getElementById("projectileCase1first").addEventListener("submit", projectileCase1first);

function projectileCase1first(event) {
    event.preventDefault();
    event.stopPropagation();

    var initialVelocityCase1first = parseFloat(document.getElementById("initialVelocityCase1first").value, 10) || 0,
        angleCase1first = parseFloat(document.getElementById("angleCase1first").value, 10) || 0,
        accelerationGravityCase1first = parseFloat(document.getElementById("accelerationGravityCase1first").value, 10) || 0,
        angleConvertedCase1first,
        horizontalComponentVelocityCase1first,
        verticalComponentVelocityCase1first,
        timeMaximumHeightCase1first,
        maximumHeightCase1first,
        timeFlightCase1first,
        rangeCase1first,
        maximumRangeCase1first;

        angleConvertedCase1first = angleCase1first * (Math.PI / 180);
        
        horizontalComponentVelocityCase1first = initialVelocityCase1first * Math.cos(angleConvertedCase1first);
        
        verticalComponentVelocityCase1first = initialVelocityCase1first * Math.sin(angleConvertedCase1first);
                        
        timeMaximumHeightCase1first = (initialVelocityCase1first * Math.sin(angleConvertedCase1first)) / accelerationGravityCase1first;
        
        maximumHeightCase1first = (initialVelocityCase1first * initialVelocityCase1first * Math.sin(angleConvertedCase1first) * Math.sin(angleConvertedCase1first)) / (2 * accelerationGravityCase1first);
        
        timeFlightCase1first = (2 * initialVelocityCase1first * Math.sin(angleConvertedCase1first)) / accelerationGravityCase1first;
        
        rangeCase1first = (initialVelocityCase1first * initialVelocityCase1first * Math.sin(2 * angleConvertedCase1first)) / (2 * accelerationGravityCase1first);
        
        maximumRangeCase1first = (initialVelocityCase1first * initialVelocityCase1first) / accelerationGravityCase1first;

        document.getElementById("horizontalComponentVelocityCase1first").innerHTML = "The horizontal component of the initial velocity is " + horizontalComponentVelocityCase1first + " m/s";

        document.getElementById("verticalComponentVelocityCase1first").innerHTML = "The vertical component of the initial velocity is " + verticalComponentVelocityCase1first + " m/s";
        
        document.getElementById("timeMaximumHeightCase1first").innerHTML = "The time to reach the maximum height is " + timeMaximumHeightCase1first + " s";

        document.getElementById("maximumHeightCase1first").innerHTML = "The maximum height is " + maximumHeightCase1first + " m";
        
        document.getElementById("timeFlightCase1first").innerHTML = "The time of flight is " + timeFlightCase1first + " s";

        document.getElementById("rangeCase1first").innerHTML = "The range is " + rangeCase1first + " m";
        
        document.getElementById("maximumRangeCase1first").innerHTML = "The maximum range is " + maximumRangeCase1first + " m";
}



// Case 3
// Calculations on Projectiles
// Given: initial velocity, angle of projection with the horizontal, height below the horizontal, acceleration due to gravity
// To Find: other details
document.getElementById("projectileCase3first").addEventListener("submit", projectileCase3first);

function projectileCase3first(event) {
    event.preventDefault();
    event.stopPropagation();

    var initialVelocityCase3first = parseFloat(document.getElementById("initialVelocityCase3first").value, 10) || 0,
        angleCase3first = parseFloat(document.getElementById("angleCase3first").value, 10) || 0,
        heightBelowCase3first = parseFloat(document.getElementById("heightBelowCase3first").value, 10) || 0,
        accelerationGravityCase3first = parseFloat(document.getElementById("accelerationGravityCase3first").value, 10) || 0,
        angleConvertedCase3first,
        horizontalComponentVelocityCase3first,
        verticalComponentVelocityCase3first,
        timeMaximumHeightCase3first,
        maximumHeightCase3first,
        timeFlightCase3first,
        rangeCase3first,
        maximumRangeCase3first,
        discriminantValue,
        root1,
        root2;

        angleConvertedCase3first = angleCase3first * (Math.PI / 180);
        
        horizontalComponentVelocityCase3first = initialVelocityCase3first * Math.cos(angleConvertedCase3first);
        
        verticalComponentVelocityCase3first = initialVelocityCase3first * Math.sin(angleConvertedCase3first);
                        
        timeMaximumHeightCase3first = (initialVelocityCase3first * Math.sin(angleConvertedCase3first)) / accelerationGravityCase3first;
        
        maximumHeightCase3first = (initialVelocityCase3first * initialVelocityCase3first * Math.sin(angleConvertedCase3first) * Math.sin(angleConvertedCase3first)) / (2 * accelerationGravityCase3first);
                        
        rangeCase3first = (initialVelocityCase3first * initialVelocityCase3first * Math.sin(2 * angleConvertedCase3first)) / (2 * accelerationGravityCase3first);
        
        maximumRangeCase3first = (initialVelocityCase3first * initialVelocityCase3first) / accelerationGravityCase3first;
        
        
        discriminantValue = (initialVelocityCase3first * initialVelocityCase3first * Math.sin(angleConvertedCase3first) * Math.sin(angleConvertedCase3first)) + (2 * accelerationGravityCase3first * heightBelowCase3first);
          
        root1 = ((initialVelocityCase3first * Math.sin(angleConvertedCase3first)) + Math.sqrt(discriminantValue)) / (accelerationGravityCase3first);

        root2 = ((initialVelocityCase3first * Math.sin(angleConvertedCase3first)) - Math.sqrt(discriminantValue)) / (accelerationGravityCase3first);
               
        if ((root1 > 0) && (root2 === 0)) {
            alert("The time of flight cannot be equal to 0");
            timeFlightCase3first = root1;
        }
        
        if ((root1 > 0) && (root2 < 0)) {
            alert("The time of flight cannot be less than 0");
            timeFlightCase3first = root1;
        }
        
        if ((root2 > 0) && (root1 === 0)) {
            alert("The time of flight cannot be equal to 0");
            timeFlightCase3first = root2;
        }
        
        if ((root2 > 0) && (root1 < 0)) {
            alert("The time of flight cannot be less than 0");
            timeFlightCase3first = root2;
        }
        
    
        document.getElementById("horizontalComponentVelocityCase3first").innerHTML = "The horizontal component of the initial velocity is " + horizontalComponentVelocityCase3first + " m/s";

        document.getElementById("verticalComponentVelocityCase3first").innerHTML = "The vertical component of the initial velocity is " + verticalComponentVelocityCase3first + " m/s";
        
        document.getElementById("timeMaximumHeightCase3first").innerHTML = "The time to reach the maximum height is " + timeMaximumHeightCase3first + " s";

        document.getElementById("maximumHeightCase3first").innerHTML = "The maximum height is " + maximumHeightCase3first + " m";
        
        document.getElementById("timeFlightCase3first").innerHTML = "The time of flight is " + timeFlightCase3first + " s";

        document.getElementById("rangeCase3first").innerHTML = "The range is " + rangeCase3first + " m";
        
        document.getElementById("maximumRangeCase3first").innerHTML = "The maximum range is " + maximumRangeCase3first + " m";
}
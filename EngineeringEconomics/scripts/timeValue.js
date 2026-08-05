// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com
// www.samdomforpeace.com/EngineeringEconomics/engineeringEconomics.html
// www.finance-calculators.appspot.com
// www.samdomforpeace.appspot.com
// www.chukwuemeka-samuel.appspot.com

//"use strict";


//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});

//Round answers correctly
// https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding/23560569#23560569
//Answered by Shura
function round(n, digits) {
    if (digits === undefined) {
        digits = 0;
    }
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    return Math.round(n) / multiplicator;
}

//Reference: https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number
function nthRoot(x, n) {
    if (x < 0 && n % 2 !== 1)
        return NaN; // Not a number
    return (x < 0 ? -1 : 1) * Math.pow(Math.abs(x), 1 / n);
}


// Quotes
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}


// Single Cash Flows
// Calculators - Compound Interest
// Given: present value, number of compounding periods per year, effective interest rate, time
// To Find: future value, interest
document.getElementById("compoundInterest1st").addEventListener("submit", compoundInterest1st);

function compoundInterest1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var presentValue1st = parseFloat(document.getElementById("presentValue1st").value, 10) || 0,
        rateAPY1st = parseFloat(document.getElementById("rateAPY1st").value, 10) || 0,
        time1st = parseFloat(document.getElementById("time1st").value, 10) || 0,
        rateAPYUnit1st = document.getElementById("rateAPYUnit1st").value,
        compoundingPeriodUnit1st = document.getElementById("compoundingPeriodUnit1st").value,
        timeUnit1st = document.getElementById("timeUnit1st").value,
        compoundingPeriodPerYear1st,
        futureValue1st,
        interest1st;

        rateAPY1st = rateAPY1st / 100;


        if (rateAPYUnit1st === "year") {
            rateAPY1st =  rateAPY1st * 1;
        }
        else if (rateAPYUnit1st === "semiannual") {
            rateAPY1st =  rateAPY1st * 2;
        }
        else if (rateAPYUnit1st === "quarter") {
            rateAPY1st =  rateAPY1st * 4;
        }
        else if (rateAPYUnit1st === "month") {
            rateAPY1st =  rateAPY1st * 12;
        }
        else if (rateAPYUnit1st === "week") {
            rateAPY1st =  rateAPY1st * 52;
        }
        else if (rateAPYUnit1st === "day_O") {
            rateAPY1st =  rateAPY1st * 360;
        }
        else if (rateAPYUnit1st === "day_E") {
            rateAPY1st =  rateAPY1st * 365;
        }
        else if (rateAPYUnit1st === "biannual") {
            rateAPY1st =  rateAPY1st * 0.5;
        }


        if (timeUnit1st === "years") {
            time1st = time1st / 1;
        }
        if (timeUnit1st === "quarters") {
            time1st = time1st / 4;
        }
        if (timeUnit1st === "months") {
            time1st = time1st / 12;
        }
        else if (timeUnit1st === "weeks") {
        time1st = time1st / 52;
        }
        else if (timeUnit1st === "days_O") {
        time1st = time1st / 360;
        }
        else if (timeUnit1st === "days_E") {
        time1st = time1st / 365;
        }


        if (compoundingPeriodUnit1st === "year") {
            compoundingPeriodPerYear1st = 1;
        }
        else if (compoundingPeriodUnit1st === "semiannual") {
            compoundingPeriodPerYear1st = 2;
        }
        else if (compoundingPeriodUnit1st === "quarter") {
            compoundingPeriodPerYear1st = 4;
        }
        else if (compoundingPeriodUnit1st === "month") {
            compoundingPeriodPerYear1st = 12;
        }
        else if (compoundingPeriodUnit1st === "week") {
            compoundingPeriodPerYear1st = 52;
        }
        else if (compoundingPeriodUnit1st === "day_O") {
            compoundingPeriodPerYear1st = 360;
        }
        else if (compoundingPeriodUnit1st === "day_E") {
            compoundingPeriodPerYear1st = 365;
        }
        else if (compoundingPeriodUnit1st === "biannual") {
            compoundingPeriodPerYear1st = 0.5;
        }
        else if (compoundingPeriodUnit1st === "continuous") {
            compoundingPeriodPerYear1st = 1;
            rateAPY1st = math.pow(Math.E, rateAPY1st) - 1;
            futureValue1st = presentValue1st * math.pow(Math.E, rateAPY1st * time1st);
        }
 

        futureValue1st = presentValue1st * Math.pow((1 + rateAPY1st/compoundingPeriodPerYear1st), (compoundingPeriodPerYear1st * time1st));

        interest1st = futureValue1st - presentValue1st;

        
        document.getElementById("futureValue1st").innerHTML = "The future value is $" + round(futureValue1st, 2).toFixed(2);

        document.getElementById("interest1st").innerHTML = "The interest is $" + round(interest1st, 2).toFixed(2);
}



// Given: future value, number of compounding periods per year, effective interest rate, time
// To Find: present value, interest
document.getElementById("compoundInterest2nd").addEventListener("submit", compoundInterest2nd);

function compoundInterest2nd(event) {
    event.preventDefault();
    event.stopPropagation();

    var futureValue2nd = parseFloat(document.getElementById("futureValue2nd").value, 10) || 0,
        rateAPY2nd = parseFloat(document.getElementById("rateAPY2nd").value, 10) || 0,
        time2nd = parseFloat(document.getElementById("time2nd").value, 10) || 0,
        rateAPYUnit2nd = document.getElementById("rateAPYUnit2nd").value,
        compoundingPeriodUnit2nd = document.getElementById("compoundingPeriodUnit2nd").value,
        timeUnit2nd = document.getElementById("timeUnit2nd").value,
        compoundingPeriodPerYear2nd,
        presentValue2nd,
        interest2nd;

        rateAPY2nd = rateAPY2nd / 100;


        if (rateAPYUnit2nd === "year") {
            rateAPY2nd =  rateAPY2nd * 1;
        }
        else if (rateAPYUnit2nd === "semiannual") {
            rateAPY2nd =  rateAPY2nd * 2;
        }
        else if (rateAPYUnit2nd === "quarter") {
            rateAPY2nd =  rateAPY2nd * 4;
        }
        else if (rateAPYUnit2nd === "month") {
            rateAPY2nd =  rateAPY2nd * 12;
        }
        else if (rateAPYUnit2nd === "week") {
            rateAPY2nd =  rateAPY2nd * 52;
        }
        else if (rateAPYUnit2nd === "day_O") {
            rateAPY2nd =  rateAPY2nd * 360;
        }
        else if (rateAPYUnit2nd === "day_E") {
            rateAPY2nd =  rateAPY2nd * 365;
        }
        else if (rateAPYUnit2nd === "biannual") {
            rateAPY2nd =  rateAPY2nd * 0.5;
        }


        if (timeUnit2nd === "years") {
            time2nd = time2nd / 1;
        }
        if (timeUnit2nd === "quarters") {
            time2nd = time2nd / 4;
        }
        if (timeUnit2nd === "months") {
            time2nd = time2nd / 12;
        }
        else if (timeUnit2nd === "weeks") {
        time2nd = time2nd / 52;
        }
        else if (timeUnit2nd === "days_O") {
        time2nd = time2nd / 360;
        }
        else if (timeUnit2nd === "days_E") {
        time2nd = time2nd / 365;
        }


        if (compoundingPeriodUnit2nd === "year") {
            compoundingPeriodPerYear2nd = 1;
        }
        else if (compoundingPeriodUnit2nd === "semiannual") {
            compoundingPeriodPerYear2nd = 2;
        }
        else if (compoundingPeriodUnit2nd === "quarter") {
            compoundingPeriodPerYear2nd = 4;
        }
        else if (compoundingPeriodUnit2nd === "month") {
            compoundingPeriodPerYear2nd = 12;
        }
        else if (compoundingPeriodUnit2nd === "week") {
            compoundingPeriodPerYear2nd = 52;
        }
        else if (compoundingPeriodUnit2nd === "day_O") {
            compoundingPeriodPerYear2nd = 360;
        }
        else if (compoundingPeriodUnit2nd === "day_E") {
            compoundingPeriodPerYear2nd = 365;
        }
        else if (compoundingPeriodUnit2nd === "biannual") {
            compoundingPeriodPerYear2nd = 0.5;
        }
        else if (compoundingPeriodUnit2nd === "continuous") {
            compoundingPeriodPerYear2nd = 1;
            rateAPY2nd = math.pow(Math.E, rateAPY2nd) - 1;
            presentValue2nd = futureValue2nd / math.pow(Math.E, rateAPY2nd * time2nd);
        }
 

        presentValue2nd = futureValue2nd / Math.pow((1 + rateAPY2nd/compoundingPeriodPerYear2nd), (compoundingPeriodPerYear2nd * time2nd));

        interest2nd = futureValue2nd - presentValue2nd;

        
        document.getElementById("presentValue2nd").innerHTML = "The present value is $" + round(presentValue2nd, 2).toFixed(2);

        document.getElementById("interest2nd").innerHTML = "The interest is $" + round(interest2nd, 2).toFixed(2);
}


// Given: present value, number of compounding periods per year, future value, time
// To Find: interest, effective interest rate per year
document.getElementById("compoundInterest3rd").addEventListener("submit", compoundInterest3rd);

function compoundInterest3rd(event) {
    event.preventDefault();
    event.stopPropagation();

    var presentValue3rd = parseFloat(document.getElementById("presentValue3rd").value, 10) || 0,
        futureValue3rd = parseFloat(document.getElementById("futureValue3rd").value, 10) || 0,
        time3rd = parseFloat(document.getElementById("time3rd").value, 10) || 0,
        compoundingPeriodUnit3rd = document.getElementById("compoundingPeriodUnit3rd").value,
        timeUnit3rd = document.getElementById("timeUnit3rd").value,
        compoundingPeriodPerYear3rd,
        rateAPY3rd,
        rateAPYPercent3rd,
        interest3rd;


        if (timeUnit3rd === "years") {
            time3rd = time3rd / 1;
        }
        if (timeUnit3rd === "quarters") {
            time3rd = time3rd / 4;
        }
        if (timeUnit3rd === "months") {
            time3rd = time3rd / 12;
        }
        else if (timeUnit3rd === "weeks") {
        time3rd = time3rd / 52;
        }
        else if (timeUnit3rd === "days_O") {
        time3rd = time3rd / 360;
        }
        else if (timeUnit3rd === "days_E") {
        time3rd = time3rd / 365;
        }


        if (compoundingPeriodUnit3rd === "year") {
            compoundingPeriodPerYear3rd = 1;
        }
        else if (compoundingPeriodUnit3rd === "semiannual") {
            compoundingPeriodPerYear3rd = 2;
        }
        else if (compoundingPeriodUnit3rd === "quarter") {
            compoundingPeriodPerYear3rd = 4;
        }
        else if (compoundingPeriodUnit3rd === "month") {
            compoundingPeriodPerYear3rd = 12;
        }
        else if (compoundingPeriodUnit3rd === "week") {
            compoundingPeriodPerYear3rd = 52;
        }
        else if (compoundingPeriodUnit3rd === "day_O") {
            compoundingPeriodPerYear3rd = 360;
        }
        else if (compoundingPeriodUnit3rd === "day_E") {
            compoundingPeriodPerYear3rd = 365;
        }
        else if (compoundingPeriodUnit3rd === "biannual") {
            compoundingPeriodPerYear3rd = 0.5;
        }
        else if (compoundingPeriodUnit3rd === "continuous") {
            compoundingPeriodPerYear3rd = 1;
            rateAPY3rd = Math.log(futureValue3rd / presentValue3rd) / time3rd;
            rateAPYPercent3rd = 100 * rateAPY3rd;
        }


        rateAPY3rd = compoundingPeriodPerYear3rd * (Math.pow((futureValue3rd/presentValue3rd), (1/(compoundingPeriodPerYear3rd * time3rd))) - 1);
 
        rateAPYPercent3rd = 100 * rateAPY3rd;

        interest3rd = futureValue3rd - presentValue3rd;

        
        document.getElementById("rateAPY3rd").innerHTML = "The annual effective interest year is " + rateAPY3rd + " OR " + round(rateAPYPercent3rd, 2).toFixed(2) + "%";

        document.getElementById("interest3rd").innerHTML = "The interest is $" + round(interest3rd, 2).toFixed(2);
}


// Given: present value, number of compounding periods per year, effective interest rate, time
// To Find: interest, time
document.getElementById("compoundInterest4th").addEventListener("submit", compoundInterest4th);

function compoundInterest4th(event) {
    event.preventDefault();
    event.stopPropagation();

    var presentValue4th = parseFloat(document.getElementById("presentValue4th").value, 10) || 0,
        rateAPY4th = parseFloat(document.getElementById("rateAPY4th").value, 10) || 0,
        futureValue4th = parseFloat(document.getElementById("futureValue4th").value, 10) || 0,
        rateAPYUnit4th = document.getElementById("rateAPYUnit4th").value,
        compoundingPeriodUnit4th = document.getElementById("compoundingPeriodUnit4th").value,
        compoundingPeriodPerYear4th,
        time4th,
        interest4th;

        rateAPY4th = rateAPY4th / 100;


        if (rateAPYUnit4th === "year") {
            rateAPY4th =  rateAPY4th * 1;
        }
        else if (rateAPYUnit4th === "semiannual") {
            rateAPY4th =  rateAPY4th * 2;
        }
        else if (rateAPYUnit4th === "quarter") {
            rateAPY4th =  rateAPY4th * 4;
        }
        else if (rateAPYUnit4th === "month") {
            rateAPY4th =  rateAPY4th * 12;
        }
        else if (rateAPYUnit4th === "week") {
            rateAPY4th =  rateAPY4th * 52;
        }
        else if (rateAPYUnit4th === "day_O") {
            rateAPY4th =  rateAPY4th * 360;
        }
        else if (rateAPYUnit4th === "day_E") {
            rateAPY4th =  rateAPY4th * 365;
        }
        else if (rateAPYUnit4th === "biannual") {
            rateAPY4th =  rateAPY4th * 0.5;
        }

        
        if (compoundingPeriodUnit4th === "year") {
            compoundingPeriodPerYear4th = 1;
        }
        else if (compoundingPeriodUnit4th === "semiannual") {
            compoundingPeriodPerYear4th = 2;
        }
        else if (compoundingPeriodUnit4th === "quarter") {
            compoundingPeriodPerYear4th = 4;
        }
        else if (compoundingPeriodUnit4th === "month") {
            compoundingPeriodPerYear4th = 12;
        }
        else if (compoundingPeriodUnit4th === "week") {
            compoundingPeriodPerYear4th = 52;
        }
        else if (compoundingPeriodUnit4th === "day_O") {
            compoundingPeriodPerYear4th = 360;
        }
        else if (compoundingPeriodUnit4th === "day_E") {
            compoundingPeriodPerYear4th = 365;
        }
        else if (compoundingPeriodUnit4th === "biannual") {
            compoundingPeriodPerYear4th = 0.5;
        }
        else if (compoundingPeriodUnit4th === "continuous") {
            compoundingPeriodPerYear4th = 1;
            rateAPY4th = math.pow(Math.E, rateAPY4th) - 1;
            time4th = Math.log(futureValue4th/presentValue4th) / rateAPY4th; 
        }
 

       time4th = Math.log10(futureValue4th/presentValue4th) / (compoundingPeriodPerYear4th * Math.log10(1 + rateAPY4th/compoundingPeriodPerYear4th));

        interest4th = futureValue4th - presentValue4th;

        
        document.getElementById("time4th").innerHTML = "The time is " + round(time4th, 4).toFixed(4) + " years";

        document.getElementById("interest4th").innerHTML = "The interest is $" + round(interest4th, 2).toFixed(2);
}


// Uniform Cash Flows
// Ordinary Annuity Calculations
// Given: periodic uniform cash flows, effective interest rate, time 
// To Find: future value, interest
document.getElementById("ordinaryAnnuity1st").addEventListener("submit", ordinaryAnnuity1st);

function ordinaryAnnuity1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA1st = parseFloat(document.getElementById("uniformCashFlowOA1st").value, 10) || 0,
        uniformCashFlowUnitOA1st = document.getElementById("uniformCashFlowUnitOA1st").value,
        rateAPYOA1st = parseFloat(document.getElementById("rateAPYOA1st").value, 10) || 0,
        rateAPYUnitOA1st = document.getElementById("rateAPYUnitOA1st").value,
        timeOA1st = parseFloat(document.getElementById("timeOA1st").value, 10) || 0,
        timeUnitOA1st = document.getElementById("timeUnitOA1st").value,
        compoundingPeriodPerYearOA1st,
        futureValueOA1st,
        interestOA1st;

        rateAPYOA1st = rateAPYOA1st / 100;
                
        
        if (timeUnitOA1st === "years") {
            timeOA1st = timeOA1st / 1;
        }
        else if (timeUnitOA1st === "quarters") {
            timeOA1st = timeOA1st / 4;
        }
        else if (timeUnitOA1st === "months") {
            timeOA1st = timeOA1st / 12;
        }
        else if (timeUnitOA1st === "weeks") {
            timeOA1st = timeOA1st / 52;
        }
        else if (timeUnitOA1st === "days_O") {
            timeOA1st = timeOA1st / 360;
        }
        else if (timeUnitOA1st === "days_E") {
            timeOA1st = timeOA1st / 365;
        }


        if (uniformCashFlowUnitOA1st === "year") {
            compoundingPeriodPerYearOA1st = 1;
        }
        else if (uniformCashFlowUnitOA1st === "semiannual") {
            compoundingPeriodPerYearOA1st = 2;
        }
        else if (uniformCashFlowUnitOA1st === "quarter") {
            compoundingPeriodPerYearOA1st = 4;
        }
        else if (uniformCashFlowUnitOA1st === "month") {
            compoundingPeriodPerYearOA1st = 12;
        }
        else if (uniformCashFlowUnitOA1st === "week") {
            compoundingPeriodPerYearOA1st = 52;
        }
        else if (uniformCashFlowUnitOA1st === "day_O") {
            compoundingPeriodPerYearOA1st = 360;
        }
        else if (uniformCashFlowUnitOA1st === "day_E") {
            compoundingPeriodPerYearOA1st = 365;
        }
        else if (uniformCashFlowUnitOA1st === "biannual") {
            compoundingPeriodPerYearOA1st = 0.5;
        }
        else if (uniformCashFlowUnitOA1st === "continuous") {
            compoundingPeriodPerYearOA1st = 1;
            rateAPYOA1st = math.pow(Math.E, rateAPYOA1st) - 1;

        }
        

        if (rateAPYUnitOA1st === "year") {
            rateAPYOA1st =  rateAPYOA1st * 1;
        }
        else if (rateAPYUnitOA1st === "semiannual") {
            rateAPYOA1st =  rateAPYOA1st * 2;
        }
        else if (rateAPYUnitOA1st === "quarter") {
            rateAPYOA1st =  rateAPYOA1st * 4;
        }
        else if (rateAPYUnitOA1st === "month") {
            rateAPYOA1st =  rateAPYOA1st * 12;
        }
        else if (rateAPYUnitOA1st === "week") {
            rateAPYOA1st =  rateAPYOA1st * 52;
        }
        else if (rateAPYUnitOA1st === "day_O") {
            rateAPYOA1st =  rateAPYOA1st * 360;
        }
        else if (rateAPYUnitOA1st === "day_E") {
            rateAPYOA1st =  rateAPYOA1st * 365;
        }
        else if (rateAPYUnitOA1st === "biannual") {
            rateAPYOA1st =  rateAPYOA1st * 0.5;
        }


        futureValueOA1st = compoundingPeriodPerYearOA1st * uniformCashFlowOA1st * ((Math.pow((1 + rateAPYOA1st/compoundingPeriodPerYearOA1st), (compoundingPeriodPerYearOA1st * timeOA1st)) - 1) / rateAPYOA1st);

        interestOA1st = futureValueOA1st - (uniformCashFlowOA1st * compoundingPeriodPerYearOA1st * timeOA1st);

                
        document.getElementById("futureValueOA1st").innerHTML = "The future value is $" + round(futureValueOA1st, 2).toFixed(2);
        document.getElementById("interestOA1st").innerHTML = "The interest is $" + round(interestOA1st, 2).toFixed(2);
}




// Given: periodic uniform cash flows, effective interest rate, time 
// To Find: present value, interest
document.getElementById("ordinaryAnnuity2nd").addEventListener("submit", ordinaryAnnuity2nd);

function ordinaryAnnuity2nd(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA2nd = parseFloat(document.getElementById("uniformCashFlowOA2nd").value, 10) || 0,
        uniformCashFlowUnitOA2nd = document.getElementById("uniformCashFlowUnitOA2nd").value,
        rateAPYOA2nd = parseFloat(document.getElementById("rateAPYOA2nd").value, 10) || 0,
        rateAPYUnitOA2nd = document.getElementById("rateAPYUnitOA2nd").value,
        timeOA2nd = parseFloat(document.getElementById("timeOA2nd").value, 10) || 0,
        timeUnitOA2nd = document.getElementById("timeUnitOA2nd").value,
        compoundingPeriodPerYearOA2nd,
        presentValueOA2nd,
        interestOA2nd;

        rateAPYOA2nd = rateAPYOA2nd / 100;
                
        
        if (timeUnitOA2nd === "years") {
            timeOA2nd = timeOA2nd / 1;
        }
        else if (timeUnitOA2nd === "quarters") {
            timeOA2nd = timeOA2nd / 4;
        }
        else if (timeUnitOA2nd === "months") {
            timeOA2nd = timeOA2nd / 12;
        }
        else if (timeUnitOA2nd === "weeks") {
            timeOA2nd = timeOA2nd / 52;
        }
        else if (timeUnitOA2nd === "days_O") {
            timeOA2nd = timeOA2nd / 360;
        }
        else if (timeUnitOA2nd === "days_E") {
            timeOA2nd = timeOA2nd / 365;
        }


        if (uniformCashFlowUnitOA2nd === "year") {
            compoundingPeriodPerYearOA2nd = 1;
        }
        else if (uniformCashFlowUnitOA2nd === "semiannual") {
            compoundingPeriodPerYearOA2nd = 2;
        }
        else if (uniformCashFlowUnitOA2nd === "quarter") {
            compoundingPeriodPerYearOA2nd = 4;
        }
        else if (uniformCashFlowUnitOA2nd === "month") {
            compoundingPeriodPerYearOA2nd = 12;
        }
        else if (uniformCashFlowUnitOA2nd === "week") {
            compoundingPeriodPerYearOA2nd = 52;
        }
        else if (uniformCashFlowUnitOA2nd === "day_O") {
            compoundingPeriodPerYearOA2nd = 360;
        }
        else if (uniformCashFlowUnitOA2nd === "day_E") {
            compoundingPeriodPerYearOA2nd = 365;
        }
        else if (uniformCashFlowUnitOA2nd === "biannual") {
            compoundingPeriodPerYearOA2nd = 0.5;
        }
        else if (uniformCashFlowUnitOA2nd === "continuous") {
            compoundingPeriodPerYearOA2nd = 1;
            rateAPYOA2nd = math.pow(Math.E, rateAPYOA2nd) - 1;

        }
        

        if (rateAPYUnitOA2nd === "year") {
            rateAPYOA2nd =  rateAPYOA2nd * 1;
        }
        else if (rateAPYUnitOA2nd === "semiannual") {
            rateAPYOA2nd =  rateAPYOA2nd * 2;
        }
        else if (rateAPYUnitOA2nd === "quarter") {
            rateAPYOA2nd =  rateAPYOA2nd * 4;
        }
        else if (rateAPYUnitOA2nd === "month") {
            rateAPYOA2nd =  rateAPYOA2nd * 12;
        }
        else if (rateAPYUnitOA2nd === "week") {
            rateAPYOA2nd =  rateAPYOA2nd * 52;
        }
        else if (rateAPYUnitOA2nd === "day_O") {
            rateAPYOA2nd =  rateAPYOA2nd * 360;
        }
        else if (rateAPYUnitOA2nd === "day_E") {
            rateAPYOA2nd =  rateAPYOA2nd * 365;
        }
        else if (rateAPYUnitOA2nd === "biannual") {
            rateAPYOA2nd =  rateAPYOA2nd * 0.5;
        }


        presentValueOA2nd = (compoundingPeriodPerYearOA2nd * uniformCashFlowOA2nd * (1 - Math.pow(1 + rateAPYOA2nd/compoundingPeriodPerYearOA2nd, -1 * compoundingPeriodPerYearOA2nd * timeOA2nd))) / rateAPYOA2nd;

        interestOA2nd = uniformCashFlowOA2nd * compoundingPeriodPerYearOA2nd * timeOA2nd - presentValueOA2nd;
               
                
        document.getElementById("presentValueOA2nd").innerHTML = "The present value is $" + round(presentValueOA2nd, 2).toFixed(2);
        document.getElementById("interestOA2nd").innerHTML = "The interest is $" + round(interestOA2nd, 2).toFixed(2);
}



// Given: future value, effective interest rate, time 
// To Find: periodic uniform cash flows, interest
// Sinking Fund
document.getElementById("ordinaryAnnuity3rd").addEventListener("submit", ordinaryAnnuity3rd);

function ordinaryAnnuity3rd(event) {
    event.preventDefault();
    event.stopPropagation();

    var futureValueOA3rd = parseFloat(document.getElementById("futureValueOA3rd").value, 10) || 0,
        uniformCashFlowUnitOA3rd = document.getElementById("uniformCashFlowUnitOA3rd").value,
        rateAPYOA3rd = parseFloat(document.getElementById("rateAPYOA3rd").value, 10) || 0,
        rateAPYUnitOA3rd = document.getElementById("rateAPYUnitOA3rd").value,
        timeOA3rd = parseFloat(document.getElementById("timeOA3rd").value, 10) || 0,
        timeUnitOA3rd = document.getElementById("timeUnitOA3rd").value,
        compoundingPeriodPerYearOA3rd,
        uniformCashFlowOA3rd,
        interestOA3rd;

        rateAPYOA3rd = rateAPYOA3rd / 100;
                
        
        if (timeUnitOA3rd === "years") {
            timeOA3rd = timeOA3rd / 1;
        }
        else if (timeUnitOA3rd === "quarters") {
            timeOA3rd = timeOA3rd / 4;
        }
        else if (timeUnitOA3rd === "months") {
            timeOA3rd = timeOA3rd / 12;
        }
        else if (timeUnitOA3rd === "weeks") {
            timeOA3rd = timeOA3rd / 52;
        }
        else if (timeUnitOA3rd === "days_O") {
            timeOA3rd = timeOA3rd / 360;
        }
        else if (timeUnitOA3rd === "days_E") {
            timeOA3rd = timeOA3rd / 365;
        }


        if (uniformCashFlowUnitOA3rd === "year") {
            compoundingPeriodPerYearOA3rd = 1;
        }
        else if (uniformCashFlowUnitOA3rd === "semiannual") {
            compoundingPeriodPerYearOA3rd = 2;
        }
        else if (uniformCashFlowUnitOA3rd === "quarter") {
            compoundingPeriodPerYearOA3rd = 4;
        }
        else if (uniformCashFlowUnitOA3rd === "month") {
            compoundingPeriodPerYearOA3rd = 12;
        }
        else if (uniformCashFlowUnitOA3rd === "week") {
            compoundingPeriodPerYearOA3rd = 52;
        }
        else if (uniformCashFlowUnitOA3rd === "day_O") {
            compoundingPeriodPerYearOA3rd = 360;
        }
        else if (uniformCashFlowUnitOA3rd === "day_E") {
            compoundingPeriodPerYearOA3rd = 365;
        }
        else if (uniformCashFlowUnitOA3rd === "biannual") {
            compoundingPeriodPerYearOA3rd = 0.5;
        }
        else if (uniformCashFlowUnitOA3rd === "continuous") {
            compoundingPeriodPerYearOA3rd = 1;
            rateAPYOA3rd = math.pow(Math.E, rateAPYOA3rd) - 1;

        }
        

        if (rateAPYUnitOA3rd === "year") {
            rateAPYOA3rd =  rateAPYOA3rd * 1;
        }
        else if (rateAPYUnitOA3rd === "semiannual") {
            rateAPYOA3rd =  rateAPYOA3rd * 2;
        }
        else if (rateAPYUnitOA3rd === "quarter") {
            rateAPYOA3rd =  rateAPYOA3rd * 4;
        }
        else if (rateAPYUnitOA3rd === "month") {
            rateAPYOA3rd =  rateAPYOA3rd * 12;
        }
        else if (rateAPYUnitOA3rd === "week") {
            rateAPYOA3rd =  rateAPYOA3rd * 52;
        }
        else if (rateAPYUnitOA3rd === "day_O") {
            rateAPYOA3rd =  rateAPYOA3rd * 360;
        }
        else if (rateAPYUnitOA3rd === "day_E") {
            rateAPYOA3rd =  rateAPYOA3rd * 365;
        }
        else if (rateAPYUnitOA3rd === "biannual") {
            rateAPYOA3rd =  rateAPYOA3rd * 0.5;
        }


        uniformCashFlowOA3rd = (futureValueOA3rd * rateAPYOA3rd) / (compoundingPeriodPerYearOA3rd *(Math.pow((1 + rateAPYOA3rd/compoundingPeriodPerYearOA3rd), (compoundingPeriodPerYearOA3rd * timeOA3rd)) - 1)); 

        interestOA3rd = futureValueOA3rd - (uniformCashFlowOA3rd * compoundingPeriodPerYearOA3rd * timeOA3rd);

                
        document.getElementById("uniformCashFlowOA3rd").innerHTML = "The uniform cash flows is $" + round(uniformCashFlowOA3rd, 2).toFixed(2);
        document.getElementById("interestOA3rd").innerHTML = "The interest is $" + round(interestOA3rd, 2).toFixed(2);
}



// Given: present value, effective interest rate, time 
// To Find: periodic uniform cash flows, interest
// Amortization
document.getElementById("ordinaryAnnuity4th").addEventListener("submit", ordinaryAnnuity4th);

function ordinaryAnnuity4th(event) {
    event.preventDefault();
    event.stopPropagation();

    var presentValueOA4th = parseFloat(document.getElementById("presentValueOA4th").value, 10) || 0,
        uniformCashFlowUnitOA4th = document.getElementById("uniformCashFlowUnitOA4th").value,
        rateAPYOA4th = parseFloat(document.getElementById("rateAPYOA4th").value, 10) || 0,
        rateAPYUnitOA4th = document.getElementById("rateAPYUnitOA4th").value,
        timeOA4th = parseFloat(document.getElementById("timeOA4th").value, 10) || 0,
        timeUnitOA4th = document.getElementById("timeUnitOA4th").value,
        compoundingPeriodPerYearOA4th,
        uniformCashFlowOA4th,
        interestOA4th;

        rateAPYOA4th = rateAPYOA4th / 100;
                
        
        if (timeUnitOA4th === "years") {
            timeOA4th = timeOA4th / 1;
        }
        else if (timeUnitOA4th === "quarters") {
            timeOA4th = timeOA4th / 4;
        }
        else if (timeUnitOA4th === "months") {
            timeOA4th = timeOA4th / 12;
        }
        else if (timeUnitOA4th === "weeks") {
            timeOA4th = timeOA4th / 52;
        }
        else if (timeUnitOA4th === "days_O") {
            timeOA4th = timeOA4th / 360;
        }
        else if (timeUnitOA4th === "days_E") {
            timeOA4th = timeOA4th / 365;
        }


        if (uniformCashFlowUnitOA4th === "year") {
            compoundingPeriodPerYearOA4th = 1;
        }
        else if (uniformCashFlowUnitOA4th === "semiannual") {
            compoundingPeriodPerYearOA4th = 2;
        }
        else if (uniformCashFlowUnitOA4th === "quarter") {
            compoundingPeriodPerYearOA4th = 4;
        }
        else if (uniformCashFlowUnitOA4th === "month") {
            compoundingPeriodPerYearOA4th = 12;
        }
        else if (uniformCashFlowUnitOA4th === "week") {
            compoundingPeriodPerYearOA4th = 52;
        }
        else if (uniformCashFlowUnitOA4th === "day_O") {
            compoundingPeriodPerYearOA4th = 360;
        }
        else if (uniformCashFlowUnitOA4th === "day_E") {
            compoundingPeriodPerYearOA4th = 365;
        }
        else if (uniformCashFlowUnitOA4th === "biannual") {
            compoundingPeriodPerYearOA4th = 0.5;
        }
        else if (uniformCashFlowUnitOA4th === "continuous") {
            compoundingPeriodPerYearOA4th = 1;
            rateAPYOA4th = math.pow(Math.E, rateAPYOA4th) - 1;

        }
        

        if (rateAPYUnitOA4th === "year") {
            rateAPYOA4th =  rateAPYOA4th * 1;
        }
        else if (rateAPYUnitOA4th === "semiannual") {
            rateAPYOA4th =  rateAPYOA4th * 2;
        }
        else if (rateAPYUnitOA4th === "quarter") {
            rateAPYOA4th =  rateAPYOA4th * 4;
        }
        else if (rateAPYUnitOA4th === "month") {
            rateAPYOA4th =  rateAPYOA4th * 12;
        }
        else if (rateAPYUnitOA4th === "week") {
            rateAPYOA4th =  rateAPYOA4th * 52;
        }
        else if (rateAPYUnitOA4th === "day_O") {
            rateAPYOA4th =  rateAPYOA4th * 360;
        }
        else if (rateAPYUnitOA4th === "day_E") {
            rateAPYOA4th =  rateAPYOA4th * 365;
        }
        else if (rateAPYUnitOA4th === "biannual") {
            rateAPYOA4th =  rateAPYOA4th * 0.5;
        }


        uniformCashFlowOA4th = (presentValueOA4th * rateAPYOA4th) / (compoundingPeriodPerYearOA4th * (1 - Math.pow(1 + rateAPYOA4th/compoundingPeriodPerYearOA4th, -1 * compoundingPeriodPerYearOA4th * timeOA4th))); 

        interestOA4th = uniformCashFlowOA4th * compoundingPeriodPerYearOA4th * timeOA4th - presentValueOA4th;
              
                
        document.getElementById("uniformCashFlowOA4th").innerHTML = "The uniform cash flows is $" + round(uniformCashFlowOA4th, 2).toFixed(2);
        document.getElementById("interestOA4th").innerHTML = "The interest is $" + round(interestOA4th, 2).toFixed(2);
}


// Given: periodic uniform cash flows, effective interest rate, future value 
// To Find: time, interest
document.getElementById("ordinaryAnnuity5th").addEventListener("submit", ordinaryAnnuity5th);

function ordinaryAnnuity5th(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA5th = parseFloat(document.getElementById("uniformCashFlowOA5th").value, 10) || 0,
        uniformCashFlowUnitOA5th = document.getElementById("uniformCashFlowUnitOA5th").value,
        rateAPYOA5th = parseFloat(document.getElementById("rateAPYOA5th").value, 10) || 0,
        rateAPYUnitOA5th = document.getElementById("rateAPYUnitOA5th").value,
        futureValueOA5th = parseFloat(document.getElementById("futureValueOA5th").value, 10) || 0,
        compoundingPeriodPerYearOA5th,
        timeOA5th,
        interestOA5th;

        rateAPYOA5th = rateAPYOA5th / 100;
                
        
        if (uniformCashFlowUnitOA5th === "year") {
            compoundingPeriodPerYearOA5th = 1;
        }
        else if (uniformCashFlowUnitOA5th === "semiannual") {
            compoundingPeriodPerYearOA5th = 2;
        }
        else if (uniformCashFlowUnitOA5th === "quarter") {
            compoundingPeriodPerYearOA5th = 4;
        }
        else if (uniformCashFlowUnitOA5th === "month") {
            compoundingPeriodPerYearOA5th = 12;
        }
        else if (uniformCashFlowUnitOA5th === "week") {
            compoundingPeriodPerYearOA5th = 52;
        }
        else if (uniformCashFlowUnitOA5th === "day_O") {
            compoundingPeriodPerYearOA5th = 360;
        }
        else if (uniformCashFlowUnitOA5th === "day_E") {
            compoundingPeriodPerYearOA5th = 365;
        }
        else if (uniformCashFlowUnitOA5th === "biannual") {
            compoundingPeriodPerYearOA5th = 0.5;
        }
        else if (uniformCashFlowUnitOA5th === "continuous") {
            compoundingPeriodPerYearOA5th = 1;
            rateAPYOA5th = math.pow(Math.E, rateAPYOA5th) - 1;

        }
        

        if (rateAPYUnitOA5th === "year") {
            rateAPYOA5th =  rateAPYOA5th * 1;
        }
        else if (rateAPYUnitOA5th === "semiannual") {
            rateAPYOA5th =  rateAPYOA5th * 2;
        }
        else if (rateAPYUnitOA5th === "quarter") {
            rateAPYOA5th =  rateAPYOA5th * 4;
        }
        else if (rateAPYUnitOA5th === "month") {
            rateAPYOA5th =  rateAPYOA5th * 12;
        }
        else if (rateAPYUnitOA5th === "week") {
            rateAPYOA5th =  rateAPYOA5th * 52;
        }
        else if (rateAPYUnitOA5th === "day_O") {
            rateAPYOA5th =  rateAPYOA5th * 360;
        }
        else if (rateAPYUnitOA5th === "day_E") {
            rateAPYOA5th =  rateAPYOA5th * 365;
        }
        else if (rateAPYUnitOA5th === "biannual") {
            rateAPYOA5th =  rateAPYOA5th * 0.5;
        }


        timeOA5th = (Math.log10((rateAPYOA5th * futureValueOA5th + compoundingPeriodPerYearOA5th * uniformCashFlowOA5th)/(compoundingPeriodPerYearOA5th * uniformCashFlowOA5th)) / (compoundingPeriodPerYearOA5th * Math.log10(1 + rateAPYOA5th/compoundingPeriodPerYearOA5th)));

        interestOA5th = futureValueOA5th - (uniformCashFlowOA5th * compoundingPeriodPerYearOA5th * timeOA5th);

                
        document.getElementById("timeOA5th").innerHTML = "The time is " + round(timeOA5th, 4).toFixed(4) + " years";
        document.getElementById("interestOA5th").innerHTML = "The interest is $" + round(interestOA5th, 2).toFixed(2);
}



// Given: periodic uniform cash flows, effective interest rate, present value 
// To Find: time, interest
document.getElementById("ordinaryAnnuity6th").addEventListener("submit", ordinaryAnnuity6th);

function ordinaryAnnuity6th(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA6th = parseFloat(document.getElementById("uniformCashFlowOA6th").value, 10) || 0,
        uniformCashFlowUnitOA6th = document.getElementById("uniformCashFlowUnitOA6th").value,
        rateAPYOA6th = parseFloat(document.getElementById("rateAPYOA6th").value, 10) || 0,
        rateAPYUnitOA6th = document.getElementById("rateAPYUnitOA6th").value,
        presentValueOA6th = parseFloat(document.getElementById("presentValueOA6th").value, 10) || 0,
        compoundingPeriodPerYearOA6th,
        timeOA6th,
        interestOA6th;

        rateAPYOA6th = rateAPYOA6th / 100;
                
        
        if (uniformCashFlowUnitOA6th === "year") {
            compoundingPeriodPerYearOA6th = 1;
        }
        else if (uniformCashFlowUnitOA6th === "semiannual") {
            compoundingPeriodPerYearOA6th = 2;
        }
        else if (uniformCashFlowUnitOA6th === "quarter") {
            compoundingPeriodPerYearOA6th = 4;
        }
        else if (uniformCashFlowUnitOA6th === "month") {
            compoundingPeriodPerYearOA6th = 12;
        }
        else if (uniformCashFlowUnitOA6th === "week") {
            compoundingPeriodPerYearOA6th = 52;
        }
        else if (uniformCashFlowUnitOA6th === "day_O") {
            compoundingPeriodPerYearOA6th = 360;
        }
        else if (uniformCashFlowUnitOA6th === "day_E") {
            compoundingPeriodPerYearOA6th = 365;
        }
        else if (uniformCashFlowUnitOA6th === "biannual") {
            compoundingPeriodPerYearOA6th = 0.5;
        }
        else if (uniformCashFlowUnitOA6th === "continuous") {
            compoundingPeriodPerYearOA6th = 1;
            rateAPYOA6th = math.pow(Math.E, rateAPYOA6th) - 1;

        }
        

        if (rateAPYUnitOA6th === "year") {
            rateAPYOA6th =  rateAPYOA6th * 1;
        }
        else if (rateAPYUnitOA6th === "semiannual") {
            rateAPYOA6th =  rateAPYOA6th * 2;
        }
        else if (rateAPYUnitOA6th === "quarter") {
            rateAPYOA6th =  rateAPYOA6th * 4;
        }
        else if (rateAPYUnitOA6th === "month") {
            rateAPYOA6th =  rateAPYOA6th * 12;
        }
        else if (rateAPYUnitOA6th === "week") {
            rateAPYOA6th =  rateAPYOA6th * 52;
        }
        else if (rateAPYUnitOA6th === "day_O") {
            rateAPYOA6th =  rateAPYOA6th * 360;
        }
        else if (rateAPYUnitOA6th === "day_E") {
            rateAPYOA6th =  rateAPYOA6th * 365;
        }
        else if (rateAPYUnitOA6th === "biannual") {
            rateAPYOA6th =  rateAPYOA6th * 0.5;
        }


        timeOA6th = (Math.log10(((compoundingPeriodPerYearOA6th * uniformCashFlowOA6th) - (rateAPYOA6th * presentValueOA6th)) / (compoundingPeriodPerYearOA6th * uniformCashFlowOA6th))) / (-1 * compoundingPeriodPerYearOA6th * Math.log10(1 + rateAPYOA6th / compoundingPeriodPerYearOA6th));

        interestOA6th = uniformCashFlowOA6th * compoundingPeriodPerYearOA6th * timeOA6th - presentValueOA6th;

                
        document.getElementById("timeOA6th").innerHTML = "The time is " + round(timeOA6th, 4).toFixed(4) + " years";
        document.getElementById("interestOA6th").innerHTML = "The interest is $" + round(interestOA6th, 2).toFixed(2);
}



// Given: periodic uniform cash flows, time, future value 
// To Find: annual effective interest rate, interest
document.getElementById("ordinaryAnnuity7th").addEventListener("submit", ordinaryAnnuity7th);

function ordinaryAnnuity7th(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA7th = parseFloat(document.getElementById("uniformCashFlowOA7th").value, 10) || 0,
        uniformCashFlowUnitOA7th = document.getElementById("uniformCashFlowUnitOA7th").value,
        timeOA7th = parseFloat(document.getElementById("timeOA7th").value, 10) || 0,
        timeUnitOA7th = document.getElementById("timeUnitOA7th").value,
        futureValueOA7th = parseFloat(document.getElementById("futureValueOA7th").value, 10) || 0,
        compoundingPeriodPerYearOA7th,
        rateOA7th,
        interestOA7th;

        

        if (timeUnitOA7th === "years") {
            timeOA7th = timeOA7th / 1;
        }
        else if (timeUnitOA4th === "quarters") {
            timeOA4th = timeOA4th / 4;
        }
        else if (timeUnitOA7th === "months") {
            timeOA7th = timeOA7th / 12;
        }
        else if (timeUnitOA7th === "weeks") {
            timeOA7th = timeOA7th / 52;
        }
        else if (timeUnitOA7th === "days_O") {
            timeOA7th = timeOA7th / 360;
        }
        else if (timeUnitOA7th === "days_E") {
            timeOA7th = timeOA7th / 365;
        }
                
        
        if (uniformCashFlowUnitOA7th === "year") {
            compoundingPeriodPerYearOA7th = 1;
        }
        else if (uniformCashFlowUnitOA7th === "semiannual") {
            compoundingPeriodPerYearOA7th = 2;
        }
        else if (uniformCashFlowUnitOA7th === "quarter") {
            compoundingPeriodPerYearOA7th = 4;
        }
        else if (uniformCashFlowUnitOA7th === "month") {
            compoundingPeriodPerYearOA7th = 12;
        }
        else if (uniformCashFlowUnitOA7th === "week") {
            compoundingPeriodPerYearOA7th = 52;
        }
        else if (uniformCashFlowUnitOA7th === "day_O") {
            compoundingPeriodPerYearOA7th = 360;
        }
        else if (uniformCashFlowUnitOA7th === "day_E") {
            compoundingPeriodPerYearOA7th = 365;
        }
        else if (uniformCashFlowUnitOA7th === "biannual") {
            compoundingPeriodPerYearOA7th = 0.5;
        }
               

        rateOA7th = formulajs.RATE(compoundingPeriodPerYearOA7th * timeOA7th, -1 * uniformCashFlowOA7th, 0, futureValueOA7th) * 100;

        interestOA7th = futureValueOA7th - (uniformCashFlowOA7th * compoundingPeriodPerYearOA7th * timeOA7th);

                
        document.getElementById("rateOA7th").innerHTML = "The rate is " + round(rateOA7th, 6).toFixed(6) + "%";
        document.getElementById("interestOA7th").innerHTML = "The interest is $" + round(interestOA7th, 2).toFixed(2);
}


// Given: periodic uniform cash flows, time, present value 
// To Find: annual effective interest rate, interest
document.getElementById("ordinaryAnnuity8th").addEventListener("submit", ordinaryAnnuity8th);

function ordinaryAnnuity8th(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowOA8th = parseFloat(document.getElementById("uniformCashFlowOA8th").value, 10) || 0,
        uniformCashFlowUnitOA8th = document.getElementById("uniformCashFlowUnitOA8th").value,
        timeOA8th = parseFloat(document.getElementById("timeOA8th").value, 10) || 0,
        timeUnitOA8th = document.getElementById("timeUnitOA8th").value,
        presentValueOA8th = parseFloat(document.getElementById("presentValueOA8th").value, 10) || 0,
        compoundingPeriodPerYearOA8th,
        rateOA8th,
        interestOA8th;

        
        if (timeUnitOA8th === "years") {
            timeOA8th = timeOA8th / 1;
        }
        else if (timeUnitOA8th === "quarters") {
            timeOA8th = timeOA8th / 4;
        }
        else if (timeUnitOA8th === "months") {
            timeOA8th = timeOA8th / 12;
        }
        else if (timeUnitOA8th === "weeks") {
            timeOA8th = timeOA8th / 52;
        }
        else if (timeUnitOA8th === "days_O") {
            timeOA8th = timeOA8th / 360;
        }
        else if (timeUnitOA8th === "days_E") {
            timeOA8th = timeOA8th / 365;
        }

                
        if (uniformCashFlowUnitOA8th === "year") {
            compoundingPeriodPerYearOA8th = 1;
        }
        else if (uniformCashFlowUnitOA8th === "semiannual") {
            compoundingPeriodPerYearOA8th = 2;
        }
        else if (uniformCashFlowUnitOA8th === "quarter") {
            compoundingPeriodPerYearOA8th = 4;
        }
        else if (uniformCashFlowUnitOA8th === "month") {
            compoundingPeriodPerYearOA8th = 12;
        }
        else if (uniformCashFlowUnitOA8th === "week") {
            compoundingPeriodPerYearOA8th = 52;
        }
        else if (uniformCashFlowUnitOA8th === "day_O") {
            compoundingPeriodPerYearOA8th = 360;
        }
        else if (uniformCashFlowUnitOA8th === "day_E") {
            compoundingPeriodPerYearOA8th = 365;
        }
        else if (uniformCashFlowUnitOA8th === "biannual") {
            compoundingPeriodPerYearOA8th = 0.5;
        }
        
        
        rateOA8th = formulajs.RATE(compoundingPeriodPerYearOA8th * timeOA8th, uniformCashFlowOA8th, -1 * presentValueOA8th) * 100 * compoundingPeriodPerYearOA8th;

        //try later maybe
        // rateOA8th = formulajs.RATE(timeOA8th, -1 * uniformCashFlowOA8th, presentValueOA8th);

        interestOA8th = (uniformCashFlowOA8th * compoundingPeriodPerYearOA8th * timeOA8th) - presentValueOA8th;

        
        
        document.getElementById("rateOA8th").innerHTML = "The rate is " + round(rateOA8th, 6).toFixed(6) + "%";
        document.getElementById("interestOA8th").innerHTML = "The interest is $" + round(interestOA8th, 2).toFixed(2);
}



// Uniform Cash Flows
// Ordinary Annuity Calculations
// Given: periodic uniform cash flows, effective interest rate, time 
// To Find: future value of deferred ordinary annuity, interest
document.getElementById("deferredOrdinaryAnnuity1st").addEventListener("submit", deferredOrdinaryAnnuity1st);

function deferredOrdinaryAnnuity1st(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowDOA1st = parseFloat(document.getElementById("uniformCashFlowDOA1st").value, 10) || 0,
        uniformCashFlowUnitDOA1st = document.getElementById("uniformCashFlowUnitDOA1st").value,
        rateAPYDOA1st = parseFloat(document.getElementById("rateAPYDOA1st").value, 10) || 0,
        rateAPYUnitDOA1st = document.getElementById("rateAPYUnitDOA1st").value,
        timeDOA1st = parseFloat(document.getElementById("timeDOA1st").value, 10) || 0,
        timeUnitDOA1st = document.getElementById("timeUnitDOA1st").value,
        totalTimeDOA1st = parseFloat(document.getElementById("totalTimeDOA1st").value, 10) || 0,
        totalTimeUnitDOA1st = document.getElementById("totalTimeUnitDOA1st").value,
        compoundingPeriodPerYearDOA1st,
        futureValueFirstDOA1st,
        futureValueDOA1st;


        rateAPYDOA1st = rateAPYDOA1st / 100;
                
        
        if (timeUnitDOA1st === "years") {
            timeDOA1st = timeDOA1st / 1;
        }
        else if (timeUnitDOA1st === "quarters") {
            timeDOA1st = timeDOA1st / 4;
        }
        else if (timeUnitDOA1st === "months") {
            timeDOA1st = timeDOA1st / 12;
        }
        else if (timeUnitDOA1st === "weeks") {
            timeDOA1st = timeDOA1st / 52;
        }
        else if (timeUnitDOA1st === "days_O") {
            timeDOA1st = timeDOA1st / 360;
        }
        else if (timeUnitDOA1st === "days_E") {
            timeDOA1st = timeDOA1st / 365;
        }


        if (totalTimeUnitDOA1st === "years") {
            totalTimeDOA1st = totalTimeDOA1st / 1;
        }
        else if (totalTimeUnitDOA1st === "quarters") {
            totalTimeDOA1st = totalTimeDOA1st / 4;
        }
        else if (totalTimeUnitDOA1st === "months") {
            totalTimeDOA1st = totalTimeDOA1st / 12;
        }
        else if (totalTimeUnitDOA1st === "weeks") {
            totalTimeDOA1st = totalTimeDOA1st / 52;
        }
        else if (totalTimeUnitDOA1st === "days_O") {
            totalTimeDOA1st = totalTimeDOA1st / 360;
        }
        else if (totalTimeUnitDOA1st === "days_E") {
            totalTimeDOA1st = totalTimeDOA1st / 365;
        }


        if (uniformCashFlowUnitDOA1st === "year") {
            compoundingPeriodPerYearDOA1st = 1;
        }
        else if (uniformCashFlowUnitDOA1st === "semiannual") {
            compoundingPeriodPerYearDOA1st = 2;
        }
        else if (uniformCashFlowUnitDOA1st === "quarter") {
            compoundingPeriodPerYearDOA1st = 4;
        }
        else if (uniformCashFlowUnitDOA1st === "month") {
            compoundingPeriodPerYearDOA1st = 12;
        }
        else if (uniformCashFlowUnitDOA1st === "week") {
            compoundingPeriodPerYearDOA1st = 52;
        }
        else if (uniformCashFlowUnitDOA1st === "day_O") {
            compoundingPeriodPerYearDOA1st = 360;
        }
        else if (uniformCashFlowUnitDOA1st === "day_E") {
            compoundingPeriodPerYearDOA1st = 365;
        }
        else if (uniformCashFlowUnitDOA1st === "biannual") {
            compoundingPeriodPerYearDOA1st = 0.5;
        }
        else if (uniformCashFlowUnitDOA1st === "continuous") {
            compoundingPeriodPerYearDOA1st = 1;
            rateAPYDOA1st = math.pow(Math.E, rateAPYDOA1st) - 1;

        }
        

        if (rateAPYUnitDOA1st === "year") {
            rateAPYDOA1st =  rateAPYDOA1st * 1;
        }
        else if (rateAPYUnitDOA1st === "semiannual") {
            rateAPYDOA1st =  rateAPYDOA1st * 2;
        }
        else if (rateAPYUnitDOA1st === "quarter") {
            rateAPYDOA1st =  rateAPYDOA1st * 4;
        }
        else if (rateAPYUnitDOA1st === "month") {
            rateAPYDOA1st =  rateAPYDOA1st * 12;
        }
        else if (rateAPYUnitDOA1st === "week") {
            rateAPYDOA1st =  rateAPYDOA1st * 52;
        }
        else if (rateAPYUnitDOA1st === "day_O") {
            rateAPYDOA1st =  rateAPYDOA1st * 360;
        }
        else if (rateAPYUnitDOA1st === "day_E") {
            rateAPYDOA1st =  rateAPYDOA1st * 365;
        }
        else if (rateAPYUnitDOA1st === "biannual") {
            rateAPYDOA1st =  rateAPYDOA1st * 0.5;
        }


        futureValueFirstDOA1st = compoundingPeriodPerYearDOA1st * uniformCashFlowDOA1st * ((Math.pow((1 + rateAPYDOA1st/compoundingPeriodPerYearDOA1st), (compoundingPeriodPerYearDOA1st * timeDOA1st)) - 1) / rateAPYDOA1st);

        futureValueDOA1st = futureValueFirstDOA1st * (Math.pow((1 + rateAPYDOA1st/compoundingPeriodPerYearDOA1st), (compoundingPeriodPerYearDOA1st * (totalTimeDOA1st - timeDOA1st))));
                        
        document.getElementById("futureValueDOA1st").innerHTML = "The future value is $" + round(futureValueDOA1st, 2).toFixed(2);
}




// Given: periodic uniform cash flows, effective interest rate, time 
// To Find: present value of deferred ordinary annuity, interest
document.getElementById("deferredOrdinaryAnnuity2nd").addEventListener("submit", deferredOrdinaryAnnuity2nd);

function deferredOrdinaryAnnuity2nd(event) {
    event.preventDefault();
    event.stopPropagation();

    var uniformCashFlowDOA2nd = parseFloat(document.getElementById("uniformCashFlowDOA2nd").value, 10) || 0,
        uniformCashFlowUnitDOA2nd = document.getElementById("uniformCashFlowUnitDOA2nd").value,
        rateAPYDOA2nd = parseFloat(document.getElementById("rateAPYDOA2nd").value, 10) || 0,
        rateAPYUnitDOA2nd = document.getElementById("rateAPYUnitDOA2nd").value,
        timeDOA2nd = parseFloat(document.getElementById("timeDOA2nd").value, 10) || 0,
        timeUnitDOA2nd = document.getElementById("timeUnitDOA2nd").value,
        totalTimeDOA2nd = parseFloat(document.getElementById("totalTimeDOA2nd").value, 10) || 0,
        totalTimeUnitDOA2nd = document.getElementById("totalTimeUnitDOA2nd").value,
        compoundingPeriodPerYearDOA2nd,
        presentValueFirstDOA2nd,
        presentValueDOA2nd;


        rateAPYDOA2nd = rateAPYDOA2nd / 100;
                
        
        if (timeUnitDOA2nd === "years") {
            timeDOA2nd = timeDOA2nd / 1;
        }
        else if (timeUnitDOA2nd === "quarters") {
            timeDOA2nd = timeDOA2nd / 4;
        }
        else if (timeUnitDOA2nd === "months") {
            timeDOA2nd = timeDOA2nd / 12;
        }
        else if (timeUnitDOA2nd === "weeks") {
            timeDOA2nd = timeDOA2nd / 52;
        }
        else if (timeUnitDOA2nd === "days_O") {
            timeDOA2nd = timeDOA2nd / 360;
        }
        else if (timeUnitDOA2nd === "days_E") {
            timeDOA2nd = timeDOA2nd / 365;
        }


        if (totalTimeUnitDOA2nd === "years") {
            totalTimeDOA2nd = totalTimeDOA2nd / 1;
        }
        else if (totalTimeUnitDOA2nd === "quarters") {
            totalTimeDOA2nd = totalTimeDOA2nd / 4;
        }
        else if (totalTimeUnitDOA2nd === "months") {
            totalTimeDOA2nd = totalTimeDOA2nd / 12;
        }
        else if (totalTimeUnitDOA2nd === "weeks") {
            totalTimeDOA2nd = totalTimeDOA2nd / 52;
        }
        else if (totalTimeUnitDOA2nd === "days_O") {
            totalTimeDOA2nd = totalTimeDOA2nd / 360;
        }
        else if (totalTimeUnitDOA2nd === "days_E") {
            totalTimeDOA2nd = totalTimeDOA2nd / 365;
        }


        if (uniformCashFlowUnitDOA2nd === "year") {
            compoundingPeriodPerYearDOA2nd = 1;
        }
        else if (uniformCashFlowUnitDOA2nd === "semiannual") {
            compoundingPeriodPerYearDOA2nd = 2;
        }
        else if (uniformCashFlowUnitDOA2nd === "quarter") {
            compoundingPeriodPerYearDOA2nd = 4;
        }
        else if (uniformCashFlowUnitDOA2nd === "month") {
            compoundingPeriodPerYearDOA2nd = 12;
        }
        else if (uniformCashFlowUnitDOA2nd === "week") {
            compoundingPeriodPerYearDOA2nd = 52;
        }
        else if (uniformCashFlowUnitDOA2nd === "day_O") {
            compoundingPeriodPerYearDOA2nd = 360;
        }
        else if (uniformCashFlowUnitDOA2nd === "day_E") {
            compoundingPeriodPerYearDOA2nd = 365;
        }
        else if (uniformCashFlowUnitDOA2nd === "biannual") {
            compoundingPeriodPerYearDOA2nd = 0.5;
        }
        else if (uniformCashFlowUnitDOA2nd === "continuous") {
            compoundingPeriodPerYearDOA2nd = 1;
            rateAPYDOA2nd = math.pow(Math.E, rateAPYDOA2nd) - 1;

        }
        

        if (rateAPYUnitDOA2nd === "year") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 1;
        }
        else if (rateAPYUnitDOA2nd === "semiannual") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 2;
        }
        else if (rateAPYUnitDOA2nd === "quarter") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 4;
        }
        else if (rateAPYUnitDOA2nd === "month") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 12;
        }
        else if (rateAPYUnitDOA2nd === "week") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 52;
        }
        else if (rateAPYUnitDOA2nd === "day_O") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 360;
        }
        else if (rateAPYUnitDOA2nd === "day_E") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 365;
        }
        else if (rateAPYUnitDOA2nd === "biannual") {
            rateAPYDOA2nd =  rateAPYDOA2nd * 0.5;
        }


        presentValueFirstDOA2nd = (compoundingPeriodPerYearDOA2nd * uniformCashFlowDOA2nd * (1 - Math.pow(1 + rateAPYDOA2nd/compoundingPeriodPerYearDOA2nd, -1 * compoundingPeriodPerYearDOA2nd * timeDOA2nd))) / rateAPYDOA2nd;

        presentValueDOA2nd = presentValueFirstDOA2nd / (Math.pow((1 + rateAPYDOA2nd/compoundingPeriodPerYearDOA2nd), (compoundingPeriodPerYearDOA2nd * (totalTimeDOA2nd - timeDOA2nd))));
               
                
        document.getElementById("presentValueDOA2nd").innerHTML = "The present value is $" + round(presentValueDOA2nd, 2).toFixed(2);
}


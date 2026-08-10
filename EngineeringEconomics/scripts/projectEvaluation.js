// Copyright 2016 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com/EngineeringEconomics/engineeringEconomics.html
// https://samuelchukwuemeka.github.io/financial-mathematics/
// https://samdomforpeace.com/


"use strict";


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


// Quotes
function solutions(solution) {
    var e = document.getElementById(solution);
    if (e.style.display === 'block' || e.style.display ==='') e.style.display = 'none';
    else e.style.display = 'block';
}

// Present Worth Calculations
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the Present Worth Method
document.getElementById("presentWorthFirst").addEventListener("submit", presentWorthFirst);

function presentWorthFirst(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowPWfirst = parseFloat(document.getElementById("cashOutflowPWfirst").value, 10) || 0,
        cashInflowPWfirst = parseFloat(document.getElementById("cashInflowPWfirst").value, 10) || 0,
        cashInflowPeriodPWfirst = parseFloat(document.getElementById("cashInflowPeriodPWfirst").value, 10) || 0,
        cashInflowPeriodUnitPWfirst = document.getElementById("cashInflowPeriodUnitPWfirst").value,
        marrPWfirst = parseFloat(document.getElementById("marrPWfirst").value, 10) || 0,
        cashInflowTimeUnitPWfirst = document.getElementById("cashInflowTimeUnitPWfirst").value,
        timeUnitPWfirst = document.getElementById("timeUnitPWfirst").value,
        marketValuePWfirst = parseFloat(document.getElementById("marketValuePWfirst").value, 10) || 0,
        marrValuePWfirst,
        presentWorthCashInflowFirst,
        presentWorthMarketValueFirst,
        presentWorthTotalFirst,
        message1PWfirst,
        message2PWfirst;

        marrPWfirst = marrPWfirst / 100;
                
        
        if (cashInflowPeriodUnitPWfirst === "years") {
            cashInflowPeriodPWfirst = cashInflowPeriodPWfirst / 1;
        }
        else if (cashInflowPeriodUnitPWfirst === "months") {
            cashInflowPeriodPWfirst = cashInflowPeriodPWfirst / 12;
        }
        else if (cashInflowPeriodUnitPWfirst === "weeks") {
            cashInflowPeriodPWfirst = cashInflowPeriodPWfirst / 52;
        }
        else if (cashInflowPeriodUnitPWfirst === "days_O") {
            cashInflowPeriodPWfirst = cashInflowPeriodPWfirst / 360;
        }
        else if (cashInflowPeriodUnitPWfirst === "days_E") {
            cashInflowPeriodPWfirst = cashInflowPeriodPWfirst / 365;
        }


        if (cashInflowTimeUnitPWfirst === "year") {
            marrValuePWfirst = 1;
        }
        else if (cashInflowTimeUnitPWfirst === "semiannual") {
            marrValuePWfirst = 2;
        }
        else if (cashInflowTimeUnitPWfirst === "quarter") {
            marrValuePWfirst = 4;
        }
        else if (cashInflowTimeUnitPWfirst === "month") {
            marrValuePWfirst = 12;
        }
        else if (cashInflowTimeUnitPWfirst === "week") {
            marrValuePWfirst = 52;
        }
        else if (cashInflowTimeUnitPWfirst === "day_O") {
            marrValuePWfirst = 360;
        }
        else if (cashInflowTimeUnitPWfirst === "day_E") {
            marrValuePWfirst = 365;
        }
        else if (cashInflowTimeUnitPWfirst === "biannual") {
            marrValuePWfirst = 0.5;
        }
        else if (cashInflowTimeUnitPWfirst === "continuous") {
            marrValuePWfirst = 1;
            marrPWfirst = math.pow(Math.E, marrPWfirst) - 1;

        }
        

        if (timeUnitPWfirst === "year") {
            marrPWfirst =  marrPWfirst * 1;
        }
        else if (timeUnitPWfirst === "semiannual") {
            marrPWfirst =  marrPWfirst * 2;
        }
        else if (timeUnitPWfirst === "quarter") {
            marrPWfirst =  marrPWfirst * 4;
        }
        else if (timeUnitPWfirst === "month") {
            marrPWfirst =  marrPWfirst * 12;
        }
        else if (timeUnitPWfirst === "week") {
            marrPWfirst =  marrPWfirst * 52;
        }
        else if (timeUnitPWfirst === "day_O") {
            marrPWfirst =  marrPWfirst * 360;
        }
        else if (timeUnitPWfirst === "day_E") {
            marrPWfirst =  marrPWfirst * 365;
        }
        else if (timeUnitPWfirst === "biannual") {
            marrPWfirst =  marrPWfirst * 0.5;
        }


        presentWorthCashInflowFirst = (marrValuePWfirst * cashInflowPWfirst * (1 - Math.pow(1 + marrPWfirst/marrValuePWfirst, -1 * marrValuePWfirst * cashInflowPeriodPWfirst))) / marrPWfirst;

        presentWorthMarketValueFirst = marketValuePWfirst / Math.pow((1 + marrPWfirst/marrValuePWfirst), (marrValuePWfirst * cashInflowPeriodPWfirst)); 

        presentWorthTotalFirst = presentWorthCashInflowFirst + presentWorthMarketValueFirst - cashOutflowPWfirst;

        message1PWfirst = "The present worth of all the uniform cash inflows is $" + round(presentWorthCashInflowFirst, 2).toFixed(2) + "<br>";
        message1PWfirst += "The present worth of the market value is $" + round(presentWorthMarketValueFirst, 2).toFixed(2) + "</br>";
        message1PWfirst += "The present worth of the cash outflow is the value of the cash outflow because it is a present investment. </br>";
        message1PWfirst += "Therefore, the present worth of the project is $" + round(presentWorthTotalFirst, 2).toFixed(2);

        if(presentWorthTotalFirst > 0){
            message2PWfirst = "Because the present worth of the project is greater than zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(presentWorthTotalFirst === 0){
            message2PWfirst = "Because the present worth of the project is equal to zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(presentWorthTotalFirst < 0){
            message2PWfirst = "Because the present worth of the project is less than zero at that minimum attractive rate of return, the project is NOT economically justified.";
        }
        
        document.getElementById("message1PWfirst").innerHTML = message1PWfirst;
        document.getElementById("message2PWfirst").innerHTML = message2PWfirst;
}

// End Present Worth Calculations



// Future Worth Calculations
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the Future Worth Method
document.getElementById("futureWorthFirst").addEventListener("submit", futureWorthFirst);

function futureWorthFirst(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowFWfirst = parseFloat(document.getElementById("cashOutflowFWfirst").value, 10) || 0,
        cashInflowFWfirst = parseFloat(document.getElementById("cashInflowFWfirst").value, 10) || 0,
        cashInflowPeriodFWfirst = parseFloat(document.getElementById("cashInflowPeriodFWfirst").value, 10) || 0,
        cashInflowPeriodUnitFWfirst = document.getElementById("cashInflowPeriodUnitFWfirst").value,
        marrFWfirst = parseFloat(document.getElementById("marrFWfirst").value, 10) || 0,
        cashInflowTimeUnitFWfirst = document.getElementById("cashInflowTimeUnitFWfirst").value,
        timeUnitFWfirst = document.getElementById("timeUnitFWfirst").value,
        marketValueFWfirst = parseFloat(document.getElementById("marketValueFWfirst").value, 10) || 0,
        marrValueFWfirst,
        futureWorthCashInflowFirst,
        futureWorthCashOutflowFirst,
        futureWorthTotalFirst,
        message1FWfirst,
        message2FWfirst;

        marrFWfirst = marrFWfirst / 100;
                
        
        if (cashInflowPeriodUnitFWfirst === "years") {
            cashInflowPeriodFWfirst = cashInflowPeriodFWfirst / 1;
        }
        else if (cashInflowPeriodUnitFWfirst === "months") {
            cashInflowPeriodFWfirst = cashInflowPeriodFWfirst / 12;
        }
        else if (cashInflowPeriodUnitFWfirst === "weeks") {
            cashInflowPeriodFWfirst = cashInflowPeriodFWfirst / 52;
        }
        else if (cashInflowPeriodUnitFWfirst === "days_O") {
            cashInflowPeriodFWfirst = cashInflowPeriodFWfirst / 360;
        }
        else if (cashInflowPeriodUnitFWfirst === "days_E") {
            cashInflowPeriodFWfirst = cashInflowPeriodFWfirst / 365;
        }


        if (cashInflowTimeUnitFWfirst === "year") {
            marrValueFWfirst = 1;
        }
        else if (cashInflowTimeUnitFWfirst === "semiannual") {
            marrValueFWfirst = 2;
        }
        else if (cashInflowTimeUnitFWfirst === "quarter") {
            marrValueFWfirst = 4;
        }
        else if (cashInflowTimeUnitFWfirst === "month") {
            marrValueFWfirst = 12;
        }
        else if (cashInflowTimeUnitFWfirst === "week") {
            marrValueFWfirst = 52;
        }
        else if (cashInflowTimeUnitFWfirst === "day_O") {
            marrValueFWfirst = 360;
        }
        else if (cashInflowTimeUnitFWfirst === "day_E") {
            marrValueFWfirst = 365;
        }
        else if (cashInflowTimeUnitFWfirst === "biannual") {
            marrValueFWfirst = 0.5;
        }
        else if (cashInflowTimeUnitFWfirst === "continuous") {
            marrValueFWfirst = 1;
            marrFWfirst = math.pow(Math.E, marrFWfirst) - 1;

        }
        

        if (timeUnitFWfirst === "year") {
            marrFWfirst =  marrFWfirst * 1;
        }
        else if (timeUnitFWfirst === "semiannual") {
            marrFWfirst =  marrFWfirst * 2;
        }
        else if (timeUnitFWfirst === "quarter") {
            marrFWfirst =  marrFWfirst * 4;
        }
        else if (timeUnitFWfirst === "month") {
            marrFWfirst =  marrFWfirst * 12;
        }
        else if (timeUnitFWfirst === "week") {
            marrFWfirst =  marrFWfirst * 52;
        }
        else if (timeUnitFWfirst === "day_O") {
            marrFWfirst =  marrFWfirst * 360;
        }
        else if (timeUnitFWfirst === "day_E") {
            marrFWfirst =  marrFWfirst * 365;
        }
        else if (timeUnitFWfirst === "biannual") {
            marrFWfirst =  marrFWfirst * 0.5;
        }


        futureWorthCashInflowFirst = marrValueFWfirst * cashInflowFWfirst * ((Math.pow((1 + marrFWfirst/marrValueFWfirst), (marrValueFWfirst * cashInflowPeriodFWfirst)) - 1) / marrFWfirst);

        futureWorthCashOutflowFirst = cashOutflowFWfirst * Math.pow((1 + marrFWfirst/marrValueFWfirst), (marrValueFWfirst * cashInflowPeriodFWfirst)); 

        futureWorthTotalFirst = futureWorthCashInflowFirst + marketValueFWfirst - futureWorthCashOutflowFirst;

        message1FWfirst = "The future worth of all the uniform cash inflows is $" + round(futureWorthCashInflowFirst, 2).toFixed(2) + "<br>";
        message1FWfirst += "The future worth of the market value is is the value of the market value because it is a future value. </br>";
        message1FWfirst += "The future worth of the cash outflow is $" + round(futureWorthCashOutflowFirst, 2).toFixed(2) + "<br>";
        message1FWfirst += "Therefore, the future worth of the project is $" + round(futureWorthTotalFirst, 2).toFixed(2);

        if(futureWorthTotalFirst > 0){
            message2FWfirst = "Because the future worth of the project is greater than zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(futureWorthTotalFirst === 0){
            message2FWfirst = "Because the future worth of the project is equal to zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(futureWorthTotalFirst < 0){
            message2FWfirst = "Because the future worth of the project is less than zero at that minimum attractive rate of return, the project is NOT economically justified.";
        }
        
        document.getElementById("message1FWfirst").innerHTML = message1FWfirst;
        document.getElementById("message2FWfirst").innerHTML = message2FWfirst;
}

// End Future Worth Calculations


// Annual Worth Calculations
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the Annual Worth Method
document.getElementById("annualWorthFirst").addEventListener("submit", annualWorthFirst);

function annualWorthFirst(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowAWfirst = parseFloat(document.getElementById("cashOutflowAWfirst").value, 10) || 0,
        cashInflowAWfirst = parseFloat(document.getElementById("cashInflowAWfirst").value, 10) || 0,
        cashInflowPeriodAWfirst = parseFloat(document.getElementById("cashInflowPeriodAWfirst").value, 10) || 0,
        cashInflowPeriodUnitAWfirst = document.getElementById("cashInflowPeriodUnitAWfirst").value,
        marrAWfirst = parseFloat(document.getElementById("marrAWfirst").value, 10) || 0,
        cashInflowTimeUnitAWfirst = document.getElementById("cashInflowTimeUnitAWfirst").value,
        timeUnitAWfirst = document.getElementById("timeUnitAWfirst").value,
        marketValueAWfirst = parseFloat(document.getElementById("marketValueAWfirst").value, 10) || 0,
        marrValueAWfirst,
        amortizationAWfirst,
        sinkingFundAWfirst,
        annualCapitalRecoveryAWfirst,
        annualWorthTotalFirst,
        message1AWfirst,
        message2AWfirst;

        marrAWfirst = marrAWfirst / 100;
                
        
        if (cashInflowPeriodUnitAWfirst === "years") {
            cashInflowPeriodAWfirst = cashInflowPeriodAWfirst / 1;
        }
        else if (cashInflowPeriodUnitAWfirst === "months") {
            cashInflowPeriodAWfirst = cashInflowPeriodAWfirst / 12;
        }
        else if (cashInflowPeriodUnitAWfirst === "weeks") {
            cashInflowPeriodAWfirst = cashInflowPeriodAWfirst / 52;
        }
        else if (cashInflowPeriodUnitAWfirst === "days_O") {
            cashInflowPeriodAWfirst = cashInflowPeriodAWfirst / 360;
        }
        else if (cashInflowPeriodUnitAWfirst === "days_E") {
            cashInflowPeriodAWfirst = cashInflowPeriodAWfirst / 365;
        }


        if (cashInflowTimeUnitAWfirst === "year") {
            marrValueAWfirst = 1;
        }
        else if (cashInflowTimeUnitAWfirst === "semiannual") {
            marrValueAWfirst = 2;
        }
        else if (cashInflowTimeUnitAWfirst === "quarter") {
            marrValueAWfirst = 4;
        }
        else if (cashInflowTimeUnitAWfirst === "month") {
            marrValueAWfirst = 12;
        }
        else if (cashInflowTimeUnitAWfirst === "week") {
            marrValueAWfirst = 52;
        }
        else if (cashInflowTimeUnitAWfirst === "day_O") {
            marrValueAWfirst = 360;
        }
        else if (cashInflowTimeUnitAWfirst === "day_E") {
            marrValueAWfirst = 365;
        }
        else if (cashInflowTimeUnitAWfirst === "biannual") {
            marrValueAWfirst = 0.5;
        }
        else if (cashInflowTimeUnitAWfirst === "continuous") {
            marrValueAWfirst = 1;
            marrAWfirst = math.pow(Math.E, marrAWfirst) - 1;

        }
        

        if (timeUnitAWfirst === "year") {
            marrAWfirst =  marrAWfirst * 1;
        }
        else if (timeUnitAWfirst === "semiannual") {
            marrAWfirst =  marrAWfirst * 2;
        }
        else if (timeUnitAWfirst === "quarter") {
            marrAWfirst =  marrAWfirst * 4;
        }
        else if (timeUnitAWfirst === "month") {
            marrAWfirst =  marrAWfirst * 12;
        }
        else if (timeUnitAWfirst === "week") {
            marrAWfirst =  marrAWfirst * 52;
        }
        else if (timeUnitAWfirst === "day_O") {
            marrAWfirst =  marrAWfirst * 360;
        }
        else if (timeUnitAWfirst === "day_E") {
            marrAWfirst =  marrAWfirst * 365;
        }
        else if (timeUnitAWfirst === "biannual") {
            marrAWfirst =  marrAWfirst * 0.5;
        }


        amortizationAWfirst = (cashOutflowAWfirst * marrAWfirst) / (marrValueAWfirst * (1 - Math.pow(1 + marrAWfirst/marrValueAWfirst, -1 * marrValueAWfirst * cashInflowPeriodAWfirst))); 

        sinkingFundAWfirst = (marketValueAWfirst * marrAWfirst) / (marrValueAWfirst *(Math.pow((1 + marrAWfirst/marrValueAWfirst), (marrValueAWfirst * cashInflowPeriodAWfirst)) - 1)); 

        annualCapitalRecoveryAWfirst = amortizationAWfirst - sinkingFundAWfirst;
        
        annualWorthTotalFirst = cashInflowAWfirst - annualCapitalRecoveryAWfirst;

        message1AWfirst = "The annual worth of the revenues and expenditures is the value of the uniform cash inflow. </br>";
        message1AWfirst += "The amortization of the cash outflow is $" + round(amortizationAWfirst, 2).toFixed(2) + "<br>";
        message1AWfirst += "The sinking fund of the cash inflow is $" + round(sinkingFundAWfirst, 2).toFixed(2) + "<br>";
        message1AWfirst += "The annual capital recovery is $" + round(annualCapitalRecoveryAWfirst, 2).toFixed(2) + "<br>";
        message1AWfirst += "Therefore, the annual worth of the project is $" + round(annualWorthTotalFirst, 2).toFixed(2);

        if(annualWorthTotalFirst > 0){
            message2AWfirst = "Because the annual worth of the project is greater than zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(annualWorthTotalFirst === 0){
            message2AWfirst = "Because the annual worth of the project is equal to zero at that minimum attractive rate of return, the project is economically justified.";
        }

        if(annualWorthTotalFirst < 0){
            message2AWfirst = "Because the annual worth of the project is less than zero at that minimum attractive rate of return, the project is NOT economically justified.";
        }
        
        document.getElementById("message1AWfirst").innerHTML = message1AWfirst;
        document.getElementById("message2AWfirst").innerHTML = message2AWfirst;
}

// End Annual Worth Calculations



// Internal Rate of Return Calculations
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the Internal Rate of Return Method 
// 9th: Given: Year, Initial Cash Outflow, Even or Uneven Cash Inflows per Period
// To Calculate: Internal Rate of Return
document.getElementById("decisionNinth").addEventListener("submit", decisionNinth);

function decisionNinth(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowNinth = parseFloat(document.getElementById("cashOutflowNinth").value, 10) || 0,
        timeNinth = document.getElementById('timeNinth').value,
        timesNinth = timeNinth.split('\n'),
        sizeTimesNinth = timesNinth.length,
        cashInflowNinth = document.getElementById('cashInflowNinth').value,
        cashInflowsNinth = cashInflowNinth.split('\n'),
        sizeCashInflowsNinth = cashInflowsNinth.length,
        timesValueNinth = [],
        cashInflowValueNinth = [],
        cashInflowUnitNinth = document.getElementById("cashInflowUnitNinth").value,
        salvageValueNinth = parseFloat(document.getElementById("salvageValueNinth").value, 10) || 0,
        marrIRRfirst = parseFloat(document.getElementById("marrIRRfirst").value, 10) || 0,
        internalRateReturnNinth,
        internalRateReturnPercentNinth,
        message1IRRfirst,
        message2IRRfirst;

    
        if(sizeTimesNinth !== sizeCashInflowsNinth){
            alert("The size of the Year and the Cash Inflows must be equal.\nPlease check your data again.");
            quit();
        }

        
        timesValueNinth = timesNinth.map(Number);

        cashInflowValueNinth = cashInflowsNinth.map(Number);


    for (var j = 0; j < sizeCashInflowsNinth; j++) {
        if (cashInflowUnitNinth === "year") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 1;
        }
        if (cashInflowUnitNinth === "month") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 12;
        }
        if (cashInflowUnitNinth === "week") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 52;
        }
        if (cashInflowUnitNinth === "day_O") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 360;
        }
        if (cashInflowUnitNinth == "day_E") {
            cashInflowValueNinth[j] = cashInflowValueNinth[j] * 365;
        }
    }


    marrIRRfirst = marrIRRfirst / 100;

    cashInflowValueNinth[sizeCashInflowsNinth - 1] = cashInflowValueNinth[sizeCashInflowsNinth - 1] + salvageValueNinth;

    internalRateReturnNinth = formulajs.IRR([-1 * cashOutflowNinth, ...cashInflowValueNinth], marrIRRfirst);

    internalRateReturnPercentNinth = internalRateReturnNinth * 100;

    document.getElementById("internalRateReturnNinth").value = internalRateReturnNinth;
    document.getElementById("internalRateReturnPercentNinth").value = round(internalRateReturnPercentNinth, 4).toFixed(4);

    message1IRRfirst = "The internal rate of return of the project is " + round(internalRateReturnPercentNinth, 4).toFixed(4) + "%";

    if (internalRateReturnNinth > marrIRRfirst) {
        message2IRRfirst = "Because the internal rate of return is greater than the minimum attractive rate of return, the project is economically justified.";
    }

    if (internalRateReturnNinth === marrIRRfirst) {
        message2IRRfirst = "Because the internal rate of return is equal to the minimum attractive rate of return, the project is economically justified.";
    }

    if (internalRateReturnNinth < marrIRRfirst) {
        message2IRRfirst = "Because the internal rate of return is less than the minimum attractive rate of return, the project is NOT economically justified.";
    }

    document.getElementById("message1IRRfirst").innerHTML = message1IRRfirst;
    document.getElementById("message2IRRfirst").innerHTML = message2IRRfirst;
}
// End Internal Rate of Return Calculations



// Internal Rate of Return Calculations / Approximate Value / Interpolation Method
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the Internal Rate of Return Method 
document.getElementById("internalRateReturnSecond").addEventListener("submit", internalRateReturnSecond);

function internalRateReturnSecond(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowIRRsecond = parseFloat(document.getElementById("cashOutflowIRRsecond").value, 10) || 0,
        cashInflowIRRsecond = parseFloat(document.getElementById("cashInflowIRRsecond").value, 10) || 0,
        cashInflowPeriodIRRsecond = parseFloat(document.getElementById("cashInflowPeriodIRRsecond").value, 10) || 0,
        cashInflowPeriodUnitIRRsecond = document.getElementById("cashInflowPeriodUnitIRRsecond").value,
        marrIRRsecond = parseFloat(document.getElementById("marrIRRsecond").value, 10) || 0,
        cashInflowTimeUnitIRRsecond = document.getElementById("cashInflowTimeUnitIRRsecond").value,
        timeUnitIRRsecond = document.getElementById("timeUnitIRRsecond").value,
        marketValueIRRsecond = parseFloat(document.getElementById("marketValueIRRsecond").value, 10) || 0,
        marrValueIRRsecond,
        presentWorthIRRCashInflowSecond,
        presentWorthIRRMarketValueSecond,
        presentWorthIRRTotalSecond,
        trymarrIRRsecond,
        trypresentWorthIRRCashInflowSecond,
        trypresentWorthIRRMarketValueSecond,
        trypresentWorthIRRTotalSecond,
        numeratorIRRsecondCase,
        denominatorIRRsecondCase,
        iRRsecond,
        message1IRRsecond,
        message2IRRsecond;

        marrIRRsecond = marrIRRsecond / 100;
                
        
        if (cashInflowPeriodUnitIRRsecond === "years") {
            cashInflowPeriodIRRsecond = cashInflowPeriodIRRsecond / 1;
        }
        else if (cashInflowPeriodUnitIRRsecond === "months") {
            cashInflowPeriodIRRsecond = cashInflowPeriodIRRsecond / 12;
        }
        else if (cashInflowPeriodUnitIRRsecond === "weeks") {
            cashInflowPeriodIRRsecond = cashInflowPeriodIRRsecond / 52;
        }
        else if (cashInflowPeriodUnitIRRsecond === "days_O") {
            cashInflowPeriodIRRsecond = cashInflowPeriodIRRsecond / 360;
        }
        else if (cashInflowPeriodUnitIRRsecond === "days_E") {
            cashInflowPeriodIRRsecond = cashInflowPeriodIRRsecond / 365;
        }


        if (cashInflowTimeUnitIRRsecond === "year") {
            marrValueIRRsecond = 1;
        }
        else if (cashInflowTimeUnitIRRsecond === "semiannual") {
            marrValueIRRsecond = 2;
        }
        else if (cashInflowTimeUnitIRRsecond === "quarter") {
            marrValueIRRsecond = 4;
        }
        else if (cashInflowTimeUnitIRRsecond === "month") {
            marrValueIRRsecond = 12;
        }
        else if (cashInflowTimeUnitIRRsecond === "week") {
            marrValueIRRsecond = 52;
        }
        else if (cashInflowTimeUnitIRRsecond === "day_O") {
            marrValueIRRsecond = 360;
        }
        else if (cashInflowTimeUnitIRRsecond === "day_E") {
            marrValueIRRsecond = 365;
        }
        else if (cashInflowTimeUnitIRRsecond === "biannual") {
            marrValueIRRsecond = 0.5;
        }
        else if (cashInflowTimeUnitIRRsecond === "continuous") {
            marrValueIRRsecond = 1;
            marrIRRsecond = math.pow(Math.E, marrIRRsecond) - 1;

        }
        

        if (timeUnitIRRsecond === "year") {
            marrIRRsecond =  marrIRRsecond * 1;
        }
        else if (timeUnitIRRsecond === "semiannual") {
            marrIRRsecond =  marrIRRsecond * 2;
        }
        else if (timeUnitIRRsecond === "quarter") {
            marrIRRsecond =  marrIRRsecond * 4;
        }
        else if (timeUnitIRRsecond === "month") {
            marrIRRsecond =  marrIRRsecond * 12;
        }
        else if (timeUnitIRRsecond === "week") {
            marrIRRsecond =  marrIRRsecond * 52;
        }
        else if (timeUnitIRRsecond === "day_O") {
            marrIRRsecond =  marrIRRsecond * 360;
        }
        else if (timeUnitIRRsecond === "day_E") {
            marrIRRsecond =  marrIRRsecond * 365;
        }
        else if (timeUnitIRRsecond === "biannual") {
            marrIRRsecond =  marrIRRsecond * 0.5;
        }

        
        presentWorthIRRCashInflowSecond = (marrValueIRRsecond * cashInflowIRRsecond * (1 - Math.pow(1 + marrIRRsecond/marrValueIRRsecond, -1 * marrValueIRRsecond * cashInflowPeriodIRRsecond))) / marrIRRsecond;

        presentWorthIRRMarketValueSecond = marketValueIRRsecond / Math.pow((1 + marrIRRsecond/marrValueIRRsecond), (marrValueIRRsecond * cashInflowPeriodIRRsecond)); 

        presentWorthIRRTotalSecond = presentWorthIRRCashInflowSecond + presentWorthIRRMarketValueSecond - cashOutflowIRRsecond;

        if(presentWorthIRRTotalSecond > 0){
            trymarrIRRsecond = marrIRRsecond + 0.1;
            
            trypresentWorthIRRCashInflowSecond = (marrValueIRRsecond * cashInflowIRRsecond * (1 - Math.pow(1 + trymarrIRRsecond/marrValueIRRsecond, -1 * marrValueIRRsecond * cashInflowPeriodIRRsecond))) / trymarrIRRsecond;

            trypresentWorthIRRMarketValueSecond = marketValueIRRsecond / Math.pow((1 + trymarrIRRsecond/marrValueIRRsecond), (marrValueIRRsecond * cashInflowPeriodIRRsecond)); 

            trypresentWorthIRRTotalSecond = trypresentWorthIRRCashInflowSecond + trypresentWorthIRRMarketValueSecond - cashOutflowIRRsecond;

            numeratorIRRsecondCase = -1 * presentWorthIRRTotalSecond * (trymarrIRRsecond - marrIRRsecond);

            denominatorIRRsecondCase = trypresentWorthIRRTotalSecond - presentWorthIRRTotalSecond;

            iRRsecond = (numeratorIRRsecondCase / denominatorIRRsecondCase) + marrIRRsecond;
        }


        if(presentWorthIRRTotalSecond < 0){
            trymarrIRRsecond = marrIRRsecond - 0.1;
            
            trypresentWorthIRRCashInflowSecond = (marrValueIRRsecond * cashInflowIRRsecond * (1 - Math.pow(1 + trymarrIRRsecond/marrValueIRRsecond, -1 * marrValueIRRsecond * cashInflowPeriodIRRsecond))) / trymarrIRRsecond;

            trypresentWorthIRRMarketValueSecond = marketValueIRRsecond / Math.pow((1 + trymarrIRRsecond/marrValueIRRsecond), (marrValueIRRsecond * cashInflowPeriodIRRsecond)); 

            trypresentWorthIRRTotalSecond = trypresentWorthIRRCashInflowSecond + trypresentWorthIRRMarketValueSecond - cashOutflowIRRsecond;

            numeratorIRRsecondCase = -1 * presentWorthIRRTotalSecond * (trymarrIRRsecond - marrIRRsecond);

            denominatorIRRsecondCase = trypresentWorthIRRTotalSecond - presentWorthIRRTotalSecond;

            iRRsecond = (numeratorIRRsecondCase / denominatorIRRsecondCase) + marrIRRsecond;
        }


        if(presentWorthIRRTotalSecond === 0){
            
            iRRsecond = marrIRRsecond;
        }


        message1IRRsecond = "The internal rate of return of the project is " + round(iRRsecond * 100, 4).toFixed(4) + "%";

        if(iRRsecond > marrIRRsecond){
            message2IRRsecond = "Because the internal rate of return is greater than the minimum attractive rate of return, the project is economically justified.";
        }

        if(iRRsecond === marrIRRsecond){
            message2IRRsecond = "Because the internal rate of return is equal to the minimum attractive rate of return, the project is economically justified.";
        }

        if(iRRsecond < marrIRRsecond){
            message2IRRsecond = "Because the internal rate of return is less than the minimum attractive rate of return, the project is NOT economically justified.";
        }
        
        document.getElementById("message1IRRsecond").innerHTML = message1IRRsecond;
        document.getElementById("message2IRRsecond").innerHTML = message2IRRsecond;
}
// End Internal Rate of Return Calculations (Approximate Value/Interpolation Method)



// External Rate of Return Calculations
// Given: an investment amount/cash outflow, uniform cash inflows, salvage value
// To Determine: if the investment is economically justified using the External Rate of Return Method
document.getElementById("externalRateReturnFirst").addEventListener("submit", externalRateReturnFirst);

function externalRateReturnFirst(event) {
    event.preventDefault();
    event.stopPropagation();

    var cashOutflowERRfirst = parseFloat(document.getElementById("cashOutflowERRfirst").value, 10) || 0,
        cashInflowERRfirst = parseFloat(document.getElementById("cashInflowERRfirst").value, 10) || 0,
        cashInflowPeriodERRfirst = parseFloat(document.getElementById("cashInflowPeriodERRfirst").value, 10) || 0,
        cashInflowPeriodUnitERRfirst = document.getElementById("cashInflowPeriodUnitERRfirst").value,
        marrERRfirst = parseFloat(document.getElementById("marrERRfirst").value, 10) || 0,
        cashInflowTimeUnitERRfirst = document.getElementById("cashInflowTimeUnitERRfirst").value,
        timeUnitERRfirst = document.getElementById("timeUnitERRfirst").value,
        marketValueERRfirst = parseFloat(document.getElementById("marketValueERRfirst").value, 10) || 0,
        marrValueERRfirst,
        externalRateReturnCashInflowFirst,
        errFirst,
        errSecond,
        errThird,
        externalRateReturnCashOutflowInterestRateFirst,
        message1ERRfirst,
        message2ERRfirst;

        marrERRfirst = marrERRfirst / 100;
                
        
        if (cashInflowPeriodUnitERRfirst === "years") {
            cashInflowPeriodERRfirst = cashInflowPeriodERRfirst / 1;
        }
        else if (cashInflowPeriodUnitERRfirst === "months") {
            cashInflowPeriodERRfirst = cashInflowPeriodERRfirst / 12;
        }
        else if (cashInflowPeriodUnitERRfirst === "weeks") {
            cashInflowPeriodERRfirst = cashInflowPeriodERRfirst / 52;
        }
        else if (cashInflowPeriodUnitERRfirst === "days_O") {
            cashInflowPeriodERRfirst = cashInflowPeriodERRfirst / 360;
        }
        else if (cashInflowPeriodUnitERRfirst === "days_E") {
            cashInflowPeriodERRfirst = cashInflowPeriodERRfirst / 365;
        }


        if (cashInflowTimeUnitERRfirst === "year") {
            marrValueERRfirst = 1;
        }
        else if (cashInflowTimeUnitERRfirst === "semiannual") {
            marrValueERRfirst = 2;
        }
        else if (cashInflowTimeUnitERRfirst === "quarter") {
            marrValueERRfirst = 4;
        }
        else if (cashInflowTimeUnitERRfirst === "month") {
            marrValueERRfirst = 12;
        }
        else if (cashInflowTimeUnitERRfirst === "week") {
            marrValueERRfirst = 52;
        }
        else if (cashInflowTimeUnitERRfirst === "day_O") {
            marrValueERRfirst = 360;
        }
        else if (cashInflowTimeUnitERRfirst === "day_E") {
            marrValueERRfirst = 365;
        }
        else if (cashInflowTimeUnitERRfirst === "biannual") {
            marrValueERRfirst = 0.5;
        }
        else if (cashInflowTimeUnitERRfirst === "continuous") {
            marrValueERRfirst = 1;
            marrERRfirst = math.pow(Math.E, marrERRfirst) - 1;

        }
        

        if (timeUnitERRfirst === "year") {
            marrERRfirst =  marrERRfirst * 1;
        }
        else if (timeUnitERRfirst === "semiannual") {
            marrERRfirst =  marrERRfirst * 2;
        }
        else if (timeUnitERRfirst === "quarter") {
            marrERRfirst =  marrERRfirst * 4;
        }
        else if (timeUnitERRfirst === "month") {
            marrERRfirst =  marrERRfirst * 12;
        }
        else if (timeUnitERRfirst === "week") {
            marrERRfirst =  marrERRfirst * 52;
        }
        else if (timeUnitERRfirst === "day_O") {
            marrERRfirst =  marrERRfirst * 360;
        }
        else if (timeUnitERRfirst === "day_E") {
            marrERRfirst =  marrERRfirst * 365;
        }
        else if (timeUnitERRfirst === "biannual") {
            marrERRfirst =  marrERRfirst * 0.5;
        }


        externalRateReturnCashInflowFirst = marrValueERRfirst * cashInflowERRfirst * ((Math.pow((1 + marrERRfirst/marrValueERRfirst), (marrValueERRfirst * cashInflowPeriodERRfirst)) - 1) / marrERRfirst);

        errFirst = (externalRateReturnCashInflowFirst + marketValueERRfirst) / cashOutflowERRfirst;

        errSecond = 1 / (marrValueERRfirst * cashInflowPeriodERRfirst);

        errThird = Math.pow(errFirst, errSecond);
        
        externalRateReturnCashOutflowInterestRateFirst = marrValueERRfirst * (errThird - 1);

        message1ERRfirst = "The future worth of all the uniform cash inflows is $" + round(externalRateReturnCashInflowFirst, 2).toFixed(2) + "<br>";
        message1ERRfirst += "The future worth of the market value is is the value of the market value because it is a future value. </br>";
        message1ERRfirst += "The interest rate of the future worth of the cash outflow that will give the sum of the future worth of all the uniform cash inflows and the future worth of the market value is the ERR <br>";
        message1ERRfirst += "The External Rate of Return (ERR) is " + round(externalRateReturnCashOutflowInterestRateFirst * 100, 4).toFixed(4) + "%";

        if(externalRateReturnCashOutflowInterestRateFirst > marrERRfirst){
            message2ERRfirst = "Because the external rate of return is greater than the minimum attractive rate of return, the project is economically justified.";
        }

        if(externalRateReturnCashOutflowInterestRateFirst === marrERRfirst){
            message2ERRfirst = "Because the external rate of return is equal to the minimum attractive rate of return, the project is economically justified.";
        }

        if(externalRateReturnCashOutflowInterestRateFirst < marrERRfirst){
            message2ERRfirst = "Because the external rate of return is less than the minimum attractive rate of return, the project is NOT economically justified.";
        }
        
        document.getElementById("message1ERRfirst").innerHTML = message1ERRfirst;
        document.getElementById("message2ERRfirst").innerHTML = message2ERRfirst;
}

// End External Rate of Return Calculations
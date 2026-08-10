// Copyright 2019 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com

// https://samdomforpeace.com/
// www.samdomforpeace.com/nonparametricStatistics/nonparametricTests.html
// message 10

"use strict";
//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});


// Student Critical T Values
// Reference for some functions/formulas: John C. Pezzullo @ http://statpages.info/scicalc.html
function CHISQ(x, n) {
    if (x > 1000 | n > 1000) {
        var q = NORM((Math.pow(x / n, 1 / 3) + 2 / (9 * n) - 1) / Math.sqrt(2 / (9 * n))) / 2;
        if (x > n) {
            return q;
        }
        {
            return 1 - q;
        }
    }
    var p = Math.exp(-0.5 * x);
    if ((n % 2) === 1) {
        p = p * Math.sqrt(2 * x / Math.PI);
    }
    var k = n;
    while (k >= 2) {
        p = p * x / k;
        k = k - 2;
    }
    var t = p;
    var a = n;
    while (t > 1e-15 * p) {
        a = a + 2;
        t = t * x / a;
        p = p + t;
    }
    return 1 - p;
}

function NORM(z) {
    var q = z * z;
    if (Math.abs(z) > 7) {
        return (1 - 1 / q + 3 / (q * q)) * Math.exp(-q / 2) / (Math.abs(z) * Math.sqrt(Math.PI / 2));
    } else {
        return CHISQ(q, 1);
    }
}

function ANORM(p) {
    var v = 0.5;
    var dv = 0.5;
    var z = 0;
    while (dv > 1e-15) {
        z = 1 / v - 1;
        dv = dv / 2;
        if (NORM(z) > p) {
            v = v - dv;
        } else {
            v = v + dv;
        }
    }
    return z;
}

function GAUSS(z) {
    return ((z < 0) ? ((z < -10) ? 0 : CHISQ(z * z, 1) / 2) : ((z > 10) ? 1 : 1 - CHISQ(z * z, 1) / 2));
}

function ACHISQ(p, n) {
    var v = 0.5;
    var dv = 0.5;
    var x = 0;
    while (dv > 1e-15) {
        x = 1 / v - 1;
        dv = dv / 2;
        if (CHISQ(x, n) > p) {
            v = v - dv;
        } else {
            v = v + dv;
        }
    }
    return x;
}

function AGAUSS(p) {
    if (p > 0.5) {
        return Math.sqrt(ACHISQ(2 * (1 - p), 1));
    } else {
        return -1*Math.sqrt(ACHISQ((2 * p, 1)));
    }
}

function STATCOM(q, i, j, b) {
    var g = 1;
    var z = g;
    var k = i;
    while (k <= j) {
        g = g * q * k / (k - b);
        z = z + g;
        k = k + 2;
    }
    return z;
}

function STUDT(t, df) {
    t = Math.abs(t);
    var w = t / Math.sqrt(df);
    var th = Math.atan(w);
    if (df === 1) {
        return 1 - th / (Math.PI / 2);
    }
    var sth = Math.sin(th);
    var cth = Math.cos(th);
    if ((df % 2) === 1)
    {
        return 1 - (th + sth * cth * STATCOM(cth * cth, 2, df - 3, -1)) / (Math.PI / 2);
    } else
    {
        return 1 - sth * STATCOM(cth * cth, 1, df - 3, -1);
    }
}

function INVSTUDT(p, df) {
    var v = 0.5;
    var dv = 0.5;
    var t = 0;
    while (dv > 1e-15) {
        t = 1 / v - 1;
        dv = dv / 2;
        if (STUDT(t, df) > p) {
            v = v - dv;
        } else {
            v = v + dv;
        }
    }
    return t;
}


document.getElementById("correlationCoefficientLeft").addEventListener("submit", correlationCoefficientLeft);

function correlationCoefficientLeft(event) {
    event.preventDefault();

    var datasetX1Left = document.getElementById('datasetX1Left').value,
        datasetYLeft = document.getElementById('datasetYLeft').value,
        significanceLevelCorrelationLeft = parseFloat(document.getElementById("significanceLevelCorrelationLeft").value, 10) || 0,
        significanceLevelUnitCorrelationLeft = document.getElementById("significanceLevelUnitCorrelationLeft").value,
        dataX1Left = datasetX1Left.split('\n'),
        dataYLeft = datasetYLeft.split('\n'),
        sampleSizeXLeft = dataX1Left.length,
        sampleSizeYLeft = dataYLeft.length,
        sampleSizeCorrelationLeft,
        sumXLeft = 0,
        sumYLeft = 0,
        meanXLeft,
        meanYLeft,
        differenceXLeft = [],
        differenceYLeft = [],
        squareXLeft = [],
        squareYLeft = [],
        sumSquareXLeft = 0,
        sumSquareYLeft = 0,
        standardDeviationXLeft,
        standardDeviationYLeft,
        differenceDeviationXLeft = [],
        differenceDeviationYLeft = [],
        productXYLeft = [],
        productLeft = 0,
        pearsonCorrelationCoefficientLeft,
        degreesFreedomCorrelationLeft,
        testStatisticCorrelationLeft,
        criticalTCorrelationLeft,
        criticalValueCorrelationLeft,
        decisionCriticalValueCorrelationLeft,
        pValueCorrelationLeft,
        decisionPvalueCorrelationLeft,
        conclusionCorrelationLeft;
        
        
        if (sampleSizeXLeft !== sampleSizeYLeft){
            alert("The two sample sizes must be the same");
        }
        
        sampleSizeCorrelationLeft = sampleSizeYLeft;
        
    document.getElementById("sampleSizeCorrelationLeft").innerHTML = "The sample size is " + sampleSizeCorrelationLeft;
        
        for (var i=0; i < sampleSizeXLeft, i < sampleSizeYLeft; i++){
            sumXLeft += parseFloat(dataX1Left[i]);
            meanXLeft = sumXLeft / sampleSizeXLeft;
            
            sumYLeft += parseFloat(dataYLeft[i]);
            meanYLeft = sumYLeft / sampleSizeYLeft;
        }
        
        for (var i=0; i < sampleSizeXLeft, i < sampleSizeYLeft; i++){
            differenceXLeft[i] = dataX1Left[i] - meanXLeft;
            squareXLeft[i] = Math.pow(differenceXLeft[i], 2);
            sumSquareXLeft += parseFloat(squareXLeft[i]);
            standardDeviationXLeft = Math.sqrt((sumSquareXLeft) / (sampleSizeXLeft - 1));
    
            differenceYLeft[i] = dataYLeft[i] - meanYLeft;
            squareYLeft[i] = Math.pow(differenceYLeft[i], 2);
            sumSquareYLeft += parseFloat(squareYLeft[i]);
            standardDeviationYLeft = Math.sqrt((sumSquareYLeft) / (sampleSizeYLeft - 1));
        }
        
        for (var i=0; i < sampleSizeXLeft, i < sampleSizeYLeft; i++) {
            differenceDeviationXLeft[i] = differenceXLeft[i] / standardDeviationXLeft;
            
            differenceDeviationYLeft[i] = differenceYLeft[i] / standardDeviationYLeft;
            
            productXYLeft[i] = differenceDeviationXLeft[i] * differenceDeviationYLeft[i];
    
            productLeft += parseFloat(productXYLeft[i]);
        }
        
                
        pearsonCorrelationCoefficientLeft = productLeft / (sampleSizeXLeft - 1);
        
    document.getElementById("pearsonCorrelationCoefficientLeft").innerHTML = "The Pearson linear correlation coefficient is " + pearsonCorrelationCoefficientLeft;
                       
        
        degreesFreedomCorrelationLeft = sampleSizeCorrelationLeft - 2;
                       
        if (significanceLevelUnitCorrelationLeft === "percent") {
            significanceLevelCorrelationLeft = significanceLevelCorrelationLeft / 100;
        }
        
        criticalTCorrelationLeft = INVSTUDT(2 * significanceLevelCorrelationLeft, degreesFreedomCorrelationLeft);
        
        criticalValueCorrelationLeft = -1 * Math.sqrt(Math.pow(criticalTCorrelationLeft, 2)/(Math.pow(criticalTCorrelationLeft, 2) + degreesFreedomCorrelationLeft));
        
        if ((pearsonCorrelationCoefficientLeft < 0) &&  (pearsonCorrelationCoefficientLeft < criticalValueCorrelationLeft)){
            decisionCriticalValueCorrelationLeft = "Critical Value Method: The Pearson linear correlation coefficient is less than or equal to the critical value of the correlation coefficient. <br>";
            decisionCriticalValueCorrelationLeft += "Reject the null hypothesis";
            conclusionCorrelationLeft = "Conclusion: There is sufficient evidence to support the claim of a negative linear correlation";
        }
        else if ((pearsonCorrelationCoefficientLeft < 0) && (pearsonCorrelationCoefficientLeft > criticalValueCorrelationLeft)) {
            decisionCriticalValueCorrelationLeft = "Critical Value Method: The Pearson linear correlation coefficient is greater than the critical value of the correlation coefficient. <br>";
            decisionCriticalValueCorrelationLeft += "Do not reject the null hypothesis";
            conclusionCorrelationLeft = "Conclusion: There is insufficient evidence to support the claim of a negative linear correlation";
        }
        
        testStatisticCorrelationLeft = pearsonCorrelationCoefficientLeft / Math.sqrt((1 - Math.pow(pearsonCorrelationCoefficientLeft, 2)) / (sampleSizeCorrelationLeft - 2));
        
        pValueCorrelationLeft = STUDT(testStatisticCorrelationLeft, degreesFreedomCorrelationLeft) / 2;
                  
    
        if ((pearsonCorrelationCoefficientLeft < 0) && (pValueCorrelationLeft <= significanceLevelCorrelationLeft)){
            decisionPvalueCorrelationLeft = "P-value Method: The P-value is less than or equal to the significance level <br>";
            decisionPvalueCorrelationLeft += "Reject the null hypothesis";
            conclusionCorrelationLeft = "Conclusion: There is sufficient evidence to support the claim of a negative linear correlation";
        }
        else if ((pearsonCorrelationCoefficientLeft < 0) && (pValueCorrelationLeft > significanceLevelCorrelationLeft)) {
            decisionPvalueCorrelationLeft = "P-value Method: The P-value is greater than the significance level <br>";
            decisionPvalueCorrelationLeft += "Do not reject the null hypothesis";
            conclusionCorrelationLeft = "Conclusion: There is insufficient evidence to support the claim of a negative linear correlation";
        }
       
    
    document.getElementById("degreesFreedomCorrelationLeft").innerHTML = "The degrees of freedom is " + degreesFreedomCorrelationLeft;
    document.getElementById("criticalValueCorrelationLeft").innerHTML = "The critical value of the correlation coefficient is " + criticalValueCorrelationLeft;
    document.getElementById("testStatisticCorrelationLeft").innerHTML = "The test statistic used in determining the P-value is " + testStatisticCorrelationLeft;
    document.getElementById("pValueCorrelationLeft").innerHTML = "The P-value is " + pValueCorrelationLeft;
    document.getElementById("decisionCriticalValueCorrelationLeft").innerHTML = decisionCriticalValueCorrelationLeft;
    document.getElementById("decisionPvalueCorrelationLeft").innerHTML = decisionPvalueCorrelationLeft;
    document.getElementById("conclusionCorrelationLeft").innerHTML = conclusionCorrelationLeft;
}





  
        





       




       
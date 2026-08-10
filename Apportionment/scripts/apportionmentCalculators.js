// Copyright 2020 - Samuel Dominic Chukwuemeka (Samdom For Peace)
// www.samuelchukwuemeka.com
// www.chukwuemekasamuel.com
// www.samdomforpeace.com

// https://samdomforpeace.com/
// www.samdomforpeace.com/Apportionment/apportionment.html
// message 10

"use strict";
//Resize the textarea
$('textarea').on('input', function() {
  $(this).outerHeight(75).outerHeight(this.scrollHeight);
});

//Apportionment Calculator
document.getElementById("apportionmentCalculator").addEventListener("submit", apportionmentCalculator);

function apportionmentCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var items = parseFloat(document.getElementById("items").value, 10),
            dataSampleSizes = document.getElementById('dataSampleSizes').value,
            sampleSizes = dataSampleSizes.split('\n'),
            numberSampleSizes = sampleSizes.length,
            standardDivisor,
            sumSampleSizes = 0,
            standardQuotas = [],
            lowerQuotas = [],
            normalQuotas = [],
            upperQuotas = [],
            sumLowerQuotas = 0,
            sumNormalQuotas = 0,
            sumUpperQuotas = 0,
            messageStandardQuotas,
            messageLowerQuotas,
            messageNormalQuotas,
            messageUpperQuotas;

    document.getElementById("numberSampleSizes").value = numberSampleSizes;

    for (var i = 0; i < numberSampleSizes; i++) {
        sumSampleSizes += parseFloat(sampleSizes[i]);
    }

    standardDivisor = sumSampleSizes / items;

    document.getElementById("standardDivisor").value = standardDivisor;

    for (var i = 0; i < numberSampleSizes; i++) {
        standardQuotas[i] = sampleSizes[i] / standardDivisor;
        lowerQuotas[i] = math.floor(standardQuotas[i]);
        sumLowerQuotas += parseFloat(lowerQuotas[i]);
        normalQuotas[i] = Math.round(standardQuotas[i]);
        sumNormalQuotas += parseFloat(normalQuotas[i]);
        if (standardQuotas[i] % 1 === 0) {
            upperQuotas[i] = math.ceil(standardQuotas[i] + 1);
        } else {
            upperQuotas[i] = math.ceil(standardQuotas[i]);
        }
        sumUpperQuotas += parseFloat(upperQuotas[i]);
    }
        
    document.getElementById("standardQuotas").value = standardQuotas.join("\n");
           
    document.getElementById("lowerQuotas").value = lowerQuotas.join("\n");  
    
    document.getElementById("sumLowerQuotas").value = sumLowerQuotas;  
    
    document.getElementById("normalQuotas").value = normalQuotas.join("\n"); 
    
    document.getElementById("sumNormalQuotas").value = sumNormalQuotas; 
    
    document.getElementById("upperQuotas").value = upperQuotas.join("\n");
    
    document.getElementById("sumUpperQuotas").value = sumUpperQuotas; 
    
    if (standardQuotas[i] % 1 !== 0) {
        messageStandardQuotas = "The standard quota is not an integer. It is a decimal. <br>";
        messageStandardQuotas += "We cannot apportion *decimal items* because the items are indivisible. <br>";
        messageStandardQuotas += "Let us round down the standard quotas...use Lower Quotas";
    }
        
    if (sumLowerQuotas < items) {
        messageLowerQuotas = "The sum of the lower quotas is less than the number of items to be apportioned <br>";
        messageLowerQuotas += "Let us round the standard quotas normally...use Normal Quotas";
    } else if (sumLowerQuotas === items) {
        messageLowerQuotas = "The sum of the lower quotas is equal to the number of items to be apportioned <br>";
        messageLowerQuotas += "This is nice! <br>";
        messageLowerQuotas += "<u>Apportion the lower quotas in that order</u>";
    }
    
    if (sumNormalQuotas < items) {
        messageNormalQuotas = "The sum of the normal quotas is less than the number of items to be apportioned <br>";
        messageNormalQuotas += "Let us round up the standard quotas...use Upper Quotas";
    } else if (sumNormalQuotas === items) {
        messageNormalQuotas = "The sum of the normal quotas is equal to the number of items to be apportioned <br>";
        messageNormalQuotas += "This is nice! <br>";
        messageNormalQuotas += "<u>Apportion the normal quotas in that order</u>";
    } else if (sumNormalQuotas > items) {
        messageNormalQuotas = "The sum of the normal quotas is greater than the number of items to be apportioned <br>";
        messageNormalQuotas += "The standard divisor did not work. We have to use a modified divisor and try again.";
    }
    
    if (sumUpperQuotas > items && sumNormalQuotas !== items && sumLowerQuotas !== items) {
        messageUpperQuotas = "The sum of the upper quotas is greater than the number of items to be apportioned <br>";
        messageUpperQuotas += "The standard divisor did not work. We have to use a modified divisor and try again.";
    } else if (sumUpperQuotas > items && (sumNormalQuotas === items || sumLowerQuotas === items)) {
        messageUpperQuotas = "The sum of the upper quotas is greater than the number of items to be apportioned <br>";
        messageUpperQuotas += "Use the quota whose sum is equal to the number of items to be apportioned";
    } else if (sumUpperQuotas === items) {
        messageUpperQuotas = "The sum of the upper quotas is equal to the number of items to be apportioned <br>";
        messageUpperQuotas += "This is nice! <br>";
        messageUpperQuotas += "<u>Apportion the upper quotas in that order</u>";
    }
    
    document.getElementById("messageStandardQuotas").innerHTML = messageStandardQuotas;
    
    document.getElementById("messageLowerQuotas").innerHTML = messageLowerQuotas;
    
    document.getElementById("messageNormalQuotas").innerHTML = messageNormalQuotas;
    
    document.getElementById("messageUpperQuotas").innerHTML = messageUpperQuotas;
}



//Hamilton's Method Calculator
document.getElementById("hamiltonCalculator").addEventListener("submit", hamiltonCalculator);

function hamiltonCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsHamilton = parseFloat(document.getElementById("itemsHamilton").value, 10),
            dataSampleSizesHamilton = document.getElementById('dataSampleSizesHamilton').value,
            sampleSizesHamilton = dataSampleSizesHamilton.split('\n'),
            numberSampleSizesHamilton = sampleSizesHamilton.length,
            standardDivisorHamilton,
            sumSampleSizesHamilton = 0,
            standardQuotasHamilton = [],
            lowerQuotasHamilton = [],
            decimals = [],
            decimalPlaces, 
            decimalPartHamilton = [],
            sumLowerQuotasHamilton = 0,
            remainingItemsHamilton,
            messageStandardQuotasHamilton,
            messageLowerQuotasHamilton;
            
            
    document.getElementById("numberSampleSizesHamilton").value = numberSampleSizesHamilton;

    for (var i = 0; i < numberSampleSizesHamilton; i++) {
        sumSampleSizesHamilton += parseFloat(sampleSizesHamilton[i]);
    }

    standardDivisorHamilton = sumSampleSizesHamilton / itemsHamilton;

    document.getElementById("standardDivisorHamilton").value = standardDivisorHamilton;

    for (var i = 0; i < numberSampleSizesHamilton; i++) {
        standardQuotasHamilton[i] = sampleSizesHamilton[i] / standardDivisorHamilton;
        lowerQuotasHamilton[i] = math.floor(standardQuotasHamilton[i]);
        sumLowerQuotasHamilton += parseFloat(lowerQuotasHamilton[i]);
        decimals[i] = standardQuotasHamilton[i] - Math.floor(standardQuotasHamilton[i]);
        decimalPlaces = standardQuotasHamilton[i].toString().split('.')[1].length;
        decimalPartHamilton[i] = decimals[i].toFixed(decimalPlaces);
    }
    
    remainingItemsHamilton = itemsHamilton - sumLowerQuotasHamilton;
    
    document.getElementById("standardQuotasHamilton").value = standardQuotasHamilton.join("\n");
       
    document.getElementById("lowerQuotasHamilton").value = lowerQuotasHamilton.join("\n");  
    
    document.getElementById("sumLowerQuotasHamilton").value = sumLowerQuotasHamilton;  
          
        
    if (standardQuotasHamilton[i] % 1 !== 0) {
        messageStandardQuotasHamilton = "The standard quota is not an integer. It is a decimal. <br>";
        messageStandardQuotasHamilton += "We cannot apportion *decimal items* because the items are indivisible. <br>";
        messageStandardQuotasHamilton += "Let us round down the standard quotas...use Lower Quotas";
    }
    
    if (sumLowerQuotasHamilton < itemsHamilton) {
        messageLowerQuotasHamilton = "The sum of the lower quotas is less than the number of items to be apportioned <br>";
        messageLowerQuotasHamilton += "We will assign the lower quotas to their respective samples <br>";
        messageLowerQuotasHamilton += "Then, we get the remaining items <br>";
        messageLowerQuotasHamilton += "Then, we get the decimal parts of the standard quotas and arrange them in descending order <br>";
        messageLowerQuotasHamilton += "Then, we assign the remaining items to the samples with the decimal parts arranged in descending order until it is finished";
    } else if (sumLowerQuotasHamilton === itemsHamilton) {
        messageLowerQuotasHamilton = "The sum of the lower quotas is equal to the number of items to be apportioned <br>";
        messageLowerQuotasHamilton += "This is nice! <br>";
        messageLowerQuotasHamilton += "<u>Apportion the lower quotas in that order</u>";
    }
    
        
    document.getElementById("messageStandardQuotasHamilton").innerHTML = messageStandardQuotasHamilton;
    
    document.getElementById("messageLowerQuotasHamilton").innerHTML = messageLowerQuotasHamilton;
    
    document.getElementById("decimalPartHamilton").value = decimalPartHamilton.join("\n"); 
    
    document.getElementById("remainingItemsHamilton").value = remainingItemsHamilton;
    
}



//Jefferson's Method Calculator
document.getElementById("jeffersonCalculator").addEventListener("submit", jeffersonCalculator);

function jeffersonCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsJefferson = parseFloat(document.getElementById("itemsJefferson").value, 10),
            dataSampleSizesJefferson = document.getElementById('dataSampleSizesJefferson').value,
            sampleSizesJefferson = dataSampleSizesJefferson.split('\n'),
            numberSampleSizesJefferson = sampleSizesJefferson.length,
            standardDivisorJefferson,
            sumSampleSizesJefferson = 0,
            standardQuotasJefferson = [],
            lowerQuotasJefferson = [],
            sumLowerQuotasJefferson = 0,
            messageLowerQuotasJefferson;

    document.getElementById("numberSampleSizesJefferson").value = numberSampleSizesJefferson;

    for (var i = 0; i < numberSampleSizesJefferson; i++) {
        sumSampleSizesJefferson += parseFloat(sampleSizesJefferson[i]);
    }

    standardDivisorJefferson = sumSampleSizesJefferson / itemsJefferson;

    document.getElementById("standardDivisorJefferson").value = standardDivisorJefferson;

    for (var i = 0; i < numberSampleSizesJefferson; i++) {
        standardQuotasJefferson[i] = sampleSizesJefferson[i] / standardDivisorJefferson;
        lowerQuotasJefferson[i] = math.floor(standardQuotasJefferson[i]);
        sumLowerQuotasJefferson += parseFloat(lowerQuotasJefferson[i]);
    }
    
        
    document.getElementById("standardQuotasJefferson").value = standardQuotasJefferson.join("\n");
           
    document.getElementById("lowerQuotasJefferson").value = lowerQuotasJefferson.join("\n");  
    
    document.getElementById("sumLowerQuotasJefferson").value = sumLowerQuotasJefferson;  
    
            
    if (sumLowerQuotasJefferson < itemsJefferson) {
        messageLowerQuotasJefferson = "The sum of the lower quotas is less than the number of items to be apportioned <br>";
        messageLowerQuotasJefferson += "We have to use a modified divisor <br>";
        messageLowerQuotasJefferson += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
        messageLowerQuotasJefferson += "Begin with a lower standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
        
    } else if (sumLowerQuotasJefferson === itemsJefferson) {
        messageLowerQuotasJefferson = "The sum of the lower quotas is equal to the number of items to be apportioned <br>";
        messageLowerQuotasJefferson += "This is nice! <br>";
        messageLowerQuotasJefferson += "<u>Apportion the lower quotas in that order</u>";
    }
    
    
    document.getElementById("messageLowerQuotasJefferson").innerHTML = messageLowerQuotasJefferson;
}



//Modified Jefferson's Method Calculator
document.getElementById("modifiedJeffersonCalculator").addEventListener("submit", modifiedJeffersonCalculator);

function modifiedJeffersonCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var modifiedItemsJefferson = parseFloat(document.getElementById("modifiedItemsJefferson").value, 10),
            modifiedDivisorJefferson = parseFloat(document.getElementById("modifiedDivisorJefferson").value, 10),
            modifiedDataSampleSizesJefferson = document.getElementById('modifiedDataSampleSizesJefferson').value,
            modifiedSampleSizesJefferson = modifiedDataSampleSizesJefferson.split('\n'),
            modifiedNumberSampleSizesJefferson = modifiedSampleSizesJefferson.length,
            modifiedSumSampleSizesJefferson = 0,
            modifiedStandardQuotasJefferson = [],
            modifiedLowerQuotasJefferson = [],
            modifiedSumLowerQuotasJefferson = 0,
            modifiedMessageLowerQuotasJefferson;

    document.getElementById("modifiedNumberSampleSizesJefferson").value = modifiedNumberSampleSizesJefferson;

    for (var i = 0; i < modifiedNumberSampleSizesJefferson; i++) {
        modifiedSumSampleSizesJefferson += parseFloat(modifiedSampleSizesJefferson[i]);
    }

    
    for (var i = 0; i < modifiedNumberSampleSizesJefferson; i++) {
        modifiedStandardQuotasJefferson[i] = modifiedSampleSizesJefferson[i] / modifiedDivisorJefferson;
        modifiedLowerQuotasJefferson[i] = math.floor(modifiedStandardQuotasJefferson[i]);
        modifiedSumLowerQuotasJefferson += parseFloat(modifiedLowerQuotasJefferson[i]);
    }
    
        
    document.getElementById("modifiedStandardQuotasJefferson").value = modifiedStandardQuotasJefferson.join("\n");
           
    document.getElementById("modifiedLowerQuotasJefferson").value = modifiedLowerQuotasJefferson.join("\n");  
    
    document.getElementById("modifiedSumLowerQuotasJefferson").value = modifiedSumLowerQuotasJefferson;  
    
            
    if (modifiedSumLowerQuotasJefferson > modifiedItemsJefferson) {
        modifiedMessageLowerQuotasJefferson = "The sum of the modified lower quotas is greater than the number of items to be apportioned <br>";
        modifiedMessageLowerQuotasJefferson += "Try a bigger modified divisor and Click the \"Calculate\" button";
    } else if (modifiedSumLowerQuotasJefferson === modifiedItemsJefferson) {
        modifiedMessageLowerQuotasJefferson = "The sum of the modified lower quotas is equal to the number of items to be apportioned <br>";
        modifiedMessageLowerQuotasJefferson += "This is nice! <br>";
        modifiedMessageLowerQuotasJefferson += "<u>Apportion the modified lower quotas in that order</u>";
    } else if (modifiedSumLowerQuotasJefferson < modifiedItemsJefferson) {
        modifiedMessageLowerQuotasJefferson = "The sum of the modified lower quotas is still less than the number of items to be apportioned <br>";
        modifiedMessageLowerQuotasJefferson += "Try a smaller modified divisor and Click the \"Calculate\" button";
    }
    
    
    document.getElementById("modifiedMessageLowerQuotasJefferson").innerHTML = modifiedMessageLowerQuotasJefferson;
}




//Adams's Method Calculator
document.getElementById("adamsCalculator").addEventListener("submit", adamsCalculator);

function adamsCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsAdams = parseFloat(document.getElementById("itemsAdams").value, 10),
            dataSampleSizesAdams = document.getElementById('dataSampleSizesAdams').value,
            sampleSizesAdams = dataSampleSizesAdams.split('\n'),
            numberSampleSizesAdams = sampleSizesAdams.length,
            standardDivisorAdams,
            sumSampleSizesAdams = 0,
            standardQuotasAdams = [],
            upperQuotasAdams = [],
            sumUpperQuotasAdams = 0,
            messageUpperQuotasAdams;

    document.getElementById("numberSampleSizesAdams").value = numberSampleSizesAdams;

    for (var i = 0; i < numberSampleSizesAdams; i++) {
        sumSampleSizesAdams += parseFloat(sampleSizesAdams[i]);
    }

    standardDivisorAdams = sumSampleSizesAdams / itemsAdams;

    document.getElementById("standardDivisorAdams").value = standardDivisorAdams;

    for (var i = 0; i < numberSampleSizesAdams; i++) {
        standardQuotasAdams[i] = sampleSizesAdams[i] / standardDivisorAdams;
        if (standardQuotasAdams[i] % 1 === 0) {
            upperQuotasAdams[i] = math.ceil(standardQuotasAdams[i] + 1);
        } else {
            upperQuotasAdams[i] = math.ceil(standardQuotasAdams[i]);
        }
        sumUpperQuotasAdams += parseFloat(upperQuotasAdams[i]);
    }
    
        
    document.getElementById("standardQuotasAdams").value = standardQuotasAdams.join("\n");
           
    document.getElementById("upperQuotasAdams").value = upperQuotasAdams.join("\n");  
    
    document.getElementById("sumUpperQuotasAdams").value = sumUpperQuotasAdams;  
    
            
    if (sumUpperQuotasAdams > itemsAdams) {
        messageUpperQuotasAdams = "The sum of the upper quotas is greater than the number of items to be apportioned <br>";
        messageUpperQuotasAdams += "We have to use a modified divisor <br>";
        messageUpperQuotasAdams += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
        messageUpperQuotasAdams += "Begin with a higher standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
    } else if (sumUpperQuotasAdams === itemsAdams) {
        messageUpperQuotasAdams = "The sum of the upper quotas is equal to the number of items to be apportioned <br>";
        messageUpperQuotasAdams += "This is nice! <br>";
        messageUpperQuotasAdams += "<u>Apportion the upper quotas in that order</u>";
    }
    
    
    document.getElementById("messageUpperQuotasAdams").innerHTML = messageUpperQuotasAdams;
}



//Modified Adams's Method Calculator
document.getElementById("modifiedAdamsCalculator").addEventListener("submit", modifiedAdamsCalculator);

function modifiedAdamsCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var modifiedItemsAdams = parseFloat(document.getElementById("modifiedItemsAdams").value, 10),
            modifiedDivisorAdams = parseFloat(document.getElementById("modifiedDivisorAdams").value, 10),
            modifiedDataSampleSizesAdams = document.getElementById('modifiedDataSampleSizesAdams').value,
            modifiedSampleSizesAdams = modifiedDataSampleSizesAdams.split('\n'),
            modifiedNumberSampleSizesAdams = modifiedSampleSizesAdams.length,
            modifiedSumSampleSizesAdams = 0,
            modifiedStandardQuotasAdams = [],
            modifiedUpperQuotasAdams = [],
            modifiedSumUpperQuotasAdams = 0,
            modifiedMessageUpperQuotasAdams;

    document.getElementById("modifiedNumberSampleSizesAdams").value = modifiedNumberSampleSizesAdams;

    for (var i = 0; i < modifiedNumberSampleSizesAdams; i++) {
        modifiedSumSampleSizesAdams += parseFloat(modifiedSampleSizesAdams[i]);
    }

    
    for (var i = 0; i < modifiedNumberSampleSizesAdams; i++) {
        modifiedStandardQuotasAdams[i] = modifiedSampleSizesAdams[i] / modifiedDivisorAdams;
        if (modifiedStandardQuotasAdams[i] % 1 === 0) {
            modifiedUpperQuotasAdams[i] = math.ceil(modifiedStandardQuotasAdams[i] + 1);
        } else {
            modifiedUpperQuotasAdams[i] = math.ceil(modifiedStandardQuotasAdams[i]);
        }
        modifiedSumUpperQuotasAdams += parseFloat(modifiedUpperQuotasAdams[i]);
    }
    
        
    document.getElementById("modifiedStandardQuotasAdams").value = modifiedStandardQuotasAdams.join("\n");
           
    document.getElementById("modifiedUpperQuotasAdams").value = modifiedUpperQuotasAdams.join("\n");  
    
    document.getElementById("modifiedSumUpperQuotasAdams").value = modifiedSumUpperQuotasAdams;  
    
            
    if (modifiedSumUpperQuotasAdams > modifiedItemsAdams) {
        modifiedMessageUpperQuotasAdams = "The sum of the modified upper quotas is greater than the number of items to be apportioned <br>";
        modifiedMessageUpperQuotasAdams += "Try a bigger modified divisor and Click the \"Calculate\" button";
    } else if (modifiedSumUpperQuotasAdams === modifiedItemsAdams) {
        modifiedMessageUpperQuotasAdams = "The sum of the modified upper quotas is equal to the number of items to be apportioned <br>";
        modifiedMessageUpperQuotasAdams += "This is nice! <br>";
        modifiedMessageUpperQuotasAdams += "<u>Apportion the modified upper quotas in that order</u>";
    } else if (modifiedSumUpperQuotasAdams < modifiedItemsAdams) {
        modifiedMessageUpperQuotasAdams = "The sum of the modified upper quotas is still less than the number of items to be apportioned <br>";
        modifiedMessageUpperQuotasAdams += "Try a smaller modified divisor and Click the \"Calculate\" button";
    }
    
    
    document.getElementById("modifiedMessageUpperQuotasAdams").innerHTML = modifiedMessageUpperQuotasAdams;
}



//Webster's Method Calculator
document.getElementById("websterCalculator").addEventListener("submit", websterCalculator);

function websterCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsWebster = parseFloat(document.getElementById("itemsWebster").value, 10),
            dataSampleSizesWebster = document.getElementById('dataSampleSizesWebster').value,
            sampleSizesWebster = dataSampleSizesWebster.split('\n'),
            numberSampleSizesWebster = sampleSizesWebster.length,
            standardDivisorWebster,
            sumSampleSizesWebster = 0,
            standardQuotasWebster = [],
            normalQuotasWebster = [],
            sumNormalQuotasWebster = 0,
            messageNormalQuotasWebster;

    document.getElementById("numberSampleSizesWebster").value = numberSampleSizesWebster;

    for (var i = 0; i < numberSampleSizesWebster; i++) {
        sumSampleSizesWebster += parseFloat(sampleSizesWebster[i]);
    }

    standardDivisorWebster = sumSampleSizesWebster / itemsWebster;

    document.getElementById("standardDivisorWebster").value = standardDivisorWebster;

    for (var i = 0; i < numberSampleSizesWebster; i++) {
        standardQuotasWebster[i] = sampleSizesWebster[i] / standardDivisorWebster;
        normalQuotasWebster[i] = Math.round(standardQuotasWebster[i]);
        sumNormalQuotasWebster += parseFloat(normalQuotasWebster[i]);
    }
    
        
    document.getElementById("standardQuotasWebster").value = standardQuotasWebster.join("\n");
           
    document.getElementById("normalQuotasWebster").value = normalQuotasWebster.join("\n");  
    
    document.getElementById("sumNormalQuotasWebster").value = sumNormalQuotasWebster;  
    
            
    if (sumNormalQuotasWebster > itemsWebster) {
        messageNormalQuotasWebster = "The sum of the normal quotas is greater than the number of items to be apportioned <br>";
        messageNormalQuotasWebster += "We have to use a modified divisor <br>";
        messageNormalQuotasWebster += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
        messageNormalQuotasWebster += "Begin with a higher standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
    } else if (sumNormalQuotasWebster === itemsWebster) {
        messageNormalQuotasWebster = "The sum of the normal quotas is equal to the number of items to be apportioned <br>";
        messageNormalQuotasWebster += "This is nice! <br>";
        messageNormalQuotasWebster += "<u>Apportion the normal quotas in that order</u>";
    } else if (sumNormalQuotasWebster < itemsWebster) {
        messageNormalQuotasWebster = "The sum of the normal quotas is less than the number of items to be apportioned <br>";
        messageNormalQuotasWebster += "We have to use a modified divisor <br>";
        messageNormalQuotasWebster += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
        messageNormalQuotasWebster += "Begin with a lower standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
    }
    
    
    document.getElementById("messageNormalQuotasWebster").innerHTML = messageNormalQuotasWebster;
}



//Modified Webster's Method Calculator
document.getElementById("modifiedWebsterCalculator").addEventListener("submit", modifiedWebsterCalculator);

function modifiedWebsterCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var modifiedItemsWebster = parseFloat(document.getElementById("modifiedItemsWebster").value, 10),
            modifiedDivisorWebster = parseFloat(document.getElementById("modifiedDivisorWebster").value, 10),
            modifiedDataSampleSizesWebster = document.getElementById('modifiedDataSampleSizesWebster').value,
            modifiedSampleSizesWebster = modifiedDataSampleSizesWebster.split('\n'),
            modifiedNumberSampleSizesWebster = modifiedSampleSizesWebster.length,
            modifiedSumSampleSizesWebster = 0,
            modifiedStandardQuotasWebster = [],
            modifiedNormalQuotasWebster = [],
            modifiedSumNormalQuotasWebster = 0,
            modifiedMessageNormalQuotasWebster;

    document.getElementById("modifiedNumberSampleSizesWebster").value = modifiedNumberSampleSizesWebster;

    for (var i = 0; i < modifiedNumberSampleSizesWebster; i++) {
        modifiedSumSampleSizesWebster += parseFloat(modifiedSampleSizesWebster[i]);
    }

    
    for (var i = 0; i < modifiedNumberSampleSizesWebster; i++) {
        modifiedStandardQuotasWebster[i] = modifiedSampleSizesWebster[i] / modifiedDivisorWebster;
        modifiedNormalQuotasWebster[i] = Math.round(modifiedStandardQuotasWebster[i]);
        modifiedSumNormalQuotasWebster += parseFloat(modifiedNormalQuotasWebster[i]);
    }
    
        
    document.getElementById("modifiedStandardQuotasWebster").value = modifiedStandardQuotasWebster.join("\n");
           
    document.getElementById("modifiedNormalQuotasWebster").value = modifiedNormalQuotasWebster.join("\n");  
    
    document.getElementById("modifiedSumNormalQuotasWebster").value = modifiedSumNormalQuotasWebster;  
    
            
    if (modifiedSumNormalQuotasWebster > modifiedItemsWebster) {
        modifiedMessageNormalQuotasWebster = "The sum of the modified normal quotas is greater than the number of items to be apportioned <br>";
        modifiedMessageNormalQuotasWebster += "Try a bigger modified divisor and Click the \"Calculate\" button";
    } else if (modifiedSumNormalQuotasWebster === modifiedItemsWebster) {
        modifiedMessageNormalQuotasWebster = "The sum of the modified normal quotas is equal to the number of items to be apportioned <br>";
        modifiedMessageNormalQuotasWebster += "This is nice! <br>";
        modifiedMessageNormalQuotasWebster += "<u>Apportion the modified normal quotas in that order</u>";
    } else if (modifiedSumNormalQuotasWebster < modifiedItemsWebster) {
        modifiedMessageNormalQuotasWebster = "The sum of the modified normal quotas is still less than the number of items to be apportioned <br>";
        modifiedMessageNormalQuotasWebster += "Try a smaller modified divisor and Click the \"Calculate\" button";
    }
    
    
    document.getElementById("modifiedMessageNormalQuotasWebster").innerHTML = modifiedMessageNormalQuotasWebster;
}



//Huntington-Hill Rounding Calculator
document.getElementById("hillRoundingCalculator").addEventListener("submit", hillRoundingCalculator);

function hillRoundingCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var numberHill = parseFloat(document.getElementById("numberHill").value, 10),
            lowerQuotaNumberHill,
            upperQuotaNumberHill,
            geometricMeanNumberHill,
            messageNumberHill,
            roundedNumberHill;        

        lowerQuotaNumberHill = math.floor(numberHill);
        
        if(numberHill % 1 === 0){
            upperQuotaNumberHill = math.ceil(numberHill + 1);
        } else {
            upperQuotaNumberHill = math.ceil(numberHill);
        }
                
        geometricMeanNumberHill = Math.sqrt(lowerQuotaNumberHill * upperQuotaNumberHill);
        
        if (numberHill < geometricMeanNumberHill) {
            messageNumberHill = "The standard divisor is less than it's geometric mean. <br>";
            messageNumberHill += "Apportion the lower quota <br>";
            roundedNumberHill = lowerQuotaNumberHill;
        } else if (numberHill > geometricMeanNumberHill) {
            messageNumberHill = "The standard divisor is greater than it's geometric mean. <br>";
            messageNumberHill += "Apportion the upper quota <br>";
            roundedNumberHill = upperQuotaNumberHill;
        } 
    
    document.getElementById("lowerQuotaNumberHill").value = lowerQuotaNumberHill;
    
    document.getElementById("upperQuotaNumberHill").value = upperQuotaNumberHill;
           
    document.getElementById("geometricMeanNumberHill").value = geometricMeanNumberHill;
       
    document.getElementById("messageNumberHill").innerHTML = messageNumberHill;   
    
    document.getElementById("roundedNumberHill").value = roundedNumberHill;
}


//Huntington-Hill Apportionment Calculator
document.getElementById("hillCalculator").addEventListener("submit", hillCalculator);

function hillCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsHill = parseFloat(document.getElementById("itemsHill").value, 10),
            dataSampleSizesHill = document.getElementById('dataSampleSizesHill').value,
            sampleSizesHill = dataSampleSizesHill.split('\n'),
            numberSampleSizesHill = sampleSizesHill.length,
            standardDivisorHill,
            sumSampleSizesHill = 0,
            standardQuotasHill = [],
            lowerQuotasHill = [],
            upperQuotasHill = [],
            geometricMeanHill = [],
            apportionmentHill = [],
            sumApportionmentHill = 0,
            messageSumApportionmentHill;

    document.getElementById("numberSampleSizesHill").value = numberSampleSizesHill;

    for (var i = 0; i < numberSampleSizesHill; i++) {
        sumSampleSizesHill += parseFloat(sampleSizesHill[i]);
    }

    standardDivisorHill = sumSampleSizesHill / itemsHill;

    

    for (var i = 0; i < numberSampleSizesHill; i++) {
        standardQuotasHill[i] = sampleSizesHill[i] / standardDivisorHill;
        lowerQuotasHill[i] = math.floor(standardQuotasHill[i]);
        
        if (standardQuotasHill[i] % 1 === 0) {
            upperQuotasHill[i] = math.ceil(standardQuotasHill[i] + 1);
        } else {
            upperQuotasHill[i] = math.ceil(standardQuotasHill[i]);
        }
        
        geometricMeanHill[i] = Math.sqrt(lowerQuotasHill[i] * upperQuotasHill[i]);
        if (standardQuotasHill[i] < geometricMeanHill[i]) {
            apportionmentHill[i] = lowerQuotasHill[i];
        } else if (standardQuotasHill[i] > geometricMeanHill[i]) {
            apportionmentHill[i] = upperQuotasHill[i];
        }
        sumApportionmentHill += parseFloat(apportionmentHill[i]); 
        if (sumApportionmentHill === itemsHill) {
            messageSumApportionmentHill = "The sum of the apportioned items is equal to the number of items to be apportioned. <br>";
            messageSumApportionmentHill += "This is nice! <br>";
            messageSumApportionmentHill += "<u>Use this apportionment</u>";
        } else if (sumApportionmentHill > itemsHill) {
            messageSumApportionmentHill = "The sum of the apportioned items is greater than the number of items to be apportioned. <br>";
            messageSumApportionmentHill += "We have to use a modified divisor <br>";
            messageSumApportionmentHill += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
            messageSumApportionmentHill += "Begin with a higher standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
        } else if (sumApportionmentHill < itemsHill) {
            messageSumApportionmentHill = "The sum of the apportioned items is less than the number of items to be apportioned. <br>";
            messageSumApportionmentHill += "We have to use a modified divisor <br>";
            messageSumApportionmentHill += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
            messageSumApportionmentHill += "Begin with a lower standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
        }
    }
    
    document.getElementById("standardDivisorHill").value = standardDivisorHill;
    
    document.getElementById("standardQuotasHill").value = standardQuotasHill.join("\n");
           
    document.getElementById("lowerQuotasHill").value = lowerQuotasHill.join("\n");  
        
    document.getElementById("upperQuotasHill").value = upperQuotasHill.join("\n");
    
    document.getElementById("geometricMeanHill").value = geometricMeanHill.join("\n");  
        
    document.getElementById("apportionmentHill").value = apportionmentHill.join("\n");
    
    document.getElementById("sumApportionmentHill").value = sumApportionmentHill;
    
    document.getElementById("messageSumApportionmentHill").innerHTML = messageSumApportionmentHill;    
}



//Modified Huntington-Hill Apportionment Calculator
document.getElementById("modifiedHillCalculator").addEventListener("submit", modifiedHillCalculator);

function modifiedHillCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var modifiedItemsHill = parseFloat(document.getElementById("modifiedItemsHill").value, 10),
            modifiedDivisorHill = parseFloat(document.getElementById("modifiedDivisorHill").value, 10),
            modifiedDataSampleSizesHill = document.getElementById('modifiedDataSampleSizesHill').value,
            modifiedSampleSizesHill = modifiedDataSampleSizesHill.split('\n'),
            modifiedNumberSampleSizesHill = modifiedSampleSizesHill.length,
            modifiedSumSampleSizesHill = 0,
            modifiedQuotasHill = [],
            modifiedLowerQuotasHill = [],
            modifiedUpperQuotasHill = [],
            modifiedGeometricMeanHill = [],
            modifiedApportionmentHill = [],
            sumModifiedApportionmentHill = 0,
            messageSumModifiedApportionmentHill;

    document.getElementById("modifiedNumberSampleSizesHill").value = modifiedNumberSampleSizesHill;

    for (var i = 0; i < modifiedNumberSampleSizesHill; i++) {
        modifiedSumSampleSizesHill += parseFloat(modifiedSampleSizesHill[i]);
    }
       

    for (var i = 0; i < modifiedNumberSampleSizesHill; i++) {
        modifiedQuotasHill[i] = modifiedSampleSizesHill[i] / modifiedDivisorHill;
        modifiedLowerQuotasHill[i] = math.floor(modifiedQuotasHill[i]);
        
        if (modifiedQuotasHill[i] % 1 === 0) {
            modifiedUpperQuotasHill[i] = math.ceil(modifiedQuotasHill[i] + 1);
        } else {
            modifiedUpperQuotasHill[i] = math.ceil(modifiedQuotasHill[i]);
        }        
        
        modifiedGeometricMeanHill[i] = Math.sqrt(modifiedLowerQuotasHill[i] * modifiedUpperQuotasHill[i]);
        if (modifiedQuotasHill[i] < modifiedGeometricMeanHill[i]) {
            modifiedApportionmentHill[i] = modifiedLowerQuotasHill[i];
        } else if (modifiedQuotasHill[i] > modifiedGeometricMeanHill[i]) {
            modifiedApportionmentHill[i] = modifiedUpperQuotasHill[i];
        }
        sumModifiedApportionmentHill += parseFloat(modifiedApportionmentHill[i]); 
        if (sumModifiedApportionmentHill === modifiedItemsHill) {
            messageSumModifiedApportionmentHill = "The sum of the modified apportioned items is equal to the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentHill += "This is nice! <br>";
            messageSumModifiedApportionmentHill += "<u>Use this modified apportionment</u>";
        } else if (sumModifiedApportionmentHill > modifiedItemsHill) {
            messageSumModifiedApportionmentHill = "The sum of the modified apportioned items is greater than the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentHill += "Try a bigger modified divisor and Click the \"Calculate\" button";
        } else if (sumModifiedApportionmentHill < modifiedItemsHill) {
            messageSumModifiedApportionmentHill = "The sum of the modified apportioned items is less than the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentHill += "Try a smaller modified divisor and Click the \"Calculate\" button";
        }
    }
    
    
    document.getElementById("modifiedQuotasHill").value = modifiedQuotasHill.join("\n");
           
    document.getElementById("modifiedLowerQuotasHill").value = modifiedLowerQuotasHill.join("\n");  
        
    document.getElementById("modifiedUpperQuotasHill").value = modifiedUpperQuotasHill.join("\n");
    
    document.getElementById("modifiedGeometricMeanHill").value = modifiedGeometricMeanHill.join("\n");  
        
    document.getElementById("modifiedApportionmentHill").value = modifiedApportionmentHill.join("\n");
    
    document.getElementById("sumModifiedApportionmentHill").value = sumModifiedApportionmentHill;
    
    document.getElementById("messageSumModifiedApportionmentHill").innerHTML = messageSumModifiedApportionmentHill;    
}


//Dean Rounding Calculator
document.getElementById("deanRoundingCalculator").addEventListener("submit", deanRoundingCalculator);

function deanRoundingCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var numberDean = parseFloat(document.getElementById("numberDean").value, 10),
            lowerQuotaNumberDean,
            upperQuotaNumberDean,
            harmonicMeanNumberDean,
            messageNumberDean,
            roundedNumberDean;        

        lowerQuotaNumberDean = math.floor(numberDean);
        
        if(numberDean % 1 === 0){
            upperQuotaNumberDean = math.ceil(numberDean + 1);
        } else {
            upperQuotaNumberDean = math.ceil(numberDean);
        }
                
        harmonicMeanNumberDean = (2 * lowerQuotaNumberDean * upperQuotaNumberDean) / (lowerQuotaNumberDean + upperQuotaNumberDean);
        
        if (numberDean < harmonicMeanNumberDean) {
            messageNumberDean = "The standard divisor is less than it's harmonic mean. <br>";
            messageNumberDean += "Apportion the lower quota <br>";
            roundedNumberDean = lowerQuotaNumberDean;
        } else if (numberDean > harmonicMeanNumberDean) {
            messageNumberDean = "The standard divisor is greater than it's harmonic mean. <br>";
            messageNumberDean += "Apportion the upper quota <br>";
            roundedNumberDean = upperQuotaNumberDean;
        } 
    
    document.getElementById("lowerQuotaNumberDean").value = lowerQuotaNumberDean;
    
    document.getElementById("upperQuotaNumberDean").value = upperQuotaNumberDean;
           
    document.getElementById("harmonicMeanNumberDean").value = harmonicMeanNumberDean;
       
    document.getElementById("messageNumberDean").innerHTML = messageNumberDean;   
    
    document.getElementById("roundedNumberDean").value = roundedNumberDean;
}


//Dean Apportionment Calculator
document.getElementById("deanCalculator").addEventListener("submit", deanCalculator);

function deanCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsDean = parseFloat(document.getElementById("itemsDean").value, 10),
            dataSampleSizesDean = document.getElementById('dataSampleSizesDean').value,
            sampleSizesDean = dataSampleSizesDean.split('\n'),
            numberSampleSizesDean = sampleSizesDean.length,
            standardDivisorDean,
            sumSampleSizesDean = 0,
            standardQuotasDean = [],
            lowerQuotasDean = [],
            upperQuotasDean = [],
            harmonicMeanDean = [],
            apportionmentDean = [],
            sumApportionmentDean = 0,
            messageSumApportionmentDean;

    document.getElementById("numberSampleSizesDean").value = numberSampleSizesDean;

    for (var i = 0; i < numberSampleSizesDean; i++) {
        sumSampleSizesDean += parseFloat(sampleSizesDean[i]);
    }

    standardDivisorDean = sumSampleSizesDean / itemsDean;

    

    for (var i = 0; i < numberSampleSizesDean; i++) {
        standardQuotasDean[i] = sampleSizesDean[i] / standardDivisorDean;
        lowerQuotasDean[i] = math.floor(standardQuotasDean[i]);
        
        if (standardQuotasDean[i] % 1 === 0) {
            upperQuotasDean[i] = math.ceil(standardQuotasDean[i] + 1);
        } else {
            upperQuotasDean[i] = math.ceil(standardQuotasDean[i]);
        }
        
        harmonicMeanDean[i] = (2 * lowerQuotasDean[i] * upperQuotasDean[i]) / (lowerQuotasDean[i] + upperQuotasDean[i]);
        if (standardQuotasDean[i] < harmonicMeanDean[i]) {
            apportionmentDean[i] = lowerQuotasDean[i];
        } else if (standardQuotasDean[i] > harmonicMeanDean[i]) {
            apportionmentDean[i] = upperQuotasDean[i];
        }
        sumApportionmentDean += parseFloat(apportionmentDean[i]); 
        if (sumApportionmentDean === itemsDean) {
            messageSumApportionmentDean = "The sum of the apportioned items is equal to the number of items to be apportioned. <br>";
            messageSumApportionmentDean += "This is nice! <br>";
            messageSumApportionmentDean += "<u>Use this apportionment</u>";
        } else if (sumApportionmentDean > itemsDean) {
            messageSumApportionmentDean = "The sum of the apportioned items is greater than the number of items to be apportioned. <br>";
            messageSumApportionmentDean += "We have to use a modified divisor <br>";
            messageSumApportionmentDean += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
            messageSumApportionmentDean += "Begin with a higher standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
        } else if (sumApportionmentDean < itemsDean) {
            messageSumApportionmentDean = "The sum of the apportioned items is less than the number of items to be apportioned. <br>";
            messageSumApportionmentDean += "We have to use a modified divisor <br>";
            messageSumApportionmentDean += "Go to the next form, fill the required fields, and try a modified divisor. <br>";
            messageSumApportionmentDean += "Begin with a lower standard divisor as the modified divisor, review the message, and keep adjusting the modified divisor until you see the message that gives the correct apportionment.";
        }
    }
    
    document.getElementById("standardDivisorDean").value = standardDivisorDean;
    
    document.getElementById("standardQuotasDean").value = standardQuotasDean.join("\n");
           
    document.getElementById("lowerQuotasDean").value = lowerQuotasDean.join("\n");  
        
    document.getElementById("upperQuotasDean").value = upperQuotasDean.join("\n");
    
    document.getElementById("harmonicMeanDean").value = harmonicMeanDean.join("\n");  
        
    document.getElementById("apportionmentDean").value = apportionmentDean.join("\n");
    
    document.getElementById("sumApportionmentDean").value = sumApportionmentDean;
    
    document.getElementById("messageSumApportionmentDean").innerHTML = messageSumApportionmentDean;    
}



//Modified Dean Apportionment Calculator
document.getElementById("modifiedDeanCalculator").addEventListener("submit", modifiedDeanCalculator);

function modifiedDeanCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var modifiedItemsDean = parseFloat(document.getElementById("modifiedItemsDean").value, 10),
            modifiedDivisorDean = parseFloat(document.getElementById("modifiedDivisorDean").value, 10),
            modifiedDataSampleSizesDean = document.getElementById('modifiedDataSampleSizesDean').value,
            modifiedSampleSizesDean = modifiedDataSampleSizesDean.split('\n'),
            modifiedNumberSampleSizesDean = modifiedSampleSizesDean.length,
            modifiedSumSampleSizesDean = 0,
            modifiedQuotasDean = [],
            modifiedLowerQuotasDean = [],
            modifiedUpperQuotasDean = [],
            modifiedHarmonicMeanDean = [],
            modifiedApportionmentDean = [],
            sumModifiedApportionmentDean = 0,
            messageSumModifiedApportionmentDean;

    document.getElementById("modifiedNumberSampleSizesDean").value = modifiedNumberSampleSizesDean;

    for (var i = 0; i < modifiedNumberSampleSizesDean; i++) {
        modifiedSumSampleSizesDean += parseFloat(modifiedSampleSizesDean[i]);
    }
       

    for (var i = 0; i < modifiedNumberSampleSizesDean; i++) {
        modifiedQuotasDean[i] = modifiedSampleSizesDean[i] / modifiedDivisorDean;
        modifiedLowerQuotasDean[i] = math.floor(modifiedQuotasDean[i]);
        
        if (modifiedQuotasDean[i] % 1 === 0) {
            modifiedUpperQuotasDean[i] = math.ceil(modifiedQuotasDean[i] + 1);
        } else {
            modifiedUpperQuotasDean[i] = math.ceil(modifiedQuotasDean[i]);
        }        
        
        modifiedHarmonicMeanDean[i] = (2 * modifiedLowerQuotasDean[i] * modifiedUpperQuotasDean[i]) / (modifiedLowerQuotasDean[i] + modifiedUpperQuotasDean[i]);
        if (modifiedQuotasDean[i] < modifiedHarmonicMeanDean[i]) {
            modifiedApportionmentDean[i] = modifiedLowerQuotasDean[i];
        } else if (modifiedQuotasDean[i] > modifiedHarmonicMeanDean[i]) {
            modifiedApportionmentDean[i] = modifiedUpperQuotasDean[i];
        }
        sumModifiedApportionmentDean += parseFloat(modifiedApportionmentDean[i]); 
        if (sumModifiedApportionmentDean === modifiedItemsDean) {
            messageSumModifiedApportionmentDean = "The sum of the modified apportioned items is equal to the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentDean += "This is nice! <br>";
            messageSumModifiedApportionmentDean += "<u>Use this modified apportionment</u>";
        } else if (sumModifiedApportionmentDean > modifiedItemsDean) {
            messageSumModifiedApportionmentDean = "The sum of the modified apportioned items is greater than the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentDean += "Try a bigger modified divisor and Click the \"Calculate\" button";
        } else if (sumModifiedApportionmentDean < modifiedItemsDean) {
            messageSumModifiedApportionmentDean = "The sum of the modified apportioned items is less than the number of items to be apportioned. <br>";
            messageSumModifiedApportionmentDean += "Try a smaller modified divisor and Click the \"Calculate\" button";
        }
    }
    
    
    document.getElementById("modifiedQuotasDean").value = modifiedQuotasDean.join("\n");
           
    document.getElementById("modifiedLowerQuotasDean").value = modifiedLowerQuotasDean.join("\n");  
        
    document.getElementById("modifiedUpperQuotasDean").value = modifiedUpperQuotasDean.join("\n");
    
    document.getElementById("modifiedHarmonicMeanDean").value = modifiedHarmonicMeanDean.join("\n");  
        
    document.getElementById("modifiedApportionmentDean").value = modifiedApportionmentDean.join("\n");
    
    document.getElementById("sumModifiedApportionmentDean").value = sumModifiedApportionmentDean;
    
    document.getElementById("messageSumModifiedApportionmentDean").innerHTML = messageSumModifiedApportionmentDean;    
}



//Lowndes's Method Calculator
document.getElementById("lowndesCalculator").addEventListener("submit", lowndesCalculator);

function lowndesCalculator(event) {
    event.preventDefault();
    event.stopPropagation();

    var itemsLowndes = parseFloat(document.getElementById("itemsLowndes").value, 10),
            dataSampleSizesLowndes = document.getElementById('dataSampleSizesLowndes').value,
            sampleSizesLowndes = dataSampleSizesLowndes.split('\n'),
            numberSampleSizesLowndes = sampleSizesLowndes.length,
            standardDivisorLowndes,
            sumSampleSizesLowndes = 0,
            standardQuotasLowndes = [],
            lowerQuotasLowndes = [],
            personsRepresentativeLowndes = [],
            decimals = [],
            decimalPlaces, 
            decimalPartLowndes = [],
            decimalPartRatioLowndes = [],
            sumLowerQuotasLowndes = 0,
            remainingItemsLowndes,
            messageStandardQuotasLowndes,
            messageLowerQuotasLowndes;
            
            
    document.getElementById("numberSampleSizesLowndes").value = numberSampleSizesLowndes;

    for (var i = 0; i < numberSampleSizesLowndes; i++) {
        sumSampleSizesLowndes += parseFloat(sampleSizesLowndes[i]);
    }

    standardDivisorLowndes = sumSampleSizesLowndes / itemsLowndes;

    document.getElementById("standardDivisorLowndes").value = standardDivisorLowndes;

    for (var i = 0; i < numberSampleSizesLowndes; i++) {
        standardQuotasLowndes[i] = sampleSizesLowndes[i] / standardDivisorLowndes;
        lowerQuotasLowndes[i] = math.floor(standardQuotasLowndes[i]);
        sumLowerQuotasLowndes += parseFloat(lowerQuotasLowndes[i]);
        personsRepresentativeLowndes[i] = sampleSizesLowndes[i] / lowerQuotasLowndes[i];
        decimals[i] = standardQuotasLowndes[i] - Math.floor(standardQuotasLowndes[i]);
        decimalPlaces = standardQuotasLowndes[i].toString().split('.')[1].length;
        decimalPartLowndes[i] = decimals[i].toFixed(decimalPlaces);
        decimalPartRatioLowndes[i] = decimalPartLowndes[i] / lowerQuotasLowndes[i];
    }
           
    remainingItemsLowndes = itemsLowndes - sumLowerQuotasLowndes;
    
    document.getElementById("standardQuotasLowndes").value = standardQuotasLowndes.join("\n");
       
    document.getElementById("lowerQuotasLowndes").value = lowerQuotasLowndes.join("\n");  
    
    document.getElementById("sumLowerQuotasLowndes").value = sumLowerQuotasLowndes;  
          
        
    if (standardQuotasLowndes[i] % 1 !== 0) {
        messageStandardQuotasLowndes = "The standard quota is not an integer. It is a decimal. <br>";
        messageStandardQuotasLowndes += "We cannot apportion *decimal items* because the items are indivisible. <br>";
        messageStandardQuotasLowndes += "Let us round down the standard quotas...use Lower Quotas";
    }
    
    if (sumLowerQuotasLowndes < itemsLowndes) {
        messageLowerQuotasLowndes = "The sum of the lower quotas is less than the number of items to be apportioned <br>";
        messageLowerQuotasLowndes += "We will assign the lower quotas to their respective samples <br>";
        messageLowerQuotasLowndes += "Then, we get the remaining items <br>";
        messageLowerQuotasLowndes += "Then, we use either the <u>First Approach</u> or the <u>Second Approach</u> to apportion the items. <br>";
        messageLowerQuotasLowndes += "Both approaches are used in this calculator to serve as confirmation/check. <br>";
        messageLowerQuotasLowndes += "Both approaches will give the same apportionment of the remaining seats.";
    } else if (sumLowerQuotasLowndes === itemsLowndes) {
        messageLowerQuotasLowndes = "The sum of the lower quotas is equal to the number of items to be apportioned <br>";
        messageLowerQuotasLowndes += "This is nice! <br>";
        messageLowerQuotasLowndes += "<u>Apportion the lower quotas in that order</u>";
    }
                
        
        
    document.getElementById("messageStandardQuotasLowndes").innerHTML = messageStandardQuotasLowndes;
    
    document.getElementById("messageLowerQuotasLowndes").innerHTML = messageLowerQuotasLowndes;
           
    document.getElementById("remainingItemsLowndes").value = remainingItemsLowndes;
    
    document.getElementById("personsRepresentativeLowndes").value = personsRepresentativeLowndes.join("\n"); 
    
    var sortedPersonsRepresentativeLowndes = personsRepresentativeLowndes.sort(function(a, b) {return b - a;});
    
    document.getElementById("sortedPersonsRepresentativeLowndes").value = sortedPersonsRepresentativeLowndes.join("\n"); 
    
    document.getElementById("decimalPartLowndes").value = decimalPartLowndes.join("\n"); 
    
    document.getElementById("decimalPartRatioLowndes").value = decimalPartRatioLowndes.join("\n");
    
    var sortedDecimalPartRatioLowndes = decimalPartRatioLowndes.sort(function(a, b) {return b - a;});
    
    document.getElementById("sortedDecimalPartRatioLowndes").value = sortedDecimalPartRatioLowndes.join("\n"); 
    
}
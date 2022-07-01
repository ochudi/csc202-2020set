console.log(addTwoNumbersA(20,30)); // Call addTwoNumbersA defined below. Correct! 

function addTwoNumbersA (number1, number2) { 
    return number1 + number2; // Add the two numbers passed when function is called 
} 

console.log(addTwoNumbersB(20,30)); // Call addTwoNumbersB defined below. Wrong! 

var addTwoNumbersB = function(number1, number2){ 
    return number1 + number2; // Add the two numbers passed when function is called 
} 
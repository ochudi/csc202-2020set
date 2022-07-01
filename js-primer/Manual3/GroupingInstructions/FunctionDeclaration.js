// By direct declaration 
function addTwoNumbersA (number1, number2) { 
    return number1 + number2; //Add the two numbers passed when function is called 
} 
// By expression 
var addTwoNumbersB = function (number1, number2) { 
    return number1 + number2; 
} 

// Calling the functions
console.log(addTwoNumbersA(20, 30)); // Call addTwoNumbersA and print return value (50). 
console.log(addTwoNumbersB(20, 30)); // Call addTwoNumbersB and print return value (50). 
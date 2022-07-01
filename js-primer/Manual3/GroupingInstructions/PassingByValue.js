// Define a function that receives a number to be squared 
function square (number) { 
    number = number**2; 
    return number; 
} 

var number = 20; // Declare variable that holds number to be squared 
var numberSquared = square(number); // Pass number (by value) to the square() function 
console.log(numberSquared); // The function returns 400 
console.log(number); // The value of number variable outside the function remains 20
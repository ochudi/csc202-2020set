var myExpressions = ["car", 2+3, 10, true, ['car', 21, false]]; //The second element includes a plus operation 
console.log(myExpressions); // Prints out [ 'car', 5, 10, true, ['car', 21, false] ] 
console.log(myExpressions[0]); // Prints out 'car' 
console.log(myExpressions[1]); // Prints out 5 
console.log(myExpressions[2]); // Prints out 10 
console.log(myExpressions[3]); // Prints out true
console.log(myExpressions[4]); // Prints out ['car', 21, false]
myExpressions[3] = false; // Change the expression at position 3. 
console.log(myExpressions[3]); // Prints out false
console.log(myExpressions); // Newly modified array

var newArray = [ 21, 'Chudi', , " ", 10/0];
console.log(newArray[2]); // Prints out undefined.
console.log(newArray); // prints out the array.
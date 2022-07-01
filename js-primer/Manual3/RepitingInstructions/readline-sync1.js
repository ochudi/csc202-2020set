var readlineSync = require('readline-sync'); // make the module just installed available for use in our program 
var answer; // declare variable named answer; 
do { 
    // use question() function to read input and assign the value to answer 
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
    if (answer == 'exit')
        break;
    console.log('You asked me to '+ answer) 
} while(true);
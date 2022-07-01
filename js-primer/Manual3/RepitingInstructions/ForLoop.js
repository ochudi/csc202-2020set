// Simple for loop that counts 1 - 10
for (var c = 1; c < 11; c++) { 
    console.log(c); 
}
console.log("\n");

// Break Statement which stops the loop when c = 7
for (var c = 1; c < 11; c++) { 
    if (c == 7)
        break; 
    console.log(c); 
} 
console.log("\n");

// Continue Statement which skips 7.
for (var c = 1; c < 11; c++){ 
    if(c == 7) 
        continue; 
    console.log(c); 
}
console.log("\n");
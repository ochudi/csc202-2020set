// parseInt()
a = parseInt('101', 10); // Returns 101 
b = parseInt('101', 2) // Returns 5 - Simply 101 base 2
c = parseInt('101'); // Returns 101 
d = parseInt('1z01'); // Returns 1 
e = parseInt('z101'); // Returns NaN
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("\n");

// parseFloat()
f = parseFloat('101.5'); // Returns 101.5 
g = parseFloat('11z.5'); // Returns 11 
h = parseFloat('z101'); // Returns NaN
console.log(f);
console.log(g);
console.log(h);
console.log("\n");

// eval()
i = eval('48 / 8'); // Returns 6
console.log(i);
console.log("\n");

// isFinite()
j = isFinite(10/3); //Returns true 
k = isFinite(10/0); //Returns false
console.log(j);
console.log(k);
console.log("\n");

// isNaN()
l = isNaN(10); // Returns false 
m = isNaN('10'); // Returns false 
n = isNaN('1z0'); // Prints out true
console.log(l);
console.log(m);
console.log(n);
console.log("\n");

// encodeURI()
o = encodeURI("http://www.website.com/?fullname=Chudi Ofoma"); // Returns "http://www.website.com/?fullname=Chudi%20Ofoma"
console.log(o);
console.log("\n");

// encodeURIComponent()
p = encodeURIComponent("http://www.website.com/?fullname=Chudi Ofoma"); //Returns "http%3A%2F%2Fwww.website.com%2F%3Ffullname%3DChudi%20Ofoma"
console.log(p);
console.log("\n");

// decodeURI()
q = decodeURI("http://www.website.com/?fullname=Chudi%20Ofoma"); // Returns "http://www.website.com/?fullname=Chudi Ofoma"
console.log(q);
console.log("\n");

// decodeURIComponent()
r = decodeURIComponent("http%3A%2F%2Fwww.website.com%2F%3Ffullname%3DChudi%20Ofoma"); //Returns "http://www.website.com/?fullname=Chudi Ofoma"
console.log(r);
console.log("\n");
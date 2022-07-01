var a = 2;
var b = 1;
var c = 3;

var d = Math.pow(b, 2);
var e = 4 * a * c;

var f = d - e;
var g, h;

if (f > 0) {
    g = (0 - b) + (Math.sqrt(f) / (2 *a));
    h = (0 - b) - (Math.sqrt(f) / (2 *a));
    console.log("Answers: x1 = " + g + " x2 = " + h);
} else {
    f *= -1;
    g = (0 - b) + (Math.sqrt(f) / (2 *a));
    h = (0 - b) - (Math.sqrt(f) / (2 *a));
    console.log("Answers: x1 = " + g + "i x2 = " + h);
}
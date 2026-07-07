let a = 10;
let b = 45;
let c = 23;
let d = 67;
let e = 12;

let greatest = a;

if (b > greatest) greatest = b;
if (c > greatest) greatest = c;
if (d > greatest) greatest = d;
if (e > greatest) greatest = e;

console.log("Greatest Number =", greatest);
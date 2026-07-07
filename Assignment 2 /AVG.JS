let marks = [80, 75, 90, 85, 70, 88, 92, 76, 81, 95];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

console.log("Total =", total);
console.log("Average =", average);
// 📌 5. Swapping Values (3 Epic Techniques 🔄)

// 🥇 Temp variable method
let valueOne = 10;
let valueTwo = 20;
let temp;

temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log("Swapped using temp variable:", valueOne, valueTwo);

// 🥈 Math trick
let mathA = 10;
let mathB = 20;
mathA = mathA + mathB;
mathB = mathA - mathB;
mathA = mathA - mathB;
console.log("Swapped using math method:", mathA, mathB);

// 🥉 ES6 destructuring
let left = 10;
let right = 20;
[left, right] = [right, left];
console.log("Swapped using destructuring:", left, right);

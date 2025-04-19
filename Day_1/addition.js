// 📌 1. Addition of Two Numbers
let firstNumber = 10;
let secondNumber = 20;

console.log("👉 Simple addition:", firstNumber + secondNumber); // 30

// ❌ Common mistake: string + number leads to concatenation
console.log("Sum of 10 and 20: " + firstNumber + secondNumber); // "1020"

// ✅ Correct approach
console.log("Sum of 10 and 20 is: " + (firstNumber + secondNumber)); // "30"

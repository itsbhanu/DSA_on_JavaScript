// 📌 2. Mixing Strings and Numbers - Type Confusion Zone ⚠️
let numberAsString = "10";
let realNumber = 30;

console.log("Concatenation:", numberAsString + realNumber); // "1030"
console.log("Subtraction:", numberAsString - realNumber);   // -20
console.log("Multiplication:", numberAsString * realNumber); // 300
console.log("Division:", numberAsString / realNumber);       // ~0.333

// 📌 4. Type Casting (Converting string to number)
let numericInput = Number(prompt("🔢 Enter a number:"));
console.log("✅ Converted to number:", numericInput);

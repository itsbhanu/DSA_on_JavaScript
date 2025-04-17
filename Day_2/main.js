// ✅ 1. Valid Voter Checker

let userAge = Number(prompt("Enter your age: "));
console.log(userAge);

// Check if the entered age is a valid number
if (isNaN(userAge)) {
  console.log("Wrong Input");
} else if (userAge >= 18) {
  console.log("You can Vote");
} else {
  console.log("You cannot Vote");
}

// ✅ 2. Shop Discount Calculator - Method 1

let purchaseAmount = Number(prompt("Enter your amount:"));

// Check if the entered amount is valid and apply discounts based on range
if (isNaN(purchaseAmount)) {
  console.log("Wrong Input");
} else if (purchaseAmount > 0 && purchaseAmount <= 5000) {
  console.log(purchaseAmount); // No discount
} else if (purchaseAmount > 5000 && purchaseAmount <= 7000) {
  console.log(purchaseAmount - Math.floor((5 * purchaseAmount) / 100)); // 5% discount
} else if (purchaseAmount > 7000 && purchaseAmount <= 9000) {
  console.log(purchaseAmount - Math.floor((10 * purchaseAmount) / 100)); // 10% discount
} else if (purchaseAmount > 9000) {
  console.log(purchaseAmount - Math.floor((20 * purchaseAmount) / 100)); // 20% discount
}

// ✅ 2. Shop Discount Calculator - Method 2 (cleaner approach)

let totalAmount = Number(prompt("Enter your amount:"));
let discountPercent = 0;

// Determine discount percentage based on amount range
if (isNaN(totalAmount)) {
  console.log("Wrong Input");
} else if (totalAmount > 0 && totalAmount <= 5000) {
  discountPercent = 0;
} else if (totalAmount > 5000 && totalAmount <= 7000) {
  discountPercent = 5;
} else if (totalAmount > 7000 && totalAmount <= 9000) {
  discountPercent = 10;
} else if (totalAmount > 9000) {
  discountPercent = 20;
}

// Calculate final amount after discount
let finalAmount = totalAmount - Math.floor((discountPercent * totalAmount) / 100);
console.log(finalAmount);

// ✅ 3. Electricity Bill Finder

let electricityUnits = Number(prompt("Enter Electricity units:"));
let billAmount = 0;

// Apply slab-wise rates for the units
if (electricityUnits > 400) {
  billAmount += (electricityUnits - 400) * 13;
  electricityUnits = 400;
}
if (electricityUnits > 200 && electricityUnits <= 400) {
  billAmount += (electricityUnits - 200) * 8;
  electricityUnits = 200;
}
if (electricityUnits > 100 && electricityUnits <= 200) {
  billAmount += (electricityUnits - 100) * 6;
  electricityUnits = 100;
}

// Remaining units (up to 100) charged at ₹4 per unit
billAmount += electricityUnits * 4;

console.log("Total Bill Amount: ₹" + billAmount);

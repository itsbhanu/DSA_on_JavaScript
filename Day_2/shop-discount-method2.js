// ✅ Shop Discount Calculator - Method 2 (Cleaner Approach)

let totalAmount = Number(prompt("Enter your amount:"));
let discountPercent = 0;

if (isNaN(totalAmount)) {
  console.log("❌ Invalid input");
} else {
  if (totalAmount > 5000 && totalAmount <= 7000) discountPercent = 5;
  else if (totalAmount > 7000 && totalAmount <= 9000) discountPercent = 10;
  else if (totalAmount > 9000) discountPercent = 20;

  let finalAmount = totalAmount - Math.floor((discountPercent * totalAmount) / 100);
  console.log("Final Amount after Discount:", finalAmount);
}

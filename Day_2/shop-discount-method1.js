// ✅ Shop Discount Calculator - Method 1

let purchaseAmount = Number(prompt("Enter your amount:"));

if (isNaN(purchaseAmount)) {
  console.log("❌ Invalid input");
} else if (purchaseAmount > 0 && purchaseAmount <= 5000) {
  console.log("No Discount. Final Amount:", purchaseAmount);
} else if (purchaseAmount <= 7000) {
  console.log("Final Amount:", purchaseAmount - Math.floor((5 * purchaseAmount) / 100));
} else if (purchaseAmount <= 9000) {
  console.log("Final Amount:", purchaseAmount - Math.floor((10 * purchaseAmount) / 100));
} else {
  console.log("Final Amount:", purchaseAmount - Math.floor((20 * purchaseAmount) / 100));
}

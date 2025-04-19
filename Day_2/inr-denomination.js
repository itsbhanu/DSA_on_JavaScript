// ✅ INR Denomination Breakdown

let amount = 99999;
console.log("Total Amount: ₹" + amount);

const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

denominations.forEach((note) => {
  if (amount >= note) {
    console.log(`${note} Notes:`, Math.floor(amount / note));
    amount %= note;
  }
});

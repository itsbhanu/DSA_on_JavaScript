// ✅ Electricity Bill Calculator (Slab Based)

let units = Number(prompt("Enter Electricity Units:"));
let bill = 0;

if (units > 400) {
  bill += (units - 400) * 13;
  units = 400;
}
if (units > 200) {
  bill += (units - 200) * 8;
  units = 200;
}
if (units > 100) {
  bill += (units - 100) * 6;
  units = 100;
}
bill += units * 4;

console.log("Total Bill Amount: ₹" + bill);

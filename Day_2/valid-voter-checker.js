// ✅ Valid Voter Checker

let userAge = Number(prompt("Enter your age:"));
console.log("Entered Age:", userAge);

if (isNaN(userAge)) {
  console.log("❌ Invalid input");
} else if (userAge >= 18) {
  console.log("✅ You can vote");
} else {
  console.log("🚫 You cannot vote");
}

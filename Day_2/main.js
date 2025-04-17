// // Conditional Statemant

// // 1. Valid Voter

// let age = Number(prompt("Enter your age: "));
// console.log(age);

// // isNaN is a fucntion which is used to cheack that if age is not a number then we got the wrong output in console
// if (isNaN(age)) {
//   console.log("Wrong Input");
// } else if (age >= 18) {
//   console.log("You can Vote");
// } else {
//   console.log("You can not Vote");
// }

// 2. Shop discount

// let amount = Number(prompt("Enter you amount:"));

// if (isNaN(amount)) {
//   console.log("Wrong Input");
// } else if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((20 * amount) / 100));
// }

// another way to solve it

let amount = Number(prompt("Enter you amount:"));
let dis = 0;
if (isNaN(amount)) {
  console.log("Wrong Input");
} else if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5000 && amount <= 7000) {
  dis = 5;
} else if (amount > 7000 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
}

console.log(amount - Math.floor((dis * amount) / 100));

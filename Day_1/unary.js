// 📌 9. Unary Operators (++ and -- Madness 🤪)
let counter = 5;

console.log("Original:", counter);
console.log("Post-increment:", counter++);
console.log("Pre-increment:", ++counter);
console.log("Post-decrement:", counter--);
console.log("Pre-decrement:", --counter);

let x = 5;
x = x++ + ++x; // 5 + 7 = 12
console.log("Final x:", x);

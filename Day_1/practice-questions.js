// 📚 BONUS PRACTICE QUESTIONS

// 1️⃣ Area and Perimeter of Rectangle
let length = 5;
let width = 3;
console.log("Area:", length * width);
console.log("Perimeter:", 2 * (length + width));

// 2️⃣ Random 4-digit OTP Generator
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("Random OTP:", otp);

// 3️⃣ Area of Triangle using Heron's Formula
let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log("Triangle area:", area);

// 4️⃣ Circumference of Circle
let r = 7;
console.log("Circumference:", 2 * Math.PI * r);

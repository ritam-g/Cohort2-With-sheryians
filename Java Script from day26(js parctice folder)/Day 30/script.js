// // -----------------------------------------------
// // 1) Arithmetic Operators
// // -----------------------------------------------

// let i= 10,o = 20;
// console.log(i + o);
// console.log(i - o);
// console.log(i * o);
// console.log(i / o);
// console.log(i % o);

// // -----------------------------------------------
// // 2) Assignment Operators
// // -----------------------------------------------

// let x = 5;
// x += 3;
// console.log(x);
// x -= 3;
// console.log(x);
// x *= 3;
// console.log(x);
// x /= 3;
// console.log(x);

// // -----------------------------------------------
// // 3) Increment & Decrement Operators
// // -----------------------------------------------

// let count = 0;
// console.log(count);
// count++;
// console.log(count);
// count--;
// console.log(count);

// // -----------------------------------------------
// // 4) Comparison Operators (== vs ===)
// // -----------------------------------------------

// console.log("checking with == ", 5 == '5');
// console.log("checking with === ", 5 === '5');

// // -----------------------------------------------
// // 5) Logical Operators
// // -----------------------------------------------

// if (10 > 5 || 10 < 20 && 10 == 10) {
//     console.log("condition is true");
// } else {
//     console.log("condition is false");
// }

// if (true && false) {
//     console.log("right");
// } else {
//     console.log("wrong")
// }

// if (!(true)) {
//     console.log("right");
// } else {
//     console.log("wrong")
// }

// // -----------------------------------------------
// // 6) Bitwise Operators
// // -----------------------------------------------

// console.log(5 & 1);
// console.log(5 | 1);

// // -----------------------------------------------
// // 7) Hoisting - var
// // -----------------------------------------------

// console.log(a);
// var a = 10;

// // -----------------------------------------------
// // 8) Hoisting - let (Reference Error)
// // -----------------------------------------------

// // console.log(b);
// let b = 20;

// // -----------------------------------------------
// // 9) Function Declaration Hoisting
// // -----------------------------------------------

// text();
// function text() {
//     console.log("hello world");
// }

// // -----------------------------------------------
// // 10) Function Expression (Only declared, not hoisted fully)
// // -----------------------------------------------

// var call = function () {
//     console.log("function expression");
// }
// call();

// // -----------------------------------------------
// // 11) If-Else (Age Check)
// // -----------------------------------------------

// let age = Number(prompt("Enter your age: "));
// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

// // -----------------------------------------------
// // 12) Else-If (Marks Grade)
// // -----------------------------------------------

// let marks = Number(prompt("Enter your marks: "));
// if (marks <= 100 && marks >= 90) {
//     console.log("A grade");
// } else if (marks < 90 && marks >= 75) {
//     console.log("b grade");
// } else if (marks < 75 && marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }

// // -----------------------------------------------
// // 13) Switch Case (City Check)
// // -----------------------------------------------

// let city = prompt("Enter your city: ");
// switch (city) {
//     case "kolkata":
//         console.log("joy of happyiness");
//         break;
//     case "delhi":
//         console.log("capital");
//         break;
//     default:
//         console.log("unknown city");
// }

// // -----------------------------------------------
// // 14) Ternary Operator (Score Pass/Fail)
// // -----------------------------------------------

// let score = Number(prompt("Enter your score: "));
// score > 35 ? console.log("pass") : console.log("fail");

// // -----------------------------------------------
// // 15) Ternary Operator (Temperature)
// // -----------------------------------------------

// let temparature = 40;
// temparature > 30 ? console.log("hot") : console.log("pleasant");

// // -----------------------------------------------
// // 16) Logical Condition (Voting Eligibility)
// // -----------------------------------------------

// let age2 = Number(prompt("Enter your age: "));
// let country = prompt("Enter your country: ");
// if (age2 >= 18 && country === "india") {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }

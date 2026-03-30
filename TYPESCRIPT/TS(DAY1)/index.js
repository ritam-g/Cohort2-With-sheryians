"use strict";
// any && unknown
//! any   we can assign any type to a variable
//! but we lose type safety and intellisense support
// let a:any;
// a = 10;
// console.log(a);
// a = "Hello";
// console.log(a.toUpperCase());
// a = true;
// console.log(a);
// a = [1, 2, 3];
// console.log(a);
// a = { name: "Alice", age: 30 };
// console.log(a);
// ! unknown   we can assign any type to a variable
//! but we need to perform type checking before using it
let b;
b = 10;
if (typeof b === "number") {
    console.log(b.toFixed(2));
}
b = "Hello";
if (typeof b === "string") {
    console.log(b.toUpperCase());
}
b = true;
if (typeof b === "boolean") {
    console.log(b);
}
b = [1, 2, 3];
if (Array.isArray(b)) {
    console.log(b.join(","));
}

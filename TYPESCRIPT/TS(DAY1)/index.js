"use strict";
// array 
// structure of the funtion 
//NOTE : void means the function does not return anything
// function call(details:user):void {}
// details is the parameter of the function and its type is user which we defined above
function call(details) {
    console.log(`my name is ${details.name} and my age is ${details.age}`);
}
function call2({ name, age, grade }) {
    console.log(`my name is ${name}, age is ${age}, and grade is ${grade}`);
    return age;
}
call({ name: "king", age: 22 });
console.log(call2({ name: "king", age: 22, grade: "A" }));

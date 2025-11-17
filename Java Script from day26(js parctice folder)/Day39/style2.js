/**============================================
 *!               Level 1 – Basic Function, Array & Object Code
 *=============================================**/

// 🟩 Q1. Write a function sayHello() that prints "Hello JavaScript".
function sayHello(){
    console.log("hello js");
}
sayHello();

// 🟩 Q2. Create a function add(a,b) that returns their sum and log the result.
function add(a,b){
    return a+b;
}
console.log(add(10,20));

// 🟩 Q3. Write a function with a default parameter name = "Guest" that prints "Hi <name>".
function call(name="Guest"){
    console.log(`hi ${name}`);
}
call();

// 🟩 Q5. Create an IIFE that prints "I run instantly!"
(() => {
    console.log("i run instantly");
})();

// 🟩 Q6. Make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let val=10;
    function inner(){
        console.log(val);
    }
    inner();
}
outer();

// 🟩 Q7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
let arr=["mango","banana","apple","orange","anything"];
console.log(arr);
arr.push("nothing");
console.log(arr);
arr.shift();
console.log(arr);

// 🟩 Q8. Use a for loop to print all elements of an array.
let arr2=[1,2,3,4,5,6];
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}

// 🟩 Q9. Create an object person with keys name, age, and city, and print each key’s value.
let person={
    name:"ritam",
    age:21,
    city:"kolkata"
}
for(let key in person){
    console.log(`${key} = ${person[key]}`);
}

// 🟩 Q10. Use setTimeout() to log "Time’s up!" after 2 seconds.
setTimeout(()=>{
    console.log("time up");
},2000);


/**============================================
 *!               SECTION -2 (Level 2 – Functional Thinking & Logic Tasks)
 *=============================================**/

// 🟨 Q1. Write a higher-order function runTwice(fn) that executes another function two times.
function runTwice(fn){
    console.log("first");
    fn();
}
runTwice(()=>{
    console.log("2nd ");
})

// 🟨 Q2. Create one pure and one impure function.
let globVar=10;
function pureFun(val){
    return val*val;
}
function impureFun(val){
    return val="Math.random();";
}
console.log(pureFun(globVar));
console.log(impureFun(globVar));
console.log(globVar);

// 🟨 Q3. Write a function that uses object destructuring inside parameters to extract and print name and age.
let Details={
    namee:"ritam",
    age:21
};
let {namee,age}=Details;
console.log(namee);
console.log(age);

// 🟨 Q5. Given an array of numbers, use map() to create a new array where each number is squared.
let arr3=[1000, 2000, 3000];
let newArray=arr3.map(val=>{
    return val*val;
});
console.log(newArray);

// 🟨 Q6. Use filter() to get only even numbers from an array.
let newArray2=arr3.filter(val=>{
    return val%2==0;
});
console.log(newArray2);

// 🟨 Q7. Use reduce() to find the total salary from [1000,2000,3000].
let ans=arr3.reduce((acc,val)=>{
    return acc+val;
},0);
console.log(ans);

// 🟨 Q8. Create an array of names and use some() and every() to test a condition.
let arr4=["ritam","rohh"];
let ans2=arr4.every(val=>{
    return val.length>3;
})
console.log(`all name is getter than 3 is ${ans2}`);

// 🟨 Q9. Create an object user and test the behavior of Object.freeze() and Object.seal() by adding/changing keys.
let user = {
  name: "ritam",
  roll: 21
};

// Add a new property
user["address"] = "West Bengal";
console.log("Before freeze:", user);

// ❌ Wrong: user.freeze() — this doesn’t exist
// ✅ Correct:
Object.freeze(user);

// Try to modify after freeze
user.address = "Kolkata";     // Won’t change
user.age = 22;                // Won’t be added
delete user.roll;             // Won’t delete

console.log("After freeze:", user);

// Try to seal after freeze (does nothing since already frozen)
Object.seal(user);            // No effect
console.log("After seal:", user);

// 🟨 Q10. Create a nested object (user → address → city) and access the city name inside it.
let obj={
    user:{
        address:{
            city:"kolkata",
        }
    },
    name:"ritam"
};
let {city}=obj.user.address;
console.log(`user city is ${city}`);

// 🟨 Q4. Demonstrate the difference between normal function and arrow function when used as object methods (the this issue).
let obj1={
    name:"ritam",
    fun:function call(){
        console.log(`obj name is ${this.name}`);
    },
}
let obj2={
    name:"ritam",
    fun:()=>{
        console.log(`obj2 name is ${this.name}`);
    },
}
obj1.fun();
obj2.fun();

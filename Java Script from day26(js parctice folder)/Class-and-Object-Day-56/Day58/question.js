//! 🟢 🔵 SECTION 1: Objects and OOPS Thinking (Foundation)
//! 1
// let user={
//     userName:"ritam",
//     userEmail:"ritammaty@gmail.com",
//     log:function () {
//         console.log("User logged in");
        
//     }
// } 
// user.log()
//! 2
// class User {
//     constructor(userName,userEmail) {
//         this.userName=userName
//         this.userEmail=userEmail
//     }
//     log(){
//         console.log("User Logged In ");
        
//     }
// } 
// let user=new User("ritam maty","ritammaty@gmail.com")
// user.log()
// console.log(user.userName);
// console.log(user.userEmail);
//! 3 
// let product={
//     stroesName:"matyShop",
//     price:20000,
//     descount:function(dis=90){
//         return this.price-dis
//     }
// }
// console.log(product.descount());
// console.log(product.descount(1000));
//! 🔵 SECTION 2: Classes and Objects
//! 1 
// class Car {
//     constructor(brand,speed) {
//         this.brand=brand
//         this.speed=speed
//     }
//     drive(){
//         console.log(`${this.brand} + ${this.speed}`);
        
//     }
// } 
// let c1=new Car("TATA","1000km per hr")
// c1.drive()
//! 2
// let c2=new Car("MAY BACK","100km per hr")
// console.log(c1.drive===c2.drive);
// console.log(c1.brand===c2.brand);

//! 🔵 SECTION 3: Constructor and this keyword 
//! 1 
// class Student {
//     constructor(sname,roll) {
//         this.sname=sname
//         this.roll=roll
//     }
//     introduce(){
//         console.log(`the student name is ${this.sname} \n  and \n roll is ${this.roll}`);
        
//     }
// }
// let s1=new Student("ritam maty",60)
// s1.introduce()
//! 2
// class Student {
//     constructor(sname,roll) {
//         sname=sname
//         roll=roll
//     }
// }
// let s1=new Student("ritam maty",60)
//console.log(s1.sname);//! undfinded it iwll show 

//! 3
// let stu={
//     fun1:function () {
//         console.log("this is es5 funciton ");
        
//     },
//     fun2:()=>{
//         console.log("this is es6 function ");
        
//     }
// } 
// stu.fun1()
// stu.fun2()

//! 🔵 SECTION 4: Constructor Functions & Prototypes
// function Student(name) {
//     this.name=name
// } 
// Student.prototype.call=function () {
//     console.log(this.name);
    
// }
// let cal=new Student("ritam")
// cal.call()

//! 2
// class Student {
//     constructor() {
        
//     }
//     log=function () 
//     {
//         console.log("admision funcatin");
            
//     }
// } 
// let s1=new Student()
// console.log(s1);

// s1.log()
//! 3
//  let user1={
//     userName:"ritam",
//     userEmail:"ritammaty@gmail.com",
//     log:function () {
//         console.log("User logged in");
        
//     }
// } 
// let user2={
//     userName:"ritam",
//     userEmail:"ritammaty@gmail.com",
//     log:function () {
//         console.log("User logged in");
        
//     }
// } 
// console.log(user1.log===user2.log);
//!SECTION 🔵 SECTION 5: call, apply, bind

//1
// function fun3(...arr){
//     console.log(this.name,arr);
    
// }
// //! 2
// let obj={
//     name:"ritam"
// } 
// fun3.call(obj)
// fun3.apply(obj,[1,2,3,45,5])
// let fun=fun3.bind(obj,1,2,34)
// fun()
//! 4
let obj2={
    name:"rohit",
    fun:function () {
        console.log(this.name);
        
    }
} 
let obj={
    name:"ritam"
} 
obj2.fun.call(obj)


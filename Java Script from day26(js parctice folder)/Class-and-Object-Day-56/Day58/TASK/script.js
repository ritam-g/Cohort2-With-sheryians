//! 🎨✨ **SECTION 1: OOPS Thinking with Objects** ✨🎨
// let laptop={
//     brand:"hp",
//     price:100,
//     start:function () {
//         console.log("laptop Started");
        
//     },
//     increasePrice:function (percent) {
//         let increse=this.price*percent/100
        
//         this.price +=increse
        
//         console.log(`updated price is ${this.price}`);
        
        
//     }
// }
// laptop.increasePrice(10)
//! 2 
// class Employee {
//     constructor(name,salary) {
//         this.name=name
//         this.salary=salary
//     }
//     showDetails(){
//         console.log(`Employee name: ${this.name} and salary : ${this.salary}`);
        
//     }
// }
// let s1=new Employee("ritam maty",100000)
// let s2=new Employee("rohit maty",1000000)
// let s3=new Employee("rocky maty",1000000)
// s1.showDetails()
// s2.showDetails()
// s3.showDetails()
//! 🏦 **SECTION 3: Constructor and Initialization** 🏦
//! 7 
// class BankAccount {
//     constructor(accountHolderName,balance) {
//         this.accountHolderName=accountHolderName
//         this.balance=balance
//     }
//     deposit(amount) {
//         this.balance+=amount
//         console.log(`current balance is ${this.balance}`);
        
//     }
// }
// let user1=new BankAccount("ritam",100000)
// user1.deposit(20000)
// let user2=new BankAccount("maty",1000001)
// user1.deposit(200001)

//! 🧭 **SECTION 4: Understanding `this` (Very Important)** 🧭
//  let profile={
//     username:"ritam maty"
//     ,
//     log:function () {
//         console.log(this.username);
        
//     }
//  }
//  profile.log()
//  let log=profile.log //! WE SEND THE FUNCITON NOT THE OBJ 
//  log()//! BECAUSE THE THIS IS UNLIKED WITH OBJECT SO THIS WILL TREAT WINDOW
//  let fun=profile.log.bind(profile)
//  fun()
//! 📞 **SECTION 6: `call` Method Practice** 📞

// function showBrand(brand) {
    
//     console.log(`${this.brand}`);
// }
// let brand1={
//     brand:"nike"
// }
// let brand2={
//     brand:"zudio"
// }
// showBrand.call(brand1)
// showBrand.call(brand2)

//! 📦 **SECTION 7: `apply` Method Practice** 📦
// function introduce(name,city,role) {
//     this.name=name
//     this.city=city
//     this.role=role
//     console.log(`name : ${this.name} \n  city : ${this.city} \nand role : ${this.role}`);
    
// } 
// // introduce("ritam maty","Devoloper")
// let obj={
//     name:"ritam"
// }
// introduce.apply(obj,["ritam","devoloper"])
//! 🪢 **SECTION 8: `bind` Method Practice** 🪢

// function greet(name) {
    
//     console.log(`hello ${this.name}`);
    
// }
// let obj={
//     name:"ritam"
// }
// let fun=greet.bind(obj)
// fun()
/**============================================
 *!               LEVEL 3
 *=============================================**/
// function delayMessage(msg,time){
//     setTimeout(() => {
//         console.log(msg)
//     }, (time*1000));
// };
// delayMessage("hello friend",2)

// function createCounter(fn,n){
//     for (let i = 1; i <= n; i++) {
//         fn(i);
//     }
// }
// createCounter((val)=>
//     {
//         console.log("hellow world",val);
// },5)



// function createCounter(){
//     let  count=0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// let fun=createCounter();
// fun();
// fun();


// let creatUser=(name)=>{
//     return (newname)=>{
//         name=newname;
//         console.log(`new name is ${name}`);
        
//     }
// }
// let changename=creatUser("ritam");
// changename("rohit");

// function calculaterTotal(cart){
//     return cart.reduce((acc,obj)=>{
//         return acc+(obj.price*obj.quantity);
//     },0);
// }
// const cart = [
//   { name: "Apple", price: 30, quantity: 3 },
//   { name: "Banana", price: 10, quantity: 5 },
//   { name: "Orange", price: 20, quantity: 2 }
// ];
// console.log(calculaterTotal(cart));

// let userProfile={
//     username:"ritam",
//     phone:12345
// };
// let {email="default",phone="default"}=userProfile;
// console.log(email,phone);

// let personAge=[21,23,42,21,12];
// let adult=personAge.filter(val=>{
//     return val>18;
// });
// console.log(adult);
// function average(...marks){
//         let toatl=marks.reduce((acc,val)=>{return acc+val},0);
//         console.log("avrage is ::-->",toatl/marks.length);
        
// }
// let marks=[45,54,65,76];
// average(...marks);


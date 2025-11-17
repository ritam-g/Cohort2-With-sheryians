/**============================================
 *               1. Create a function `sum(a, b)` that returns the sum of two numbers.

 *=============================================**/
// let sum=(a,b)=>{
//     console.log(a+b);
    
// }
// console.log(sum(10,20));
/**============================================
 *!               2nd quesiton
 *=============================================**/
// let fun=(...nums)=>{
//     return nums.reduce((accum,val)=>{
//         return accum*val;
//     },1);
    
// }
// console.log(fun(1,3,4,5));

// let acceptData=({name,age})=>{
//     console.log(`hello ${name} your age is ${age}`);
// }
// acceptData({age:21,name:"ritam maty"});

// (()=>{
//   console.log("i am imidetlly invoked");
    
// })();
/**============================================
 *               7
 *=============================================**/

// let repeat=(fn,n)=>{
//     while(n!=0){
//         fn(n);
//         --n;
//     }
// }
// repeat((val=5)=>{
//     console.log(`${val}`);
//     val++;
    
// },5);

// let a=10;
// console.log("actuall value ",a);

// let pureFun=(val)=>{
//     val *=2;
//     return val;
// }

// console.log("actuall value with pure funciton ",pureFun(a));
// let inpureFun=(val)=>{
//     a="ritam";
//     return a;
// }

// console.log("actuall value with impure",inpureFun(a));


// function call(val){
//  setTimeout(() => {
//     console.log(val*val);
    
//  }, 2000);
// }
// call(10);

// function counter(){
//    let count=0;
//    return{
//       increment: function(){
//          count++;
//       },
//       getcount:function(){
//          return count;
//       }
//    };
// }

// let fun=counter();
// fun.increment();
// fun.increment();
// fun.increment();
// fun.increment();
// console.log(fun.getcount());

/**============================================
 *!               section-2
 *=============================================**/
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.push("mango");
// console.log(fruits);
// fruits.unshift("orange");
// console.log(fruits);
// fruits.splice(2,1);
// console.log(fruits);


// let arr=[2,4,6,8];

// let newArray=arr.map(val=>{
//    return val*val;
// })
//  console.log(newArray);
 
// let arr=[1,2,3,4,5,6,8];

// let even=arr.filter(val=>{
//    return val%2===0;
// })
// console.log(even);

// let arr=[10,20,30];

// let ans=arr.reduce((acc,val)=>{
//    return acc+val;
// },0);
// console.log(ans);

// let arr=[10,20,30];
// let arr2=[10,20,30];
// let merged=[...arr,...arr2];
// console.log(merged);

// let arr=[10,20,30];
// let [f,s]=arr;
// console.log(f,s);

// let arr=[{
//    name:"ritam",
//    roll:21
// },{
//    name:"rohit",
//    roll:22
// },{
//    name:"suman",
//    roll:23
// },{
//    name:"rajib",
//    roll:24
// }];
// let ans=arr.find(val=>{
//    if(val.name==="rohit"){
//       return true;}
//    else {return false;}
// })
// console.log(ans);


// let arr=[10,20,30];
// const rev=[];
// for (let last = arr.length-1; last>=0; last--) {
//    rev.push(arr[last]);
   
// }
// console.log(arr);
// console.log(rev);

// let arr=['a','b','c'];

// console.log(arr.join(' '));


// let arr=[10,20,30];
// let ans=arr.some(val=>{
//    return val>12;
// });
// console.log(ans);
/**==============================================
 * !                  SECTION -3
 *   
 *   
 *   
 *
 *=============================================**/

// let user={
//    name:"ritam",
//    age:21,
//    email:"ritam maty"
// };

// user.admin="ritam";
// console.log(user);
// delete user.admin;
// console.log(user);


// let obj={
//    state:
//       "westBengal",
//    name:"ritam maty"
// }
// // console.log(obj.state.westBengal);
// for(let key in obj){
//    console.log(`the key is ${key} and the value is ${obj[key]}`);
   
// }

// let obj={
//     fName:"ritam",
//     age:21
// };
// // let entreys=Object.entries(obj);
// // console.log(entreys);

// let obj2={
//     lName:"maty",
//     address:"kolkata"
// };

// let newObj={...obj,...obj2};
// console.log(newObj);

//6. Create an array of objects and sort them by a property (e.g., `age`).
// let arr=[{age:1},{age:21},{age:12},{age:13},{age:11},{age:51},]
// arr=arr.sort((a,b)=>{
//     return a.age-b.age;
// })
// console.log(arr);

















/**============================================
 *!               count how many number are disable by 3 and 5 aroun 1 to 100
 *=============================================**/
// let num=100;
// let threeDisableCount=0;
// let fiveDisableCount=0;
// for(let i=0;i<=num;i++){
//     if(i%3===0 && i!=0 && i%5===0){
//         threeDisableCount++;
//         fiveDisableCount++;
//         console.log(`the number is ${i}`);
        
//     }
// }

/**============================================
 *!               next question 
 *=============================================**/
// for(let i=1;i<=100;i++){
    
//     console.log(i);
//     if( i%7===0) break;
// }
/**============================================
 *!               we have to skip if multiply of 3 if comes in between 1 to 20 then skip
 *=============================================**/
// for(let i=1;i<=20 ; i++){
//     if(i%3===0)continue;
//     console.log(i);
    
// }

/**============================================
 *!               print onl y first 5 odd number then stop the loop 
 *=============================================**/
// let count=0;
// for(let i=1;i<=100;i++){
//     if(count===5)break;
//     if(i%2!==0){
//         console.log(i);
//         count++;   
//     }
// }
/**============================================
 *!               IIFE:--> IMDITELY INVOKE FUNCATION EXPRESSION
 *=============================================**/
// (function(){
//     console.log("welcome");
    
// })();

/**============================================
 *!               hoiting on funcaiton declaration and expression
 *=============================================**/
// abc();
// function abc(){
//     console.log("abc");
    
// }
// k();
// let k=function(){
//     console.log(":k");
    
// }

/**============================================
 *!               FAT FUNCAITON
 *=============================================**/

//  let add=(a=20,b=90)=>{
//     return a+b;
//  };
//  console.log(add(10,20));

/**============================================
 *!               ... Parametersized what does it work
 *=============================================**/
// let arr=(...val)=>{
//     console.log(val[0]);
//     console.log(val);
    
    
// }
// arr(1,2,3,4,5,6,7,8);
/**============================================
 *!               use rest parametet to accepte and return the total
 *=============================================**/
// let total=(...arr)=>{
//     let sum=0;
//     arr.forEach(a => {
//         sum+=a;
//     });
//     return sum;
// }
// console.log(`the total is ${total(1,2,3,4,5,9,10)}`);
/**============================================
 *!               PASS A FUNCATION TO ANOTHER FUNCAITON AND EXECUTE IN INSIDE
 *=============================================**/
// let call=(val)=>{
//     val();
// }
// call(()=>{
//     console.log("hello world");
    
// });

/**============================================
 *!               arguments
 *=============================================**/
// function a(){
//     console.log(arguments);
//     console.log(arguments[1]);
    
// };
// a(10,"ritam maty");
 

/**============================================
 *!               CREATE AREUSABLE DISCOUNT CALCULTAR (HOF)
 *=============================================**/

// function getDiscount(dis){
//     return function(price){
//         return price-price*(dis/100)
//     }
// }
// let DISCOUNT= getDiscount(10);
// console.log(DISCOUNT(1000))

/**============================================
 *!               COUNTER IN RETURN FUNCAITONO
 *=============================================**/
// function counter(){
//     let count=0;
//     return function()
//     {
//         count++;
//         console.log(count);
//     }
// }
// let fcount=counter();
// fcount();
// fcount();
// fcount();
// let secoundCount=counter();
// secoundCount();
// secoundCount();
/**============================================
 *!               TESTING DOUBT
 *=============================================**/
// let call=(a=0)=>{
//     if(a==0)return 1;
//     return "thanks";
// }
// console.log(call(3));

/**============================================
 *!               METHODE OF JS IN ARRAY
 *=============================================**/

//  let arr=[1,2,3,4];
 //NOTE - push,pop,shift,unshift
//  arr.push(5);
//  console.log("push :--> ",arr);
//  arr.pop();
//  console.log("pop :--> ",arr);
//  arr.shift();
//  console.log("shift :--> ",arr);
//  arr.unshift(0);
//  console.log("unshift :--> ",arr);

//NOTE - splice
// arr.splice(2,1);
// console.log("splice  :--> ",arr);
//NOTE - slice
// let newarr=arr.slice(0,3);
// console.log("newarr",newarr);
// console.log("arr",arr);

/**============================================
 *!               little bit complicated methode
 *=============================================**/
let arr=[1,2,3,4,5,3];

// arr.forEach(element => {
//     console.log(element*5);
    
// });

// let newarr=arr.map(ele=>{
//     return ele*2;
// })
// console.log("arr is :-->",arr);
// console.log("newarr is :-->",newarr);
// let newarr=arr.filter(ele=>{
//     return ele>2;
// })
// console.log("arr :----> ",arr);
// console.log("newarr :----> ",newarr);

// let val=arr.reduce((amltr,val)=>{
//     return amltr+val;
// },0)
// console.log(val);
// let firsFind=arr.find(ele=>{
//     return ele==3;
// })
// console.log(firsFind);
/**=======================
 * !      OBJ
 *  
 *  
 *========================**/
// let obj={
//     name:{
//         roll:4,
//         call:4
//     },
//     address:"singur"
// }
// // let newobj={...obj};//wrong because its nested obj

// let newobj=JSON.parse(JSON.stringify(obj));
// newobj.name.call=5;

/**============================================
 *!               destructure first-name 
 *!               - its not allowed in obj
 *=============================================**/

 let obj={
    "first-name":"ritam maty"
 }
 let{"first-name":firstName}=obj;
 console.log(firstName);
 




 
 
 
 
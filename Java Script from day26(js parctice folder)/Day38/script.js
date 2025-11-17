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
// let arr=[1,2,3,4,5,3];

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


/**============================================
 *!               OBJECT
 *=============================================**/
// let obj={
//     name:"ritam maty",
//     roll:21,
//     language:{
//         hindi:4,
//         english:7,
//         bangali:8
//     }
// }
// console.log(obj.language.hindi);





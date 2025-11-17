/**============================================
 *!               8. Print multiplication table of 5
                Use loop to print 5 × 1 to 5 × 10.
 *=============================================**/
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`)
// }

/**============================================
 *!               9. Count how many numbers between 1 and 15 are greater than 8
Loop and count conditionally.
 *=============================================**/
// let count=0;
// for(let i=1;i<=15;i++){
//     if(i>8){
//         console.log(`the number is ${i}`);
//         count++;
//     }
// }
// console.log(`the the number of getter number is ${count}`);

/**============================================
 *!               10. Ask user for password and print access status
                    Hardcoded correct password. Compare with user input.
 *=============================================**/

// let harcorde="1234";
// let userPass=prompt("enter password ");
// userPass===harcorde ? console.log("correncet password"):console.log("in valid passord");

/**============================================
 *!               11. Allow only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked”
 *=============================================**/
// let correctePass="1234";
// let count=0;
// for(let i=1;i<=3;i++){
//     let userPass=prompt("enter password ");
//     if(userPass===correctePass){
//         console.log(`this is correcte password`);
//         break; 
//     }
//     else{
//         count++;
//         if(i===3){
//             console.log("Account locked");
//         }
      
//     }
// }

/**============================================
 *!               12. Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes".

 *=============================================**/
// let count=0;
// while(true){
//     let userInput=prompt("enter word or if yout want to stop type stop");
//     if(userInput==="stop"){
//         break;
//     }
//     else if(userInput==="yes"){
//         count++;
//     }
// }
// console.log(`the number of yes typed is ${count}`);

/**============================================
 *!               13. Print numbers divisible by 7 from 1 to 50
Use modulo % and loop.
 *=============================================**/

// for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(`we devide by 7 is ${i}`);
        
//     }
// }

/**============================================
 *!               14. Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum.
 *=============================================**/
// let sum=0;
// for(let i=0;i<=30;i++){
//     if(i%2!==0){
//         sum+=i;
//     }
// }
// console.log(`the addintion of the odd number is ${sum}`);

/**============================================
 *!               15. Keep asking number until user enters an even number
Use while loop. Stop only if input is even.
 *=============================================**/
// while(true){
//     let userInput= +prompt("enter number ");
//     if(userInput%2===0){
//         console.log(`the number is even`);
        
//         break;
//     }
// }

/**============================================
 *               16. Print numbers between two user inputs
Input start and end using prompt() → print all between.

 *=============================================**/

// let start= +prompt("enter starting number ");
// let end= +prompt("enter ending number ");
// for(let i=start;i<=end;i++){
//     console.log(i);
// }

/**============================================
 *!               17. Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints.

 *=============================================**/

// let count=0;
// for(let i =1;i<=20;i++){
    
//     if(i%2!==0){
//         count++;
//         console.log(`the odd number is ${i}`);
//         if(count===3){
//             break;
//         }
//     }
// }

/**============================================
 *               18. Ask user 5 numbers. Count how many are positive
Use loop + condition + counter.
 *=============================================**/

// let count=0;
// for(let i=0;i<5;i++){
//     let userInput=+prompt("enter number ");
    
//     if(userInput>0){
//         count++;
//     }
// }
// console.log(`the postive user input are ${count}`);

/**============================================
 *               19. ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance”
 *=============================================**/

// let balance=1000;
// for(let i =0;i<3;i++){
//     let withdrawAmount= +prompt("enter withdraw amount ");
//     if(withdrawAmount<=balance){
//         balance-=withdrawAmount;
//         console.log(`withdraw successful. remaining balance is ${balance}`);
//     }
//     else{
//         console.log("Insufficient balance");
//     }
// }
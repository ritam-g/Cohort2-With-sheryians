
//! NORMAL JS CLASS STURCTURE 
// class Student {
//     constructor(name,roll,address) {
//         this.name=name
//         this.roll=roll
//         this.address=address
//     }
//     studentDetails(){
//         console.log(`Strudent name is ${this.name} \n roll : ${this.roll} \nadress: ${this.address}`);
        
//     }
//     deleteStudentDetails(){
//         this.name=null
//            this.roll=null
//            this.address=null
//     }
//     printLog(){
//         console.log(this)
//     }
//     a=()=>{
//         return this.studentDetails()
//     }
// }
// let s1=new Student("ritam",60,"WestBengal")
// s1.studentDetails()
// s1.printLog()
// s1.a()

//! REAL USE OF THIS KEY WORD AND GETSOME MEANING  

/**======================
 *!    NORMAL THIS PRINTING
 *========================**/
console.log(this);

/**======================
 *!    function → window
 *========================**/
function call() {
    console.log(this); 
}
call()

/**======================
 *!    ES5 function inside object → object
 *========================**/

 let obj={
    fun:function call() {
        console.log(this);
    },
    address:"HydraBad"
 }
 obj.fun()

 /**======================
  *!    ES6 (arrow) inside object → window
  *========================**/
 let obj2={
    fun:() =>{
        console.log(this);
    },
    address:"HydraBad"
 }
 obj2.fun()

 /**======================
  *!    WES5 inside ES5 → window
  *========================**/

let obj3={
    fun:function(){
        function another() {
            console.log(this);
        }
        another()
    },
    address:"HydraBad"
 }
 obj3.fun()

 /**======================
  *!    ES6 inside ES5 inside object → object
  *========================**/
 let obj4={
    fun:function(){
        let another=()=> {
            console.log(this);
        }
        another()
    },
    address:"HydraBad"
 }
 obj4.fun()

 

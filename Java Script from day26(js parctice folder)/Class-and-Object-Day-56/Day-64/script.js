//! DEBUSCING && THROTTLING 

//! DEBUNSING 

//NOTE -  FOR EVERY TIME FORMAT OUR FUNCAIOTN CALL 

function deBuncer(fun1,delay) {
    let time;
    return function (data) {
        clearTimeout(time)
        time=setTimeout(() => {
            fun1(data)
        }, delay);
        
        
    }
}
document.querySelector("#in")
.addEventListener("input",deBuncer(function (data) {
console.log("after 2 sec");
console.log(data.data);
    
},2000))
//! SIMPLE UDERSTANDING BELOW 
// let set=setTimeout(() => {
//     console.log("5000");
    
// }, 5000);
// clearInterval(set)
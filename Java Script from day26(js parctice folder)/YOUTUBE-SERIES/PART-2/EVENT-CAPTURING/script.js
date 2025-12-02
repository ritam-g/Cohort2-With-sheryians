//! FOR MAKING EVENT CAPTURING YOU JUST NEDD ADD
//! ,TRUE AFTER THE ADDEVENTLISTER FUNCTION BACKET   
let button=document.querySelector("button")
let box=document.querySelector(".box")
let main=document.querySelector("main")
button.addEventListener("click",()=>{
    console.log("this is button click");
})
box.addEventListener("click",()=>{
    console.log("this is box click");
},true)
main.addEventListener("click",()=>{
    console.log("this is main click");
},true)
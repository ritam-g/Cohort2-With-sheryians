//! select h1
let h1=document.querySelector("h1");
h1.textContent="VALUE(0)";
let value=0;
//! select leftbutton & rightbutton
let button=document.querySelectorAll(".bottom button")  ;
button[0].addEventListener("click",()=>{
    value++
    h1.textContent=value
    h1.style.color="green";
    
});
button[1].addEventListener("click",()=>{
    value--
    h1.textContent=value;
    
    h1.style.color="red";
})

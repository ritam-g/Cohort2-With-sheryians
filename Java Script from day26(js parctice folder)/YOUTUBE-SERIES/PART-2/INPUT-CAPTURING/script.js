let input=document.querySelector("input")
let span=document.querySelector("span")
let h1=document.querySelector("h1")
input.addEventListener("input",()=>{
    let count=20-input.value.length
    
    span.textContent=count
    if(count<0){
        span.style.color="red"
        h1.style.color="red"
    }
    else{
        
        span.style.color="white"
        h1.style.color="white"
    }
})
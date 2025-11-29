let h1 = document.querySelector("main > h1");
let h2 = document.querySelector("main > h2");
let h3 = document.querySelector("main > h3");
let h4 = document.querySelector("main > h4");
let h5 = document.querySelector("main > h5");
let h6 = document.querySelector("main > h6");
let realdata = h1.textContent;
let string = 'ABCDEFGHIJKLMNOPhijklmnopqrstwxyz';

h1.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h1.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})
h2.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h2.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})
h3.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h3.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})
h4.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h4.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})
h5.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h5.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})
h6.addEventListener("mouseenter",()=>{
    let move=0
    let intval=setInterval(
        ()=>
    {
        let val=realdata.split("").map((char,idx)=>{
            if(idx<move)return char
            return string.split("")[Math.floor(Math.random()*string.length)]
        }).join("")
        move +=0.25
        h6.textContent=val
    },
    100
    )
    if(move>realdata.length){
        setTimeout(() => {
            clearInterval(intval)
        }, 0);
    }
   
})



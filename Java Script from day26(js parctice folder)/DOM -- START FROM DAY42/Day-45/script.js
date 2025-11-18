let btn=document.querySelector("main .snd button")
let per=document.querySelector("main .snd h1")
let grow=document.querySelector(".loading .grow")
let main=document.querySelector("main ")
let box=document.querySelector("main .box")

let images = [
    "https://picsum.photos/id/237/300/300",
    "https://picsum.photos/id/1025/300/300",
    "https://picsum.photos/id/1003/300/300",
    "https://picsum.photos/id/1062/300/300",
    "https://picsum.photos/id/29/300/300"
];


let inc=0
btn.addEventListener("click",()=>{
    btn.style.pointerEvents = 'none'
     
let si=setInterval(() => {
    let val =images[Math.floor(Math.random()*images.length-1)]
    main.style.backgroundImage=`url(${val})`;
    box.style.backgroundImage=`url(${val})`;
    inc++
    grow.style.width=inc+'%'
    per.textContent=inc+'%'
}, 50);
setTimeout(() => {
    clearInterval(si);
    btn.style.opacity=0.7
    console.log("stop");
    
}, 5000);

})

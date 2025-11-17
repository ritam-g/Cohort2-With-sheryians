let btn=document.querySelector("button");
let main=document.querySelector("main")
btn.addEventListener("click",()=>{
    for(let i=0;i<10;i++){ let right=Math.floor(Math.random()*100);
    let top=Math.random()*100;
    let div=document.createElement("div");
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    div.style.right=`${right}%`;
    div.style.top=`${top}%`;
    div.style.transform=`rotate(${r}deg)`;
    div.style.backgroundColor=`rgb(${r},${g},${b})`;
    main.appendChild(div);}
   
    
    
})


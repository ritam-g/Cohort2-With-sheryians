const gifCollection = [
    "https://giffiles.alphacoders.com/222/222341.gif",
    "https://i.pinimg.com/originals/f4/05/0b/f4050ba46d6e068815ea4eb7f4e4ec9c.gif",
    "https://i.pinimg.com/originals/f2/66/1c/f2661c46843f9af43c82c1b6d363743b.gif",
    "https://i.pinimg.com/originals/f4/ef/59/f4ef59dffa0c42293103e6523e9abc23.gif",
    "https://i.makeagif.com/media/1-12-2023/ScxowK.gif"

];




let main = document.querySelector("main");
let a=setInterval(()=>{
   document.querySelector("body").style.backgroundImage=`url(${gifCollection[Math.floor(Math.random()*gifCollection.length)]})`

   },2000)

main.addEventListener("mousemove", (e) => {
   main.style.setProperty('--x',e.clientX+'px')
   main.style.setProperty('--y',e.clientY+'px')
   
});



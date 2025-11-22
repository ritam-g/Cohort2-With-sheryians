let i=document.querySelector('i');
let sound=[
    "song/28.mp3","song/29.mp3","song/30.mp3","song/32.mp3"
]
document.addEventListener("keydown",(d)=>{
    let val=sound[Math.floor(Math.random()*sound.length)];
    let  audio= new Audio(val)
    audio.play();
    i.textContent=d.key
    
    
})
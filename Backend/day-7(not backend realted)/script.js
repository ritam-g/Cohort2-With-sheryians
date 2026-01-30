let mouse=document.querySelector('.mouse-follow')
let bigMouse1=document.querySelector('.big-mouse-follower1')
let bigMouse2=document.querySelector('.big-mouse-follower2')
let bigMouse3=document.querySelector('.big-mouse-follower3')
let bigMouse4=document.querySelector('.big-mouse-follower4')
let bigMouse5=document.querySelector('.big-mouse-follower5')
let bigMouse6=document.querySelector('.big-mouse-follower6')
let bigMouse7=document.querySelector('.big-mouse-follower7')
let bigMouse8=document.querySelector('.big-mouse-follower8')
let bigMouse9=document.querySelector('.big-mouse-follower9')
let bigMouse10=document.querySelector('.big-mouse-follower10')
let x=0,y=0
addEventListener('mousemove',(e)=>{
    const {clientX,clientY}=e
    x=clientX
    y=clientY
    move()
    
})
function move() {
    mouse.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse1.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse2.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse3.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse4.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse5.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse6.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse7.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse8.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse9.style.transform=`translate3d(${x}px,${y}px,0)`
    bigMouse10.style.transform=`translate3d(${x}px,${y}px,0)`
    requestAnimationFrame(move)
}
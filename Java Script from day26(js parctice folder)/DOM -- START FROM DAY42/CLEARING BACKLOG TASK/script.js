let main = document.querySelector("main");
let activeImage = null;      // the image currently being moved
let moveHandler = null;      // mousemove handler

//     if (e.target.tagName === "IMG") {
        
//         // If clicking the SAME image again → stop tracking
//         if (activeImage === e.target) {
//             main.removeEventListener("mousemove", moveHandler);
//             activeImage = null;
//             return;
//         }

//         // If switching to a NEW image → stop old tracking
//         if (activeImage !== null) {
//             main.removeEventListener("mousemove", moveHandler);
//         }

//         // Set new active image
//         activeImage = e.target;

//         // Define new movement handler
//         moveHandler = (ev) => {
//             activeImage.style.left = ev.clientX + "px";
//             activeImage.style.top = ev.clientY + "px";
//         };

//         // Start following the mouse
//         main.addEventListener("mousemove", moveHandler);
//     }
// });
main.addEventListener("dblclick",(e)=>{
    if (e.target.tagName==="IMG") {
    //when the same imge double click it stop
    if(activeImage===e.target){
        main.removeEventListener("mousemove",moveHandler);
        activeImage=null
        main.style.cursor="default"

    }
    //! OTHER WISE  
   else{
    activeImage=e.target

    moveHandler=(mv)=>{
        activeImage.style.left=mv.clientX+'px'
        activeImage.style.top=mv.clientY+'px'
        main.style.cursor="none"
    }
    main.addEventListener("mousemove",moveHandler)}

    }
    
})
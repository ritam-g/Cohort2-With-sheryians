const h2=document.querySelector("h2")
const h1=document.querySelector("h1")
let num=h2.textContent
let SI=setInterval(() => {
    if (num==0) {
        h2.textContent="it cant go - value"

        clearInterval(SI)
        document.querySelector("body").style.backgroundColor="lightpink"
    }
    else{num--
    h2.textContent=num}
    

}, 100);
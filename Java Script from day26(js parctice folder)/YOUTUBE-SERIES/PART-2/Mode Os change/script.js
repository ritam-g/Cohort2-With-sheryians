// const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

// function colorChange() {
//   if (themeQuery.matches) {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }

// // ✅ Apply on first load
// colorChange();

// // ✅ Detect live OS/DevTools change
// themeQuery.addEventListener("change", colorChange);

document.body.addEventListener("click",function(){
    document.body.classList.toggle("dark")
})
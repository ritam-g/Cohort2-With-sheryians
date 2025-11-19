let img = document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick", () => {

    i.style.transform = `scale(6)`;
    i.style.opacity = 1;

    setTimeout(() => {
        i.style.top = '10%';
    }, 1000);

    setTimeout(() => {
        i.style.opacity = '0';
    }, 2000);

    setTimeout(() => {
        i.style.top = '50%';
        i.style.opacity = '0';
        i.style.transform = 'scale(0)';   // ⭐ RESET ADDED
    }, 3000);
});

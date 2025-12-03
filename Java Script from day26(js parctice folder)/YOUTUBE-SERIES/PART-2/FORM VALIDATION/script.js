

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const h1 = document.querySelector(".form-container > h1");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const form = document.querySelector("form");
form.addEventListener("submit",(d)=>{
    d.preventDefault()
    email=emailInput.value.trim()
    pass=passwordInput.value.trim()
    
    if (!emailRegex.test(email) || !passwordRegex.test(pass)) {
        h1.textContent="not valid"
        h1.style.color="red"
    }
    else{
         h1.textContent=" valid"
        h1.style.color="green"
    }
    
    
    
})



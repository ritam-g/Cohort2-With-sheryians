let pr=new Promise((resolve, reject) => {
    let bool=true
    setTimeout(() => {
         if(bool){
        resolve("this is true ")
    }
    else{
        reject("this is false")
    }
    }, 2000);
   
})
async function call() {
    try {
        console.log(await pr);
        
    } catch (error) {
        console.log(error);
        
        
    }
}
call()
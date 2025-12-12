//! TASK -1


async function wetherReport(city) {
    try {

        let apiKey=`9b1b8d320572d43c9b173e31e3e4b1e8`
        
   
        let rawData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`) 
        // console.log();
        
        let realData=await rawData.json()
        if (!rawData.ok) {
             throw new Error("please write proper city name")
        }
        if (realData.wind.speed>1) {
            console.log(`the wind of the your ${city} speed is  ${realData.wind.speed} that is too bad`);
        } else {
            console.log(`the wind of the your ${city} speed is  ${realData.wind.speed} that is too good`);
            
        }
        
        
        
        
    } catch (error) {
        console.warn(error);
        
    }
   

}
wetherReport("kolkata")
wetherReport("Goa")
wetherReport("Mumbai")
wetherReport("kolkata")


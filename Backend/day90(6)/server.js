const { default: mongoose } = require("mongoose");
const app = require("./src/app");

function connectServer() {
    mongoose.connect('mongodb+srv://ritammaty2006_db_user:SuEOrJ7QLxiLV6nm@cluster0.gejk9ft.mongodb.net/?appName=Cluster0/day-6')
    .then(()=>{
        console.log('server conected with cluster db and ther we made day-6 db');
        
    })
    .catch(err=>console.log(err)
    )
}

//! wrok is start server and connect with databse  
app.listen(300,()=>{
    console.log('server is running ');
    connectServer()
    
})
const express = require('express');
const app=express()
//REVIEW - main thing express can read by defult ther preoperty of body so 
//NOTE - so we need middleware tahat will make sure express can read body

app.use(express.json())

//! data will be stoe in db right so we nedd db 

const DB=[]//! it will be array wehre we store in all individul post  
//! TASK IS USER WILL SEND DATA FROM UI AND I HAVE TO ACCEPT AND STORE IN DB 
app.post('/notes',(req,res)=>{
    //! user data always will be in req.body
    const  userData=req.body
    res.send("notes added")
    DB.push(userData)
    console.log('/notes in post ');
    
}) 
app.get('/notes',(req,res)=>{
    res.send(DB)
    
})

app.get('/',(req,res)=>{
    res.send("welcome to my website")
})


//! server is created  
app.listen(3000,()=>{
    console.log('server is runing ');
    
})
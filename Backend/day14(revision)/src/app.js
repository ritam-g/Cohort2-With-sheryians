const express = require("express");
const hodRoute = require("./routes/auth.hod");

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    console.log('welocme to our backend folder');
    
})

app.use('/api',hodRoute)

module.exports=app
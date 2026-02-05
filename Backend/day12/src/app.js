const express=require('express')
const authRouter = require('./routes/auth.routes')
const cookieParser = require('cookie-parser')

const app=express()
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('welcome to our website ')
})
//! middle weare for using external rotes 
//! WARNING  '/api' this prefix 
app.use('/api',authRouter)

module.exports=app
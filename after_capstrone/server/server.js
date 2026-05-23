import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const app=express()
app.set('view engine',"ejs")
app.set("views",path.join(__dirname,"views"))
const port = 3001
app.get("/",(req,res)=>{
    res.render("index",{
        userName:"ritam maty",
        link:"https://plus.unsplash.com/premium_photo-1747851576768-55729e07beaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        purpose:"only testing pupose"
    })
})
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
const express = require("express");
const noteModel = require('./models/note.module');
const { default: mongoose } = require("mongoose");
const app=express()
app.use(express.json())

app.post('/notes',async(req,res)=>{
    const {
    title,
    content}=req.body
    const note=await noteModel.create({
        title,content
    })
    res.status(201).json({
        message:"notes is created ",
        note
    })

})

app.get('/notes',async(req,res)=>{
   const notes= await noteModel.find()
   res.status(200).json({
    message:'your data',
    notes
   })
})
module.exports=app
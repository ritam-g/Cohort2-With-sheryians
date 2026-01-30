const express = require("express");
const noteModel = require("./models/notes.model");

const app=express()
app.use(express.json())
app.get('/notes',async(req,res)=>{
    const notes=await noteModel.find()
    res.status(200).json({
        message:'welcome to our home page',
        notes
    })
})
app.post('/notes',async(req,res)=>{
    const {title,content}=req.body
    const note= await noteModel.create({
        title,content
    })
    res.status(201).json({
        message:'note is crated ',
        note
    })
})

module.exports=app
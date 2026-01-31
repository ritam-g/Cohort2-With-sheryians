const express = require("express");
const noteModel = require("./models/note.model");
// const cors = require("cors")
const app=express()
app.use(express.json())
// app.use(cors())

//* USER WILL GET DATA   //NOTE - find 
app.get('/api/note',async(req,res)=>{
   const notes= await noteModel.find()
   res.status(200).json({
    message:"you note data is created",
    notes
   })
})

//* USER WILL CRATE DATA POST //NOTE - create
app.post('/api/note',async(req,res)=>{
    const {title,content}=req.body
   const note= await noteModel.create({title,content})
   res.status(201).json({
    message:"note is created ",
    note
   })
})
//* user can update data using post //NOTE - findByIdAndUpdate
app.patch('/api/note/:id',async(req,res)=>{
    const {title,content}=req.body
    const {id}=req.params
    let  updateNote
    if(title&&content){
        updateNote= await noteModel.findByIdAndUpdate(id,{title,content})
       res.status(200).json({
        message:'data is updated ',
        updateNote
       })
    }
    else{
        title? updateNote=await noteModel.findByIdAndUpdate(id,{title}):content?updateNote=await noteModel.findByIdAndUpdate(id,{content}):''
        res.status(201).json({
            message:"note is updated ",
            updateNote
        })
    }
}) 

//* USER CAN DELETE HIS POST  //NOTE -  findByIdAndDelete
app.delete('/api/note/:id',async(req,res)=>{
    const {id}=req.params
    const deltedData=await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"use deleted",
        deltedData
    })
}) 



module.exports=app
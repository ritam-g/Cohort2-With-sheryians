const express = require("express");

const app=express()
app.use(express.json())

let notes=[]
//! user will get data  
app.get('/',(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})
//! user will create notes  
app.post('/notes',(req,res)=>{
    let userData=req.body
    notes.push(userData)
    res.status(201).json({
        messgae:"you data is created"
    })
})

//! user will make changes  
app.patch('/notes/:index',(req,res)=>{
    let {name}=req.body
    let id=req.params.index
    notes[id].name=name
    res.status(200).json({
        messgae:"you data is updated"+`${id}`
    })
})

app.delete('/notes/:index',(req,res)=>{
    let id=req.params.index
    delete notes[id]
    res.status(200).json({
        messgae:"deleted your data sucess fully"
    })
})





module.exports=app
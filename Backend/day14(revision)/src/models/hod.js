const mongoose = require("mongoose");

const hodSchema=new mongoose.Schema({
    name:String,
    depart:String,
    email:String
})

module.exports=mongoose.model("HOD",hodSchema)
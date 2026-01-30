const mongoose = require("mongoose");

//! before sending any data to db we need schema  
const noteSchema=new mongoose.Schema({
    title:String,
    content:String
})
//! for doing operation we need model besue it hasl all fucntion and   
//! mongoose.model return aboject of metode  
const noteModel=mongoose.model('notes',noteSchema)
//! this are the methode  
// noteModel.create()
// noteModel.find()
// noteModel.findById()
// noteModel.updateOne()
// noteModel.deleteOne()
module.exports=noteModel
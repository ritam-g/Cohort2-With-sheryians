//! where i have to create first route 
//! one thing if we write outside route of from any app.js 
//! so we havet o use router 

const express = require("express");
const userModel = require("../models/user.model");

const authRouter=express.Router()

authRouter.post('/register',async(req,res)=>{
    const{email,name,pass}=req.body
    
    //! before creating we need to check is or email is already exiest ot not 
   let check= await userModel.findOne({email}) 
   if (check) {
    return res.status(409).json({
        message:'pleaes user diffrent email '
    })
   }

    let user = await userModel.create({
        name,email,pass
    })
    res.status(201).json({
        message:'user is created ',
        user
    })
    console.log('hit');
    
})
module.exports=authRouter
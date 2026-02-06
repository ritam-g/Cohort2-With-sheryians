//! where i have to create first route 
//! one thing if we write outside route of from any app.js 
//! so we havet o use router 

const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");//! for digital sign with token  

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
   const token= jwt.sign(
        {id:user._id,email:user.email},
        process.env.JADUKEY
    )
    //! set cookie wehn user will cfeate new user  
    res.cookie('jwt_cokie',token)
    res.status(201).json({
        message:'user is created ',
        user,token
    })
    console.log('hit');
    
})

authRouter.post('/login',async(req,res)=>{
    const {email,pass}=req.body
    let find=await userModel.findOne({email})
    if(!find)return res.status(400).json({
        message:'user not find '
    })
    res.status(200).json({
        message:'user found sucessfully'
    })
})
module.exports=authRouter
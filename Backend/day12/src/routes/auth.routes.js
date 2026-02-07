//! where i have to create first route 
//! one thing if we write outside route of from any app.js 
//! so we havet o use router 

const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");//! for digital sign with token  
const crypto = require('crypto');

const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {
    const { email, name, pass } = req.body

    //! before creating we need to check is or email is already exiest ot not 
    let check = await userModel.findOne({ email })
    if (check) {
        return res.status(409).json({
            message: 'pleaes user diffrent email '
        })
    }
    //! CREATING HAS USING CRYPTO FO THE PASS

    const hash=crypto.createHash('md5').update(pass).digest("hex")
    let user = await userModel.create({
        name, email, pass:hash//! PASSWROD WILL BE IN HASH FORMAT  
    })
    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JADUKEY
    )
    //! set cookie wehn user will cfeate new user  
    res.cookie('jwt_cokie', token)
    res.status(201).json({
        message: 'user is created ',
        user, token
    })
    // console.log('hit');

})

// /api/protected
authRouter.post('/protected', async (req, res) => {
    //! db can readn and wite cokkies  
    console.log(req.cookies);//! req.cokies we have the jwt token  
    res.status(200).json({
        message: "welcome Back to our website "
    })

})

// /api/login
//! cb,function,fatawro , controller 
authRouter.post('/login', async (req, res) => {
    const { email, pass } = req.body
    //! check is user exiest in this email 
    const user = await userModel.findOne({ email })//! it will return user ddetails  
    //! user email is worng  
    if (!user) return res.status(404).json({ message: "user donesnot exiest " })
    //NOTE - THIS WILL WORK ONLY WHEN PASS IS IN NORMALY STORE IN DB  
    // const validUser = (pass == user.pass)
    //NOTE - //!THIS IS FOR WHEN PASS WROD IS IN HAS FORMAT 
    const validUser = (crypto.createHash('md5').update(pass).digest("hex") == user.pass)
    //! WARNING user passwrod is wrong 
    if (!validUser) return res.status(404).json({ message: "pelase enter valid password" })

    //! all condition check means user is valid now create jwt 
    const token = jwt.sign(
        { id: user._id }, process.env.JADUKEY
    )
    res.cookie("token", token)

    return res.status(200).json({ message: "welcome back bro ", user })


})
module.exports = authRouter
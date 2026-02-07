const express = require("express");
const hodModel = require("../models/hod");
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const hodRoute = express.Router()

hodRoute.post('/register', async (req, res) => {
    const { name,
        depart,
        email } = req.body
    const password = "mypassword123"+depart;

    // salt rounds (10 is industry standard)
    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    let hod = await hodModel.create({ name, depart:hashedPassword, email })
    res.status(200).json({
        message: 'hod is created ',
        hod
    })
})

module.exports = hodRoute
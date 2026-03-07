import express from 'express'
import registerController from '../controller/auth.controller.js'

const authRoute=express.Router()

authRoute.post('/register',registerController)

export default authRoute
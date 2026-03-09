import express from 'express'
import registerController from '../controller/auth.controller.js'
import { body, validationResult } from 'express-validator'
import authValidate from '../validator/auth.validate.js'
const authRoute = express.Router()

authRoute.post('/register', authValidate, registerController)

export default authRoute
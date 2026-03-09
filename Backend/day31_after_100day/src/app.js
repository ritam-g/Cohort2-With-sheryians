import express from 'express'
import authRoute from './routes/auth.route.js'
import handelErr from './middleware/err.middleware.js'


const app=express()
app.use(express.json())


app.use('/auth',authRoute)

//NOTE - ERROR SHOULD BE IN LAST AS A MIDDLE WARE FOR TING A
app.use(handelErr)
export default app
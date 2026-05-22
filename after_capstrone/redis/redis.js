import express from 'express'
import dotenv from 'dotenv'
import Redis from 'ioredis'
import userModel from './models/user.js'
dotenv.config()

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})
const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}
const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.get(`/user/:id`, async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' })
    }
})

app.post('/user', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = await userModel.create({ name, email, password })
        return res.status(201).json(newUser)
    } catch (error) {
        return  res.status(500).json({ message: 'Internal server error' })
    }
})

app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    await connectToMongo()
})
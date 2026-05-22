import express from 'express'
import dotenv from 'dotenv'
import Redis from 'ioredis'
import userModel from './model.js'
import morgan from 'morgan'
import mongoose from 'mongoose'
dotenv.config()

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})
redis.on('connect', () => {
    console.log('Connected to Redis')
})
redis.on('error', (error) => {
    console.error('Error connecting to Redis:', error)
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
/**  
 * if user data is present in redis cache, return it from there
 * if not present in redis cache, fetch it from MongoDB, store it in redis cache and return the response
 */
app.get(`/user/:id`, async (req, res) => {
    const { id } = req.params
    try {
        let user;
        user = await redis.get(`user:${id}`)
        if (user) {
            console.log('User data retrieved from Redis cache')
            return res.status(200).json(JSON.parse(user))
        }
        user = await userModel.findById(id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        await redis.set(`user:${id}`, JSON.stringify(user), 'EX', 3600)

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' })
    }
})
/**  
 * create a new user in MongoDB and store the user data in redis cache with an expiry time of 1 hour
 */
app.post('/user', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const newUser = await userModel.create({ name, email, password })
        await redis.set(`user:${newUser._id}`, JSON.stringify(newUser), 'EX', 3600)
        return res.status(201).json(newUser)
    } catch (error) {
        return  res.status(500).json({ message: 'Internal server error' })
    }
})

app.listen(process.env.PORT || 3000, async () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
    await connectToMongo()
})
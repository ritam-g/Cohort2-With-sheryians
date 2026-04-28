import express from 'express'

const app = express()

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

app.get('/api/data', (req, res) => {
    const data = {
        id: 1,
        name: 'Sample Data',
        description: 'This is some sample data from the backend.'
    }
    res.json(data)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
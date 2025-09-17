require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const swaggerSpec = require('./swagger')
const swaggerUi = require('swagger-ui-express')

const app = express()
const port = process.env.PORT
const url = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api/auth', userRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'API is running' })
})

mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })
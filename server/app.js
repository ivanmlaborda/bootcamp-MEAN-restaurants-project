const express = require('express')
const path = require('path')
const app = express()
const pathPublic = path.join(process.cwd(), 'client')
const PORT = 3001
const urlDb = 'mongodb://localhost:27017/test'

const middleCreateProjector = require('./routes/middleware/middleCreateProjector')
const routerRestaurant = require('./routes/restaurant')
const routerRestaurants = require('./routes/restaurants')
const mongoose = require('./db')

app.use(express.static(pathPublic))
app.use(middleCreateProjector)
app.use(routerRestaurant)
app.use(routerRestaurants)

mongoose.connect(urlDb, {useMongoClient: true})

app.listen(PORT, () => `Listening on Port ${PORT}`)

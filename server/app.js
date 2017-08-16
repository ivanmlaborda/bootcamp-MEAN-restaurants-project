const express = require('express')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const path = require('path')
const app = express()
const pathPublic = path.join(process.cwd(), 'client')
const urlDb = 'mongodb://localhost:27017/test'
const PORT = 3001

const middleCreateProjector = require('./middleware/middleCreateProjector')
const getAllRestaurants = require('./handlers/getAllRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')
const getRestaurantById = require('./handlers/getRestaurantById')

app.use(express.static(pathPublic))

mongoose.connect(urlDb, {useMongoClient:true})

app.use(middleCreateProjector)
app.get('/api/restaurants', getAllRestaurants)
app.get('/api/restaurants/borough/:borough', byBorough)
app.get('/api/restaurants/cuisine/:cuisine', byCuisine.bind(null, false))
app.get('/api/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, true))
app.get('/api/restaurant/:id', getRestaurantById)

app.listen(PORT, () => `Listening on Port ${PORT}`)

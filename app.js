const { MongoClient } = require('mongodb')
const express = require('express')

const path = require('path')
const app = express()
const pathPublic = path.join(__dirname, 'public')
const urlDb = 'mongodb://localhost:27017/test'
const PORT = 3001

const middleCreateProjector = require('./middleware/middleCreateProjector')
const getAllRestaurants = require('./handlers/getAllRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')
const getRestaurantById = require('./handlers/getRestaurantById')

app.use(express.static(pathPublic))



MongoClient.connect(urlDb, (err, db) => {
  if (err) throw err
  console.log('Connected correctly to server')

  app.use(middleCreateProjector)
  app.get('/api/restaurants', getAllRestaurants.bind(null, db))
  app.get('/api/restaurants/borough/:borough', byBorough.bind(null, db))
  app.get('/api/restaurants/cuisine/:cuisine', byCuisine.bind(null, db, false))
  app.get('/api/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, db, true))
  app.get('/api/restaurant/:id', getRestaurantById.bind(null, db))
})

app.listen(PORT, () => `Listening on Port ${PORT}`)

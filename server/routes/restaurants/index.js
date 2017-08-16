const express = require('express')
const router = express.Router()

const getAllRestaurants = require('../restaurants/handlers/getAllRestaurants')
const byBorough = require('../restaurants/handlers/byBorough')
const byCuisine = require('../restaurants/handlers/byCuisine')

router.get('/api/restaurants', getAllRestaurants)
router.get('/api/restaurants/borough/:borough', byBorough)
router.get('/api/restaurants/cuisine/:cuisine', byCuisine.bind(null, false))
router.get('/api/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, true))

module.exports = router

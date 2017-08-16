const express = require('express')
const router = express.Router()

const getRestaurantById = require('../restaurant/handlers/getRestaurantById')

router.get('/api/restaurant/:id', getRestaurantById)

module.exports = router

const Restaurant = require('../models/restaurantMdl')
const getAllRestaurants = (req, res) => {
  const { projection, limit, skip } = req
  Restaurant
      .find()
      .select(projection)
      .limit(limit)
      .skip(skip)
      .then(restaurants => res.json(restaurants))
      .catch(console.log)
}

module.exports = getAllRestaurants

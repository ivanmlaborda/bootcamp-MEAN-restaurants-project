
const Restaurant = require('../models/RestaurantMdl')
const getAllRestaurants = (req, res) => {
  const { projection, limit, skip , pages} = req
  console.log('skip')
  console.log(pages)
  Restaurant
      .find()
      .select(projection)
      .limit(limit)
      .skip(skip)
      .then(restaurants => res.json(restaurants))
      .catch(console.log)
}

module.exports = getAllRestaurants

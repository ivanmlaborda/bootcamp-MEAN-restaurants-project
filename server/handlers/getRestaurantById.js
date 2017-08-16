const Restaurant = require('../models/RestaurantMdl.js')

const getRestaurantById = (req, res) => {
  const { projection } = req
  const { id } = req.params
  // console.log(id)
  Restaurant
    .findById(id, (err, restaurant) => {
      if (err) throw err
      console.log(restaurant)
      return restaurant

    })
    .select(projection)
    .then(restaurants => res.json(restaurants))
}

module.exports = getRestaurantById

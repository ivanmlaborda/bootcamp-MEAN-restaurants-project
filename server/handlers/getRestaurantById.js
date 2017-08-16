const Restaurant = require('../models/RestaurantMdl')

const getRestaurantById = (req, res) => {
  const { projection } = req
  const { id } = req.params
  console.log(id)
  Restaurant
    .findById(id, projection, (err, restaurant) => {
      if (err) throw err
      res.json(restaurant)
    })
}

module.exports = getRestaurantById

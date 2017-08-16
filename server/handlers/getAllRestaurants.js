const Restaurant = require('../models/RestaurantMdl.js')
const getAllRestaurants = (req, res) => {
  const { projection, limit, skip } = req
  Restaurant
    .find()
    .select(projection)
    .limit(limit)
    .skip(skip)
    .then(restaurants => res.json(restaurants))
    // .find({}, projection)
    // .limit(limit)
    // .skip(skip)
    // .toArray((err, aRestaurants) => {
    //   if (err) throw err
    //   res.json(aRestaurants)
    // })
}

module.exports = getAllRestaurants

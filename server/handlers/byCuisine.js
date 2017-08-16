const Restaurant = require('../models/RestaurantMdl')
function byCuisine (not, req, res) {
  const { projection, limit, skip } = req
  const { cuisine } = req.params
  const query = { cuisine }
  if (not) {
    query = { cuisine: {$ne: cuisine} }
  }

  Restaurant
    .find(query)
    .select(projection)
    .limit(limit)
    .skip(skip)
    .then(restaurants => res.json(restaurants))
}

module.exports = byCuisine
 // pathname : '/restaurants/cuisine/not/Italian
  // pathname : '/restaurants/cuisine/Italian',

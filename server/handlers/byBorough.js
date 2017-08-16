const Restaurant = require('../models/restaurantMdl')
const byBorough = (req, res) => {
  const {borough} = req.params
  const { projection, limit, skip } = req
  Restaurant
    .find({borough})
    .select(projection)
    .limit(limit)
    .skip(skip)
    .then(restaurants => res.json(restaurants))
    .catch(console.log)
}

module.exports = byBorough

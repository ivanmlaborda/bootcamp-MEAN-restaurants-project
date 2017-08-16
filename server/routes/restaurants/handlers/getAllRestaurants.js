
const Restaurant = require('../../../models/RestaurantMdl')
const getAllRestaurants = (req, res) => {
  const { projection, skip, paginateOption } = req
  const {page, limit} = paginateOption
  console.log(page)
  console.log(limit)
  Restaurant.paginate({}, {limit, page})
  .then((rest) => res.json(rest))
      // .find()
      // .select(projection)
      // .limit(limit)
      // .skip(skip)
      // .then(restaurants => res.json(restaurants))
      // .catch(console.log)
}

module.exports = getAllRestaurants

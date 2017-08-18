
const Restaurant = require('../../../models/RestaurantMdl')
const getAllRestaurants = (req, res) => {
  const { projection, skip, paginateOption } = req
  const {page, limit} = paginateOption
  console.log(`page from api all ${page}`)
  console.log(`limit from api al ${limit}`)
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

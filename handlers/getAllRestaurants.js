
const getAllRestaurants = (db, req, res) => {
  const { projection, limit, skip } = req
  db.collection('restaurants')
    .find({}, projection)
    .limit(limit)
    .skip(skip)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = getAllRestaurants

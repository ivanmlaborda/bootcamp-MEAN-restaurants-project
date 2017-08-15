function byCuisine (db, not, req, res) {
  const { limit, projection, offset } = req
  const { cuisine } = req.params
  const query = { cuisine }
  if (not) {
    query = { cuisine: {$ne: cuisine} }
  }

  db.collection('restaurants')
    .find(query, projection)
    .limit(limit)
    .skip(offset)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byCuisine
 // pathname : '/restaurants/cuisine/not/Italian
  // pathname : '/restaurants/cuisine/Italian',

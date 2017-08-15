const byBorough = (db, req, res) => {
  const {borough} = req.params
  const { projection, limit, skip } = req
  db.collection('restaurants')
    .find({borough}, projection)
    .limit(limit)
    .skip(skip)
    .toArray((err, aRestaurants) => {
      if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byBorough

const middleCreateProjector = (req, res, next) => {
  req.projection = {}

  const { show = '', hide = '', limit = 10, page = 1} = req.query

  const oShow = show.split(',').reduce((acc, field) => {
    if (field) {
      acc[field] = 1
    }
    return acc
  }, {})
  const oHide = hide.split(',').reduce((acc, field) => {
    if (field) { acc[field] = 0 }
    return acc
  }, {})
  req.limit = +limit
  req.skip = (page * limit) - limit
  req.projection = Object.assign({}, oShow, oHide)
  next()
}

module.exports = middleCreateProjector

const middleCreateProjector = (req, res, next) => {
  req.projection = {}

  const { show = '', hide = '', limit = 10, page = 1} = req.query
  const paginateOption = {}
  paginateOption.limit = +limit
  paginateOption.page = +page

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
  req.paginateOption = paginateOption
  req.projection = Object.assign({}, oShow, oHide)
  // req.numPages = 'test'
  // req.currentPage = 'test'
  // req.numResults = 'test'
  next()
}

module.exports = middleCreateProjector

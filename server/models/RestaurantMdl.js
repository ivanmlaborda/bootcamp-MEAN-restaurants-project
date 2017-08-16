const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

const collection = 'restaurants'

var RestaurantSchema = new Schema({
  name: String,
  borough: String,
  cuisine: String,
  address: {
    building: String,
	  street: String,
	  zipcode: String,
	  coord: [Number]
  },
  grades: [{
    date: Date,
    grade: String,
    score: Number
  }]
}, { collection })

RestaurantSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Restaurant', RestaurantSchema)

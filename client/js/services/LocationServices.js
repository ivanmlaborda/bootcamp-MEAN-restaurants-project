angular.module('Restaurants')
  .service('LocationServices', function () {
    const data = {}

      this.setData = function(restaurants, callback) {
        data = restaurants
        
      }

      this.getData = function() {
        return data
      }
  })

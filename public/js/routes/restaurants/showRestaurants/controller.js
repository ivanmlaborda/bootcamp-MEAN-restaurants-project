/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var self = this
    self.page = 1
    showResults.bind(null, DataServices, self, self.page)()
    self.pageHandler = function (e) {
      var valueBtn = e.target.value
      if (valueBtn === 'Advance') self.page++
      else if (valueBtn === 'Pre' && self.page > 1) self.page--
      else self.page = 1
      showResults.bind(null, DataServices, self, self.page)()
    }
  }

  function showResults (DataServices, self, page) {
    DataServices.getAllRestaurants(page)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
    })
  }
  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

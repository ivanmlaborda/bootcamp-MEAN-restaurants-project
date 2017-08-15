/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices, $scope) {
    var self = this
    // self.page = 1
    showResults.bind(null, DataServices, self, self.page)()

    $scope.$on('onValueReady', function (e, value) {
      showFilteredResults.bind(null, DataServices, self, value.value, self.page)()
    })

    // self.pageHandler = function (e) {
    //   var valueBtn = e.target.value
    //   if (valueBtn === 'Advance') self.page++
    //   else if (valueBtn === 'Pre' && self.page > 1) self.page--
    //   else self.page = 1
    //   showResults.bind(null, DataServices, self, self.page)()
    // }
  }

  function showFilteredResults (DataServices, self, borough, page) {
    DataServices.getRestaurantsByBorough(borough, page)
    .then(function (restaurants) {
      console.log(restaurants.data.length)
      self.restaurants = restaurants.data
    })
  }

  function showResults (DataServices, self, page) {
    DataServices.getAllRestaurants(page)
    .then(function (restaurants) {
      console.log(restaurants.data.length)
      self.restaurants = restaurants.data
    })
  }
  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

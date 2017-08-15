/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices, $scope) {
    var self = this
    showResults.bind(null, DataServices, self)()
    $scope.$on('onFilterBorough', function (e, value) {
      filterByBorough.bind(null, DataServices, self, value.value)()
    })
    $scope.$on('onFilterCuisine', function (e, value) {
      filterByCuisine.bind(null, DataServices, self, value.value)()
    })
    self.handlePage = function() {
      console.log('Hola')
      self.pageSelect = self.pageSelect || 10
    }
    console.log('fuera')
  }

  function filterByBorough (DataServices, self, borough) {
    DataServices.getRestaurantsByBorough(borough)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
    })
  }

  function filterByCuisine (DataServices, self, borough) {
    DataServices.getRestaurantsByCuisine(borough)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
    })
  }

  function showResults (DataServices, self) {
    DataServices.getAllRestaurants()
    .then(function (restaurants) {
      self.restaurants = restaurants.data
    })
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

// self.page = 1
   // self.pageHandler = function (e) {
    //   var valueBtn = e.target.value
    //   if (valueBtn === 'Advance') self.page++
    //   else if (valueBtn === 'Pre' && self.page > 1) self.page--
    //   else self.page = 1
    //   showResults.bind(null, DataServices, self, self.page)()
    // }

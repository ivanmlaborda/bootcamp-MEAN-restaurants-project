/* global angular */

(function () {
  'use strict'

  function restaurantsCtrl ($routeParams, DataServices, $scope, $location) {
    var self = this
    self.numPage = $routeParams.page
    console.log(self.numPage)
    showResults.bind(null, DataServices, self, 1000, self.numPage)()
    $scope.$on('onFilterBorough', function (e, value) {
      filterByBorough.bind(null, DataServices, self, value.value)()
    })
    $scope.$on('onFilterCuisine', function (e, value) {
      filterByCuisine.bind(null, DataServices, self, value.value)()
    })

    self.handlePage = function () {
      console.log('Hola desde handle')
      self.pageSelect = self.pageSelect || 10
    }

    self.next = function (value) {
      $location.search('page', value).path('/')
    }
  }

  function filterByBorough (DataServices, self, borough) {
    DataServices.getRestaurantsByBorough(borough)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
      self.numberRestaurants = restaurants.data.length
    })
  }

  function filterByCuisine (DataServices, self, borough) {
    DataServices.getRestaurantsByCuisine(borough)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
    })
  }

  function showResults (DataServices, self, limit, page) {
    DataServices.getAllRestaurants(limit, page)
    .then(function (restaurants) {
      self.restaurants = restaurants.data
      self.totalRestaurants = restaurants.data.length
    })
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

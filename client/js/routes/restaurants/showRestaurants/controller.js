/* global angular */

(function () {
  'use strict'

  function restaurantsCtrl ($routeParams, DataServices, $scope, $location) {
    var self = this
    $routeParams.page = $routeParams.page || 1
    showResults.bind(null, DataServices, self, self.pageSelect, $routeParams.page, $location)()
    $scope.$on('onFilterBorough', function (e, value) {
      filterByBorough.bind(null, DataServices, self, value.value)()
    })
    $scope.$on('onFilterCuisine', function (e, value) {
      filterByCuisine.bind(null, DataServices, self, value.value)()
    })

    self.handlePage = function () {
      console.log(self.pageSelect)
      self.pageSelect = self.pageSelect || 10
      showResults.bind(null, DataServices, self, self.pageSelect, $routeParams.page, $location)()
    }

    self.next = function (boo, num) {
      $location.search('page', num).path('/')
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

  function showResults (DataServices, self, limit, page, $location) {
    DataServices.getAllRestaurants(limit, page)
    .then(function (restaurants) {
      console.log(restaurants)
      self.pages = restaurants.data.pages
      self.restaurants = restaurants.data.docs
      self.numPage = restaurants.data.page
      $location.search('page', self.numPage).path('/')
    })
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

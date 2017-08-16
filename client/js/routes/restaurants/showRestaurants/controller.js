/* global angular */

(function () {
  'use strict'

  function restaurantsCtrl ($routeParams, DataServices, helper, $scope, $location) {
    var self = this
    $routeParams.page = $routeParams.page || 1
    self.pageSelect = self.pageSelect || 10
    showResults.bind(null, DataServices, self, self.pageSelect, $routeParams.page)()
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

    self.next = function () {
      helper.setNum()
      let numPage = helper.getNum()
      console.log(numPage)
      $location.search('page', numPage).path('/')
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
      console.log(restaurants)
      self.restaurants = restaurants.data.docs
      self.numPage = restaurants.data.page
    })
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

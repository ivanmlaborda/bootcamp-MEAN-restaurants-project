/* global angular */
(function () {
  'use strict'

  function cuisineCtrl ($routeParams, DataServices) {
    var vm = this
    var cuisine = $routeParams.cuisine
    DataServices.getRestaurantsByCuisine(cuisine)
    .then(function (restaurant) {
      vm.restaurants = restaurant.data
      console.log(vm.restaurants)
    })
  }

  angular
    .module('Restaurants')
    .controller('cuisineCtrl', cuisineCtrl)
})()

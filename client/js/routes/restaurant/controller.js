/* global angular */
(function () {
  'use strict'

  function restaurantCtrl ($routeParams, DataServices) {
    var vm = this
    var id = $routeParams.id
    DataServices.getRestaurantById(id)
    .then(function (restaurant) {
      vm.restaurant = restaurant.data
    })
  }

  angular
    .module('Restaurants')
    .controller('restaurantCtrl', restaurantCtrl)
})()

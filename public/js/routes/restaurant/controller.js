/* global angular */
(function () {
  'use strict'

  function getRestaurantById (DataServices) {
    var vm = this
    DataServices.getRestaurantById()
    .then(console.log)
  }

  angular
    .module('Restaurants')
    .controller('restaurantCtrl', restaurantCtrl)
})()

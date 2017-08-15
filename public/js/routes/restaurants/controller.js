/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var vm = this
    DataServices.getAllRestaurants()
    .then(function (restaurants) {
      vm.restaurants = restaurants.data
    })
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

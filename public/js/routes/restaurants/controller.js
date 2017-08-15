/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var vm = this
    var page = 0
    vm.page = function () {
      page++
      DataServices.getAllRestaurants(page)
      .then(function (restaurants) {
        vm.restaurants = restaurants.data
      })
    }
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

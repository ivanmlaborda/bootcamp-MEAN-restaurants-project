/* global angular */
(function () {
  'use strict'

  function restaurantCtrl (DataServices, $routeParams) {
    var vm = this
    vm.id = $routeParams.id
    // DataServices.getRestaurantById(vm.id)
    // .then(console.log)
  }

  angular
    .module('Restaurants')
    .controller('restaurantCtrl', restaurantCtrl)
})()

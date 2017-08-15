/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var vm = this
    DataServices.getAllRestaurants()
    .then(console.log)
  }

  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

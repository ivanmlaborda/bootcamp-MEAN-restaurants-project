/* global angular */
(function () {
  'use strict'

  function boroughCtrl ($routeParams, DataServices) {
    var vm = this
    var borough = $routeParams.borough
    DataServices.getRestaurantsByBorough(borough)
    .then(function (restaurant) {
      vm.restaurants = restaurant.data
      console.log(vm.restaurants)
    })
  }

  angular
    .module('Restaurants')
    .controller('boroughCtrl', boroughCtrl)
})()

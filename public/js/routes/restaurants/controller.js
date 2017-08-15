/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var vm = this
    var page = 1
    showResults.bind(null, DataServices, vm, page)()
    vm.page = function () {
      page++
      showResults.bind(null, DataServices, vm, page)()
    }
  }
  function showResults (DataServices, vm, page) {
    DataServices.getAllRestaurants(page)
    .then(function (restaurants) {
      vm.restaurants = restaurants.data
    })
  }
  angular
  .module('Restaurants')
  .controller('restaurantsCtrl', restaurantsCtrl)
})()

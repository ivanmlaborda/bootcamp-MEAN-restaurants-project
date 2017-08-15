/* global angular */
(function () {
  'use strict'

  function restaurantsCtrl (DataServices) {
    var vm = this
    vm.page = 1
    showResults.bind(null, DataServices, vm, vm.page)()
    vm.pageHandler = function (e) {
      var valueBtn = e.target.value
      if (valueBtn === 'Advance') vm.page++
      else if (valueBtn === 'Pre' && vm.page > 1) vm.page--
      else vm.page = 1
      showResults.bind(null, DataServices, vm, vm.page)()
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

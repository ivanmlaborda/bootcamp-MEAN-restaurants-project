/* global angular */
(function () {
  'use strict'

  function filterCtrl (DataServices, $rootScope) {
    var self = this
    self.filterBorough = function (e, value) {
      console.log(e)
      $rootScope.$broadcast('onFilterBorough', { value: value})
    }
    self.filterCuisine = function (e, value) {
      console.log(e)
      $rootScope.$broadcast('onFilterCuisine', { value: value})
    }
  }
  angular
  .module('Restaurants')
  .controller('filterCtrl', filterCtrl)
})()

/* global angular */
(function () {
  'use strict'

  function filterCtrl (DataServices, $rootScope) {
    var self = this
    self.filterBorough = function (value) {
      $rootScope.$broadcast('onFilterBorough', { value: value})
    }
    self.filterCuisine = function (value) {
      $rootScope.$broadcast('onFilterCuisine', { value: value})
    }
  }
  angular
  .module('Restaurants')
  .controller('filterCtrl', filterCtrl)
})()

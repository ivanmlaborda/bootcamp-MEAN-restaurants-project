/* global angular */
(function () {
  'use strict'

  function filterCtrl (DataServices, $rootScope) {
    var self = this
    self.getValue = function (value) {
      console.log(value)
      $rootScope.$broadcast('onValueReady', { value: value})
    }
  }
  angular
  .module('Restaurants')
  .controller('filterCtrl', filterCtrl)
})()

/* global angular */
(function () {
  'use strict'

  function filterCtrl (DataServices) {
    console.log('hola desde filter')
  }
  angular
  .module('Restaurants')
  .controller('filterCtrl', filterCtrl)
})()

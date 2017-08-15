  /* global angular */
(function () {
  'use strict'
  angular.module('Restaurants')

.config(function ($routeProvider) {
  $routeProvider
    .when('/restaurant/:id', {
      templateUrl: 'js/routes/restaurant/template.html',
      controller: 'restaurantCtrl',
      controllerAs: 'vm'
    })
})
})()

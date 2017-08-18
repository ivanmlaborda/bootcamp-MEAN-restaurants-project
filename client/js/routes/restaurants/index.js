  /* global angular */
(function () {
  'use strict'
  angular.module('Restaurants')

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/routes/restaurants/template.html'
    })
    .otherwise({ redirectTo: '/?page=1' })
})
})()

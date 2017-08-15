  /* global angular */
(function () {
  'use strict'
  angular.module('Restaurants')

.config(function ($routeProvider) {
  $routeProvider
    .when('/restaurants/borough/:borough', {
      templateUrl: 'js/routes/borough/template.html',
      controller: 'boroughCtrl',
      controllerAs: 'vm'
    })
})
})()

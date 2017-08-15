  /* global angular */
(function () {
  'use strict'
  angular.module('Restaurants')

.config(function ($routeProvider) {
  $routeProvider
    .when('/restaurants/cuisine/:cuisine', {
      templateUrl: 'js/routes/cuisine/template.html',
      controller: 'cuisineCtrl',
      controllerAs: 'vm'
    })
})
})()

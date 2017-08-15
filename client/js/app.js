/* global angular */
(function () {
  angular.module('Restaurants', ['ngRoute', 'angularUtils.directives.dirPagination', 'angular-loading-bar'])
  .run(function () {
    console.log('Angular wins')
  })
})()

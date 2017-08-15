angular.module('Restaurants')
  .factory('DataServices', function($http) {

      function getAllRestaurants() {
        var url = '/api/restaurants'
        return $http.get(url)
      }

      return {
        getAllRestaurants: getAllRestaurants
      }
  })

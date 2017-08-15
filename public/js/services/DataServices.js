angular.module('Restaurants')
  .factory('DataServices', function ($http) {
    function getAllRestaurants (page) {
      var url = `/api/restaurants?page=${page}`
      return $http.get(url)
    }

    function getRestaurantById (id) {
      var url = '/api/restaurant/' + id
      return $http.get(url)
    }
    return {
      getAllRestaurants: getAllRestaurants,
      getRestaurantById: getRestaurantById
    }
  })

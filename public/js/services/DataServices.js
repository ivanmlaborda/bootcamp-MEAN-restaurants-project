angular.module('Restaurants')
  .factory('DataServices', function ($http) {
    function getAllRestaurants (page) {
      var url = `/api/restaurants?page=${page}&limit=null`
      return $http.get(url)
    }

    function getRestaurantById (id) {
      var url = '/api/restaurant/' + id
      return $http.get(url)
    }

    function getRestaurantsByBorough (borough, page) {
      var url = `/api/restaurants/borough/${borough}?page=${page}&limit=null`
      return $http.get(url)
    }

    function getRestaurantsByCuisine (cuisine, page) {
      var url = `/api/restaurants/cuisine/${cuisine}?page=${page}&limit=null`
      return $http.get(url)
    }

    return {
      getAllRestaurants: getAllRestaurants,
      getRestaurantById: getRestaurantById,
      getRestaurantsByBorough: getRestaurantsByBorough,
      getRestaurantsByCuisine: getRestaurantsByCuisine
    }
  })

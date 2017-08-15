angular.module('Restaurants')
  .factory('DataServices', function ($http) {
    function getAllRestaurants () {
      var url = `/api/restaurants?limit=null`
      return $http.get(url)
    }

    function getRestaurantById (id) {
      var url = '/api/restaurant/' + id
      return $http.get(url)
    }

    function getRestaurantsByBorough (borough) {
      const url = `/api/restaurants/borough/${borough}?limit=null`
      return $http.get(url)
    }

    function getRestaurantsByCuisine (cuisine) {
      const url = `/api/restaurants/cuisine/${cuisine}?limit=null`
      return $http.get(url)
    }

    return {
      getAllRestaurants: getAllRestaurants,
      getRestaurantById: getRestaurantById,
      getRestaurantsByBorough: getRestaurantsByBorough,
      getRestaurantsByCuisine: getRestaurantsByCuisine
    }
  })

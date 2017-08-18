/* global angular */
(function() {
  'use strict'

  function mapCtrl(DataServices, LocationServices, $scope, $rootScope) {

    console.log('mapCtrl Loaded')

    let map = L.map('map', {
      center: [40.662, -73.961],
      zoom: 10
    })

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)

    $scope.$on('restaurantsReady', function (e, restaurants) {

      restaurants.value.data.docs.forEach(function(key) {
        key.lat = key.address.coord[1]
        key.lng = key.address.coord[0]
      })

      let restaurantData = restaurants.value.data.docs

      var dataGeoJson = GeoJSON.parse(restaurantData, {
        Point: ['lat', 'lng'],
        include: ['name', '_id']
      })

      let restaurantsGeoJSON = L.geoJSON(dataGeoJson, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup(feature.properties.name)
        }
      }).addTo(map)

    })


  }
  angular
    .module('Restaurants')
    .controller('mapCtrl', mapCtrl)
})()

angular.module('Restaurants')
.service('helper', function () {
  var num = 1
  this.setNum = function () {
    num++
  }
  this.getNum = function () {
    return num
  }
})

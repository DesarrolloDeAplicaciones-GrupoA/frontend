'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:RoutesCtrl
 * @description
 * # RoutesCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('RoutesCtrl', function($scope, RoutesService) {

    var buildPaths = function(travels) {
      var routes = [];
      travels.forEach(function(travel) {
        var route = travel.route;
        travel.path = [route.start, route.end];
      })
      return travels;
    }
    var routes = [];
    $scope.routes = routes;
    $scope.query = "";
    $scope.search = function() {
      RoutesService.search($scope.query).then(
        function(response) {
          $scope.routes = buildPaths(response.data);
        },
        function(error) {
          console.log(error);
        }
      );
    };

    $scope.map = {
      route: routes,
      center: {
        latitude: -34.7132642,
        longitude: -58.2768611
      },
      zoom: 15
    };

    RoutesService.all().then(function(response) {
        $scope.routes = buildPaths(response.data);
      },
      function(error) {
        console.log(error);
      });

  });

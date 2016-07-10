'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:TravelsCtrl
 * @description
 * # TravelsCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('TravelsCtrl', function($scope, TravelService, AuthService) {

    $scope.authService = AuthService;
    var buildPaths = function(travels) {
      var routes = [];
      travels.forEach(function(travel) {
        var route = travel.route;
        travel.path = [route.start, route.end];
      })
      return travels;
    }
    var travels = [];
    $scope.travels = travels;
    $scope.query = "";
    $scope.search = function() {
      TravelService.search($scope.query).then(
        function(response) {
          $scope.travels = buildPaths(response.data);
        },
        function(error) {
          console.log(error);
        }
      );
    };

    $scope.map = {
      center: {
        latitude: -34.7132642,
        longitude: -58.2768611
      },
      zoom: 15
    };

    TravelService.all().then(function(response) {
        $scope.travels = buildPaths(response.data);
      },
      function(error) {
        console.log(error);
      });

  });

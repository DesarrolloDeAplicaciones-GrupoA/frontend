'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('ShowTravelCtrl', function($scope, TravelService, $routeParams) {
    $scope.loading = true;
    $scope.travel = {};
    TravelService.get($routeParams.id).then(function(response) {
        $scope.travel = response.data;
      },
      function(error) {
        console.log(error);
      });
  });

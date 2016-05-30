'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('ShowVehicleCtrl', function($scope, VehicleService, $routeParams) {
    $scope.loading = true;
    $scope.vehicle = {};
    VehicleService.get($routeParams.id).then(function(response) {
        $scope.vehicle = response.data;
      },
      function(error) {
        console.log(error);
      });
  });

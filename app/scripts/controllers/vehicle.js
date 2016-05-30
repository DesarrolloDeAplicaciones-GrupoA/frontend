'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NewVehicleCtrl', function($scope, VehicleService, $window) {
    $scope.newVehicle = {
      brand: '',
      capacity: 2
    };
    $scope.save = function(vehicle) {
      VehicleService.save(vehicle).then(function(response) {
          $window.location.assign('/#/vehicles/' + response.data.id);
        },
        function(error) {
          console.log(error);
        });
    };
  });

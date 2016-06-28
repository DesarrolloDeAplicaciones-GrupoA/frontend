'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NewTravelCtrl', function($scope, TravelService, $window) {
    $scope.newTravel = {
      nameTravel: "",
      fuel: 0,
      toll: 0,
      route: "",
      inicio: 0,
      fin: 0,
    };
    $scope.save = function(travel) {

      travel.inicio = Date.parse(travel.inicio);
      travel.fin = Date.parse(travel.fin);

      TravelService.save(travel).then(function(response) {
          $window.location.assign('/#/travels/' + response.data.id);
        },
        function(error) {
          console.log(error);
        });
    };
  });

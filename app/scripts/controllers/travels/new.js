'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NewTravelCtrl', function ($scope, TravelService, $window) {
    $scope.newTravel = {
      nameTravel: "",
      fuel: 0,
      toll: 0,
      route: "",
      inicio: "",
      fin: "",
      frequency: []
    };
    $scope.days = [
        {id: 1, text: 'lunes'},
        {id: 2, text: 'martes'},
        {id: 3, text: 'miercoles'},
        {id: 4, text: 'jueves'},
        {id: 5, text: 'viernes'},
        {id: 6, text: 'sabado'},
        {id: 7, text: 'domingo'}
    ];

    $scope.save = function (travel) {

      travel.inicio = Date.parse(travel.inicio);
      travel.fin = Date.parse(travel.fin);

      TravelService.save(travel).then(function (response) {
          $window.location.assign('/#/travels/' + response.data.id);
        },
        function (error) {
          console.log(error);
        });
    };
    $scope.checkAll = function () {
      $scope.newTravel.frequency = $scope.days.map(function (item) {
        return item.id;
      });
    };
    $scope.uncheckAll = function () {
      $scope.newTravel.frequency = [];
    };
    $scope.checkFirst = function () {
      $scope.newTravel.frequency.splice(0, $scope.newTravel.frequency.length);
      $scope.newTravel.frequency.push(1);
    };
  });


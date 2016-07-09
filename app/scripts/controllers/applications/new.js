'use strict';
/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:ProducCtrl
 * @description
 * # ProductCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
  .controller('NewApplicationCtrl', function($scope, TravelService, $window, $routeParams, ApplicationService) {
    $scope.newApplication = {
      upDate: new Date()
    };
    $scope.travel = {
      frequency: []
    };
    $scope.loading = true;

    $scope.map = {
      center: {
        latitude: -34.7132642,
        longitude: -58.2768611
      },
      zoom: 15
    };
    $scope.days = [
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
      'domingo'
    ];

    $scope.dt = new Date();

    $scope.save = function(application) {
      application.upDate = $scope.dt;
      ApplicationService.save($scope.travel, application).then(function(response) {
          $window.location.assign('/#/applications/mine/');
        },
        function(error) {
          console.log(error);
        });
    };

    $scope.dayIsPresent = function(day) {
      var dayInt = $scope.days.indexOf(day) + 1;
      var index = $scope.travel.frequency.indexOf(dayInt);
      return index >= 0;
    }

    TravelService.getDetails($routeParams.travelId).then(function(response) {
      var travel = response.data;
      var route = travel.route;
      travel.path = [route.start, route.end];

      $scope.travel = travel;
      $scope.loading = false;
    }, function(error) {
      console.log(error);
    });

  });

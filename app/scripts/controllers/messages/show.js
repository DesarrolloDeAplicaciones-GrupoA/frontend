'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */

 //var myApp = angular.module('desappGroupABackendApp', []);

angular.module('desappGroupABackendApp')
 .controller('ShowMessageCtrl', function($scope, MessageService, $routeParams) {
    $scope.loading = true;
    $scope.message = {};
    MessageService.get($routeParams.id).then(function(response) {
        $scope.message = response.data;
      },
      function(error) {
        console.log(error);
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
  .controller('InboxCtrl', function($scope, MessageService, $routeParams) {
    $scope.loading = true;
    $scope.messages = [];
    MessageService.getAllPublic().then(function(response) {
        $scope.messages = response.data;
      },
      function(error) {
        console.log(error);
      });
  });

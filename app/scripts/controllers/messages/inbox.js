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
    $scope.inbox = [];
    $scope.outbox = [];
    MessageService.getMyInbox().then(function(response) {
        $scope.inbox = response.data;
      },
      function(error) {
        console.log(error);
      })
     MessageService.getMyInbox().then(function(response) {
          $scope.outbox = response.data;
          },
      function(error) {
        console.log(error);
            });




  });

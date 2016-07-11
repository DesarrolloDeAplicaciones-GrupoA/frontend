'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:TravelsCtrl
 * @description
 * # TravelsCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('ReceivedApplicationsCtrl', function($scope, ApplicationService) {

    var applications = [];

    ApplicationService.received().then(function(response) {
        $scope.applications = response.data;
      },
      function(error) {
        console.log(error);
      });

  });

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

    $scope.approveApplication = function(application) {
      ApplicationService.approve(application).then(function(response) {
          application.pending = false;
          application.approved = true;

        },
        function(error) {

        });
    }

    $scope.rejectApplication = function(application) {
      ApplicationService.reject(application).then(function(response) {
          application.pending = false;
          application.rejected = true;
        },
        function(error) {

        });
    }

    ApplicationService.received().then(function(response) {
        $scope.applications = response.data;
      },
      function(error) {
        console.log(error);
      });

  });

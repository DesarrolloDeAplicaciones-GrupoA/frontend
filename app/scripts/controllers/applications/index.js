'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:TravelsCtrl
 * @description
 * # TravelsCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('ApplicationsCtrl', function($scope, ApplicationService) {

    var applications = [];

    ApplicationService.mine().then(function(response) {
        $scope.applications = response.data;
      },
      function(error) {
        console.log(error);
      });

  });

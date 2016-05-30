'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('MainCtrl', ['$scope', 'AuthService', function($scope, authService) {
    $scope.isLoggedIn = authService.isLoggedIn();
  }]);

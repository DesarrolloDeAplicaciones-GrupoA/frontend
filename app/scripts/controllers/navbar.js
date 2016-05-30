'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NavbarCtrl', function($scope, AuthService) {
    $scope.authService = AuthService;
    $scope.logout = function() {
      $scope.authService.logout();
    };
  });

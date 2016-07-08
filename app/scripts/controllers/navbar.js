'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NavbarCtrl', function ($scope, AuthService, $translate) {
    $scope.authService = AuthService;
    $scope.logout = function () {
      $scope.authService.logout();
    };
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
    this.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];
  });

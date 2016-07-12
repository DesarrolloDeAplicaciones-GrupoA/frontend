'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('NavbarCtrl', function($scope, AuthService, $translate, UserService, Notification) {
    $scope.authService = AuthService;
    $scope.logout = function() {
      $scope.authService.logout();
      Notification.primary("Good bye. Come back soon!")
    };
    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };
    if (AuthService.isLoggedIn()) {
      UserService.getMyUserInfo().then(function(response) {
        $scope.userInfo = response.data;
      }, function(error) {
        console.log(error);
      });
    }

  });

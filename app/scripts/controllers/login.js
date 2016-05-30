'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('LoginCtrl', ['$scope', '$window', 'LoginService', 'AuthService', function(
    $scope,
    $window,
    loginService,
    authService) {
    var googleSigin = document.querySelector('google-signin');
    googleSigin.addEventListener('google-signin-offline-success', function(
      auth) {
      loginService.googleLogin(auth.detail.code)
        .then(function(response) {
            authService.login(response.data.token);
            $window.location.assign('/');
          },
          function(error) {
            console.log(error);
          });
    });
  }]);

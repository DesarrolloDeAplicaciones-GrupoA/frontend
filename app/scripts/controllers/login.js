'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
  .controller('LoginCtrl', ["$scope", '$window', "LoginService", "localStorageService", function(
    $scope,
    $window,
    loginService,
    localStorageService) {
    const googleSigin = document.querySelector('google-signin');
    googleSigin.addEventListener("google-signin-offline-success", function(
      auth) {
      loginService.googleLogin(auth.detail.code)
        .then(function(response) {
            debugger;
            localStorageService.set("acccessToken", response.data.token);
            $window.location.assign("/");
          },
          function(error) {
            console.log(error);
          })
    })
  }]);

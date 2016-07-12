'use strict';

angular.module('desappGroupABackendApp')
  .controller('UserCtrl', function($scope, AuthService, $translate, UserService, Notification) {
    $scope.authService = AuthService;
    $scope.user=[];
    UserService.getUserInfo(id).then(function(response) {
            $scope.user = response.data;
          }, function(error) {
            console.log(error);
          });
    UserService.getMyUserInfo().then(function(response) {
        $scope.myUserInfo = response.data;
      }, function(error) {
        console.log(error);
      });



  });

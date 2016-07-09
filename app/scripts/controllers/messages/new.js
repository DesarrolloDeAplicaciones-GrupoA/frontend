'use strict';
/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:ProducCtrl
 * @description
 * # ProductCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
  .controller('NewMessageCtrl', function ($scope, MessageService, UserService, $window) {
    $scope.newMessage = {
      receiver: "",
      subject: "",
      messageText: "",
      isPublic: true
    };

    $scope.save = function (message) {
      MessageService.save(message).then(function (response) {
          $window.location.assign('/#/messages/' + response.data.id);
        },
        function (error) {
          console.log(error);
        });
    };
    //$scope.allUsers=["pepe","juan","lopez"];
    $scope.allUsers = [];
    UserService.getAllUsers().then(function (response) {
      $scope.allUsers = response.data;
    }, function (error) {
      console.log(error);
    });

  });

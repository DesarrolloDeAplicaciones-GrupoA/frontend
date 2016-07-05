'use strict';
/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:ProducCtrl
 * @description
 * # ProductCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
    .controller('NewMessageCtrl', function($scope, MessageService, $window) {
    $scope.newMessage = {
      receiver: "",
      sender: "",
      subject: "",
      messageText: "",
      isPublic: false,
    };
    $scope.save = function(message) {
      MessageService.save(message).then(function(response) {
          $window.location.assign('/#/messages/' + response.data.id);
        },
        function(error) {
          console.log(error);
        });
    };

  });

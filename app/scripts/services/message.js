'use strict';
/**
 * @ngdoc service
 * @name desappGroupABackendApp.product
 * @description
 * # product
 * Service in the desappGroupABackendApp.
 */
angular.module('desappGroupABackendApp')
  .factory('MessageService', function($http, AuthService, ENV) {
    return {
      get: function(id) {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'message/' + id
        });
      },
      save: function(newMessage) {
        return $http({
          method: 'post',
          //dataType: 'json',
          url: ENV.apiEndpoint + 'message/new',
     /* params: {
            token: AuthService.getToken()          },*/
          data: newMessage
        });
      },
       getAllPublic: function() {
              return $http({
                method: 'get',
                url: ENV.apiEndpoint + 'messages/inbox/'
              });
            },
    };
  });

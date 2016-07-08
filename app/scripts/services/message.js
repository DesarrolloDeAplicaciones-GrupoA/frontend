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
          url: ENV.apiEndpoint + 'messages/' + id
        });
      },
      save: function(newMessage) {
        return $http({
          method: 'post',
          //dataType: 'json',
          url: ENV.apiEndpoint + 'messages/new',
           params: {
            token: AuthService.getToken()},
          data: newMessage //angular.copy(newMessage);
        });
      },
       getInbox: function() {
              return $http({
                method: 'get',
                url: ENV.apiEndpoint + 'messages/inbox/'
              });
            },
       getOutbox: function() {
                     return $http({
                       method: 'get',
                       url: ENV.apiEndpoint + 'messages/outbox/'
                     });
                   },
    };
  });

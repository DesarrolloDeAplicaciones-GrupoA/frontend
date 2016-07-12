'use strict';

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
          url: ENV.apiEndpoint + 'messages/new/',
           params: {
            token: AuthService.getToken()},
          data: newMessage //angular.copy(newMessage);
        });
      },
       getMyInbox: function() {
              return $http({
                method: 'get',
                url: ENV.apiEndpoint + 'messages/inbox/',
                params: {
                            token: AuthService.getToken()},
              });
            },
       getUserMessages: function(id) {
                     return $http({
                       method: 'get',
                       url: ENV.apiEndpoint + 'messages/'+id,
                     });
                   },
       getMyOutbox: function() {
                     return $http({
                       method: 'get',
                       url: ENV.apiEndpoint + 'messages/outbox/',
                       params: {
                                   token: AuthService.getToken()},
                     });
                   },
    };
  });

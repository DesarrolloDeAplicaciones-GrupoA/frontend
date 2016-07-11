'use strict';

/**
 * @ngdoc service
 * @name desappGroupABackendApp.vehicle
 * @description
 * # vehicle
 * Service in the desappGroupABackendApp.
 */
angular.module('desappGroupABackendApp')
  .factory('ApplicationService', function($http, AuthService, ENV) {
    return {
      received: function() {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'applications/received/',
          params: {
            token: AuthService.getToken()
          }
        });

      },
      mine: function() {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'applications/mine/',
          params: {
            token: AuthService.getToken()
          }
        });

      },
      save: function(travel, newApplication) {
        return $http({
          method: 'post',
          url: ENV.apiEndpoint + 'travels/' + travel.id + "/applications/create",
          params: {
            token: AuthService.getToken()
          },
          data: newApplication
        });

      },
      approve: function(application) {
        return $http({
          method: 'put',
          url: ENV.apiEndpoint + 'applications/' + application.id + "/approve/",
          params: {
            token: AuthService.getToken()
          }
        });
      },
      reject: function(application) {
        return $http({
          method: 'put',
          url: ENV.apiEndpoint + 'applications/' + application.id + "/reject/",
          params: {
            token: AuthService.getToken()
          }
        });
      }
    };
  });

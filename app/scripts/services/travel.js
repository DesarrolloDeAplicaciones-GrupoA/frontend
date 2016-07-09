'use strict';

/**
 * @ngdoc service
 * @name desappGroupABackendApp.vehicle
 * @description
 * # vehicle
 * Service in the desappGroupABackendApp.
 */
angular.module('desappGroupABackendApp')
  .factory('TravelService', function($http, AuthService, ENV) {
    return {
      all: function() {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'travels/all/'
        });
      },
      search: function(text) {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'travels/search/?text=' + text
        });
      },
      get: function(id) {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'travels/' + id
        });
      },
      save: function(newTravel) {
        return $http({
          method: 'post',
          url: ENV.apiEndpoint + 'travels/create',
          params: {
            token: AuthService.getToken()
          },
          data: newTravel
        });

      }
    };
  });

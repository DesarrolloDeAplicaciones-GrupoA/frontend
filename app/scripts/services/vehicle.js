'use strict';

/**
 * @ngdoc service
 * @name desappGroupABackendApp.vehicle
 * @description
 * # vehicle
 * Service in the desappGroupABackendApp.
 */
angular.module('desappGroupABackendApp')
  .factory('VehicleService', function($http, AuthService, ENV) {
    return {
      get: function(id) {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'vehicles/' + id
        });
      },
      save: function(newVehicle) {
        return $http({
          method: 'post',
          url: ENV.apiEndpoint + 'vehicles/create',
          params: {
            token: AuthService.getToken()
          },
          data: newVehicle
        });
      }
    };
  });

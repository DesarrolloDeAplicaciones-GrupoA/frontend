'use strict';

/**
 * @ngdoc service
 * @name desappGroupABackendApp.vehicle
 * @description
 * # vehicle
 * Service in the desappGroupABackendApp.
 */
angular.module('desappGroupABackendApp')
  .factory('PointService', function ($http, AuthService, ENV) {
    return {
      all: function () {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'points/all'
        });
      }
    };
  });

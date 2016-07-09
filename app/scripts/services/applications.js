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
      save: function(travel, newApplication) {
        return $http({
          method: 'post',
          url: ENV.apiEndpoint + 'travels/' + travel.id + "/applications/create",
          params: {
            token: AuthService.getToken()
          },
          data: newApplication
        });

      }
    };
  });

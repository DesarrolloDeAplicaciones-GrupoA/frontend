'use strict';
angular.module('desappGroupABackendApp')
  .factory('UserService', function ($http, AuthService, ENV) {
    return {
      getMyUserInfo: function () {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'userModels/userInfo',
          params: {
            token: AuthService.getToken()
          }
        });
      },
      getUserInfo: function (id) {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'userModels/' + id
        });
      },
      getAllUsers: function () {
        return $http({
          method: 'get',
          url: ENV.apiEndpoint + 'userModels/listUsers/'
        });
      },
    };
  });

'use strict'

angular.module("desappGroupABackendApp")
  .factory("LoginService", function($http, ENV) {
    return {
      googleLogin: function(code) {
        return $http({
          method: "post",
          url: ENV.apiEndpoint + "oauth/google",
          data: {
            authorizationCode: code
          }
        });
      }
    }
  })

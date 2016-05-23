'use strict'

angular.module("desappGroupABackendApp")
  .factory("LoginService", function($http) {
    return {
      googleLogin: function(code) {
        return $http({
          method: "post",
          url: "http://localhost:8080/rest/oauth/google",
          data: {
            authorizationCode: code
          }
        });
      }
    }
  })

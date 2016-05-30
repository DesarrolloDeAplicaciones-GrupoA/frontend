'use strict'

angular.module("desappGroupABackendApp")
  .factory("AuthService", function(localStorageService) {
    return {

      getTokenKey: function() {
        return "accessToken";
      },

      isLoggedIn: function() {
        return !!localStorageService.get(this.getTokenKey());
      },

      login: function(token) {
        localStorageService.set(this.getTokenKey(), token);
      },

      logout: function() {
        return localStorageService.remove(this.getTokenKey());
      }
    }
  });

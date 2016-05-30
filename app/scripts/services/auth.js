'use strict';

angular.module('desappGroupABackendApp')
  .factory('AuthService', function(localStorageService) {
    return {

      getTokenKey: function() {
        return 'accessToken';
      },

      getToken: function() {
        return localStorageService.get(this.getTokenKey());
      },

      isLoggedIn: function() {
        return !!this.getToken();
      },

      login: function(token) {
        localStorageService.set(this.getTokenKey(), token);
      },

      logout: function() {
        return localStorageService.remove(this.getTokenKey());
      }
    };
  });

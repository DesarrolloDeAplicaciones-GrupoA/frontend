'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('desappGroupABackendApp'));

  var MainCtrl,
    scope,
    authService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    authService = {
      isLoggedIn: function() {
        return true;
      }
    };
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('should not be logged in', function() {
    expect(scope.isLoggedIn).toBe(false);
  });
});

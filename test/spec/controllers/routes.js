'use strict';

describe('Controller: TravelsCtrl', function() {

  // load the controller's module
  beforeEach(module('desappGroupABackendApp'));

  var TravelsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    TravelsCtrl = $controller('TravelsCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('should attach a map', function() {
    expect(scope.map).not.toBeUndefined();
  });

  it('should attach a map with a center', function() {
    expect(scope.map.center).not.toBeUndefined();
  });

  it('should attach a map with a zoom', function() {
    expect(scope.map.zoom).not.toBeUndefined();
  });
});

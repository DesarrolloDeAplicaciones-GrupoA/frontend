'use strict';

describe('Controller: RoutesCtrl', function () {

  // load the controller's module
  beforeEach(module('desappGroupABackendApp'));

  var RoutesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoutesCtrl = $controller('RoutesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a map', function () {
    expect(RoutesCtrl.map).toBeUndefined();
  });
});

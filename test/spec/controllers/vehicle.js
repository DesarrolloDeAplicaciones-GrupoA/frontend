'use strict';

describe('Controller: VehicleCtrl', function() {

  // load the controller's module
  beforeEach(module('desappGroupABackendApp'));

  var VehicleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    VehicleCtrl = $controller('VehicleCtrl', {
      $scope: scope
        // place here mocked dependencies
    });
  }));

  it('should have a new vehicle without brand', function() {
    expect(VehicleCtrl.newVehicle.brand).toBe("");
  });

  it('should have a new vehicle capacity 1', function() {
    expect(VehicleCtrl.newVehicle.capacity).toBe(1);
  });
});

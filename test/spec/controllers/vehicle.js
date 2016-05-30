'use strict';

describe('Controller: VehicleCtrl', function() {

  // load the controller's module
  beforeEach(module('desappGroupABackendApp'));

  var VehicleCtrl,
    VehicleService,
    $window,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $window = {location: {assign: function(path) {}}};
    VehicleService = {save: function(vehicle){
      return {then: function(cb, err){}}
    }};
    VehicleCtrl = $controller('NewVehicleCtrl', {
      $scope: scope,
      VehicleService: VehicleService,
      $window: $window
        // place here mocked dependencies
    });
  }));

  it('should have a new vehicle without brand', function() {
    expect(scope.newVehicle.brand).toBe("");
  });

  it('should have a new vehicle capacity 1', function() {
    expect(scope.newVehicle.capacity).toBe(2);
  });
});

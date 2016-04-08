'use strict';

/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:AboLoginCtrlutCtrl
 * @description
 * # LoginCtrl
 * Controller of the desappGroupABackendApp
 */
angular.module('desappGroupABackendApp')
    .controller('RoutesCtrl', function($scope) {

        var route = [
            { id: 3, latitude: -34.724959, longitude: -58.260778 },
            { id: 1, latitude: -34.7132642, longitude: -58.2768611 },
            { id: 2, latitude: -34.709613, longitude: -58.280337 }
        ];

        $scope.map = {
          route: route,
          center: { latitude: -34.7132642, longitude: -58.2768611 },
          zoom: 15
        };
    });

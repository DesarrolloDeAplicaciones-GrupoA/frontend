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
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });

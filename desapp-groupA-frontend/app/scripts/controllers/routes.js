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
        $scope.map = { center: { latitude: -34.7132642, longitude: -58.2768611 }, zoom: 15 };
    });

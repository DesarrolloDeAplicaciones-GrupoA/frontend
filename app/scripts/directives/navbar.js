'use strict';

/**
 * @ngdoc directive
 * @name desappGroupABackendApp.directive:navbar
 * @description
 * # navbar
 */
angular.module('desappGroupABackendApp')
  .directive('navbar', function() {
    return {
      templateUrl: 'views/commons/navbar.html',
      restrict: 'E',
      replace: true,
      controller: 'NavbarCtrl',
      controllerAs: 'navbar'
    };
  });

'use strict';
/**
 * @ngdoc function
 * @name desappGroupABackendApp.controller:ProducCtrl
 * @description
 * # ProductCtrl
 * Controller of the desappGroupABackendApp
 */

angular.module('desappGroupABackendApp')
    .controller('NewProductsCtrl', function($scope, ProductService, $window) {
    $scope.newProduct = {
      name: "",
      stock: 0,
      pointCost: 0,
    };
    $scope.save = function(product) {
      ProductService.save(product).then(function(response) {
          $window.location.assign('/#/products/' + response.data.id);
        },
        function(error) {
          console.log(error);
        });
    };

  });

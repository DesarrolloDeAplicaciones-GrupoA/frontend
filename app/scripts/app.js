'use strict';

/**
 * @ngdoc overview
 * @name desappGroupABackendApp
 * @description
 * # desappGroupABackendApp
 *
 * Main module of the application.
 */
angular
  .module('desappGroupABackendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps',
    'LocalStorageModule',
    'config',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ui-notification',
    'checklist-model',
    'ui.bootstrap.datetimepicker'
  ]).config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/travels', {
        templateUrl: 'views/travels/index.html',
        controller: 'TravelsCtrl',
        controllerAs: 'travels'
      })
      .when('/travels/:travelId/applications/new', {
        templateUrl: 'views/applications/new.html',
        controller: 'NewApplicationCtrl',
        controllerAs: 'newApplicationCtrl'
      })
      .when('/applications/mine', {
        templateUrl: 'views/applications/index.html',
        controller: 'ApplicationsCtrl',
        controllerAs: 'applicationsCtrl'
      })
      .when('/applications/received', {
        templateUrl: 'views/applications/received.html',
        controller: 'ReceivedApplicationsCtrl',
        controllerAs: 'applicationsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/vehicles/new', {
        templateUrl: 'views/vehicles/new.html',
        controller: 'NewVehicleCtrl',
        controllerAs: 'newVehicleCtrl'
      })
      .when('/travels/new', {
        templateUrl: 'views/travels/new.html',
        controller: 'NewTravelCtrl',
        controllerAs: 'newTravelCtrl'
      })
      .when('/travels/:id', {
        templateUrl: 'views/travels/show.html',
        controller: 'ShowTravelCtrl',
        controllerAs: 'showTravelCtrl'
      })
      .when('/vehicles/:id', {
        templateUrl: 'views/vehicles/show.html',
        controller: 'ShowVehicleCtrl',
        controllerAs: 'showVehicleCtrl'
      })
      .when('/products/new', {
        templateUrl: 'views/products/new.html',
        controller: 'NewProductsCtrl',
        controllerAs: 'newProductsCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products/all.html',
        controller: 'ProductsCtrl',
        controllerAs: 'productsCtrl'
      })
      .when('/products/:id', {
        templateUrl: 'views/products/show.html',
        controller: 'ShowProductCtrl',
        controllerAs: 'showProductCtrl'
      })
      .when('/messages/inbox', {
        templateUrl: 'views/messages/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inboxCtrl'
      })
      .when('/messages/outbox', {
        templateUrl: 'views/messages/outbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inboxCtrl'
      })
      .when('/messages/new', {
        templateUrl: 'views/messages/new.html',
        controller: 'NewMessageCtrl',
        controllerAs: 'newMessageCtrl'
      })
      .when('/messages/:id', {
        templateUrl: 'views/messages/show.html',
        controller: 'ShowMessageCtrl',
        controllerAs: 'showMessageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 5000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'bottom'
    });
  }).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyARN9MGWcIdU-FyopHAWEG6YFvpAivpEnQ', // Ask for this!
      v: '3.23', //defaults to latest 3.X anyhow
      libraries: 'weather,geometry,visualization'
    });
  });

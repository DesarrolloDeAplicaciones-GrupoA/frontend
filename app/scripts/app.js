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
    'ui.bootstrap.datetimepicker',
    'checklist-model'
  ])
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      PAGETITLE: "Let's go, come with me if you wanna live.",
      TITLEDESCRIPTION: "This platform allow users to share them trip by car or another vehicle enabling to take at least two people.",
      LOOK_UP_TRIP: "Look up trip to get up",
      LOGIN_FOR_SUM: "Login for summing in trip",
      ADD_VEHICLE: "Add new vehicle",
      ADD_PRODUCT: "Add new product",
      PRODUCTS: "Products",
      PRODUCT_NAME: "Name Product",
      POINT_COST: "Point Cost",
      SEE_PRODUCTS: "See products",
      TEXT_ALL_PRODUCTS: "This are all products in the app",
      SEARCH_ROUTE: "Search routes",
      WRITE_A_PLACE: "Write a place please...",
      SEARCH: "Search!",
      RESET: "Reset",
      CREATE: "Create",
      RESULTS: "Results",
      BUTTON_TEXT_EN: "English",
      BUTTON_TEXT_ES: "Spanish",
      PUBLIC_MESSAGES: "Public Messages",
      MESSAGE_SENDER: "Sender",
      MESSAGE_RECEIVER: "Receiver",
      MESSAGE_SUBJECT: "Subject",
      MESSAGES: "Messages",
      MESSAGE: "Message",
      DATE: "Date"
    })
      .translations('es', {
        PAGETITLE: '¡Subi que te llevo!',
        TITLEDESCRIPTION: "Plataforma donde los usuarios puedan coordinarse para compartir viajes en auto o cualquier otro vehículo que permita llevar al menos 2 personas.",
        LOOK_UP_TRIP: "Buscar recorrido donde subir",
        LOGIN_FOR_SUM: "Inciar sesion para sumar a un recorrido",
        ADD_VEHICLE: "Agregar un vehiculo nuevo",
        ADD_PRODUCT: "Agregar un producto nuevo",
        PRODUCTS: "Productos",
        PRODUCT_NAME: "Nombre del Prodcuto",
        POINT_COST: "Costo en puntos",
        SEE_PRODUCTS: "Ver productos",
        TEXT_ALL_PRODUCTS: "Estos son todos los productos de la aplicacion",
        SEARCH_ROUTE: "Buscar rutas",
        WRITE_A_PLACE: "Escribe un lugar...",
        SEARCH: "Buscar!",
        RESET: "Reset",
        CREATE: "Crear",
        RESULTS: "Resultados",
        BUTTON_TEXT_EN: "English",
        BUTTON_TEXT_ES: "Español",
        PUBLIC_MESSAGES: "Mensajes Publicos",
        MESSAGE_SENDER: "Remitente",
        MESSAGE_RECEIVER: "Destinatario",
        MESSAGE_SUBJECT: "Asunto",
        MESSAGES: "Mensajes",
        MESSAGE: "Mensaje",
        DATE: "Dia"
      });
    $translateProvider.preferredLanguage('es');
  })
  .config(function ($routeProvider) {
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
      .when('/routes', {
        templateUrl: 'views/routes.html',
        controller: 'RoutesCtrl',
        controllerAs: 'routes'
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
        .when('/messages/:id', {
        templateUrl: 'views/messages/show.html',
        controller: 'ShowMessageCtrl',
        controllerAs: 'showMessageCtrl'
              })

/*        .when('/messages/new', {
        templateUrl: 'views/messages/new.html',
        controller: 'NewMessageCtrl',
        controllerAs: 'newMessageCtrl'
            })*/
      .otherwise({
        redirectTo: '/'
      });
  }).config(function (uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: '', // Ask for this!
    v: '3.23', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
});

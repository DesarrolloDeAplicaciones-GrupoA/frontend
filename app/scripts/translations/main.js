'use strict';

angular.module('desappGroupABackendApp')
  .config(function($translateProvider) {
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
        MESSAGE_PRIVACITY: "Public Message",
        MESSAGES: "Messages",
        MESSAGE: "Message",
        DATE: "Date",
        ADD_TRAVEL: "Add new travel",
        Enter_an_origin_location: "Enter an origin location",
        Team_A: "Team of teams, A team, the team",
        MESSAGE_INBOX: "INBOX",
        MESSAGE_OUTBOX: "OUTBOX",
        About_this_site: "About this awsome site",
        TAKE_TRIP: "Take this trip!",
        LOADING: "loading",
        PLEASE_WAIT: "please wait",
        FREQUENCY: "frequency",
        FUEL: "fuel",
        TOLL: "toll",
        SELECT_DATE: "select a date",
        APPLY: "apply",
        BACK: "back",
        MONDAY: "monday",
        TUESDAY: "tuesday",
        WEDNESDAY: "wednesday",
        THRUSDAY: "thruesday",
        FRIDAY: "friday",
        SATURDAY: "saturday",
        SUNDAY: "sunday"

      })
      .translations('es', {
        PAGETITLE: '¡Subi que te llevo!',
        TITLEDESCRIPTION: "Plataforma donde los usuarios puedan coordinarse para compartir viajes en auto o cualquier otro vehiculo que permita llevar al menos 2 personas.",
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
        MESSAGE_PRIVACITY: "Mensaje Publico",
        MESSAGE_RECEIVER: "Destinatario",
        MESSAGE_SUBJECT: "Asunto",
        MESSAGES: "Mensajes",
        MESSAGE: "Mensaje",
        DATE: "Dia",
        ADD_TRAVEL: "agregar un viaje nuevo",
        Enter_an_origin_location: "Seleccione direccion de origen",
        Team_A: "El equipo A-PlusPlus",
        MESSAGE_INBOX: "Bandeja de Entrada",
        MESSAGE_OUTBOX: "Bandeja de Salida",
        About_this_site: "Acerca del sitio",
        TAKE_TRIP: "Subirse!",
        LOADING: "cargando",
        PLEASE_WAIT: "por favor espere",
        FREQUENCY: "frecuencia",
        FUEL: "combustible",
        TOLL: "costo",
        SELECT_DATE: "seleccione una fecha",
        APPLY: "solicitar",
        BACK: "volver",
        MONDAY: "lunes",
        TUESDAY: "martes",
        WEDNESDAY: "miercoles",
        THRUSDAY: "jueves",
        FRIDAY: "viernes",
        SATURDAY: "sabado",
        SUNDAY: "domingo"
      });
    $translateProvider.preferredLanguage('es');
  });

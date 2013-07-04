'use strict';

angular.module('sembaApp', [])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { 
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/grid', { 
        templateUrl: 'views/grid.html',
        controller: 'MainCtrl'
      })
      .when('/typography', { 
        templateUrl: 'views/typography.html',
        controller: 'MainCtrl'
      })
      .when('/code', { 
        templateUrl: 'views/code.html',
        controller: 'MainCtrl'
      })
      .when('/buttons', { 
        templateUrl: 'views/buttons.html',
        controller: 'MainCtrl'
      })
      .when('/button-groups', { 
        templateUrl: 'views/button-groups.html',
        controller: 'MainCtrl'
      })
      .when('/tables', { 
        templateUrl: 'views/tables.html',
        controller: 'MainCtrl'
      })
      .when('/forms', { 
        templateUrl: 'views/forms.html',
        controller: 'MainCtrl'
      })
      .when('/panels', { 
        templateUrl: 'views/panels.html',
        controller: 'MainCtrl'
      })
      .when('/navigation', { 
        templateUrl: 'views/navigation.html',
        controller: 'MainCtrl'
      })
      .when('/tabs', { 
        templateUrl: 'views/tabs.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
        
      });
    $locationProvider.html5Mode(true);
  });

'use strict';

var myAngularApp = angular
  .module('angularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/kidDirective', {
        templateUrl: 'views/kid.html',
        controller: 'KidCtrl'
      })
      .when('/promises', {
        templateUrl: 'views/promises.html',
        controller: 'PromisesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

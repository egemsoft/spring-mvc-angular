/**
 * @ngdoc overview
 * @name mvcRestBaseApp
 * @requires ngRoute
 * @requires ngResource
 * @description
 * Creates an Angular application.
 * @author İsmail Demirbilek
 */
angular.module('mvcRestBaseApp', [
  'ngRoute',
  'ngResource'
]).config(function($routeProvider) {
    $routeProvider
      .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
angular.module('mvcRestBaseApp')
  /**
   * @ngdoc controller
   * @name mvcRestBaseApp.controllers:HomeCtrl
   * @scope
   * @requires $scope
   * @description
   * Home page controller
   * @author İsmail Demirbilek
   */
  .controller('HomeCtrl', function($scope) {
    $scope.things = [
      'Egemsoft',
      'Big Data',
      'Rules!'
    ];
  });
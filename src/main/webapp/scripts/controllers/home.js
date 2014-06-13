angular.module('mvcRestBaseApp')
  .controller('HomeCtrl', function($scope) {
    $scope.things = [
      'Egemsoft',
      'Big Data',
      'Rules!'
    ];
  });
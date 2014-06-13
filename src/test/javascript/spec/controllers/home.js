'use strict';

describe('Home controller test', function () {

  // load the controller's module
  beforeEach(module('mvcRestBaseApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have a valid scope', function () {
    expect(!!scope).toBe(true);
  });

  it('should attach a list of things to the scope', function () {
    expect(scope.things.length).toBe(3);
  });
});
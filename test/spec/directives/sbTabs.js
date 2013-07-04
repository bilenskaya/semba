'use strict';

describe('Directive: sbTabs', function () {
  beforeEach(module('sembaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sb-tabs></sb-tabs>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the sbTabs directive');
  }));
});

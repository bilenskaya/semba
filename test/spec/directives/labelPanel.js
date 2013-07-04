'use strict';

describe('Directive: labelPanel', function () {
  beforeEach(module('sembaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<label-panel></label-panel>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the labelPanel directive');
  }));
});

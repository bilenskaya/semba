'use strict';

describe('Directive: slideMenu', function () {
  beforeEach(module('sembaApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<slide-menu></slide-menu>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the slideMenu directive');
  }));
});

'use strict';

angular.module('sembaApp')
  .directive('labelPanel', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        label: '@'
      },
      template: '<div class="label-panel">' +
		              '<label>{{label}}</label>' +
		              '<div data-ng-transclude>' +
		              '</div>' +
	              '</div>'
    };
  });

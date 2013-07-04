'use strict';

angular.module('sembaApp')
  .directive('sbTabs', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="tabs">' +
                  '<a class="{{sbTabPane.header}}" data-ng-repeat="sbTabPane in sbTabPanes" href="#" ng-click="select(sbTabPane, sbTabPane.header)">' +
                    '{{sbTabPane.header}}' +
                  '</a>' +
                  '<div data-ng-switch on="pane.selectedPane">' +
                    '<div data-ng-transclude >' +
                    '</div>' +
                  '</div>' +
                '</div>',
      controller: function($scope, $element) {
        var sbTabPanes = $scope.sbTabPanes = [];

        this.pane = {selectedPane: 'x' };
        $scope.pane = {selectedPane: 'x' };

        $scope.select = function(sbTabPane, sbTabPaneHeader) {
          angular.forEach(sbTabPanes, function(sbTabPane) {
            sbTabPane.selected = false;
          });
          sbTabPane.selected = true;
          this.pane.selectedPane = $scope.pane.selectedPane = sbTabPaneHeader;
          
          //console.log(this.pane.selectedPane);
          //console.log($scope.pane.selectedPane);
        }

        this.addPane = function(sbTabPane) {
          if (sbTabPanes.length == 0) $scope.select(sbTabPane);
          sbTabPanes.push(sbTabPane);
        }
      },
    };
  }).
  directive('sbTabPane', function() {
    return {
      require: '^sbTabs',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        header: '@header'
      },
      link: function(scope, element, attrs, sbTabsCtrl) {
        sbTabsCtrl.addPane(scope);
        console.log(sbTabsCtrl.pane.selectedPane);
      },
      template:'<div >' +
                 '<div data-ng-transclude data-ng-switch-when="{{header}}">' +
                 '</div>' +
               '</div>',
    };
  });

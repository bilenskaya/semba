'use strict';

angular.module('sembaApp')
  .directive('slidingMenu', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div>' +
                  '<header class="menu-bar"  data-ng-class="{navVisableAnimation: expandNav}">' +

                    '<button class="toggle-navigation-button" data-ng-click="toggleNav()">' +
                      '<i class="icon-reorder"></i>' +
                    '</button>' +

                    '<div class="header-content">' +
                      '<p class="header-title">' +
                        '{{title}}' +
                      '</p>' +
                    '</div>' +

                    '<button class="toggle-menu-button" data-ng-click="toggleMenu()">' +
                      '<i class="icon-plus"></i>' +
                    '</button>' +
                  '</header>' +

                  '<div class="view" data-ng-class="{navVisableAnimation: expandNav}">' +
                    '<article class="content" data-ng-view data-ng-class="{showMenuAnimation: menuOpen}">' +
                    '</article>' +
                  '</div>' +

                  '<div data-ng-transclude>' +
                  '</div>' +

						    '</div>',
      controller: function($scope, $element, $attrs) {
        $scope.expandNav = false;
        $scope.miniNav = false;
        $scope.miniNavOpen = false;
        $scope.menu = false;
        
        this.menuOpen = false;

        $scope.toggleNav = function() {
          $scope.expandNav = !$scope.expandNav;
          $element.parent().toggleClass('noscroll');
        };
        $scope.toggleMiniNav = function() {
          $scope.miniNav = !$scope.miniNav;
          $scope.miniNavOpen = !$scope.miniNavOpen;
        };
        $scope.toggleMenu = function() {
          this.menuOpen = !this.menuOpen;
        };
      },
    };
  });

angular.module('sembaApp')
  .directive('navigation', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      require: '^?slidingMenu',
      template: '<div class="navigation" data-ng-transclude>' +
                    '<button class="toggle-mini-navigation-button" data-ng-click="toggleMiniNav()" data-ng-switch on="miniNav">' +
                      '<i class="icon-angle-right" data-ng-switch-when="true"></i>' +
                      '<i  class="icon-angle-left" data-ng-switch-when="false"></i>' +
                    '</button>' +
                  '</div>',
      link: function postLink(scope, element, attrs) { }
    };
  });

angular.module('sembaApp')
  .directive('menu', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      require: '^?slidingMenu',
      template: '<div class="menu" data-ng-class="{menuVisibleAnimation: menuOpen}" data-ng-transclude>' +
                  '<h2>My Menu</h2>' +
                '</div>',

      link: function postLink(scope, element, attrs, slidingMenuCtrl) {
        var menuOpen = slidingMenuCtrl.menuOpen;
        console.log(menuOpen);
      }
    };
  });
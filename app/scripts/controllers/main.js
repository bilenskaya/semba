'use strict';

angular.module('sembaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      ['Phone Portait 320px', '1', '320px'],
      ['Phone Landscape 408px', '2', '480px'],
      ['Tablet Portrait 798px', '3', '768x'],
      ['Tablet Landscape1024px', '4', '1024px'],
      ['Desktop 1425px', '5', 'Desktop 1425px']
    ];

    $scope.widthResize = '';
    $scope.devices = function() {
      $scope.widthResize = 'width-320px';
      console.log($scope.widthResize);
    };

  });

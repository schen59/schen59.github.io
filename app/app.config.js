'use strict';

angular.
  module('schenApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/SRLab', {
          templateUrl: 'templates/SRLab.html'
        }).
        otherwise('/SRLab');
    }
  ]);
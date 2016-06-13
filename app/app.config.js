'use strict';

angular.
  module('schenApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/SRLab', {
          template: '<p>SRLab</p>'
        }).
        otherwise('/SRLab');
    }
  ]);
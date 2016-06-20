'use strict';

angular
  .module('schenApp')
  .controller('SRLabDemoController', function($scope) {
    $scope.name = "Hello world";
    $scope.demos = [
      {
        "title": "SR Image(X3)",
        "name": "demo1",
        "srcImg": "images/SRLab/demo1-src.png",
        "srImg": "images/SRLab/demo1-nn.png"
      },
    ];
    $scope.selectImg = function(demo, method) {
      demo.srImg = "images/SRLab/" + demo.name + "-" + method + ".png";
    };
  });
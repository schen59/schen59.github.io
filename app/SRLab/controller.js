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
        "srImg": "images/SRLab/demo1-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "yang",
             "title": "Yang's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           },
           {
             "name": "truth",
             "title": "Ground Truth",
             "btnClass": "btn-warning"
           }
        ]
      },
      {
        "title": "SR Image(X4)",
        "name": "demo2",
        "srcImg": "images/SRLab/demo2-src.png",
        "srImg": "images/SRLab/demo2-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "daniel",
             "title": "Daniel's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           }
        ]
      },
      {
        "title": "SR Image(X3)",
        "name": "demo3",
        "srcImg": "images/SRLab/demo3-src.png",
        "srImg": "images/SRLab/demo3-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "daniel",
             "title": "Daniel's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           }
        ]
      },
      {
        "title": "SR Image(X3)",
        "name": "demo4",
        "srcImg": "images/SRLab/demo4-src.png",
        "srImg": "images/SRLab/demo4-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "sun",
             "title": "Sun's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           },
           {
             "name": "truth",
             "title": "Ground Truth",
             "btnClass": "btn-warning"
           }
        ]
      },
      {
        "title": "SR Image(X3)",
        "name": "demo5",
        "srcImg": "images/SRLab/demo5-src.png",
        "srImg": "images/SRLab/demo5-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "sun",
             "title": "Sun's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           },
           {
             "name": "truth",
             "title": "Ground Truth",
             "btnClass": "btn-warning"
           }
        ]
      },
      {
        "title": "SR Image(X3)",
        "name": "demo6",
        "srcImg": "images/SRLab/demo6-src.png",
        "srImg": "images/SRLab/demo6-nn.png",
        "methods": [
           {
             "name": "nn",
             "title": "Nearest Neighbor",
             "btnClass": "btn-primary"
           },
           {
             "name": "bicubic",
             "title": "Bicubic",
             "btnClass": "btn-secondary"
           },
           {
             "name": "sun",
             "title": "Sun's",
             "btnClass": "btn-info"
           },
           {
             "name": "our",
             "title": "Our Algorithm",
             "btnClass": "btn-success"
           },
           {
             "name": "truth",
             "title": "Ground Truth",
             "btnClass": "btn-warning"
           }
        ]
      },
    ];
    $scope.selectImg = function(demo, method) {
      demo.srImg = "images/SRLab/" + demo.name + "-" + method + ".png";
    };
  });
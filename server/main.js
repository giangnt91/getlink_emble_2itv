angular.module('PM', ['ngRoute','PM.controller'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/home", {templateUrl: "template/home.html", controller: "PMCtrl"})
    
    .otherwise({ redirectTo: '/home' });
}])

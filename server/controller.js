var pm = angular.module('PM.controller', ['ngRoute', 'angular-clipboard'])
    .controller('PMCtrl', function ($rootScope, $scope) {

        $scope.string;
        $scope.gen = function () {
            if ($scope.string.indexOf("dailymotion") != -1) {
                tmp = $scope.string.slice(-7);
                $scope.new_link = "//www.dailymotion.com/embed/video/" + tmp;

                $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                    $("#success-alert").slideUp(2000);
                });

                $scope.string = null;
            } else if ($scope.string.indexOf("ok.ru") != -1) {
                tmp = $scope.string.slice(-12);
                $scope.new_link = "//ok.ru/videoembed/" + tmp;

                $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                    $("#success-alert").slideUp(2000);
                });

                $scope.string = null;
            } else {
                $scope.error = true;

                $("#danger-alert").fadeTo(2000, 1000).slideUp(500, function () {
                    $("#danger-alert").slideUp(2000);
                });

                $scope.string = null;
            }
        };
    })
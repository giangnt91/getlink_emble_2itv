var pm = angular.module('PM.controller', ['ngRoute', 'angular-clipboard'])
    .controller('PMCtrl', function ($rootScope, $scope) {
        
        $scope.gen = function (string) {
            if (string.indexOf("dailymotion") != -1) {
                tmp = string.slice(-7);
                $scope.new_link = "//www.dailymotion.com/embed/video/" + tmp;
            } else {
                tmp = string.slice(-12);
                $scope.new_link = "//ok.ru/videoembed/" + tmp;
            }
        };

        $scope.supported = false;
        $scope.success = function () {
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
                $("#success-alert").slideUp(2000);
            });
        };
        $scope.fail = function (err) {
            console.error('Error!', err);
        };

    })
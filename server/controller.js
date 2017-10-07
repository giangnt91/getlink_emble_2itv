var pm = angular.module('PM.controller', ['ngRoute', 'angular-clipboard'])
    .controller('PMCtrl', function ($rootScope, $scope) {

        $scope.string;
        $scope.gen = function () {
            if ($scope.string !== undefined && $scope.string !== null) {
                if ($scope.string.indexOf("dailymotion.com/video/") != -1) {
                    tmp = $scope.string.slice(-7);
                    $scope.new_link = "//www.dailymotion.com/embed/video/" + tmp;

                    $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                        $("#success-alert").slideUp(2000);
                    });

                    $scope.string = null;
                    return;
                } else if ($scope.string.indexOf("ok.ru/video/") != -1) {
                    tmp = $scope.string.slice(-12);
                    $scope.new_link = "//ok.ru/videoembed/" + tmp;

                    $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                        $("#success-alert").slideUp(2000);
                    });

                    $scope.string = null;
                    return;
                } else if ($scope.string.indexOf("youtube.com/watch?v=") != -1) {
                    tmp = $scope.string.slice(-11);
                    $scope.new_link = "https://www.youtube.com/embed/" + tmp;

                    $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                        $("#success-alert").slideUp(2000);
                    });

                    $scope.string = null;
                    return;
                } else {
                    $scope.error = true;

                    if ($scope.string.indexOf("youtube.com") != -1 || $scope.string.indexOf("youtu.be") != -1) {
                        $scope.error_message = "Link video youtube có dạng: youtube.com/watch?v=videoid";
                        $("#danger-alert").fadeTo(5000, 2000).slideUp(500, function () {
                            $("#danger-alert").slideUp(3000);
                        });

                        $scope.string = null;
                        return;
                    }
                    if ($scope.string.indexOf("dailymotion.com") != -1) {
                        $scope.error_message = "Link video dailymotion có dạng: dailymotion.com/video/videoid";
                        $("#danger-alert").fadeTo(5000, 2000).slideUp(500, function () {
                            $("#danger-alert").slideUp(3000);
                        });

                        $scope.string = null;
                        return;
                    }
                    if ($scope.string.indexOf("ok.ru") != -1) {
                        $scope.error_message = "Link video ok.ru có dạng: ok.ru/video/videoid";
                        $("#danger-alert").fadeTo(5000, 2000).slideUp(500, function () {
                            $("#danger-alert").slideUp(3000);
                        });

                        $scope.string = null;
                        return;
                    }
                    else {
                        $scope.error_message = "Link video không chính xác vui lòng thử lại !";
                        $("#danger-alert").fadeTo(2000, 2000).slideUp(500, function () {
                            $("#danger-alert").slideUp(2000);
                        });

                        $scope.string = null;
                    }
                }
            }
            if ($scope.string === undefined) {
                $scope.error = true;

                $scope.error_message = "Link video không được để trống !";
                $("#danger-alert").fadeTo(2000, 2000).slideUp(500, function () {
                    $("#danger-alert").slideUp(2000);
                });
            }
        };
    })
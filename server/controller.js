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

    .controller('CMCtrl', function ($scope) {
        
        $scope.string = [
                {
                    value: "Mẫu này nhìn đẹp và dễ thương ghê, khi nào đi qua phải ghé xem trực tiếp mới được"
                },{
                    value: "Mẫu này nhìn đẹp ghê mà cho mình hỏi có giao hàng xa không shop, nhìn thích quá mà không tiện đường đi mua"
                },{
                    value: "nhìn thích ghê lun, để xin tiền mẹ mua mới được hi."
                },{
                    value: "mình đặt 1 mẫu nhé, shop thông tin qua mail cho mình nhé"
                },{
                    value: "dễ thương gê, nhìn là yêu liền lun, mình đặt 1 mẫu nhé shop mai mình ghé lấy khoảng 9h sáng"
                },{
                    value: "nhìn cũng được, shop gửi mình địa chỉ bữa nào ghé qua xem thử nhé"
                },{
                    value: "mới mua mẫu này, shop giao hàng khá nhanh phục tốt sản phẩm như hình nói chung là ok"
                },{
                    value: "cho mình xin thời gian hoạt dộng của shop khi nào tiện qua thì mình ghé vào xem hàng lun"
                },{
                    value: "mình ở vĩnh long, nhìn mẫu đẹp quá shop có giao hàng xa không"
                },{
                    value: "có giao hàng thủ đức không admin, mình ở kha vạn cân, nếu giao thì mấy giờ tới nhỉ"
                },{
                    value: "mình ở quận 12 shop giao hàng thì mấy giờ tới nơi vậy"
                },{
                    value: "nhìn thích ghê á, mà mình ở ngoại tỉnh shop có giao hàng ngoại tỉnh không"
                },{
                    value: "nhìn dễ thương quá, mình ở bình tân shop có giao hàng qua không nhỉ"
                },{
                    value: "shop đóng cửa mấy giờ, tại mình tăng ca nên hay về trễ tầm hơn 8h lận muốn ghé mua mà sợ đóng cửa rồi"
                },{
                    value: "shop mở cửa mấy giờ nhỉ, sáng mình đi làm sớm có gì ghé qua mua hàng lun"
                },{
                    value: "shop cho mình xin địa chỉ, bữa nào rảnh mình ghé ngang qua xem trực tiếp rồi mua lun"
                },{
                    value: "nhìn thích quá, shop alo mình nhé: 0982665666, khoảng trưa trưa sáng mình bận làm không nghe được nhé"
                },
            ]
        $scope.gen = function () {
                 $scope.ran = $scope.string[Math.floor(Math.random() * $scope.string.length)];
        }
    })
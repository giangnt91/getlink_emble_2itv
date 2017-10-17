var pm = angular.module('PM.controller', ['ngRoute', 'angular-clipboard'])
    .controller('PMCtrl', function ($rootScope, $scope) {

        $scope.string;
        
        $scope.gen = function () {
            if ($scope.string !== undefined && $scope.string !== null) {
                if ($scope.string.indexOf("fshare.vn/file/") != -1) {

                    var tmp;
                    var n = $scope.string.slice(-11);
                    if (n.indexOf("/") !== -1) {
                        tmp = $scope.string.slice(-10);
                    } else {
                        tmp = $scope.string.slice(-12);
                    }
 
                    $scope.new_link = "https://getlinkfshare.com/file/" + tmp;
                    $("#success-alert").fadeTo(2000, 1000).slideUp(500, function () {
                        $("#success-alert").slideUp(2000);
                    });

                    $scope.string = null;
                    window.open($scope.new_link, '_blank');
                    return;

                } else if ($scope.string.indexOf("dailymotion.com/video/") != -1) {
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

                    if ($scope.string.indexOf("fshare.vn") != -1) {
                        $scope.error_message = "Link video fshare có dạng: fshare.vn/file/fileid";
                        $("#danger-alert").fadeTo(5000, 2000).slideUp(500, function () {
                            $("#danger-alert").slideUp(3000);
                        });

                        $scope.string = null;
                        return;
                    }
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

        $scope.mail = [
            {
                value: "@gmail.com"
            }, {
                value: "@hotmail.com"
            }, {
                value: "@yahoo.com.vn"
            }
        ]

        $scope.fist_name = [
            {
                value: "Nguyễn Văn"
            }, {
                value: "Trần Thanh"
            }, {
                value: "Nguyễn Ngọc"
            }, {
                value: "Nguyễn Sĩ"
            }, {
                value: "Hồ Văn"
            }, {
                value: "Nguyễn Tấn"
            }, {
                value: "Ngô Thái"
            }, {
                value: "Nguyễn Siêu"
            }, {
                value: "Lâm Văn"
            }, {
                value: "Tô Hữu"
            }, {
                value: "Nguyễn Thanh"
            }, {
                value: "Trần Nhật"
            }, {
                value: "Trần Phương"
            }, {
                value: "Nguyễn Linh"
            }, {
                value: "Ngô Bích"
            }, {
                value: "Trần Phương"
            }, {
                value: "Lê Lam"
            }, {
                value: "Nguyễn Ngân"
            }, {
                value: "Nguyễn Phương"
            }, {
                value: "Trần Nhã"
            }, {
                value: "Trần Trúc"
            }, {
                value: "Nguyễn Diệp"
            }
        ]

        $scope.last_name = [
            {
                value: "Mai"
            }, {
                value: "Sơn"
            }, {
                value: "Loan"
            }, {
                value: "Lan"
            }, {
                value: "Long"
            }, {
                value: "Linh"
            }, {
                value: "Khuê"
            }, {
                value: "An"
            }, {
                value: "Khánh"
            }, {
                value: "Hoa"
            }, {
                value: "Hương"
            }, {
                value: "Anh"
            }, {
                value: "Châu"
            }, {
                value: "Bích"
            }, {
                value: "Hân"
            }, {
                value: "Hà"
            }, {
                value: "Chi"
            }, {
                value: "Diệp"
            }, {
                value: "Dung"
            }, {
                value: "Đan"
            }, {
                value: "Hạnh"
            }, {
                value: "Vân"
            }, {
                value: "Thiên"
            }, {
                value: "Thiện"
            }, {
                value: "Tâm"
            }, {
                value: "Thái"
            }, {
                value: "Nhung"
            }, {
                value: "Tài"
            }, {
                value: "Hòa"
            }, {
                value: "Trung"
            }, {
                value: "Hiếu"
            }, {
                value: "Quyên"
            }, {
                value: "Huyền"
            }, {
                value: "Tú"
            }
        ]

        $scope.string = [
            {
                value: "Mẫu này nhìn đẹp và dễ thương ghê, khi nào đi qua phải ghé xem trực tiếp mới được"
            }, {
                value: "Mẫu này nhìn đẹp ghê mà cho mình hỏi có giao hàng xa không shop, nhìn thích quá mà không tiện đường đi mua"
            }, {
                value: "Nhìn thích ghê lun, để xin tiền mẹ mua mới được hi."
            }, {
                value: "Cho mình đặt 1 mẫu nhé, shop thông tin qua mail cho mình nhé"
            }, {
                value: "Dễ thương gê, nhìn là yêu liền lun, mình đặt 1 mẫu nhé shop mai mình ghé lấy khoảng 9h sáng"
            }, {
                value: "Nhìn cũng được, shop gửi mình địa chỉ bữa nào ghé qua xem thử nhé"
            }, {
                value: "Mới mua mẫu này, shop giao hàng khá nhanh phục tốt sản phẩm như hình nói chung là ok"
            }, {
                value: "Cho mình xin thời gian hoạt dộng của shop khi nào tiện qua thì mình ghé vào xem hàng lun"
            }, {
                value: "Mình ở vĩnh long, nhìn mẫu đẹp quá shop có giao hàng xa không dậy"
            }, {
                value: "Có giao hàng thủ đức không admin, mình ở kha vạn cân, nếu giao thì mấy giờ tới nhỉ"
            }, {
                value: "Mình đang ở quận 12 shop giao hàng thì mấy giờ tới nơi vậy"
            }, {
                value: "Nhìn là thích liền lun, mà mình ở ngoại tỉnh shop có giao hàng ngoại tỉnh không"
            }, {
                value: "Quá dễ thương lun, mình ở bình tân shop có giao hàng qua không nhỉ"
            }, {
                value: "Shop đóng cửa mấy giờ, tại mình tăng ca nên hay về trễ tầm hơn 8h lận muốn ghé mua mà sợ đóng cửa rồi"
            }, {
                value: "Shop mở cửa mấy giờ nhỉ, sáng mình đi làm sớm có gì ghé qua mua hàng lun"
            }, {
                value: "Shop cho mình xin địa chỉ, bữa nào rảnh mình ghé ngang qua xem trực tiếp rồi mua lun"
            }, {
                value: "Shop giao hàng nhanh ghê, mới đặt buổi sáng trưa đã có rồi. yêu quá"
            }, {
                value: "Ngày nào cũng mở cửa hả shop, cuối tuần thứ 7 chủ nhật có đóng cửa không, tại mình chỉ rảnh cuối tuần thôi"
            }, {
                value: "Sao nhìn đẹp quá dậy, mình đặt 1 con shop chuẩn bị khoảng 6h chiều mình ghé lấy hàng nhé"
            }, {
                value: "Shop liên hệ mình nhé, mua tặng người yêu. alo mình khoảng 1h chiều nhé: 0909519633"
            }, {
                value: "Cute hết sức, không yêu không được. Giao hàng ở bình tân không shop ơi"
            }, {
                value: "Mình ở gò vấp, shop có giao hàng không. Nếu giao thì bao lâu thì tới nhỉ"
            }, {
                value: "Rất thích phong cách làm việc của shop, nhanh nhẹn nhiệt tình, giao hàng nhanh. Sẽ ủng hỗ thêm sau này nữa."
            }, {
                value: "Không thể không yêu được nhìn đẹp quá trời lun, shop mail thông tin qua cho mình nhé"
            }, {
                value: "Nay lướt web vô tình vô web này thì mẫu hàng nào cũng đẹp, mún mua nhưng mình ở cà mau lận, shop có giao hàng không nhỉ"
            }, {
                value: "Mình cần mua tặng vợ, shop liên hệ mình để lấy thông tin nhé: 01646496953"
            }, {
                value: "Nhìn thật đáng yêu và dễ thương, mình sẽ dành tiền để ghé mua"
            }, {
                value: "Ở phú nhuận có giao hàng không shop, mình ở ngã tư phú nhuận đối diện cây săn nhé"
            }, {
                value: "Trưa nay giao một mẫu qua phan đăng lưu, gần fptshop nhé. Tới nới thì liên hệ mình: 01649605889"
            }, {
                value: "Qua mới dắt nhỏ em gái qua mua, shop phục vụ nhiệt tình dễ thương, rất hài lòng với shop"
            }
        ]


        $scope.gen = function () {
            $scope.ran = $scope.string[Math.floor(Math.random() * $scope.string.length)].value;
            fist_name = $scope.fist_name[Math.floor(Math.random() * $scope.fist_name.length)].value;
            last_name = $scope.last_name[Math.floor(Math.random() * $scope.last_name.length)].value;
            $scope.full_name = fist_name + " " + last_name;

            //chuyển tiếng việt thành không dấu
            tmp_fist = fist_name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\ /g, '').replace(/đ/g, "d").replace(/đ/g, "d").replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e").replace(/ì|í|ị|ỉ|ĩ/g, "i").toLowerCase();

            tmp_last = last_name.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\ /g, '').replace(/đ/g, "d").replace(/đ/g, "d").replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e").replace(/ì|í|ị|ỉ|ĩ/g, "i").toLowerCase();

            $scope.email = tmp_last.toLowerCase() + tmp_fist + Math.floor(Math.random() * (99 - 0 + 1)) + 0 + $scope.mail[Math.floor(Math.random() * $scope.mail.length)].value;

            $("#success-alert").fadeTo(5000, 2000).slideUp(500, function () {
                $("#success-alert").slideUp(3000);
            });

        }
    })
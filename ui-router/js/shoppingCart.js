var app = angular.module("myShopping", []);
app.controller("myCtrl", function ($scope) {

    $scope.arr = [
        {name: "qq", price: 12.9, number: 2, state: false},
        {name: "wx", price: 23.9, number: 1, state: false},
        {name: "aa", price: 99.9, number: 1, state: false},
        {name: "bb", price: 10.9, number: 5, state: false}
    ];
    /*当点击”-”按钮时输入框中的数量减1,商品小计和总价*/
    $scope.jian = function (index) {
        if ($scope.arr[index].number > 1) {
            $scope.arr[index].number--;
        }
        else if ($scope.arr[index].number == 1) {
            if (confirm("用户是否删除该商品")) {
                $scope.arr.splice(index, 1);
            }
        }
    };
    /*点击”+”按钮输入框中的数量加1,同时可以计算出商品小计,和购物 车总价*/
    $scope.jia = function (index) {
        $scope.arr[index].number++;
    };
    /*计算总价格*/
    $scope.allSum = function () {
        var allPrice = 0;
        for (var i = 0; i < $scope.arr.length; i++) {
            allPrice += $scope.arr[i].price * $scope.arr[i].number;
        }
        return allPrice;
    };

    /*清空购物车*/
    $scope.alldel = function () {
        if ($scope.arr.length == 0) {
            alert("您的购物车已空");
        } else {
            $scope.arr = [];
        }
    };
    /*批量删除*/
    $scope.pi = function () {
        for (var i = 0; i < $scope.arr.length; i++) {
            if ($scope.arr[i].state == true) {
                $scope.arr.splice(i, 1);
                i--;
            }
        }
    };
    //全选
    $scope.allCheck = false;
    $scope.allx = function () {
        for (var i = 0; i < $scope.arr.length; i++) {
            if ($scope.allCheck == true) {
                $scope.arr[i].state = true;
            } else {
                $scope.arr[i].state = false;
            }
        }
    };
    $scope.itemCheck = function () {
        var flag = 0;
        for (var i = 0; i < $scope.arr.length; i++) {
            if ($scope.arr[i].state == true) {
                flag++;
            }
        }
        if (flag == $scope.arr.length) {
            $scope.allCheck = true;
        } else {
            $scope.allCheck = false;
        }
    };

    /*删除条目*/
    $scope.del = function (index) {
        if (confirm("确定移除此项嘛？")) {
            $scope.arr.splice(index, 1);
        }
    };
    //判断数据源的长度
    $scope.getSize = function () {
        if ($scope.arr.length > 0) {
            return false;
        } else {
            return true;
        }
    }

});
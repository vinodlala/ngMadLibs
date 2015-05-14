angular.module('myApp', ['ngMessages'])
    .controller("MyCtrl", function ($scope) {

        $scope.switchToOutput = false;

        $scope.generateMadLib = function () {

            if ($scope.myForm.$valid) {
                $scope.switchToOutput = true;
            } else {
                $scope.switchToOutput = false;
            }
        };

        $scope.startOver = function () {
            $scope.switchToOutput = false;
            $scope.gender = "";
            $scope.firstName = "";
            $scope.jobTitle = "";
            $scope.tediousTask = "";
            $scope.dirtyTask = "";
            $scope.celebrity = "";
            $scope.uselessSkill = "";
            $scope.adjective = "";
            $scope.obnoxiousCelebrity = "";
            $scope.hugeNumber = "";
            $scope.myForm.$setPristine();
            $scope.myForm.$setUntouched();
        };

    });
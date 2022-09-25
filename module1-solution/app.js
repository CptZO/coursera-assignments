(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.str = '';
        $scope.messages = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.str.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arraystr = $scope.str.split(',');
                var arraystrWithoutEmptys = arraystr.filter(function(v) {
                    
                    return v.trim() !== '';

                });

                if (arraystrWithoutEmptys.length <= 3) {
                    $scope.messages = 'Enjoy!';
                } else {
                    $scope.messages = 'Too much!';
                }
            }
        };
    }
})();
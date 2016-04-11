(function () {
    'use strict';

    var controllerId = 'questionController';

    angular.module('app').controller(controllerId,
        ['$scope', 'questionFactory', questionController]);

    function questionController($scope, questionFactory) {
        $scope.questions = [];

        questionFactory.getQuestions().success(function (data) {
            $scope.questions = data;
        }).error(function (error) {
            // log errors
        });
    }
})();
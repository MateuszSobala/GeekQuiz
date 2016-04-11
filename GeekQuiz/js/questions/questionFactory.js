(function () {
    'use strict';

    var serviceId = 'questionFactory';

    angular.module('app').factory(serviceId,
        ['$http', questionFactory]);

    function questionFactory($http) {

        function getQuestions() {
            return $http.get('/api/TriviaQuestions');
        }

        var service = {
            getQuestions: getQuestions
        };

        return service;
    }
})();
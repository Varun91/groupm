(function(angular) {
    'use strict';

    angular.module('groupM')
        .service('queryService', ['$q', '$http', function($q, $http) {
            this.getPosts = function() {
                return $http({
                    method: 'GET',
                    url: "https://jsonplaceholder.typicode.com/posts"
                }).success(
                    function(response) {
                        return response;
                    }).error(
                    function(response) { 
                        return $q.reject(response); 
                    }
                );
            }

            this.getUsers = function() {
                return $http({
                    method: 'GET',
                    url: "https://jsonplaceholder.typicode.com/users"
                }).success(
                    function(response) {
                        return response;
                    }).error(
                    function(response) { 
                        return $q.reject(response); 
                    }
                );
            }
        }]);
})(window.angular);
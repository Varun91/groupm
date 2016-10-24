(function(angular) {
    'use strict';

    function headerController(queryService, $scope) {
        $scope.userMap = new Map();
        getusers();
        function getusers() {
            queryService.getUsers().success(function(data) {
                data.forEach(function(user) {
                    $scope.userMap.set(user.id, { "name": user.name, "email": user.email });
                })
                getposts();
            }).error(function() {
                console.error("error retrieving users");
            });

        }


        function getposts() {
            queryService.getPosts().success(function(data) {
                $scope.posts = data;
                data.forEach(function(post) {
                    post.name = $scope.userMap.get(post.userId).name;
                    post.email = $scope.userMap.get(post.userId).email;
                })

            }).error(function() {
                console.error("error retrieving posts");
            });
        }


    }

    angular.module('groupM').component('headerSearch', {
        templateUrl: 'views/components/header.html',
        controller: headerController
    });
})(window.angular);
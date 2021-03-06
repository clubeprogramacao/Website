(function () {
    var mod = angular.module('components');

    mod.controller('projectsController', ['$scope', '$resource', function ($scope, $resource) {
        // Should retrieve this form the API
        $resource('/api/v1/projects').query(
            function(data) {
                $scope.projects = data;
            }, function(error) {
                alert("Error: " + error.statusText + " (" + error.status + ")");
            }
        );
        
        /*$scope.projects = [
            {
                thumb : "assets/img/project1.jpg",
                title : "Project #1",
                subtitle : "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit"
            },
            {
                thumb : "assets/img/project2.jpg",
                title : "Project #2",
                subtitle : "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit"
            },
            {
                thumb : "assets/img/project3.jpg",
                title : "Project #3",
                subtitle : "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit"
            }
        ];*/
    }]);
})();
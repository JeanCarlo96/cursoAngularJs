angular.module("MyFirstApp", [])
   .controller("FirstController", function($scope, $http){
      $scope.posts = [];

      $http.get("https://jsonplaceholder.typicode.com/posts")
         .then(function(response){
            $scope.posts = response.data;
         },function(err){
         });
   });
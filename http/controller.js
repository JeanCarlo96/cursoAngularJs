angular.module("MyFirstApp", [])
   .controller("SecondController", function($scope,$http){
    $scope.posts = [];
    $scope.newPost = {};
      $http.get("https://jsonplaceholder.typicode.com/posts")
         .then(function(response){
            $scope.posts = response.data;
         },function(err){
         });
      $scope.addPost = function(){
         $http.post("https://jsonplaceholder.typicode.com/posts", {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
         })
            .then(function(respone, status, headers, config){
                $scope.posts.push($scope.newPost);
                $scope.newPost = {};
            },function(error, status, headers, config){

            })
      };
   });
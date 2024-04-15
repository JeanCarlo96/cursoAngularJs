angular.module("ToDoList", ["LocalStorageModule"])
   .controller("ToDoController", function($scope, localStorageService){
      if(localStorageService.get("angular-todo-list")){
         $scope.todo = localStorageService.get("angular-todo-list")
      }else{
         $scope.todo = [];
      }
      /**
       * {
       *   actividad: 'Terminar el curso Angular',
       *   fecha: '03-03-2024 2:00pm'
       * }
       */
      $scope.$watchCollection('todo', function(newValue, oldValue){
         localStorageService.set("angular-todo-list", $scope.todo);
      });
      $scope.addActv = function(){
         $scope.todo.push($scope.newActv);
         $scope.newActv = {};
      };
   });
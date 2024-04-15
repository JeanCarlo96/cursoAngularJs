var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", "$http", function(m, h){
   m.nombre = "Jean Carlo Marchesini Antamba";
   m.nuevoComentario = {};
   m.comentarios = [
      {
         comentario: "Que buen tutorial",
         usuario: "ElJuanK69"
      },
      {
         comentario: "Que malo tutorial",
         usuario: "OtroUsuario"
      }
   ];
   m.agregarComentario = function(){
      m.comentarios.push(m.nuevoComentario);
   };
}]);
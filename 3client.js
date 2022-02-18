var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http){
    $http.get("http://localhost:8080/user").success(function(response){$scope.names=response;})

})
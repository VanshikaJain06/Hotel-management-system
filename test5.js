var myapp=angular.module("myapp",['ngRoute']).config(function($route){
    $route.when('/user',{
        templateUrl:"./json.html",
        controller:'stuCtrl'
    })
})
myapp.controller("myctrl",function(){});
.controller("stuCtrl",function($scope,$http){
    $http.get('http://127.0.0.1:5200/user')
    .success(function(response)
    {
        console.log(response)
        $scope.names=response.records;
    });
})
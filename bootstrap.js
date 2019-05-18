var module = angular.module("module1",[]);
module.controller("ctrl1",function($scope){
    $scope.data = "Hello Controller1";
});

var module2 = angular.module("module2",[]);
module2.controller("ctrl2",function($scope){
    $scope.data = "Hello Controller2";
});
module2.controller("ctrl3",function($scope){
    $scope.xyz = "Hello Controller3";
});
module2.controller("ctrl4",function($scope){
    $scope.data = "Hello Controller4";
    $scope.obj={id:1001,name:"Amit"}
});
window.addEventListener("load",function(){
    angular.bootstrap(document.getElementById("div1"), ['module1']);
angular.bootstrap(document.getElementById("div2"), ['module2']);
    /*angular.bootstrap(document.getElementById("div3"), ['module2']);
*/});
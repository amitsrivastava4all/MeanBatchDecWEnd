app.controller("calcctrl",($scope, calcfactory)=>{
   console.log('$scope is ',$scope);
   $scope.addition = ()=>{
       let sum = calcfactory.add($scope.first, $scope.second);
    //   let sum  =  parseInt($scope.first) + parseInt($scope.second);
       console.log('Addition called...');
       $scope.result = sum;
   }
});
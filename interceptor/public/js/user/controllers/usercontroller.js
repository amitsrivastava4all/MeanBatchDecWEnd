userModule.controller('userctrl',($scope,userfactory, SUCCESS,FAIL, $window)=>{
    $scope.user = {};
$scope.doRegister=()=>{
    console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
    const promise = userfactory.register($scope.user);
    promise.then(data=>{
        console.log('PR Data is ',data);
        $scope.data = data;
    },err=>{
        console.log('PR Error is ',err);
        $scope.err = err;
    })
}
$scope.doLogin=()=>{
    console.log('User id is ',$scope.user.userid, ' Pwd is ',$scope.user.password);
    const promise = userfactory.login($scope.user);
    promise.then(data=>{
        if(data.data.status==SUCCESS){
            localStorage.tokenId = data.data.token ;
            $window.location.href= '/dashboard.html';
        } 
        else if(data.data.status==FAIL){
            $scope.data = data;
        }
        console.log('PR Data is ',data);
        
    },err=>{
        console.log('PR Error is ',err);
        $scope.err = err;
    })
}    

})
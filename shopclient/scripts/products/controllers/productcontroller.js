app.controller('productctrl',($scope,productfactory)=>{
    console.log("Controller Called");
    $scope.products = [];
    let promise = productfactory.fetchProducts();
    console.log('Promise Rec in Controller');
    promise.then(data=>{
        console.log("Controller Then Call ",data);
        $scope.products = data.data['products'];
    },error=>{
        $scope.error = error;
    })
    console.log(' Controller the end')
})
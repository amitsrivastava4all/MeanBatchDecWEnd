app.controller('productctrl',($scope,productfactory)=>{
    $scope.products = [];
    let promise = productfactory.fetchProducts();
    promise.then(data=>{
        $scope.products = data.data['products'];
    },error=>{
        $scope.error = error;
    })
})
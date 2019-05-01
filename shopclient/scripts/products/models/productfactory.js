app.factory('productfactory',($http,$q,FETCH_PRODUCT)=>{
    return {
        fetchProducts(){
            let defer = $q.defer();
            $http.get(FETCH_PRODUCT).then((data)=>{
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            })
            return defer.promise;
        }
    }
})
app.factory('productfactory',($http,$q,FETCH_PRODUCT)=>{
    console.log("Factory Start");
    return {
        fetchProducts(){
            console.log("Inside Fetch Product factory");
            let defer = $q.defer();
            console.log("Calling Ajax in Factory");
            $http.get(FETCH_PRODUCT).then((data)=>{
                console.log("Rec Output in  Fetch Product factory ",data);
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
            console.log("Return Promise");
            return defer.promise;
        }
    }
    
})
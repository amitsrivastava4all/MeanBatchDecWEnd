app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'views/home.html'
    }).when('/products',{
        templateUrl:'views/product.html'
    })
    .when('/orders',{
        templateUrl:'views/order.html',
       controller:'orderctrl'
    })
    .when('/single/:productid',{
        templateUrl:'views/singleproduct.html',
       controller:'singlectrl'
    })
    .when('/inventory',{
        template:`<h1>Hello I am Inventory </h1>`
    }).otherwise({
        //template:`<h1>U Type Something Wrong </h1>`
        redirectTo:"/"
    })
})
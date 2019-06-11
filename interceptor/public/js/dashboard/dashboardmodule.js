const dashboardModule = angular.module('dashboard',['app']);
dashboardModule.constant('DASHBOARD_URL','http://localhost:1234/dashboard')
dashboardModule.run(($http,$q, DASHBOARD_URL,$window)=>{
    $http.get(DASHBOARD_URL).then(data=>{
        if(data.data.status=='E'){
            $window.location.href = '/index.html';
        }
    },(err)=>{
        $window.location.href = '/index.html';
    });
    console.log('Run Called.... ',$http, ' ',$q);
});
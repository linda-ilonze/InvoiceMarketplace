/**
 * Created by Ilonze on 16/05/15.
 */


//require(['marketplaceController'], function(marketplaceController){
    app = angular.module('invoiceMarketplace',['ngRoute']);

    //app.controller('marketplaceController')
     //   .controller('dashboardController');
    console.log("app ");

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/marketplace', {
                    templateUrl: '/marketplace',
                    controller: 'marketplaceController'
                })
                .when('/dashboard', {
                    templateUrl: '/dashboard',
                    controller: 'dashboardController'
                })
                .otherwise({
                redirectTo: '/'
            });
        }]);
//});

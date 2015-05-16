/**
 * Created by Ilonze on 16/05/15.
 */


//require(['marketplaceController'], function(marketplaceController){
    app = angular.module('invoiceMarketplace',['ngRoute']);

    console.log("app ");

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/market', {
                    templateUrl: '/market',
                    controller: 'marketController'
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

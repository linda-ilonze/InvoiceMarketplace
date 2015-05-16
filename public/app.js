/**
 * Created by Ilonze on 16/05/15.
 */


//require(['marketplaceController'], function(marketplaceController){
    app = angular.module('invoiceMarketplace',['ngRoute']);

    app.controller('marketplaceController');

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/marketplace', {
                    templateUrl: 'marketplace/marketPlaceView',
                    controller: 'marketPlaceController'
                })
                .when('/dashboard', {
                    templateUrl: 'dashboard/dashboardView',
                    controller: 'dashboardController'
                })
            otherwise({
                redirectTo: '/'
            });
        }]);
//});

/**
 * Created by Ilonze on 16/05/15.
 */

angular.module('invoiceMarketplace').
    controller('dashboardController', ['$scope','invoiceService',function($scope,invoiceService) {
        console.log("dashboardController initialised");
        $scope.invoice = invoiceService.get();

    }]);

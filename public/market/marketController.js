/**
 * Created by Ilonze on 16/05/15.
 */

angular.module('invoiceMarketplace').
    controller('marketController', [ '$scope', 'Socket', 'invoiceService', '$location',
                                    function($scope, Socket,invoiceService,$location) {
        console.log("marketController loaded");
        $scope.invoices = [];
        Socket.emit('getAllInvoices', {});

        Socket.on('AllInvoices', function(message){
            //alert(JSON.stringify(message.invoices));
            $scope.invoices = message.invoices;
        });

        $scope.showDetail = function(invoice){
            invoiceService.set(invoice);
            $location.path("/dashboard");
        }
    }]);

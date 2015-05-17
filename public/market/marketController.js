/**
 * Created by Ilonze on 16/05/15.
 */

angular.module('invoiceMarketplace').
    controller('marketController', [ '$scope', 'Socket', function($scope, Socket) {
        console.log("marketController loaded");
        $scope.invoices = [23, 22];
        Socket.emit('getAllInvoices', {});

        Socket.on('AllInvoices', function(message){
            $scope.invoices = message.invoices;
        });
    }]);

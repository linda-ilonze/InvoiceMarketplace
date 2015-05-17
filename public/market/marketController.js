/**
 * Created by Ilonze on 16/05/15.
 */

angular.module('invoiceMarketplace').
    controller('marketController', [ '$scope', 'Socket', function($scope, Socket) {
        console.log("marketController loaded");

        Socket.emit('getAllInvoices', {});

        Socket.on('AllInvoices', function(message){
            ;alert(JSON.stringify(message));
        });
    }]);

/**
 * Created by Ilonze on 17/05/15.
 */


angular.module('invoiceMarketplace')
    .factory('invoiceService', function() {
        console.log('Service created');

    var saveService = {}
    function set(data) {
        console.log(JSON.stringify(data));
        saveService = data;
    }
    function get() {
        console.log(JSON.stringify(saveService));
        return saveService;
    }

    return {
        set: set,
        get: get
    }

});

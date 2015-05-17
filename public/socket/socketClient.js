/**
 * Created by yemi-t on 07/04/15.
 */
angular.module('LiveUpdates', []);

angular.module('LiveUpdates').service('Socket', [
    '$location', '$timeout',
    function( $location, $timeout) {
        console.log('live updates initialised');
        this.socket = io();
        this.on = function(eventName, callback) {
            if (this.socket) {
                this.socket.on(eventName, function(data) {
                    $timeout(function() {
                        callback(data);
                    });
                }); }
        };
        this.emit = function(eventName, data) {
            if (this.socket) {
                this.socket.emit(eventName, data);
            }
        };
        this.removeListener = function(eventName) {
            if (this.socket) {
                this.socket.removeListener(eventName);
            }
        }; }
]);
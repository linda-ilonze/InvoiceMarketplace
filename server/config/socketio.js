/**
 * Created by yemi-t on 25/03/15.
 */
var cookieParser = require('cookie-parser');

module.exports = function(server, io) {
    io.use(function(socket, next) {

        next(null, true);
    });
    io.on('connection', function(socket){
            console.log('connected!!!!');
        require('../controllers/invoiceController').socketHandlers(io,socket);
    }); };
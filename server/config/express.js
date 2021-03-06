/**
 * Created by yemi-t on 16/05/15.
 */

var express = require('express'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path'),
    socketio = require('socket.io');

module.exports = function(config)
{
    // launch the app server
    var app=express();
    var server = http.createServer(app);
    var io = socketio.listen(server);

    // setup logger, the value should be config driven
    app.use(morgan('dev'));

    app.use(express.static(config.rootPath));

    // register the routes
    require('./routes')(app);
    require('../routes/users.routes.js')(app);
    require('../routes/invoice.routes.js')(app);
    require('../routes/partial.routes.js')(app);
    require('../routes/admin.routes.js')(app);

    require('./socketio')(server, io);


    return server;
}
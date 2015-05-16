/**
 * Created by yemi-t on 16/05/15.
 */

var express = require('express'),
    morgan = require('morgan'),
    http = require('http'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/../../'); // move root path to config

module.exports = function(config)
{
    // launch the app server
    var app=express();
    var server = http.createServer(app);

    // setup logger, the value should be config driven
    app.use(morgan('dev'));

    app.use(express.static(config.rootPath));

    // register the routes
    require('./routes')(app);
    require('../routes/users.routes.js')(app);

    return server;
}
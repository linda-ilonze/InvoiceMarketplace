/**
 * Created by yemi-t on 16/05/15.
 */

var express = require('express'),
    morgan = require('morgan'),
    http = require('http');

module.exports = function()
{
    // launch the app server
    var app=express();
    var server = http.createServer(app);

    // setup logger, the value should be config driven
    app.use(morgan('dev'));

    // register the routes
    require('./routes')(app);

    return server;
}
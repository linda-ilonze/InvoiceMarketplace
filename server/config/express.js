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

    require('./routes')(app);

    return server;
}
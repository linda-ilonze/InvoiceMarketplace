/**
 * Created by yemi-t on 16/05/15.
 */
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];
var mongoose = require('./server/config/mongoose');

mongoose(config, function(err, db) {
    var app = require('./server/config/express')(config);

    app.listen(4040, function () {
        console.log("Server up and running on 4040");
    });
})
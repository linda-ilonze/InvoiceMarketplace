/**
 * Created by yemi-t on 16/05/15.
 */
var mongoose = require('mongoose');

module.exports = function(config, next){
    var db = mongoose.connect(config.db.connectionstring, function(err){
        console.log('###### mongo initialised #####');

        require('../model/user');
        require('../model/invoice');

        next(err, db);
    });

}
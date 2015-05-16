/**
 * Created by yemi-t on 16/05/15.
 */

var User = require('mongoose').model('User');

exports.create = function(req, res, next){
    console.log('users create function called');
    var user = new User(req.body);
    console.log(JSON.stringify(req.body));
    user.save(function(err){
        if(err){
            console.log('Error creating new user. Request body: ' + req.body + '\n Error: ' + err);
            return next(err);
        }else{
            console.log('User creates successfully. Request body: ' + req.body);
            res.json(user);
        }
    })
};

exports.list = function(req, res, next){
    console.log('Users list function called');
    User.find({}, function(err, users){
        if(err){
            console.log('Error fetching list of users. Error: ' + err);
            return next(err);
        }else{
            console.log('User list fetched');
            res.json(users);
        }
    });
};
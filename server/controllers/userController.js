/**
 * Created by yemi-t on 16/05/15.
 */

var User = require('mongoose').model('User');

exports.create = function(req, res, next){
    console.log('users create function called');
    var user = new User(req.body);
    user.firstName = "firstname";
    user.lastName = "lastName";
    user.email = "firstname.lastname@email.com";
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
    User.getAll(function(err, users){
        if(err){
            console.log('Error fetching list of users. Error: ' + err);
            return next(err);
        }else{
            console.log('User list fetched');
            res.json(users);
        }
    });
};

exports.login = function(req, res, next){
    console.log('Users login function called');
    res.redirect('/home');
};

exports.regenerate = function(req, res, next) {
    console.log('Users generate function called');

    function delUser(element, index, array) {
      console.log('deleting at [' + index + '] = ' + element);
      User.remove(element, function(err){
          if (err) {
              console.log('Error deleting user:' + err)}
          });
    };

    User.getAll(function(err, users){
                        if(err){
                            console.log('Error fetching list of users. Error: ' + err);
                            return next(err);
                        }else{
                            console.log('User list fetched');
                            users.forEach(delUser)
                        }
                });

    var users =
    [
      {
        "firstName": "Eloise",
        "lastName": "Logan",
        "email": "eloise.logan@snowpoke.co.uk"
      },
      {
        "firstName": "Elva",
        "lastName": "Skinner",
        "email": "elva.skinner@printspan.biz"
      },
      {
        "firstName": "Catherine",
        "lastName": "Thomas",
        "email": "catherine.thomas@comtext.org"
      },
      {
        "firstName": "Pratt",
        "lastName": "Foreman",
        "email": "pratt.foreman@biolive.biz"
      },
      {
        "firstName": "Puckett",
        "lastName": "Cameron",
        "email": "puckett.cameron@centice.me"
      },
      {
        "firstName": "Price",
        "lastName": "Carter",
        "email": "price.carter@moreganic.ca"
      },
      {
        "firstName": "Castro",
        "lastName": "Anthony",
        "email": "castro.anthony@qnekt.com"

      }
    ]

    function addUser(element, index, array) {
      console.log('a[' + index + '] = ' + element);
      var userToAdd = new User(element);
      userToAdd.save(function(err){
          if (err) {
              console.log('Error creating test user:' + err)}
          });
    }

    users.forEach(addUser)

    res.redirect('/users');
};

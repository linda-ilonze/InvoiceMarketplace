/**
 * Created by yemi-t on 16/05/15.
 */
var users = require('../controllers/userController');

module.exports = function(app) {

    app.route('/users')
        .post(users.create)
        .get(users.list);

    app.post('/login', users.login);

}
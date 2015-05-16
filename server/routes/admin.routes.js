var users = require('../controllers/userController');

module.exports = function(app) {

    app.get('/admin/generate-users', users.regenerate)

}
var users = require('../controllers/userController');
var invoice = require('../controllers/invoiceController');


module.exports = function(app) {

    app.get('/admin/generate-users', users.regenerate);
    app.get('/admin/generate-invoices', invoice.generate);
}
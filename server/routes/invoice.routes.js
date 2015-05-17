/**
 * Created by Ilonze on 16/05/15.
 */

var invoice = require('../controllers/invoiceController');


module.exports = function(app) {

    app.route('/invoices')
        .post(invoice.create)
        .get(invoice.list);

}

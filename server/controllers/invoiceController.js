/**
 * Created by Ilonze on 16/05/15.
 */

var Invoice = require('mongoose').model('Invoice');

exports.create = function(req, res, next) {
    var invoice = req.body;
    new Invoice({
        paymentDate: invoice.paymentDate,
        description: invoice.description,
        companyName: invoice.companyName,
        amount: invoice.amount,
        targetAmount: invoice.targetAmount,
        currentAmount: invoice.currentAmount
    }).save();
}
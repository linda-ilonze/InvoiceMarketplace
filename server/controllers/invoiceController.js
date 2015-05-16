/**
 * Created by Ilonze on 16/05/15.
 */

var Invoice = require('mongoose').model('Invoice');

exports.create = function(req, res, next) {
    console.log('invoice create function called');
    var invoice = req.body;
    new Invoice(invoice).save();
};


exports.list = function(req, res, next){
    console.log('Invoice list function called');
    Invoice.find({}, function(err, invoice){
        if(err){
            console.log('Error fetching list of invoice. Error: ' + err);
            return next(err);
        }else{
            console.log('Invoice list fetched');
            res.json(invoice);
        }
    });
};
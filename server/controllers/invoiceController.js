/**
 * Created by Ilonze on 16/05/15.
 */

var Invoice = require('mongoose').model('Invoice');

addInvoice = function(element, index) {
    console.log('a[' + index + '] = ' + element);
    var invoice = new Invoice(element);
    invoice.save(function(err){
        if (err) {
            console.log('Error creating invoice:' + err)}
    });
}

exports.generate = function(req,res,next){

    console.log('Invoice generate called!');
    var invoices =  [
        {
            "paymentDate":new Date("20 May 2015"),
            "description":"Invoice for Supplying Shipping",
            "numberOfInvestors": 22,
            "percentageFunded": 30,
            "daysLeftOnFunding": 60,
            "companyName": "Deloitte",
            "amountRemaining": 32,
            "paybackPeriod": 60,
            "annualAPR": 1.5,
            targetAmount:2111

        }];
    invoices.forEach(addInvoice);
    res.redirect('/invoices');
};
exports.socketHandlers = function(io, socket){
    socket.on('getAllInvoices', function() {
        console.log('getAllInvoices');
        Invoice.getAll(function(err, invoices){
            var data = null;
            if(err){
                data = [];
            }
            else{
                io.emit('AllInvoices', {
                    invoices: invoices
                });
            }

        })
    });
}

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

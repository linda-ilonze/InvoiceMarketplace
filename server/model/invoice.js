/**
 * Created by Ilonze on 16/05/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var invoiceSchema = new Schema({
    paymentDate: {
            type: Date,
            required:true
    },
    description: {
        type: String,
        required:true
    },
    companyName: {
        type: String
    },
    amount: {
        type: Number
    },
    targetAmount:{
        type:Number
    },
    currentAmount:{
        type:Number
    }
});

invoiceSchema.statics.getAll = function(callback){
    this.find({}, function(err, invoices){
        callback(err, invoices);
    });
}

mongoose.model('Invoice', invoiceSchema);

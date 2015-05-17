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
    annualAPR: {
        type: Number
    },
    paybackPeriod: {
        type: Number
    },
    amountRemaining: {
        type: Number
    },
    daysLeftOnFunding: {
        type: Number
    },
    percentageFunded:{
        type:Number
    },
    numberOfInvestors:{
        type:Number
    }
});

mongoose.model('Invoice', invoiceSchema);

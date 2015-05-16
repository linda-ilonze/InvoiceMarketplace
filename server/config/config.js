/**
 * Created by yemi-t on 08/03/15.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        rootPath:rootPath,
        db:{
            connectionstring: 'mongodb://localhost/InvoiceMarketPlace',
            host: '127.0.0.1',
            port:27017,
            username:null,
            password:null,
            name:'InvoiceMarketPlace'
        } ,
        port:process.env.PORT ||4040
    }
}
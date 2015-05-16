/**
 * Created by yemi-t on 16/05/15.
 */



var app = require('./server/config/express')();


app.listen(4040,function(){
    console.log("Server up and running on 4040");
});
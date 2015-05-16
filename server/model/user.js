/**
 * Created by yemi-t on 16/05/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique: true
    }
});

UserSchema.statics.getAll = function(callback){
    this.find({}, function(err, users){
        callback(err, users);
    });
}

UserSchema.statics.getUserByEmail = function(email, callback){
    this.findOne({email: email}, function(err, user){
        callback(err, user);
    });
}

mongoose.model('User', UserSchema);
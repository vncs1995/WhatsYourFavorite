var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    thumb : {type: String, required : true},
    name : {type: String, required : true},
    rate : {type : Number, required : false},
    description : {type : String, required : true}
});

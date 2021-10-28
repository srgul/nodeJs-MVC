var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeMVC');

var Schema = mongoose.Schema;

var object = new Schema({
    id : String,
    name: String,
    desc: String,
    filename: String,
    userId: String
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

mongoose.model('Object', object);
module.exports = mongoose;
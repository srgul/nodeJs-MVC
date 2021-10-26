var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeMVC');

const Schema = mongoose.Schema;

var object = new Schema({
    name: String,
    desc: String,
    filename: String
});

mongoose.model('Object', object);
module.exports = mongoose;
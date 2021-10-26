var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeMVC');

const Schema = mongoose.Schema;

var userShema = new Schema({
    name: String,
    lastname: String,
    phone: String,
    companyName: String,
    username: String,
    password: String,
    role: String
});

mongoose.model('User', userShema)
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeMVC');

var Schema = mongoose.Schema;

var userShema = new Schema({
    id: Number,
    name: String,
    lastname: String,
    phone: String,
    companyName: String,
    username: String,
    password: String,
    role: String,
    userObjId: String
});

mongoose.model("User", userShema);

module.exports = mongoose;
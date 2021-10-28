var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodeMVC');

var Schema = mongoose.Schema;

var sModal = new Schema({
    userSesionId: String 
});

mongoose.model('LogedUser', sModal);
module.exports = mongoose;
var mongoose  = require('mongoose');
var LogedUser = mongoose.model('LogedUser');

exports.addSession = function (params) {
    new LogedUser({
        userSesionId: params
    }).save(function(err, comment) {

    })
}
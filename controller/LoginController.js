var mongoose = require('mongoose');
var User = mongoose.model('User');
var addSession = require('./SessionController');

exports.loginValidController = function(req, res, next) {
    const username = req.body.username;
    const pwd = req.body.password

    User.find({username: username, password: pwd}, (err, data)  => {
        console.log(data[0]._id.toString())
        if (data.length > 0) {
            var params = data[0]._id.toString()
            addSession.addSession(params);
            res.redirect('/dashboard')
        } else {
            res.redirect('/')
        }
    })
}


exports.getLoginPage = function(req, res, next) {
    res.render('/login');
}
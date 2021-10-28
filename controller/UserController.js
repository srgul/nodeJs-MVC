var mongoose  = require('mongoose');
var User = mongoose.model('User')

exports.addNewUser = function(req, res, next) {
    res.render('createUser');
}

exports.createUser = function(req, res, next) {
    new User({
        name : req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        companyName: req.body.companyName,
        username: req.body.username,
        password: req.body.password,
        role: "user",
        objId : "dasta"
    }).save(function(err, comment) {
        res.redirect('/dashboard')
    })
}
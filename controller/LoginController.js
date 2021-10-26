exports.loginValidController = function(req, res, next) {
    const username = req.body.username;
    const pwd = req.body.password

    if (username == "sait" && pwd == "sait") {
        res.redirect('/dashboard')
    } else {
        res.redirect('/')
    }
}

exports.getLoginPage = function(req, res, next) {
    res.render('/login');
}
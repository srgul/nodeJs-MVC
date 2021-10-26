exports.getDashboard = function(req, res, next) {
    res.render('dashboard');
}

exports.addNewObject = function(req, res, next) {
    res.render('addObject')
}

exports.createNewObject = function(req, res, next) {
    res.json('ok');
}
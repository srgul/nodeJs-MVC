var mongoose = require('mongoose');
var Object = mongoose.model('Object')

exports.getDashboard = function(req, res, next) {
    Object.find(function(err, object) {
        res.render("dashboard", {objectlist: object})
    })
}

exports.addNewObject = function(req, res, next) {
    res.render('addObject')
}

exports.createNewObject = function(req, res, next) {
    const objName = req.body.imageName;
    const objDesc = req.body.imageDsc;
    const imgObj = req.file
    
    new Object({
        name: objName,
        desc: objDesc,
        filename: imgObj.filename,
        userId: "userId"
    }).save( function(err, comment) {
        res.redirect('/dashboard')
        console.log(err)
    })
} 

exports.deleteObject = function(req, res, next) {
    Object.findByIdAndRemove(req.params.id, function(err, next) {
        res.redirect('/dashboard')
    })
}
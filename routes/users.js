var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/createNewUser', userController.addNewUser);

router.post('/addUser', userController.createUser)

module.exports = router;
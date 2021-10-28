var express = require('express');
var router = express.Router();
var loginController = require('../controller/LoginController');

router.get('/', loginController.getLoginPage);

router.get('/login', loginController.getLoginPage);

router.post('/onLogin', loginController.loginValidController);

module.exports = router;
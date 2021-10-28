var express = require('express');
var router = express.Router();
var dashboardController = require('../controller/DashboardController');

/* GET users listing. */
router.get('/', dashboardController.getDashboard);

router.post('/', dashboardController.getDashboard);

router.get('/addNewObject', dashboardController.addNewObject);

router.post('/addNewObject', dashboardController.createNewObject);

router.get('/delete/:id', dashboardController.deleteObject)

module.exports = router;

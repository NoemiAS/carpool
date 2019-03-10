var express = require('express');
var router = express.Router();

const express = require('express');
const router = express.Router();
const controller = require('../controllers/driver.controller')

router.get('/:offset/:limit', controller.getAllDrivers);
router.post('/', controller.createDriver);
router.put('/', controller.updateDriver);
router.get('/:id', controller.getDriverById);
router.delete('/:id', controller.deleteDriver);

module.exports = router;
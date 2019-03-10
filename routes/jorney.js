var express = require('express');
var router = express.Router();

const express = require('express');
const router = express.Router();
const controller = require('../controllers/point.controller')

router.get('/:id', controller.getJorneyById);
router.get('/driver/:driverId', controller.getJorneysByDriver);
router.get('/rider/:driverId', controller.getJorneysByRider);
router.post('/', controller.addRider);
router.delete('/:id', controller.deleteJorney);

module.exports = router;
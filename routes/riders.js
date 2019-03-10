var express = require('express');
var router = express.Router();

const express = require('express');
const router = express.Router();
const controller = require('../controllers/rider.controller')

router.get('/:offset/:limit', controller.getAllRiders);
router.post('/', controller.createRider);
router.put('/', controller.updateRider);
router.get('/:id', controller.getRiderById);
router.delete('/:id', controller.deleteRider);

module.exports = router;

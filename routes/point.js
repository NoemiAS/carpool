var express = require('express');
var router = express.Router();

const express = require('express');
const router = express.Router();
const controller = require('../controllers/point.controller')

router.get('/:offset/:limit', controller.getActive);
router.post('/', controller.createPoint);
router.put('/', controller.updatePoint);
router.get('/:id', controller.getDriverByPoint);
router.delete('/:id', controller.deletePoint);

module.exports = router;
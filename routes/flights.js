var express = require('express');
var router = express.Router();
const flightsCtrl =require('../controller/flights')


/* route to render all flights. */
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.post('/')

module.exports = router;

var express = require('express');
var router = express.Router();
const flightsCtrl =require('../controller/flights')
const flight = require('../models/flight')

/* route to render all flights. */
router.get('/', flightsCtrl.index)

module.exports = router;

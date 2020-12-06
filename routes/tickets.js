const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets')



router.get('/tickets/:id', ticketsCtrl.show)

module.exports =router;
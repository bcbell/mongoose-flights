const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets');
const { route } = require('./flights');

// route.post('/flights/:id/tickets', ticketsCtrl.create)



module.exports =router;
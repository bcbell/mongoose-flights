const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controller/tickets');


router.post('/flights/:id/tickets', ticketsCtrl.create)
router.delete('/flights/:id/tickets/:id', ticketsCtrl.delete)


module.exports =router;
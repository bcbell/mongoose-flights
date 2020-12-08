const express =require('express')
const router =express.Router()
const destCtrl = require('../controller/destinations')

router.get('/destinations/new', destCtrl.new)
router.post('/destinations/new', destCtrl.create)
router.post('/flights/:id/destinations', destCtrl.addDestination)

module.exports= router
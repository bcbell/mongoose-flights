const express =require('express')
const router =express.Router()
const destCtrl = require('../controller/destinations')

router.get('/destinations/new', destCtrl.new)
router.post('/destinations/new', destCtrl.create)

module.exports= router
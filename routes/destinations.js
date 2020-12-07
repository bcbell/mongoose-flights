const express =require('express')
const router =express.Router()
const destCtrl = require('../controller/destinations')

router.get('/destinations/new', destCtrl.new)

module.exports= router
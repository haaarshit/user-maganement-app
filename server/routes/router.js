const express = require('express')
const services = require('../services/render')
const controller = require('../controller/controller')
const router = express.Router()
// use home routes

router.get('/',services.homeRoutes)
// use add user routes
router.get('/add-user',services.adduser)
// update user routes
router.get('/update-user',services.updateuser)

// apis
router.post('/api/user',controller.create)
router.get('/api/user',controller.find)
router.put('/api/user/:id',controller.update)
router.delete('/api/user/:id',controller.delete)

module.exports = router
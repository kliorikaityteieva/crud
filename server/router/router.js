const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateUser = require("../validators/validateUser")
console.log(validateUser())

router.post('/upload', controller.upload)
router.get('/delete/:id', controller.delete)
router.get('/all', controller.all)
router.get('/update/:side/:id/:current', controller.update)


module.exports = router

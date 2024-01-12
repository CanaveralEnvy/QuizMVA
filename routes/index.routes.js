const express = require('express')
const router = express.Router()

const mainRouter = require('./main.routes')
const firstRouter = require('./first.theme')
const secondRouter = require('./second.theme')

router.use('/', mainRouter)

router.use('/firsttheme', firstRouter)

router.use('/secondtheme', secondRouter)

module.exports = router
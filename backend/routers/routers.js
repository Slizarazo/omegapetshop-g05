const express = require('express')
const router = express.Router()
const controladorProductos = require('./router_productos')

router.use("/productos", controladorProductos)

module.exports = router
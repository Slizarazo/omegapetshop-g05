const express = require('express');
const router = express.Router();

const controladorProductos = require('../controllers/controller_productos');
router.get("/listar",controladorProductos);
router.get("/cargar/:id",controladorProductos);
router.post("/agregar",controladorProductos);
router.post("/editar/:id",controladorProductos);
router.delete("/borrar/:id",controladorProductos);

module.exports = router
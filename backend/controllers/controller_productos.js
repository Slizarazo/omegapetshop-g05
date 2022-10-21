const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/model_productos')

router.get('/listar', (req, res) => {
    modeloProducto.find({}, function(docs, err)
    {
        if(!err)
        {
            res.send(docs)
        }
        else
        {
            res.send(err)
        }
    })
})

router.post('/agregar', (req, res) => {
    const nuevoProducto = new modeloProducto({
        id: req.body.id,
        id_categoria: req.body.id_categoria,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        activo: req.body.activo
    })

    nuevoProducto.save(function(err) {
        if(!err) {
            res.send('El producto fue agregado exitosamente!!!')
        }
        else {
            res.send(err.stack)
        }
    })
})

router.get('/cargar/:id', (req, res) => {
    modeloProducto.find({id:req.params.id}, function(docs, err)
    {
        if(!err)
        {
            res.send(docs)
        }
        else
        {
            res.send(err)
        }
    })
})

router.post('/editar/:id', (req, res) => {
    modeloProducto.findOneAndUpdate(
        {id:req.params.id}
        ,{
            id_categoria:req.body.id_categoria,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            activo: req.body.activo
        },
        (err) =>
        {
            if(!err)
            {
                res.send("El producto se actualizó exitosamente!!!")
            }
            else
            {
                res.send(err)
            }
        })
})

router.delete('/borrar/:id', (req, res) => {
    modeloProducto.findOneAndDelete(
        {id:req.params.id},
        (err) =>
        {
            if(!err)
            {
                res.send("El producto se elimino exitosamente!!!")
            }
            else
            {
                res.send(err)
            }
        })
})

module.exports = router

const mongoose = require('mongoose')
const miesquema = mongoose.Schema
const esquemaProducto = new miesquema({
    //_id : miesquema.Types.ObjectId, 
    id : String,
    id_categoria : String,
    nombre : String,
    descripcion : String,
    precio : Number,
    activo : Boolean
});
const modeloProducto = mongoose.model('productos', esquemaProducto)
module.exports = modeloProducto
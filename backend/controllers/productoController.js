const Producto = require("../models/Producto");
const Categoria = require("../models/Categoria");
const { validationResult } = require("express-validator");

// Crear un nuevo producto

exports.crearProducto = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(401).json({ errores: errores.array() });
  }

  const { categoria } = req.body;

  try {
    const categoriaEncontrada = await Categoria.findById(categoria);

    if (!categoriaEncontrada) {
      return res.status(404).json({ msg: "Categoria no encontrada" });
    }

    if (categoriaEncontrada.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    const producto = new Producto(req.body);
    await producto.save();
    res.json({ producto });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.obtenerProductos = async (req, res) => {
  const { categoria } = req.query;
  try {
    const categoriaEncontrada = await Categoria.findById(categoria);

    if (!categoriaEncontrada) {
      return res.status(404).json({ msg: "Categoria no encontrada" });
    }

    if (categoriaEncontrada.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    const productos = await Producto.find({ categoria });
    res.json({ productos });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.actualizarProducto = async (req, res) => {
  const { categoria, nombre, estado } = req.body;
  try {
    const categoriaEncontrada = await Categoria.findById(categoria);

    const productoExiste = await Producto.findById(req.params.id);

    if (!productoExiste) {
      return res.status(404).json({ msg: "No existe ese producto" });
    }

    if (!categoriaEncontrada) {
      return res.status(404).json({ msg: "Categoria no encontrada" });
    }

    if (categoriaEncontrada.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    const nuevoProducto = {};
    if (nombre) {
      nuevoProducto.nombre = nombre;
    }
    if (estado) {
      nuevoProducto.estado = estado;
    }

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProducto },
      { new: true }
    );
    res.json({ producto });
  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.eliminarProducto=async(req,res)=>{
  const { categoria } = req.query;
  try {
    const categoriaEncontrada = await Categoria.findById(categoria);

    const productoExiste = await Producto.findById(req.params.id);

    if (!productoExiste) {
      return res.status(404).json({ msg: "No existe ese producto" });
    }

    if (!categoriaEncontrada) {
      return res.status(404).json({ msg: "Categoria no encontrada" });
    }

    if (categoriaEncontrada.creador.toString() !== req.usuario.id) {
      return res.status(400).json({ msg: "No autorizado" });
    }

    await Producto.deleteOne({_id:req.params.id});
    res.json({msg:"Producto eliminado"})

  

  } catch (error) {
    console.log("Hubo un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
}

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/omega');
const miconexion = mongoose.connection;

miconexion.on('connected',() => {console.log('Logre conectarme exitosamente a la base de datos Omega!!!')});
miconexion.on('error',() => {console.log('Hay un error en la conexion a MongoDB!!!')});

module.exports = mongoose;
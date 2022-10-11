const express = require('express');
const app = express();

app.listen(5000, function(){
    console.log("Prueba - servidor Ok - puerto 5000!")
}); //atributo 5000 es el puerto que elegí para poner a escuchar el servidor


app.get('/', function(req, res) {
    res.send('Servidor corriendo OK');
  });

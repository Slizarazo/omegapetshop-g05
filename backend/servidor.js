const express = require('express')
const app = express()

const miconexion = require('./conexion')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const rutas = require('./routers/routers')
app.use('/api', rutas)

app.get('/', function(req, res) {
    res.send('Servidor corriendo OK');
});

app.listen(5000, function(){
    console.log("Prueba - servidor Ok - puerto 5000!")
}); //atributo 5000 es el puerto que elegí para poner a escuchar el servidor

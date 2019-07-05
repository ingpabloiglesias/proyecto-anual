const express = require('express');
const path = require('path');
const app = express();

app.set('json spaces', 2); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

/* Rutas API */

const api = require('./rutas/api.js');
app.use('/v1', api);

/* Rutas admin */

const instituciones = require('./rutas/instituciones');
app.use('/instituciones', instituciones);

const competencias = require('./rutas/competencias');
app.use('/competencias', competencias);

app.get('/', function(req, res) {
  res.render('index', { titulo: 'Gestión de Torneos', descripcion: 'Ingrese sus datos' });
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
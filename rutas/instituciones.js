const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Pagina de Inicio Instituciones');
});

router.get('/agregar', function(req, res) {
  res.render('instituciones/formulario', { titulo: 'Agregar Institución', descripcion: 'Ingrese los datos de la institución.' });
});

module.exports = router;
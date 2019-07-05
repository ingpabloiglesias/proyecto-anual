const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Pagina de Inicio Competencias');
});

router.get('/formulario', function(req, res) {
  res.send('Formulario Competencias');
});

module.exports = router;
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Chico!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
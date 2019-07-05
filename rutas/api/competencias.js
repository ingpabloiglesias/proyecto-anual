const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.json({ejemplo: "qweqweqwe"})
});

router.get('/otra', function(req, res) {
  res.json({otro: "qweqweqwe"})
});

module.exports = router;
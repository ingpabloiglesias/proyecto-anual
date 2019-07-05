const express = require('express');
const router = express.Router();

const instituciones = require('./api/instituciones');
const competencias = require('./api/competencias');

router.use('/instituciones', instituciones);
router.use('/competencias', competencias);

module.exports = router;
const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');


router.use('/', usuarioController);


module.exports = router;
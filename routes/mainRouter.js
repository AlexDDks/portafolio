const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/contacto', mainController.contacto)
router.get('/busqueda', mainController.busqueda)
router.get('/quienessomos', mainController.quienesSomos)


module.exports = router;
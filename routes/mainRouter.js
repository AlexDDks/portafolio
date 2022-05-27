const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.index)
router.get('/contacto', mainController.contacto)
router.get('/busqueda', mainController.busqueda)
router.get('/quienessomos', mainController.quienesSomos)
router.get('/footernav', mainController.footerNav)
router.get('/redessociales', mainController.redesSociales)



module.exports = router;
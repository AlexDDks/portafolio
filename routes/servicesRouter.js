const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

router.get('/iluminacion', servicesController.iluminacion)
router.get('/audioyvideo', servicesController.audioYVideo)
router.get('/construccion', servicesController.construccion)
router.get('/internet', servicesController.internet)
router.get('/seguridadelectronica', servicesController.seguridadElectronica)




module.exports = router;
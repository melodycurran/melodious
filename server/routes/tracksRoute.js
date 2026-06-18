const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks');
const handleErrors = require('../utilities')

router.get('/jamendo', handleErrors.errorHandler(tracksController.getTracks));
router.get('/jamendo/:id', handleErrors.errorHandler(tracksController.getTrackById));


module.exports = router;
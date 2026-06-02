const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks');

router.get('/jamendo', tracksController.getTracks);
router.get('/jamendo/:id', tracksController.getTrackById);


module.exports = router;
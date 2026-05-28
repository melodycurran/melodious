const express = require('express');
const router = express.Router();
const tracksController = require('../controllers/tracks');

router.get('/jamendo', tracksController.getTracks);


module.exports = router;
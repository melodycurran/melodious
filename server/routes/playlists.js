const express = require('express');
const router = express.Router();
const playlistsController = require('../controllers/playlists');
const utils = require('../utilities')


router.post('/addSong', utils.errorHandler(playlistsController.addSong));
router.get('/getPlaylist', utils.checkJWTToken, utils.errorHandler(playlistsController.getPlaylist));
router.delete('/deleteSong', utils.errorHandler(playlistsController.deleteSong));
router.post('/addPlaylist', utils.errorHandler(playlistsController.addPlaylist));

module.exports = router;
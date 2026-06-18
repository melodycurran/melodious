const express = require('express');
const router = express.Router();
const playlistsController = require('../controllers/playlists');
const handleErrors = require('../utilities')


router.post('/addSong', handleErrors.errorHandler(playlistsController.addSong));
router.get('/getPlaylist', handleErrors.errorHandler(playlistsController.getPlaylist));
router.delete('/deleteSong', handleErrors.errorHandler(playlistsController.deleteSong));
router.post('/addPlaylist', handleErrors.errorHandler(playlistsController.addPlaylist));


module.exports = router;
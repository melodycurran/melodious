const express = require('express');
const router = express.Router();
const playlistsController = require('../controllers/playlists');


router.post('/addSong', playlistsController.addSong);
router.get('/getPlaylist', playlistsController.getPlaylist);
router.delete('/deleteSong', playlistsController.deleteSong);


module.exports = router;
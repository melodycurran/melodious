const playlistModel = require('../models/playlist-model')

let playlist = [];

exports.addSong = async (req, res) => {
	const { songId, playlistId, songName, image, songArtist, audio } = req.body;

	if (playlist.some(song => song.songId === songId)) {
		res.status(400).json({ message: `Song ${songName} already in playlist` });
		return;
	}
	
	playlist.push({ songId, playlistId, songName, image, songArtist, audio });
	res.status(200).json({ message: `Song ${songName} added to playlist ${playlistId}` });
}

exports.getPlaylist = (req, res) => {
	console.log('playlist', playlist)
	res.status(200).json(playlist);
}

exports.deleteSong = (req, res) => {
	const { songId, songName } = req.body;
	playlist = playlist.filter(song => song.songId !== songId);
	res.status(200).json({ message: `Song ${songName} deleted from playlist` });
}

exports.addPlaylist = async (req, res) => {
	try {
		const {userId, songs} = req.body
		const data = await playlistModel.savePlaylist(userId, songs)

		console.log('user_id', userId)
		console.log('playlist', songs)

		// console.log('data', data)
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
	}
	
}
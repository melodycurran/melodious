const playlistModel = require('../models/playlist-model')

// let playlist = [];

exports.addSong = async (req, res) => {
	const { userId, songId, playlistId, songName, image, songArtist, audio } = req.body;

	// if (playlist.some(song => song.songId === songId)) {
	// 	res.status(400).json({ message: `Song ${songName} already in playlist` });
	// 	return;
	// }

	const song = { songName, image, songArtist, audio };

	const result = await playlistModel.saveSong(songId, playlistId, song, userId);
	
	// playlist.push({ songId, playlistId, songName, image, songArtist, audio });
	// console.log('result saving song from db', result)

	return res.status(200).json({ message: `Song ${songName} added to playlist ${playlistId}` });
}

exports.getPlaylist = async (req, res) => {

	const { user_id } = req.query;

	const result = await playlistModel.getPlaylist(user_id);
	console.log('result from db', result)
	res.status(200).json(result);
}

exports.deleteSong = (req, res) => {
	const { song_id, song_name } = req.body;
	// playlist = playlist.filter(song => song.songId !== songId);
	const data = playlistModel.deleteSong(song_id);
	
	res.status(200).json({ message: `Song ${song_name} deleted from playlist` });
}

exports.addPlaylist = async (req, res) => {
	try {
		const {userId, songs} = req.body
		const data = await playlistModel.savePlaylist(userId, songs)

		// console.log('user_id', userId)
		// console.log('playlist', songs)

		// console.log('data', data)
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
	}
	
}


//Temporary playlist
let playlist = [];

exports.addSong = (req, res) => {
	const { songId, playlistId, songName, image, songArtist, audio } = req.body;

	if (playlist.some(song => song.songId === songId)) {
		res.status(400).json({ message: `Song ${songName} already in playlist` });
		return;
	}
	
	playlist.push({ songId, playlistId, songName, image, songArtist, audio });
	res.status(200).json({ message: `Song ${songName} added to playlist ${playlistId}` });
}

exports.getPlaylist = (req, res) => {
	res.status(200).json(playlist);
}

exports.deleteSong = (req, res) => {
	const { songId, songName } = req.body;
	playlist = playlist.filter(song => song.songId !== songId);
	res.status(200).json({ message: `Song ${songName} deleted from playlist` });
}
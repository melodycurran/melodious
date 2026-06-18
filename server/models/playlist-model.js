const pool = require('../database');

async function saveSong(song_id, playlist_id, song,  user_id) {

	console.log('playlist in model', song)

	try {
		const query = `INSERT INTO melodious_playlist.songs (song_id, playlist_id, song, user_id) VALUES ($1, $2, $3, $4) RETURNING *`;

		const values = [song_id, playlist_id, JSON.stringify(song), user_id];

		const result = await pool.query(query, values)

		return result.rows[0];

	} catch (error) {
		return error.message;
	}
	
}

async function getPlaylist(user_id) {
	try {
		const data = await pool.query(`SELECT * FROM melodious_playlist.songs`)

		console.log('result from database query', data.rows)
		return data.rows;
	} catch (error) {
		console.log(error)
	}
}


async function deleteSong(song_id) {
	try {
		const data = await pool.query(`DELETE FROM melodious_playlist.songs WHERE song_id = $1`, [song_id]);
		
		return data.rows[0];
		
	} catch (error) {
		console.log(error)
	}
}


module.exports = {
	saveSong,
	getPlaylist,
	deleteSong,
}
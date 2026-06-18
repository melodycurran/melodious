const pool = require('../database');

async function savePlaylist(user_id, playlist) {

	console.log('playlist in model', playlist)

	try {
		const query = `INSERT INTO melodious_playlist.playlist (user_id, songs) VALUES ($1, $2) RETURNING *`;

		const values = [user_id, JSON.stringify(playlist)];

		const result = await pool.query(query, values)

		return result.rows[0];

	} catch (error) {
		return error.message;
	}
	
}

module.exports = {
	savePlaylist,
}
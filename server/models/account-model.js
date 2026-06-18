const pool = require('../database');

/* **********************
 *   Retrieve Account using username
 * ********************* */
async function retrieveAccountwithUsername(username) {
	try {
		const data = await pool.query(`SELECT * FROM melodious_playlist.users WHERE user_name = $1`, [username]);
		return await data.rows[0];
	} catch(error) {
		return error.message;
	}
}

module.exports = {
	retrieveAccountwithUsername
};
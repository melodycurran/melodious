const { Pool } = require("pg")
require("dotenv").config()
/* ***************
 * Connection Pool
 * SSL Object needed for local testing of app
 * But will cause problems in production environment
 * If - else will make determination which to use
 * *************** */
let pool
if (process.env.NODE_ENV == "development") {
	pool = new Pool({
		connectionString: process.env.DB_URL,
		ssl: {
			rejectUnauthorized: false,
		},
		// connectionTimeoutMillis: 5000,
		// idleTimeoutMillis: 30000,
	})

	// pool.connect((err, client, release) => {
	// 	if (err) {
	// 		return console.error('Connection failed:', err.message);
	// 	}
	// 	console.log('Successfully connected to db');
	// 	release();
	// })

	module.exports = {
		async query(text, params) {
			try {
				const res = await pool.query(text, params)
				console.log("executed query", { text })
				return res
			} catch (error) {
				console.error("error in query", { text })
				throw error
			}
		},
	}
} else {
	pool = new Pool({
		connectionString: process.env.DB_URL,
	})

	module.exports = pool
}
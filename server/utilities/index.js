const jwt = require('jsonwebtoken');
require('dotenv').config()
const Util = {};

/* ****************************************
 * Middleware For Handling Errors
 * Wrap other function in this for 
 * General Error Handling
 **************************************** */
Util.errorHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

/* ****************************************
* Middleware to check token validity
**************************************** */
Util.checkJWTToken = (req, res, next) => {
	if (req.cookies.jwt) {
		jwt.verify(
			req.cookies.jwt,
			process.env.ACCESS_TOKEN_SECRET,
			function (err, accountData) {
				if (err) {
					res.clearCookie("jwt");
					res.json({loggedIn: 0});
					return next();
				}
				res.json({loggedIn: 1, accountData: accountData})
				next();
			}
		)
	} else {
		res.json({loggedIn: 0});
		next();
	}

}

module.exports = Util;

const accountModel = require('../models/account-model');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* ****************************************
*  Process Login
* *************************************** */
async function processLogin(req, res, next) {
	const { user_name, password } = req.body;

	const account = await accountModel.retrieveAccountwithUsername(user_name);

	if (!account) {
		req.status(401).json({ message: 'No user found' });
		return;
	}

	try {
		if (password === account.password) {
			delete account.password;
			const token = jwt.sign(account, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 * 1000 });

			res.cookie("jwt", token, { httpOnly: true, maxAge: 3600 * 1000 });
			return res.json({message: 'Log in successful!', user: account });
		} else {
			res.status(400).json({ message: 'Please check your credentials!' });
		}
	} catch (error) {
		next();
		return new Error('Access Forbidden');
	}
}

async function processLogout(req, res, next) {
	res.clearCookie("jwt");
	return res.json({ message: 'You have been logged out of the app.' });
}


module.exports = {
	processLogin,
	processLogout
};
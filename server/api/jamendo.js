require('dotenv').config();

const url = process.env.JAMENDO_API_BASE_URL;
const clientId = process.env.JAMENDO_CLIENT_ID;
const clientSecret = process.env.JAMENDO_CLIENT_SECRET;

const jamendoLink = (endpoint, params = {}) => {
	const queryParams = new URLSearchParams({
		client_id: clientId,
		format: 'json',
		...params,
	});
	const link = `${url}${endpoint}?${queryParams.toString()}`;
	return link;
};

module.exports = {
	jamendoLink,
};
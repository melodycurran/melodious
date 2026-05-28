const { jamendoLink } = require('../api/jamendo');

exports.getTracks = async (req, res) => {
	try {
		const response = await fetch(jamendoLink('/tracks', {
			limit: '25',
			fuzzytags: 'pop',
		}));
		const data = await response.json();
		// res.json(data['results'][0]);
		res.json(data['results']);
	} catch (error) {
		console.error('Error fetching tracks:', error);
		res.status(500).json({ error: 'Failed to fetch tracks' });
	}
};
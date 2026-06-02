const { jamendoLink } = require('../api/jamendo');

exports.getTracks = async (req, res) => {
	try {
		const response = await fetch(jamendoLink('/tracks', {
			limit: '25',
			fuzzytags: 'pop',
		}));
		const data = await response.json();
		res.json(data['results']);
	} catch (error) {
		console.error('Error fetching tracks:', error);
		res.status(500).json({ error: 'Failed to fetch tracks' });
	}
};

exports.getTrackById = async (req, res) => {
	try {
		const { id } = req.params;
		const response = await fetch(jamendoLink('/tracks', {
			id: id,
			format: 'json',
		}));
		const data = await response.json();
		res.json(data['results'][0]);
	} catch (error) {
		console.error('Error fetching track:', error);
		res.status(500).json({ error: 'Failed to fetch track' });
	}
};
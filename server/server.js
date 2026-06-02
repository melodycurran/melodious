const express = require('express');
const cors = require('cors');
const tracksRouter = require('./routes/tracksRoute');
const playlistsRouter = require('./routes/playlists');

const app = express();

app.use(cors());
app.use(express.json());

// Use the tracks router for all routes starting with /api
app.use('/api/', tracksRouter);
// Use the playlists router for all routes starting with /playlists
app.use('/playlists/', playlistsRouter);

const port = 3001;

//Server listener
app.listen(port, (error) => {
	if (error) {
		console.error(`Error starting server: ${error}`);
	} else {
		console.log(`Server is running on port ${port}`);
	}
});


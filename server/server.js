const express = require('express');
const cors = require('cors');
const tracksRouter = require('./routes/tracksRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', tracksRouter);

const port = 3001;

app.listen(port, (error) => {
	if (error) {
		console.error(`Error starting server: ${error}`);
	} else {
		console.log(`Server is running on port ${port}`);
	}
});


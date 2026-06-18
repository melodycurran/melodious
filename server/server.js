const express = require('express');
const cors = require('cors');
const tracksRouter = require('./routes/tracksRoute');
const playlistsRouter = require('./routes/playlists');
const accountRouter = require('./routes/accountRoute')
const cookieParser = require('cookie-parser')
const utilities = require('./utilities')

const app = express();

//GLOBAL middleware
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Auth Middleware
app.get('/auth', utilities.checkJWTToken)

// Use the tracks router for all routes starting with /api
app.use('/api', tracksRouter);
// Use the playlists router for all routes starting with /playlists
app.use('/playlists', playlistsRouter);
//Account routes
app.use('/account', accountRouter);

//File not found route
app.use(async (req, res, next) => {
	next({status: 404, message: 'Sorry, we appear to have lost that page.'})
})


//Start the server
const port = 3001;

app.listen(port, (error) => {
	if (error) {
		console.error(`Error starting server: ${error}`);
	} else {
		console.log(`Server is running on port ${port}`);
	}
});


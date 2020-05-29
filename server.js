const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

mongoose
	.connect(
		process.env.MONGODB_URI ||
			`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds355357.mlab.com:55357/heroku_dt0hcw7h`,
		{
            useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false
		}
	)
	.then(() => console.log('MongoDB Connected!'))
	.catch((err) => console.log('[ Error ]: ' + err));

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
let mongoose = require('mongoose');

const MONGODB_URI =
	process.env.MONGODB_URI ||
	`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds355357.mlab.com:55357/heroku_dt0hcw7h`;

mongoose.connect(MONGODB_URI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false
});

let employeeSeed = [{}]

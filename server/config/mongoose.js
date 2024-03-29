// This is our mongoose.js file located in /config/mongoose.js
// This is a config file that connects to MongoDB and loads all of our models for us. We do this here because we don't want to have to connect to the DB every time we require a model!
// require mongoose
var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// require path for getting the models path
var path = require('path');
// connect to the database
mongoose.connect('mongodb://localhost/DocApps');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
	if (file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
});
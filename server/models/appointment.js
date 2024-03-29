// This is the appointment.js file located at /server/models/appointment.js
// We want to create a file that has the schema for our appointments and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
// create our appointmentSchema
var AppointmentsSchema = new mongoose.Schema({
	dateTime: {type: String, required: true},
	name: {type: String, required: true},
	complaint: {type: String, required: true, min: 10}
});
AppointmentsSchema.plugin(timestamps);
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
var Appointment = mongoose.model('Appointment', AppointmentsSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and
// then since the model is defined we'll be able to access it from our controller
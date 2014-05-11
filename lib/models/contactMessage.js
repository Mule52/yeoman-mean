'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * ContactMessage Schema
 */
var ContactMessageSchema = new Schema({
	fullname: String, 
	email: {type: String, lowercase: true},
	message: String
});

 /**
 * Methods
 */

 /**
 * Virtuals
 * Virtuals are document properties that are convenient to 
 * have  around but that do not get persisted to MongoDB.
 */

 /**
 * Validations
 */
ContactMessageSchema.path('fullname').validate(function (name){
	console.log("validating name");
	if (!name || name.length < 1) {
		return false;
	}
	return true;
}, 'Fullname must contain something valid');

ContactMessageSchema.path('message').validate(function (msg){
	console.log("validating msg");
	if (!msg || msg.length < 1) {
		return false;
	}
	return true;
}, 'Message must contain something valid');

ContactMessageSchema.path('email').validate(function (val) {
	console.log("validating email");
	if (!val || val.length < 1) return false;
	if (val.indexOf("@") == -1) return false;
	if (val.indexOf(".") == -1) return false;
	// TODO: Other email validation here, there is so much more to add.
 	return true;
}, 'Email must be valid');

 /**
 * Create the model
 */
mongoose.model('ContactMessage', ContactMessageSchema);


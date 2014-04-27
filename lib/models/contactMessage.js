'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
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
ContactMessageSchema.path('email').validate(function (val) {
	var valid = true;
	if (!val || val.length < 1){
		valid = false;
	}
	if (val.indexOf("@") == -1){
		valid = false;
	}
	if (val.indexOf(".") == -1){
		valid = false;
	}
	// TODO: Other email validation here, there is so much more to add.
 	return valid
}, 'email must be valid');

ContactMessageSchema.path("fullname").validate(function (name){
	return !name || name.length < 1;
}, 'fullname must contain something');

ContactMessageSchema.path("message").validate(function (msg){
	return !msg || msg.length < 1;
}, 'message must contain something');

mongoose.model('ContactMessage', ContactMessageSchema);
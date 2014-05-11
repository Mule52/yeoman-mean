'use strict';

var mongoose = require('mongoose'),
    ContactMessage = mongoose.model('ContactMessage'),
    Thing = mongoose.model('Thing');

var _ = require('lodash');

// _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, 
//   function(num) { console.log(num); });  

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};


 /**
 * Define/expose ContactMessage functionality to the app, specifically routes.js.
 */
 exports.createMessage = function(req, res, next){
 	console.log("createMessage called!!!!!!");
  
 	var contactMessage = new ContactMessage(req.body);
 	contactMessage.provider = 'local';
 	contactMessage.save(function(err){
 		if (err) {
 			return res.json(400, err);
 		} 
 		else {
			return res.json(contactMessage);
 		}
 	});

 	// ContactMessage.findById(msgId, function(err, x){
 	// 	if (err) return next(err);
 	// 	if (!x) return res.send(404);

 	// 	res.send(next); // TODO: no idea
 	// })
 };

 exports.getMessages = function(req, res) {
 	ContactMessage.find({}, function(err, messages){
 		if (!err) {
 			return res.json(messages);
 		}
 		else {
 			return res.send(err);
 		}
 	});
 };
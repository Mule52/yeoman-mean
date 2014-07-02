'use strict';

var mongoose = require('mongoose'),
    ContactMessage = mongoose.model('ContactMessage'),
    passport = require('passport');

 /**
 * Define/expose ContactMessage functionality to the app, specifically routes.js.
 */
 exports.createMessage = function(req, res, next){
  var contactMessage = new ContactMessage(req.body);
  contactMessage.provider = 'local'; // TODO: change from local?
  contactMessage.save(function(err){
    if (err) {
      return res.json(400, err);
    } 
    else {
      return res.json(contactMessage);
    }
  });

  // ContactMessage.findById(msgId, function(err, x){
  //  if (err) return next(err);
  //  if (!x) return res.send(404);

  //  res.send(next); // TODO: no idea
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
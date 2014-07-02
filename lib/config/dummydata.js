'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  ContactMessage = mongoose.model('ContactMessage'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create(
  {
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, 
  {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, 
  {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, 
  {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, 
  {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() 
  {
      console.log('finished populating things');
  }
  );
});

ContactMessage.find({}).remove(function(){
  ContactMessage.create(
  {
    fullname: 'Bill',
    email: 'bill@test.com',
    message: 'I had trouble using the settings page of the site.'
  }, 
  {
    fullname: 'Sam',
    email: 'sam@test.com',
    message: 'The site is great, very informative.'
  }, 
  {
    fullname: 'Jeff',
    email: 'Jeff@test.com',
    message: 'I think the site is splendid. Bravo sir!'
  }, 
  function() {
    console.log("finished populating contact messages");
  })
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create(
  {
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, 
  {
    provider: 'local',
    name: 'admin',
    email: 'admin@test.com',
    password: 'admin',
    role: 'admin'
  },
  function() {
      console.log('finished populating users');
  });
});



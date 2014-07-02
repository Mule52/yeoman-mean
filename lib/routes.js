'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    messages = require('./controllers/messages'),
    session = require('./controllers/session'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);

  app.route('/api/contact')
    .get(messages.getMessages)
    .post(messages.createMessage);
  
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // TODO: This is an example: http://tylerhenkel.com/build-an-angular-todo-app-with-a-node-backend/
  // app.param('todoId', todos.todo);
  // add param lets us execute todos.todo method any
  // time a todoId is present in the route path below.
  // app.post('/api/todos', todos.create);
  // app.get('/api/todos', todos.query);
  // app.get('/api/todos/:todoId', todos.show);
  // app.put('/api/todos/:todoId', todos.update);
  // app.del('/api/todos/:todoId', todos.remove);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};
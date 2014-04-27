'use strict';

angular.module('yeomanMeanApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });

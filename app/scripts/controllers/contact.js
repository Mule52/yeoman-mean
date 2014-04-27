'use strict';

angular.module('yeomanMeanApp')
.controller('ContactCtrl', 'Thing', function ($scope, Thing) {

  $scope.submitForm = function(){
    console.log($scope.fullname);
    console.log($scope.form.inputEmail.$viewValue);
    console.log($scope.message);

    // Save to the DB

  };

  $scope.clearForm = function(){
    $scope.fullname = "";
    $scope.emailAddress = "";
    $scope.form.inputEmail.$viewValue = "";
    $scope.message = "";
  };

  $scope.setForm = function (form) {
    $scope.form = form;
  };

  //Init
  (function () {


  }());

  });


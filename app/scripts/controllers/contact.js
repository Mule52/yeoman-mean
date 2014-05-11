'use strict';

angular.module('yeomanMeanApp')
  .controller('ContactCtrl', ['$scope', '$location', '$timeout', 'ContactMessageService', 
    function ($scope, $location, $timeout, ContactMessageService) {

    $scope.submitForm = function(){
      $scope.fullname = $scope.form.inputFullname.$viewValue || '';
      $scope.emailAddress = $scope.form.inputEmail.$viewValue || '';
      $scope.message = $scope.form.messageText.$viewValue || '';

      // Save to the DB
      ContactMessageService.createMessage(
        $scope.fullname, 
        $scope.emailAddress, 
        $scope.message)
        .then(function(response){
          if (response.errors){
            $scope.hasErrors = true;
            $scope.errors = [];
            _.forEach(response.errors, function(x){
              $scope.errors.push(x);
            });
          }
          else {
            $scope.hasErrors = false;
            $scope.contactSubmitted = true;
            $scope.formIsVisible  = false;
            
            // Redirect to the home page
            var timer = $timeout(function () {
                $location.path('/')
            }, 10000);

            // Cancel the timeout when leaving the page
            $scope.$on("$destroy", function(evt){
              $timeout.cancel(timer);
            });
          }
        });
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
      $scope.hasErrors = false;
      $scope.contactSubmitted = false;
      $scope.formIsVisible = true;

    }());

  }]);


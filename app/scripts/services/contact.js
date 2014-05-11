angular.module('yeomanMeanApp')
.service('ContactMessageService', ['$http', '$resource', 
	function ($http, $resource) {

		this.getMessages = function() {
			var promise = $http.get('/api/contact/')
			.then(function (response) {
				return response.data;
			});
			return promise;
		};

		this.createMessage = function(fullname, email, message){

			// if (!fullname) {
			// 	return console.log("fullname is not valid");
			// }
			// if (!email) {
			// 	return console.log("email is not valid");
			// }
			// if (!message) {
			// 	return console.log("message is not valid");
			// }

			var contactMessage = {
				fullname: fullname,
				email: email,
				message: message
			};

			return $http.post('/api/contact/', contactMessage)
				.then(function (response) {
					return response.data;
				}, function(err){
					return err.data;
					// if (err.data.errors){
					// 	var errors = err.data.errors;
					// 	_.forEach(errors, function(x){
					// 		console.log(x.message);
					// 	});
					// 	if (errors.email){
					// 		console.log(errors.email.name + ":" + errors.email.message);
					// 	}
					// }
				});

		};

	        // this.validateToAddresses = function (addresses) {
	        //     return $http({
	        //         url: '/api/directory/validate',
	        //         method: 'GET',
	        //         params: {
	        //             addresses: addresses
	        //         }
	        //     }).then(function (response) {
	        //         return response.data;
	        //     });
	        // };
	    }
	    ])
;
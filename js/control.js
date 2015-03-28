var app = angular.module('migraineApp');

app.controller('mainControl', function($scope, $location, envService){
	var username;

	var orange = function(){
		for(headache in $scope.migraines){
			if(headache.details === false){
				$("#update").addClass("orange");
			};
		};
	}
	orange();

	//allow login
	$scope.login = function(user){
		//set logged in user
		// $scope.user = username;
		$scope.user = user;
		// debugger;
		// alert('Welcome, ' + user + '!');
		$location.path('../#/stats');
		// return $scope.user;
	};

	var sync = envService.getLog();
	$scope.migraines = sync.$asArray();
	$scope.user = 'Paige';


	$scope.addEntry = function(){
		//create new entry
		var newHeadache = {};
		
		//log a timestamp in that entry
		newHeadache.timestamp = Date.now();
		newHeadache.details = false;

		//add a new entry
		$scope.migraines.$add(newHeadache).then(function(data){
			$location.path('/log/' + data.key());
			// alert("Success!");
		});
	}

	$scope.remove = function(headache) {
		// alert('Entry deleted!');
		$scope.migraines.$remove(headache);
	}

	$scope.update = function(headache){
		$location.path('/log/' + headache);
	}


});
var app = angular.module('migraineApp');

app.controller('mainControl', function($scope, $location, envService){

	//set logged in user
	$scope.user = 'Paige';

	var sync = envService.getLog();
	$scope.migraines = sync.$asArray();


	$scope.addEntry = function(){
		//create new entry
		var newHeadache = {};
		
		//log a timestamp in that entry
		newHeadache.timestamp = Date();
		newHeadache.details = 'false';

		//add a new entry
		$scope.migraines.$add(newHeadache);
		
		//alert success
		alert('Migraine logged at ' + newHeadache.timestamp);

		//go to log form to add more details
		$location.path('/log');
	}

	$scope.remove = function(headache) {
		alert('Entry deleted!');
		$scope.migraines.$remove(headache);
	}

	$scope.update = function(headache){
		$location.path('/log');
	}


});
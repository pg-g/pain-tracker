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
		$scope.migraines.$add(newHeadache).then(function(data){
			$location.path('/log/' + data.key());
			alert("Success! " + newHeadache.timestamp);
			var id = data.key();
			id.$bindTo($scope, 'entry').then(function(){
				console.log($scope.entry);
				$scope.entry.test = true;
			});
		});
	}

	$scope.remove = function(headache) {
		// alert('Entry deleted!');
		$scope.migraines.$remove(headache);
	}

	$scope.update = function(headache){
		$location.path('/log');
	}
});
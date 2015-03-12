var app = angular.module('migraineApp');

app.controller('mainControl', function($scope, $location){
	$scope.timestamp = new Date();

	$scope.addEntry = function(){
		//add a new entry
		
		//log a timestamp in that entry

		//go to log form to add more details
		$location.path('/log');
	}


});
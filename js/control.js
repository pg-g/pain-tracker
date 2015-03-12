var app = angular.module('migraineApp');

app.controller('mainControl', function($scope, $location){
	$scope.timestamp = new Date();

	//set logged in user
	$scope.user = 'Paige';

	$scope.addEntry = function(){
		//add a new entry
		
		//log a timestamp in that entry
		var now = new Date();

		//go to log form to add more details
		$location.path('/log');
	}


});
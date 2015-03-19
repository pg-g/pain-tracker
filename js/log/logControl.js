var app = angular.module('migraineApp');

// var firebaseObj = new Firebase('https://migraine.firebaseio.com/stats');

app.controller('logControl', function($scope, envService){

	$scope.updateLog = function(details){
		$scope.migraines.$save(details).then(function(){
			console.log('Details updated.');
		});
	};
});
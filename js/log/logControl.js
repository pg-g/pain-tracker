var app = angular.module('migraineApp');

// var firebaseObj = new Firebase('https://migraine.firebaseio.com/stats');

app.controller('logControl', function($scope, envService, migraineData, $routeParams){

	$scope.updateLog = function(){
		$scope.migraines.$save($routeParams.id).then(function(){
			console.log('Details updated.');
		});
	};
});
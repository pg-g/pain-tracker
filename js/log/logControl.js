// /var app = angular.module('migraineApp');

app.controller('logControl', function($scope, envService, migraineData, $routeParams, $location){
	//create properties on migraine entry object?
	// var id = $routeParams.id;
	// $scope.id = id;
	// alert($scope.id);
	var entry = migraineData.$asObject()
	entry.$bindTo($scope, "entry");


	//push object into function?
	$scope.updateLog = function(){
		$location.path('/');
		//update migraine data
		// $scope.duration = id.duration;
		// $scope.loca = id.loca;

	// 	entry.$save(entryUpdate).then(function(){
	// 		console.log('Details updated.');
	// 	});
	};
});
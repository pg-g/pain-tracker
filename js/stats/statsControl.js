var app = angular.module('migraineApp');

app.controller('statsControl', function($scope, $firebase){
	var sync = envService.getLog();
	$scope.migraines = sync.$asArray();



});
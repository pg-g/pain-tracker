var app = angular.module('migraineApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/log/log.html',
			controller: ''
		})
})
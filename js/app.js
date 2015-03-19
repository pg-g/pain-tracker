var app = angular.module('migraineApp', ['ngRoute', 'firebase'])

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/stats/stats.html',
			controller: 'mainControl'
		})
		.when('/log', {
			templateUrl: 'js/log/log.html',
			controller: 'logControl'
		})
		.otherwise({
			templateUrl: 'js/stats/stats.html'
		})
})
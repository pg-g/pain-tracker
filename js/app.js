var app = angular.module('migraineApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/stats/stats.html',
			controller: ''
		})
		.when('/log', {
			templateUrl: 'js/log/log.html',
			controller: 'logControl'
		})
		.otherwise({
			templateUrl: 'js/stats/stats.html'
		})
})
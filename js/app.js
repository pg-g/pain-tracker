var app = angular.module('migraineApp', ['ngRoute', 'firebase'])

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'js/stats/stats.html',
			controller: 'mainControl'
		})
		.when('/log/:id', {
			templateUrl: 'js/log/log.html',
			controller: 'logControl',
			resolve: {
				migraineData: function($route, envService){
					return envService.getLog($route.current.params.id);
				}
			}
		})
		.otherwise({
			templateUrl: 'js/stats/stats.html'
		})
})


// TO DO
// data visualization
// trick out form
// create threads to stats.html based on user
// ability to login/out

// d3.js
// chart.js
// highcharts.com
// cytoscape.js
// server-side charting like R or Circos
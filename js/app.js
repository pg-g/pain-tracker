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
// map form to ind headache to update data in firebase
// create threads to stats.html based on user
// trick out form
// ability to login/out
// data visualization

// d3.js
// chart.js
// highcharts.com
// cytoscape.js
// server-side charting like R or Circos
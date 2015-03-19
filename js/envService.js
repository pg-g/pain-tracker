var app = angular.module('migraineApp');

app.service('envService', function($firebase, $window){
    var firebaseUrl = 'https://migraine.firebaseio.com/';

    // return {
    //   getEnv: function () {
    //     return $window.env;
    //   }
    // }

    // this.saveLog = function(now){
    // 	$window.localStorage.setItem('timestamp', now);
    // };
    this.getLog = function(){
        var user = 'paige';
    	// return $window.localStorage.getItem('timestamp');
        return $firebase(new Firebase(firebaseUrl + user))
    };
});
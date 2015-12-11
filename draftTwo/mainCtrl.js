angular.module('bootApp').controller('mainCtrl', function($scope, $cookies){
	
	var x = "Cookies Enabled: " + navigator.cookieEnabled;
	console.log(x);
	
	var s = $scope;
	
	s.user = {};
	s.user.email = $cookies.getObject('email');
	
	s.register = function(){
		$cookies.putObject('email', s.newUser.email);
		$cookies.putObject('password', s.newUser.password);
		s.newUser = {};
	}
	
})
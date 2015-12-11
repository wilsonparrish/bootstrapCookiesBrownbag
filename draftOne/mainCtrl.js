angular.module('bootApp').controller('mainCtrl', function($scope, $cookies){
	
	var s = $scope;
	
	s.user = {};
	s.user.email = $cookies.getObject('email') || null;
	s.user.username = $cookies.getObject('username') || null;
	s.user.message = $cookies.getObject('message') || null;
	
	setInterval(function(){console.log(s.reg)},5000);
	
	s.register = function(){
		console.log(s.reg)
		$cookies.putObject('email', s.reg.email);
		$cookies.putObject('username', s.reg.username);
		$cookies.putObject('message', s.reg.message);
		s.user = s.reg;;
		s.reg = {};
	}
});
angular.module('bootApp').controller('mainCtrl', function($scope, $cookies){
	var s = $scope;
	
	s.user = {};
	s.user.email = $cookies.getObject('email');
	
	s.register = function(){
		$cookies.putObject('email', s.newUser.email);
		$cookies.putObject('password', s.newUser.password);
		s.newUser = {};
	}
	
})
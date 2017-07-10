angular.module('ionos.common.LoginController',[]).controller('LoginController', function($scope, $rootScope, $stateParams, $state, CommonService) {
    $rootScope.title = "AngularJS Login Sample";
    
    $scope.formSubmit = function() {
     $rootScope.respObj = CommonService.login($scope.username, $scope.password);
	if($rootScope.respObj.isAuthenticated && $rootScope.respObj.isAdmin){
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.transitionTo('edit');
      }else if($rootScope.respObj.isAuthenticated && !$rootScope.respObj.isAdmin){
		$state.transitionTo('myProfile');  
	  }else {
        $scope.error = "Incorrect username/password !";
      }   
    };
	
	$rootScope.logout = function(){
		$rootScope.respObj = undefined;
		$state.go('login');
	}
	
    
  });
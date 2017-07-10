angular.module('ionos.common.UserController',[]).controller('UserController', function($scope, $rootScope, $stateParams, $state, CommonService) {
    
	$scope.updateUser = function(){
		CommonService.updateUser($scope.myData);
		alert("Saved Successfully !!");
	}
	
	$scope.myData = $rootScope.respObj.myInfo;
    
  });
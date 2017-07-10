angular.module('ionos.common.AdminController',[]).controller('AdminController', function($scope, $rootScope, $stateParams, $state, $filter, CommonService) {
    
	$scope.getAllheaders = function(){
	$scope.headerInfo= CommonService.getAllUersHeaders();
	}
		
	$scope.sortKeys = function(array,key){
		$scope.isAsc = !$scope.isAsc;
		array.sort(function(a,b){
			if($scope.isAsc)
				return a[key] - b[key];
			else
				return b[key] - a[key];
		});
	}
	
	$rootScope.isAdminTab = function(){
		if($rootScope.respObj !== undefined){
			if($rootScope.respObj.isAdmin){
				return true;
			}
		}else
			return false;
	}
	
	/* $rootScope.isNormalUsr = function(){
		if($rootScope.respObj !== undefined){
			if($rootScope.respObj.isAuthenticated && !$rootScope.respObj.isAdmin){
				return true;
			}
		}else
			return false;
	}
	
	$rootScope.isAuth = function(){
		if($rootScope.respObj !== undefined){
			if($rootScope.respObj.isAuthenticated){
				return true;
			}
		}else
			return false;
	} */
	
	
    
    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
	
	$scope.addUser = function(){
		$scope.newUsr = CommonService.addUser($scope.usrName, $scope.passwrd, $scope.first, $scope.last)
			$rootScope.respObj.usrInfo.push($scope.newUsr);
			$state.go('view');
	}
    
	$scope.getAllheaders();
	$scope.isAsc = false;
	$scope.currentPage = 0;
    $scope.pageSize = 3;
    $scope.data = $rootScope.respObj.usrInfo;
    $scope.q = '';
  }).filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
angular.module('ionos.common',['ionos.common.LoginController','ionos.common.AdminController','ionos.common.UserController','ionos.common.CommonService']);


	
angular.module('ionos.common').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/login');
    
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : 'common/partials/login.html',
        controller : 'LoginController'
      })
      .state('view', {
        url : '/view',
        templateUrl : 'common/partials/admin.html',
        controller : 'AdminController'
      }).state('edit', {
        url : '/edit',
        templateUrl : 'common/partials/add-user.html',
        controller : 'AdminController'
      }).state('myProfile', {
        url : '/myProfile',
        templateUrl : 'common/partials/myProfile.html',
        controller : 'UserController'
      });
  }]);


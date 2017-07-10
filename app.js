angular.module('ionos',['ui.router', 'ngAria', 'ui.bootstrap','ionos.common'],function config($ariaProvider){
    $ariaProvider.config({
        ariaValue: true,
        tabindex: true
    });
});

angular.module('ionos').constant('baseUrl', "mocks").constant('testUrl', "mocks");

angular.module('ionos').run(['$http', '$rootScope', '$window', function($http, $rootScope, $window) {

}]);
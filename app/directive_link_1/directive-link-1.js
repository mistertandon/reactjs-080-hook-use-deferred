(function (angular) {
  'use strict';

  angular

    .module('directiveLink1App', [
      'ui.router',
      'uiRouterStyles'
      //,      'directiveLink1.home'
    ])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

    }]);

})(window.angular);
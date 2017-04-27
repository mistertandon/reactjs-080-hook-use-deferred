(function (angular) {
  'use strict';

  angular

    .module('directive-link-1.app', [
      'ui.router',
      'uiRouterStyles',
      'directive-link-1.home'
    ])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

    }]);

})(window.angular);
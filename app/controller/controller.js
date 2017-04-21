(function (angular) {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('controllerApp', [
    'ui.router',
    'uiRouterStyles',
    'controllerApp.home'
  ]).
    config([
      '$stateProvider',
      '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        /**
         * If url into  url browser not found into any routes configuration,
         * `$urlRouterProvider` redirect application to `'/'` route.
         */
        $urlRouterProvider.otherwise('/');
      }
    ]);
})(window.angular);


(function (angular) {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('filterApp', [
    'ui.router',
    'uiRouterStyles',
    'filterApp.home'
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


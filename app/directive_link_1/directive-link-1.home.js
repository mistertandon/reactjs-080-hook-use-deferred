(function (angular) {
  'use strict';

  var directiveLink1HomeControllerFn = function ($scope) {

    var self = this;

    self.greeting = "Hello everyone";
  }
  angular

    .module('directive-link-1.home', [

    ])

    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('directiveLink1Home', {
          url: '/',
          templateUrl: 'directive_link_1/directive-link-1.home.html',
          controller: 'directiveLink1HomeController'
        });

    }])

    .controller('directiveLink1HomeController', ["$scope", directiveLink1HomeControllerFn]);

})(window.angular);
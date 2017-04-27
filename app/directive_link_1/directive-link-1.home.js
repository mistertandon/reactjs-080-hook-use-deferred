(function (angular) {
  'use strict';

  var directiveLink1HomeControllerFn = function ($scope) {

    var self = this;

    self.greeting = "Hello everyone";
  }

  /**
   * `teacherFn` function contains 'teacher' directive definition.
   */
  var teacherFn = function () {

    return {

      restrict: 'E',
      templateUrl: 'directive_link_1/teacher-directive.html'
    };
  }

  /**
   * `studentFn` function contains 'student' directive definition.
   */
  var studentFn = function () {

    return {

      restrict: 'E',
      templateUrl: 'directive_link_1/student-directive.html'
    };
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

    .controller('directiveLink1HomeController', ["$scope", directiveLink1HomeControllerFn])

    .directive('teacher', teacherFn)

    .directive('student', studentFn);

})(window.angular);
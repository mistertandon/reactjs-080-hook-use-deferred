(function (angular) {
  'use strict';

  var directiveLink1HomeControllerFn = function ($scope) {

    var self = this;

    self.greeting = "Hello everyone";
    self.globalMessage = "Live and let live";

    /**
     * This function is used to update greeting message.
     */
    self.greetingUpdation = function (newGreetingMessage) {

      self.greeting = newGreetingMessage;
    };

  }

  /**
   * `teacherFn` function contains 'teacher' directive definition.
   */
  var teacherFn = function () {

    return {

      restrict: 'E',
      templateUrl: 'directive_link_1/teacher-directive.html',
      scope: {
        globalMessage: '=',
        updateGreetingMsg: '&'
      },
      controller: function () {

        var self = this;

        self.controllerPriority = "Teacher link controller : Primary";

      },
      controllerAs: 'TeacherLinkController',
      link: {
        pre: function (scope, elem, attr, ctrl) {

          scope.teacherInfo = {
            'name': 'mistertandon',
            'specialization': 'frontend'
          };
        }
      }
    };
  }

  /**
   * `studentFn` function contains 'student' directive definition.
   */
  var studentFn = function () {

    return {

      restrict: 'E',
      require: '^teacher',
      templateUrl: 'directive_link_1/student-directive.html',
      link: {
        post: function (scope, elem, attr, ctrl) {

        }
      }
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
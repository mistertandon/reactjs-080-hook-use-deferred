(function (angular) {
  'use strict';

  var GreetingComponentControllerFn = function ($scope, $element, $attrs) {

  }

  angular
    .module('greeting.component', [

    ])

    .component('greeting', {

      controller: GreetingComponentControllerFn,
      templateUrl: 'controller/greeting.component.html',
      bindings: {
        greetingMsg: '@',
        onUpdate: '&'
      }

    });

})(window.angular);

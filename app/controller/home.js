(function (angular) {
  'use strict';

  /**
   * `HomeControllerFn` has definition for 'HomeController' controller constructor.
   */
  var HomeControllerFn = function ($scope) {

    var myctrl = this;

    myctrl.topic = {
      title: 'Learning basic fundamentals about Angularjs controller.'
    };

    myctrl.welcomeMessage = "Component demonstration using Hero Tour";
  }

  /**
   * `OuterControllerFn` has definition for 'OuterController' controller constructor.
   */
  var OuterControllerFn = function ($scope) {

    var myctrl = this;

    myctrl.user_name = "Parvesh";
    myctrl.greetings = "Good Morning";
  }

  /**
   * `MiddleControllerFn` has definition for 'MiddleController' controller constructor.
   */
  var MiddleControllerFn = function ($scope) {

    var myctrl = this;

    myctrl.greetings = "Good Afternoon";

    /**
     * `updateGreetings` function is used to update 'greetings' property for MiddleController.
     */
    myctrl.updateGreetingMessage = function (greetings) {

      console.log(greetings);
      myctrl.greetings = greetings;
    }
  }

  /**
   * `InternalControllerFn` has definition for 'InternalController' controller constructor.
   */
  var InternalControllerFn = function ($scope) {

    var myctrl = this;

    myctrl.user_name = "Prabhash";
    myctrl.greetings = "Good Night";
  }

  angular
    .module('controllerApp.home',
    [
      'greeting.component'
    ])

    .config(['$stateProvider', function ($stateProvider) {

      $stateProvider
        .state('homePage', {

          url: '/',
          templateUrl: 'controller/home.html'
          //,controller: 'HomeController'
        }
        );

    }])

    .controller('HomeController', [
      '$scope', HomeControllerFn

    ])

    .controller('OuterController', [

      '$scope', OuterControllerFn
    ])

    .controller('MiddleController', [

      '$scope', MiddleControllerFn
    ])

    .controller('InternalController', [

      '$scope', InternalControllerFn
    ]);

})(window.angular)



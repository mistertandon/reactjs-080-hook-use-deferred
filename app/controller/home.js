angular
  .module('controllerApp.home',
  [
    'ui.router'
  ])
  .config(['$stateProvider', function ($stateProvider) {

    $stateProvider
      .state('homePage', {
        url: '/',
        templateUrl: 'controller/home.html',
        controller: 'HomeController'
      }
      );

  }])
  .controller('HomeController', [
    '$scope',
    function ($scope) {

      var myctrl = this;

      myctrl.topic = {
        title: 'Learning basic fundamentals about Angularjs controller.'
      };

      $scope.welcomeMessage = "Component demonstration using Hero Tour";
    }
  ]);

